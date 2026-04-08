// ========== MQTT 调试工具 - JavaScript ==========

// ========== 状态 ==========
let client = null;
let subscriptions = [];
let messages = [];
let currentFilter = 'all';
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
  topic: 'hbj/test',
  content: '{"status":"ok","value":123}'
};

// ========== DOM 引用 ==========
const msgList = document.getElementById('msgList');
const subList = document.getElementById('subList');
const emptyState = document.getElementById('emptyState');
const connectBtn = document.getElementById('connectBtn');
const disconnectBtn = document.getElementById('disconnectBtn');
const connInfoDisplay = document.getElementById('connInfoDisplay');
const connInfoText = document.getElementById('connInfoText');
const connInfoInput = document.getElementById('connInfoInput');

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
  doConnect(defaultConfig.broker, '', '');
}

function doConnect(broker, username, password) {
  connectBtn.textContent = '连接中...';
  connectBtn.disabled = true;

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

  client.on('connect', () => {
    isConnected = true;
    connectBtn.classList.add('hidden');
    disconnectBtn.classList.remove('hidden');
    showToast('连接成功', 'success');
    
    // 更新连接信息显示
    updateConnInfo(broker);
    
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
    showToast('连接已离线', 'warning');
  });
  
  client.on('disconnect', () => {
    updateConnectionState(false);
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
}

function disconnect() {
  if (client) {
    client.end(true);
    client = null;
  }
  updateConnectionState(false);
  showToast('已断开连接', 'info');
}

// ========== 连接信息内联编辑 ==========
function editBrokerInline() {
  connInfoDisplay.classList.add('hidden');
  connInfoInput.classList.remove('hidden');
  connInfoInput.value = defaultConfig.broker;
  connInfoInput.focus();
  connInfoInput.select();
}

function finishBrokerEdit() {
  const newBroker = connInfoInput.value.trim();
  if (newBroker && newBroker !== defaultConfig.broker) {
    defaultConfig.broker = newBroker;
    showToast('已更新连接地址', 'success');
  }
  connInfoInput.classList.add('hidden');
  connInfoDisplay.classList.remove('hidden');
}

// ========== 设置面板 ==========
function showSettings() {
  document.getElementById('settingsOverlay').classList.add('show');
  document.getElementById('cfgBroker').value = defaultConfig.broker;
}

function hideSettings() {
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
  
  defaultConfig.broker = broker;
  
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
  
  subList.innerHTML = subscriptions.map(sub => `
    <div class="sub-item" style="border-left-color: ${sub.color};" onclick="filterBySub('${sub.topic}')">
      <div class="sub-item-content">
        <div class="sub-alias">${escapeHtml(sub.alias)}</div>
        <div class="sub-topic">${escapeHtml(sub.topic)}</div>
      </div>
      <span class="sub-qos">QoS${sub.qos}</span>
      <button class="sub-delete" onclick="event.stopPropagation(); unsubscribe('${escapeHtml(sub.topic)}')">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `).join('');
}

function filterBySub(topic) {
  // 点击订阅项可以按该订阅过滤消息
  currentFilter = 'all';
  document.querySelectorAll('.msg-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector('.msg-tab').classList.add('active');
  renderMessages();
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
    if (currentFilter === 'all') return true;
    if (currentFilter === 'received') return m.type === 'incoming';
    if (currentFilter === 'sent') return m.type === 'outgoing';
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
  retainEnabled = !retainEnabled;
  document.getElementById('retainToggle').classList.toggle('active', retainEnabled);
}

function toggleJson() {
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
    } else {
      showToast('连接已断开，请重新连接', 'error');
    }
  } catch (e) {
    showToast('发布异常: ' + e.message, 'error');
  }
}

// ========== 初始化 ==========
window.addEventListener('load', () => {
  renderSubscriptions();
  
  // 设置默认值
  document.getElementById('pubTopic').value = defaultValues.topic;
  document.getElementById('pubContent').value = defaultValues.content;
  document.getElementById('cfgBroker').value = defaultConfig.broker;
  connInfoText.textContent = defaultConfig.broker;
  
  // 初始化 Toggle 状态
  document.getElementById('jsonToggle').classList.add('active');
  
  // 连接信息输入框
  connInfoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      finishBrokerEdit();
    } else if (e.key === 'Escape') {
      connInfoInput.value = defaultConfig.broker;
      connInfoInput.classList.add('hidden');
      connInfoDisplay.classList.remove('hidden');
    }
  });
  
  connInfoInput.addEventListener('blur', () => {
    finishBrokerEdit();
  });
  
  // 回车发送（Ctrl+Enter）
  document.getElementById('pubContent').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      publish();
    }
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
      if (!connInfoInput.classList.contains('hidden')) {
        connInfoInput.value = defaultConfig.broker;
        connInfoInput.classList.add('hidden');
        connInfoDisplay.classList.remove('hidden');
      }
    }
  });
});
