// ========== MQTT 调试工具 - JavaScript ==========

// ========== 状态 ==========
let client = null;
let subscriptions = [];
let messages = [];
let currentFilter = 'all';
let currentSubFilter = null;
let ctrlSelectedSubs = []; // Ctrl 多选的订阅 topic 列表 // 当前选中的订阅过滤（topic 字符串，null 表示不过滤）
let isConnected = false;
let retainEnabled = false;
let jsonFormat = true;

// 默认配置
const defaultConfig = {
  broker: 'wss://broker.emqx.io:8084/mqtt',
  port: '8084',
  timeout: 4000,
  keepalive: 60,
  clean: true,
  clientId: '',
  username: '',
  password: '',
  willTopic: '',
  willMessage: '',
  willQos: 0,
  willRetain: false,
  properties: ''
};

// 默认值
const defaultValues = {
  topic: 'msg/',
  content: '{"status":"ok","value":123}'
};

// ========== 本地存储 ==========
const STORAGE_KEYS = {
  subscriptions: 'mqtt_subs',
  pubConfig: 'mqtt_pub',
  brokerConfig: 'mqtt_broker',
  toggles: 'mqtt_toggles'
};

function saveSubscriptions() {
  try {
    localStorage.setItem(STORAGE_KEYS.subscriptions, JSON.stringify(subscriptions));
  } catch (e) { /* 存储满时静默忽略 */ }
}

function loadSubscriptions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.subscriptions);
    if (raw) subscriptions = JSON.parse(raw);
  } catch (e) { subscriptions = []; }
}

function savePubConfig() {
  try {
    // 保存前把当前位置更新进历史
    const topicInput = document.getElementById('pubTopic');
    const contentInput = document.getElementById('pubContent');
    if (!topicInput || !contentInput) return;
    const currentTopic = topicInput.value.trim();
    const currentContent = contentInput.value;
    if (topicHistoryIndex >= 0) {
      topicHistory[topicHistoryIndex] = { topic: currentTopic, content: currentContent };
    } else if (currentTopic) {
      const existing = topicHistory.find(t => t.topic === currentTopic);
      if (existing) {
        existing.content = currentContent;
      }
    }
    localStorage.setItem(STORAGE_KEYS.pubConfig, JSON.stringify({
      topic: currentTopic || defaultValues.topic,
      content: currentContent,
      history: topicHistory
    }));
  } catch (e) { /* 存储满时静默忽略 */ }
}

function loadPubConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.pubConfig);
    if (raw) {
      const cfg = JSON.parse(raw);
      if (cfg.topic) document.getElementById('pubTopic').value = cfg.topic;
      if (cfg.content) document.getElementById('pubContent').value = cfg.content;
      if (cfg.history && Array.isArray(cfg.history)) {
        // 兼容旧格式 string[] → 转为 {topic, content}[]
        if (cfg.history.length > 0 && typeof cfg.history[0] === 'string') {
          topicHistory = cfg.history.map(t => ({ topic: t, content: '' }));
        } else {
          topicHistory = cfg.history;
        }
        // 恢复到历史的最后一条（上次使用的）
        topicHistoryIndex = Math.max(0, topicHistory.length - 1);
        const entry = topicHistory[topicHistoryIndex];
        if (entry) {
          document.getElementById('pubTopic').value = entry.topic;
          document.getElementById('pubContent').value = entry.content || '';
        }
      }
      updateSwitchBtnState();
    }
  } catch (e) { /* ignore */ }
}

function saveBrokerConfig() {
  try {
    localStorage.setItem(STORAGE_KEYS.brokerConfig, JSON.stringify({
      broker: defaultConfig.broker,
      autoReconnect: autoReconnectEnabled,
      userHasEverConnected // 记录是否曾主动连接过
    }));
  } catch (e) { /* ignore */ }
}

function loadBrokerConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.brokerConfig);
    if (raw) {
      const cfg = JSON.parse(raw);
      if (cfg.broker) {
        defaultConfig.broker = cfg.broker;
        document.getElementById('cfgBroker').value = cfg.broker;
        connInfoText.textContent = cfg.broker;
      }
      if (cfg.autoReconnect === false) {
        autoReconnectEnabled = false;
      } else {
        autoReconnectEnabled = true;
      }
      // 恢复是否曾主动连接过的状态
      if (cfg.userHasEverConnected === true) {
        userHasEverConnected = true;
      }
      console.log('[MQTT Debug] loadBrokerConfig:', { raw: cfg, userHasEverConnected, autoReconnectEnabled });
    }
  } catch (e) { /* ignore */ }
  // 如果之前用户主动连接过（页面刷新场景），且未主动断开，则自动重连
  console.log('[MQTT Debug] auto-connect check:', { userHasEverConnected, autoReconnectEnabled });
  if (userHasEverConnected && autoReconnectEnabled) {
    console.log('[MQTT Debug] triggering auto-connect');
    connect();
  }
}

function saveToggles() {
  try {
    localStorage.setItem(STORAGE_KEYS.toggles, JSON.stringify({
      retainEnabled,
      jsonFormat
    }));
  } catch (e) { /* ignore */ }
}

function loadToggles() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.toggles);
    if (raw) {
      const t = JSON.parse(raw);
      retainEnabled = !!t.retainEnabled;
      jsonFormat = t.jsonFormat !== false;
      document.getElementById('retainToggle').classList.toggle('active', retainEnabled);
      document.getElementById('jsonToggle').classList.toggle('active', jsonFormat);
    }
  } catch (e) { /* ignore */ }
}

function clearStorage() {
  Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
  showToast('已清除本地存储', 'info');
}

// ========== DOM 引用 ==========
const msgList = document.getElementById('msgList');
const subList = document.getElementById('subList');
const emptyState = document.getElementById('emptyState');
const connectBtn = document.getElementById('connectBtn');
const disconnectBtn = document.getElementById('disconnectBtn');
const connInfoDisplay = document.getElementById('connInfoDisplay');
const connInfoText = document.getElementById('connInfoText');

// ========== 自动重连状态 ==========
let autoReconnectEnabled = true;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 3;
let userInitiatedDisconnect = false;

// ========== Toast 通知 ==========
function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toastContainer');
  
  const icons = {
    success: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    error: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    warning: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${icons[type]}</div>
    <div class="toast-message">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  
  container.appendChild(toast);
  
  // 自动移除
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ========== 连接管理 ==========
function quickConnect() {
  if (isConnected) return;
  // 先同步设置面板的值到 defaultConfig（如果有打开过）
  const cfgUsername = document.getElementById('cfgUsername');
  const cfgPassword = document.getElementById('cfgPassword');
  if (cfgUsername) defaultConfig.username = cfgUsername.value.trim();
  if (cfgPassword) defaultConfig.password = cfgPassword.value;
  userHasEverConnected = true;
  autoReconnectEnabled = true;
  doConnect(defaultConfig.broker, defaultConfig.username, defaultConfig.password);
}

function doConnect(broker, username, password) {
  // 防止 MQTT.js 未加载
  if (typeof mqtt === 'undefined') {
    showToast('MQTT 库加载失败，请刷新页面重试', 'error');
    return;
  }

  // 如果已有连接，先关闭其 offline 监听器防止触发自动重连，再断开
  if (client) {
    client.removeAllListeners('offline');
    client.removeAllListeners('close');
    client.end(true);
    client = null;
  }

  // 更新按钮状态
  connectBtn.textContent = '连接中...';
  connectBtn.disabled = true;
  disconnectBtn.classList.add('hidden');

  // 断开之前的连接
  if (client) {
    client.end(true);
    client = null;
  }

  // 生成固定格式的 clientId
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substr(2, 6);
  const clientId = `hbj_${timestamp}_${randomPart}`;
  
  const keepalive = parseInt(document.getElementById('cfgKeepalive')?.value) || 60;

  const options = {
    clientId,
    clean: true,
    keepalive,
    connectTimeout: 5000,
    reconnectPeriod: 0
  };
  
  if (username) options.username = username;
  if (password) options.password = password;

  try {
    client = mqtt.connect(broker, options);
  } catch (e) {
    connectBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path></svg> 连接';
    connectBtn.disabled = false;
    showToast('连接失败: ' + e.message, 'error');
    return;
  }

  // 连接超时兜底（10秒）
  const connectTimer = setTimeout(() => {
    if (!isConnected && client) {
      client.end(true);
      client = null;
      connectBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path></svg> 连接';
      connectBtn.disabled = false;
      showToast('连接超时，请检查网络和 Broker 地址', 'error');
    }
  }, 10000);

  client.on('connect', () => {
    clearTimeout(connectTimer);
    isConnected = true;
    // 重置重连状态
    reconnectAttempts = 0;
    autoReconnectEnabled = true;
    userInitiatedDisconnect = false;
    const isRetry = lastReconnectAttempt > 0;
    lastReconnectAttempt = 0;
    connectBtn.classList.add('hidden');
    disconnectBtn.classList.remove('hidden');
    showToast(isRetry ? '重连成功' : '连接成功', 'success');

    // 更新连接信息显示
    updateConnInfo(broker);

    // 保存 Broker 地址
    console.log('[MQTT Debug] connected, userHasEverConnected:', userHasEverConnected);
    console.log('[MQTT Debug] localStorage before save:', localStorage.getItem(STORAGE_KEYS.brokerConfig));
    saveBrokerConfig();
    console.log('[MQTT Debug] localStorage after save:', localStorage.getItem(STORAGE_KEYS.brokerConfig));

    // 重新订阅之前的主题
    subscriptions.forEach(sub => {
      client.subscribe(sub.topic, { qos: sub.qos });
    });
  });

  client.on('message', (topic, payload, packet) => {
    // 查找匹配的订阅
    const matchedSub = findSubscription(topic);
    
    let content = payload.toString();
    if (jsonFormat) {
      try {
        content = JSON.stringify(JSON.parse(content), null, 2);
      } catch (e) {
        // 不是 JSON，保持原样
      }
    }
    addMessage(topic, content, 'incoming', {
      qos: packet.qos,
      retain: packet.retain,
      subId: matchedSub?.id,
      subAlias: matchedSub?.alias,
      subColor: matchedSub?.color
    });
  });

  client.on('error', (err) => {
    const msg = err.message || String(err);
    showToast('连接错误: ' + msg, 'error');
    
    if (msg.includes('Not authorized') || msg.includes('Connection refused')) {
      client.end(true);
    }
    updateConnectionState(false);
  });

  client.on('close', () => {
    updateConnectionState(false);
  });
  
  client.on('offline', () => {
    updateConnectionState(false);
    attemptAutoReconnect();
  });

  client.on('disconnect', () => {
    updateConnectionState(false);
    attemptAutoReconnect();
  });
}

// 查找匹配的订阅
function findSubscription(topic) {
  for (const sub of subscriptions) {
    if (matchTopic(sub.topic, topic)) {
      return sub;
    }
  }
  return null;
}

// 匹配 MQTT 主题（支持通配符）
function matchTopic(pattern, topic) {
  const patternParts = pattern.split('/');
  const topicParts = topic.split('/');
  
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i] === '#') {
      return true;
    }
    if (i >= topicParts.length) {
      return false;
    }
    if (patternParts[i] !== '+' && patternParts[i] !== topicParts[i]) {
      return false;
    }
  }
  
  return patternParts.length === topicParts.length;
}

function updateConnInfo(broker) {
  const protocol = broker.startsWith('wss') ? 'WSS' : 'WS';
  const host = broker.replace(/^wss?:\/\//, '').split('/')[0];
  
  connInfoText.textContent = `${protocol} ${host}`;
  connInfoDisplay.classList.add('has-value');
}

function updateConnectionState(connected) {
  isConnected = connected;
  if (connected) {
    connectBtn.classList.add('hidden');
    disconnectBtn.classList.remove('hidden');
  } else {
    connectBtn.classList.remove('hidden');
    connectBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path></svg> 连接';
    connectBtn.disabled = false;
    disconnectBtn.classList.add('hidden');
    connInfoText.textContent = 'wss://broker.emqx.io:8084/mqtt';
    connInfoDisplay.classList.remove('has-value');
  }
  updateSettingsFooter();
}

function updateSettingsFooter() {
  const btn = document.getElementById('settingsToggleBtn');
  if (!btn) return;
  if (isConnected) {
    btn.textContent = '断开';
    btn.className = 'settings-toggle-btn disconnect';
    btn.onclick = function() { hideSettings(); disconnect(); };
  } else {
    btn.textContent = '连接';
    btn.className = 'settings-toggle-btn connect';
    btn.onclick = toggleConnection;
  }
}

function toggleConnection() {
  hideSettings();
  if (isConnected) {
    disconnect();
  } else {
    connect();
  }
}

function disconnect() {
  userInitiatedDisconnect = true; // 标记为主动断开，禁用自动重连
  if (client) {
    client.end(true);
    client = null;
  }
  updateConnectionState(false);
  showToast('已断开连接', 'info');
}

// ========== 自动重连 ==========
let lastReconnectAttempt = 0; // 记录上一次重连尝试的序号，用于区分首次连接和重连
let userHasEverConnected = false; // 用户是否主动发起过连接（页面刷新后保持，用于判断是否自动连接）

function attemptAutoReconnect() {
  if (!autoReconnectEnabled) return;
  if (userInitiatedDisconnect) return; // 主动断开则不重连
  if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
    autoReconnectEnabled = false;
    showToast(`连接失败，已达最大重试次数（${MAX_RECONNECT_ATTEMPTS}次）`, 'error', 6000);
    return;
  }
  reconnectAttempts++;
  lastReconnectAttempt = reconnectAttempts;
  showToast(`连接断开，1秒后自动重连（第${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS}次）...`, 'warning', 3000);
  setTimeout(() => {
    if (!userInitiatedDisconnect) {
      connect();
    }
  }, 1000);
}

// ========== 连接信息点击打开设置 ==========
function editBrokerInline() {
  showSettings();
}

// ========== 设置面板 ==========
function showSettings() {
  document.getElementById('settingsOverlay').classList.add('show');
  // 从当前激活的配置填充表单
  document.getElementById('cfgBroker').value = defaultConfig.broker;
  document.getElementById('cfgUsername').value = defaultConfig.username || '';
  document.getElementById('cfgPassword').value = defaultConfig.password || '';

  // Broker 输入时实时保存
  document.getElementById('cfgBroker').oninput = function () {
    defaultConfig.broker = this.value.trim();
    connInfoText.textContent = defaultConfig.broker;
    saveBrokerConfig();
  };
  document.getElementById('cfgTimeout').value = defaultConfig.timeout || 4000;
  document.getElementById('cfgKeepalive').value = defaultConfig.keepalive || 60;
  document.getElementById('cfgWillTopic').value = defaultConfig.willTopic || '';
  document.getElementById('cfgWillMessage').value = defaultConfig.willMessage || '';
  document.getElementById('cfgWillQos').value = defaultConfig.willQos || 0;
  document.getElementById('cfgWillRetain').value = String(defaultConfig.willRetain || false);
  updateSettingsFooter();
}

function hideSettings() {
  // 关闭前把表单值同步到 defaultConfig
  const newBroker = document.getElementById('cfgBroker').value.trim();
  defaultConfig.broker = newBroker || defaultConfig.broker;
  defaultConfig.username = document.getElementById('cfgUsername').value.trim();
  defaultConfig.password = document.getElementById('cfgPassword').value;
  defaultConfig.timeout = parseInt(document.getElementById('cfgTimeout').value) || 4000;
  defaultConfig.keepalive = parseInt(document.getElementById('cfgKeepalive').value) || 60;
  defaultConfig.willTopic = document.getElementById('cfgWillTopic').value.trim();
  defaultConfig.willMessage = document.getElementById('cfgWillMessage').value;
  defaultConfig.willQos = parseInt(document.getElementById('cfgWillQos').value) || 0;
  defaultConfig.willRetain = document.getElementById('cfgWillRetain').value === 'true';
  // 同步更新主页导航栏的 broker 显示
  updateConnInfo(defaultConfig.broker);
  document.getElementById('settingsOverlay').classList.remove('show');
}

function connect() {
  const broker = document.getElementById('cfgBroker').value.trim();
  const username = document.getElementById('cfgUsername').value.trim();
  const password = document.getElementById('cfgPassword').value;

  if (!broker) {
    showToast('请输入连接地址', 'warning');
    return;
  }

  // 标记用户主动发起过连接（用于页面刷新后自动重连）
  userHasEverConnected = true;
  autoReconnectEnabled = true;
  
  // 更新 defaultConfig 后再连接（hideSettings 已同步一次，这里以表单为准）
  defaultConfig.broker = broker;
  defaultConfig.username = username;
  defaultConfig.password = password;
  defaultConfig.timeout = parseInt(document.getElementById('cfgTimeout').value) || 4000;
  defaultConfig.keepalive = parseInt(document.getElementById('cfgKeepalive').value) || 60;
  defaultConfig.willTopic = document.getElementById('cfgWillTopic').value.trim();
  defaultConfig.willMessage = document.getElementById('cfgWillMessage').value;
  defaultConfig.willQos = parseInt(document.getElementById('cfgWillQos').value) || 0;
  defaultConfig.willRetain = document.getElementById('cfgWillRetain').value === 'true';
  
  hideSettings();
  doConnect(broker, username, password);
}

// ========== 订阅管理 ==========
let selectedColor = '#e0f7f4';

function selectColor(el) {
  document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
  selectedColor = el.dataset.color;
}

function showSubModal() {
  if (!isConnected) {
    showToast('请先连接 Broker', 'warning');
    return;
  }
  document.getElementById('subModal').classList.add('show');
  document.getElementById('modalTopic').focus();
}

function hideSubModal() {
  document.getElementById('subModal').classList.remove('show');
  document.getElementById('modalTopic').value = '';
  document.getElementById('modalAlias').value = '';
  document.getElementById('modalSubId').value = '';
  // 重置颜色选择
  document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
  document.querySelector('.color-option').classList.add('selected');
  selectedColor = '#e0f7f4';
}

function confirmSubscribe() {
  const topic = document.getElementById('modalTopic').value.trim();
  const alias = document.getElementById('modalAlias').value.trim();
  const qos = parseInt(document.getElementById('modalQos').value);
  const subId = document.getElementById('modalSubId').value.trim();
  
  if (!topic) {
    showToast('请输入订阅主题', 'warning');
    return;
  }

  if (subscriptions.find(s => s.topic === topic)) {
    showToast('已订阅该主题', 'warning');
    return;
  }

  if (!client || !client.connected) {
    showToast('连接已断开，请重新连接', 'error');
    return;
  }

  const subOptions = { qos };
  if (subId) {
    subOptions.subscriptionId = parseInt(subId);
  }

  client.subscribe(topic, subOptions, (err) => {
    if (err) {
      showToast('订阅失败: ' + err.message, 'error');
    } else {
      const newSub = { 
        id: Date.now(), 
        topic, 
        qos, 
        alias: alias || topic,
        color: selectedColor,
        subId: subId || null
      };
      subscriptions.push(newSub);
      saveSubscriptions();
      renderSubscriptions();
      showToast(`已订阅 ${topic}`, 'success');
      hideSubModal();
    }
  });
}

function unsubscribe(topic) {
  if (!client || !client.connected) return;
  
  client.unsubscribe(topic, (err) => {
    if (!err) {
      subscriptions = subscriptions.filter(s => s.topic !== topic);
      saveSubscriptions();
      renderSubscriptions();
      showToast(`已取消订阅 ${topic}`, 'info');
    }
  });
}

function renderSubscriptions() {
  if (subscriptions.length === 0) {
    subList.innerHTML = '<div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">暂无订阅</div>';
    return;
  }
  
  subList.innerHTML = subscriptions.map(sub => {
    const isActive = currentSubFilter === sub.topic;
    const isCtrl = ctrlSelectedSubs.includes(sub.topic);
    return `
    <div class="sub-item${isActive ? ' active' : ''}${isCtrl && !isActive ? ' sub-item-ctrl' : ''}" style="border-left-color: ${sub.color};" data-topic="${escapeAttr(sub.topic)}" onclick="filterBySub(this.dataset.topic, event)">
      <div class="sub-item-content">
        <div class="sub-alias">${escapeHtml(sub.alias)}</div>
        <div class="sub-topic">${escapeHtml(sub.topic)}</div>
      </div>
      <span class="sub-qos">QoS${sub.qos}</span>
      <button class="sub-delete" onclick="event.stopPropagation(); unsubscribe('${escapeAttr(sub.topic)}')">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    `;
  }).join('');
}

function filterBySub(topic, event) {
  if (event && event.ctrlKey) {
    // Ctrl 点击：多选 / 取消多选
    const idx = ctrlSelectedSubs.indexOf(topic);
    if (idx >= 0) {
      ctrlSelectedSubs.splice(idx, 1);
    } else {
      ctrlSelectedSubs.push(topic);
    }
    // Ctrl 多选时同时设置 currentSubFilter 为 null
    currentSubFilter = null;
  } else {
    // 普通点击：单选 / 取消
    if (currentSubFilter === topic) {
      currentSubFilter = null;
    } else {
      currentSubFilter = topic;
    }
    // 非 Ctrl 点击时清空 Ctrl 多选
    ctrlSelectedSubs = [];
  }
  renderSubscriptions();
  renderMessages();
  updateSubFilterTag();
}

function clearSubFilter() {
  currentSubFilter = null;
  ctrlSelectedSubs = [];
  renderSubscriptions();
  renderMessages();
  updateSubFilterTag();
}

function removeSubFilter(topic) {
  if (currentSubFilter === topic) {
    currentSubFilter = null;
  }
  const idx = ctrlSelectedSubs.indexOf(topic);
  if (idx >= 0) ctrlSelectedSubs.splice(idx, 1);
  renderSubscriptions();
  renderMessages();
  updateSubFilterTag();
}

function updateSubFilterTag() {
  const container = document.getElementById('subFilterTag');
  if (!container) return;

  const activeSubs = [];
  if (currentSubFilter) activeSubs.push(currentSubFilter);
  activeSubs.push(...ctrlSelectedSubs);

  if (activeSubs.length > 0) {
    container.innerHTML = activeSubs.map(topic => {
      const sub = subscriptions.find(s => s.topic === topic);
      const label = sub ? escapeHtml(sub.alias || sub.topic) : escapeHtml(topic);
      const color = sub?.color || 'var(--accent-light)';
      return `
      <span class="sub-filter-badge" style="border-color: ${color}; background: ${color};">
        ${label}
        <button onclick="event.stopPropagation(); removeSubFilter('${escapeAttr(topic)}')" title="移除">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </span>`;
    }).join('');
    container.style.display = 'flex';
  } else {
    container.innerHTML = '';
    container.style.display = 'none';
  }
}

// ========== 消息管理 ==========
function addMessage(topic, payload, type, options = {}) {
  const emptyEl = document.getElementById('emptyState');
  if (emptyEl) emptyEl.remove();
  
  const msg = {
    id: Date.now(),
    topic,
    payload,
    type,
    time: new Date().toISOString(),
    qos: options.qos || 0,
    retain: options.retain || false,
    subId: options.subId || null,
    subAlias: options.subAlias || null,
    subColor: options.subColor || null
  };
  
  messages.push(msg);
  renderMessages();
  updateMsgCount();
}

function renderMessages() {
  const filtered = messages.filter(m => {
    // 先按收发类型过滤
    if (currentFilter === 'received' && m.type !== 'incoming') return false;
    if (currentFilter === 'sent' && m.type !== 'outgoing') return false;
    // 再按订阅过滤：如果有选中的订阅，只显示匹配的消息
    const activeSubs = [];
    if (currentSubFilter) activeSubs.push(currentSubFilter);
    activeSubs.push(...ctrlSelectedSubs);
    if (activeSubs.length > 0) {
      return activeSubs.some(sub => matchTopic(sub, m.topic));
    }
    return true;
  });
  
  if (filtered.length === 0) {
    msgList.innerHTML = `
      <div class="empty-state" id="emptyState">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <p>暂无消息</p>
      </div>
    `;
    return;
  }
  
  msgList.innerHTML = filtered.map(msg => {
    const timeStr = new Date(msg.time).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const retainBadge = msg.retain ? '<span class="msg-retain">Retained</span>' : '';
    const subTag = msg.subAlias ? `<span class="msg-sub-tag">${escapeHtml(msg.subAlias)}</span>` : '';
    
    return `
      <div class="msg-item ${msg.type}">
        <div class="msg-bubble" style="${msg.type === 'incoming' && msg.subColor ? 'border-left: 3px solid ' + msg.subColor : ''}">
          <div class="msg-header">
            <span class="msg-topic">${escapeHtml(msg.topic)}</span>
            <span class="msg-qos">QoS ${msg.qos}</span>
            ${retainBadge}
          </div>
          <div class="msg-payload">${escapeHtml(msg.payload)}</div>
          <div class="msg-footer">
            <span class="msg-time">${timeStr}</span>
            ${subTag}
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  msgList.scrollTop = msgList.scrollHeight;
}

function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  const div = document.createElement('div');
  div.textContent = String(text);
  return div.innerHTML;
}

function escapeAttr(text) {
  if (text === null || text === undefined) return '';
  return String(text).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function setFilter(filter, event) {
  currentFilter = filter;
  document.querySelectorAll('.msg-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');
  renderMessages();
}

function updateMsgCount() {
  document.getElementById('msgCountText').textContent = `${messages.length} 条`;
}

let topicHistory = []; // [{topic, content}, ...]
let topicHistoryIndex = -1;

function addToTopicHistory(topic, content) {
  topic = topic.trim();
  if (!topic) return;
  const entry = { topic, content: content || '' };
  topicHistory = topicHistory.filter(t => t.topic !== topic);
  topicHistory.unshift(entry);
  if (topicHistory.length > 10) topicHistory.pop();
  topicHistoryIndex = -1;
  savePubConfig();
  updateSwitchBtnState();
}

function switchTopic(dir) {
  const topicInput = document.getElementById('pubTopic');
  const contentInput = document.getElementById('pubContent');
  const currentTopic = topicInput.value.trim();
  const currentContent = contentInput.value;

  const len = topicHistory.length;

  // 首次切换：把当前值作为历史第 1 条
  if (len === 0 && currentTopic) {
    topicHistory.push({ topic: currentTopic, content: currentContent });
    topicHistoryIndex = 0;
    updateSwitchBtnState();
    savePubConfig();
    return;
  }

  // 保存当前位置（如果和历史中不同，则追加为新条目）
  if (currentTopic) {
    const currentEntry = topicHistory[topicHistoryIndex];
    const isDifferent = !currentEntry || currentEntry.topic !== currentTopic;
    if (isDifferent) {
      topicHistory.push({ topic: currentTopic, content: currentContent });
      topicHistoryIndex = topicHistory.length - 1;
    }
  }

  const newLen = topicHistory.length;
  if (newLen <= 1) return;

  if (dir === 1) {
    // 向前：跳到下一条（如果已是最后一条则不变）
    if (topicHistoryIndex < newLen - 1) {
      topicHistoryIndex++;
    }
  } else {
    // 向后：跳到上一条（如果已是第一条则回到当前位置）
    if (topicHistoryIndex > 0) {
      topicHistoryIndex--;
    }
  }

  const entry = topicHistory[topicHistoryIndex];
  topicInput.value = entry.topic;
  contentInput.value = entry.content;
  updateSwitchBtnState();
  savePubConfig();
}

function updateSwitchBtnState() {
  const prevBtn = document.getElementById('topicPrevBtn');
  const nextBtn = document.getElementById('topicNextBtn');
  if (!prevBtn || !nextBtn) return;
  const len = topicHistory.length;
  // prev 禁用：已在第一条（index=0）时
  prevBtn.disabled = len <= 1 || topicHistoryIndex <= 0;
  // next 禁用：已在最后一条时
  nextBtn.disabled = len <= 1 || topicHistoryIndex >= len - 1;
}

function clearMessages() {
  messages = [];
  msgList.innerHTML = `
    <div class="empty-state" id="emptyState">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <p>暂无消息</p>
    </div>
  `;
  updateMsgCount();
}

// ========== 工具函数 ==========
function toggleRetain() {
  console.log('[toggle] retain clicked');
  retainEnabled = !retainEnabled;
  document.getElementById('retainToggle').classList.toggle('active', retainEnabled);
}

function toggleJson() {
  console.log('[toggle] json clicked');
  jsonFormat = !jsonFormat;
  document.getElementById('jsonToggle').classList.toggle('active', jsonFormat);
}

// ========== 发布 ==========
function hasWildcard(topic) {
  return topic.includes('+') || topic.includes('#');
}

function publish() {
  const topicInput = document.getElementById('pubTopic');
  const topic = topicInput.value.trim();
  const payload = document.getElementById('pubContent').value;
  const qos = parseInt(document.getElementById('qosSelect').value) || 0;
  
  if (!topic) {
    showToast('请输入发布主题', 'warning');
    return;
  }
  
  // 记录到历史（带对应消息内容）
  addToTopicHistory(topic, payload);
  
  // 检查通配符
  if (hasWildcard(topic)) {
    topicInput.classList.add('error');
    showToast('发布主题不能包含通配符 + 或 #，已在本地模拟发送', 'warning');
    
    // 本地模拟发送，不真正发布
    const displayPayload = payload;
    addMessage(topic, displayPayload, 'outgoing', { qos, retain: retainEnabled });
    addMessage(topic, displayPayload, 'incoming', { qos, retain: retainEnabled });
    
    // 3秒后移除错误样式
    setTimeout(() => {
      topicInput.classList.remove('error');
    }, 3000);
    return;
  }
  
  if (!client) {
    showToast('请先连接 Broker', 'warning');
    return;
  }
  
  // 检查连接状态
  try {
    if (client.connected) {
      const options = { qos, retain: retainEnabled };
      client.publish(topic, payload, options);
      
      // 发送成功后添加到消息列表
      addMessage(topic, payload, 'outgoing', { qos, retain: retainEnabled });
      savePubConfig();
    } else {
      showToast('连接已断开，请重新连接', 'error');
    }
  } catch (e) {
    showToast('发布异常: ' + e.message, 'error');
  }
}

// ========== 初始化 ==========
window.addEventListener('load', () => {
  // 加载本地存储数据
  loadSubscriptions();
  loadPubConfig();
  loadBrokerConfig();
  loadToggles();

  renderSubscriptions();
  updateSubFilterTag();
  updateSwitchBtnState();

  // 初始化 Toggle 状态（如果没读取到才设置默认值）
  if (!localStorage.getItem(STORAGE_KEYS.toggles)) {
    document.getElementById('jsonToggle').classList.add('active');
  }

  // 用 addEventListener 重新绑定 toggle，防止 onclick 属性失效
  document.getElementById('retainToggle').addEventListener('click', () => {
    console.log('[addEventListener] retain clicked');
    toggleRetain();
  });
  document.getElementById('jsonToggle').addEventListener('click', () => {
    console.log('[addEventListener] json clicked');
    toggleJson();
  });

  // 回车发送（Ctrl+Enter）
  document.getElementById('pubContent').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      publish();
    }
  });

  // Topic 输入框左右方向键切换历史
  document.getElementById('pubTopic').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); switchTopic(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); switchTopic(-1); }
  });
  
  // Topic/Content 输入变化时自动保存
  document.getElementById('pubTopic').addEventListener('input', savePubConfig);
  document.getElementById('pubContent').addEventListener('input', savePubConfig);
  
  // Toggle 切换时保存状态
  document.getElementById('retainToggle').addEventListener('click', () => {
    toggleRetain();
    saveToggles();
  });
  document.getElementById('jsonToggle').addEventListener('click', () => {
    toggleJson();
    saveToggles();
  });
  
  // 回车确认订阅
  document.getElementById('modalTopic').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      confirmSubscribe();
    }
  });

  // ESC 关闭弹窗
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideSettings();
      hideSubModal();
    }
  });
});
