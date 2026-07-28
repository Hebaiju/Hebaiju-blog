---
description: 搞钱，迎娶白富美，走上人生巅峰。
title: ESP8266实现配网
date: 2025-07-26
categories:
- Code
tags:
- ESP8266
- 项目
codeHeightLimit: 600
---

## ESP8266实现配网 [​](#esp8266实现配网)

我目前处于大学阶段，在参加一个社团，里面主要是做项目，比赛的一个小团队。  
在这个小团队中，我主要负责的是一个项目的硬件部分，  
比如说硬件的组装，电路的调试连接，代码的开发都是由我来完成。其中不可避免的就会和嵌入式相关联，通常会使用到arduino IDE来进行开发。使用的开发板有arduino uno，auduino 2560，esp8266，esp32等。  
在其中不乏会遇到需要配置网络的步骤，用到最多的联网模块就是esp8266，超小的板子，有着基础的计算能力，且可以联网所以项目中会经常使用到这个小板子。

下面我就分享一些我用到的esp8266开发板的配网方法。



::: code-group

```cpp [基础功能]
//页面简单，实现esp8266启动时检测是否连接wifi，如果连接了就继续，如果没有连接上就开启ap模式，ap模式如果120s没有连接成功就重启重复执行。手机，pc设备连接esp8266wifi进行配网。
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DNSServer.h>
#include <EEPROM.h>

const char* apSSID = "esp82config";
const char* apPassword = "";
const int EEPROM_SIZE = 512;
const int SSID_ADDRESS = 0;
const int PASSWORD_ADDRESS = 128;
unsigned long apStartTime = 0;        // AP模式启动时间
const unsigned long AP_TIMEOUT = 60000; // 超时时间（60秒）

// 创建服务器和DNS服务器
ESP8266WebServer server(80);
DNSServer dnsServer;

// 从EEPROM读取WiFi配置
void readWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  char ssid[128];
  char password[128];
  
  for (int i = 0; i < 128; i++) {
    ssid[i] = EEPROM.read(SSID_ADDRESS + i);
  }
  
  for (int i = 0; i < 128; i++) {
    password[i] = EEPROM.read(PASSWORD_ADDRESS + i);
  }
  
  // 检查是否有保存的配置
  if (strlen(ssid) > 0) {
    WiFi.begin(ssid, password);
    Serial.print("找到已保存的配置。正在连接到: ");
    Serial.println(ssid);
  }
  
  EEPROM.end();
}

// 保存WiFi配置到EEPROM
void saveWiFiConfig(String ssid, String password) {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  // 保存SSID
  for (int i = 0; i < ssid.length(); i++) {
    EEPROM.write(SSID_ADDRESS + i, ssid[i]);
  }
  EEPROM.write(SSID_ADDRESS + ssid.length(), '\0'); // 字符串结束符
  
  // 保存密码
  for (int i = 0; i < password.length(); i++) {
    EEPROM.write(PASSWORD_ADDRESS + i, password[i]);
  }
  EEPROM.write(PASSWORD_ADDRESS + password.length(), '\0'); // 字符串结束符
  
  EEPROM.commit();
  EEPROM.end();
  
  Serial.println("WiFi配置已保存到EEPROM");
}

// 检查是否有保存的WiFi配置
bool hasSavedWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  char ssid[128];
  for (int i = 0; i < 128; i++) {
    ssid[i] = EEPROM.read(SSID_ADDRESS + i);
  }
  
  EEPROM.end();
  
  return (strlen(ssid) > 0);
}

// 连接到保存的WiFi
bool connectToSavedWiFi() {
  WiFi.mode(WIFI_STA);
  readWiFiConfig(); // 从EEPROM读取配置
  
  Serial.print("正在连接到已保存的网络...");
  
  int retryCount = 0;
  while (WiFi.status() != WL_CONNECTED && retryCount < 20) {
    delay(500);
    Serial.print(".");
    retryCount++;
  }
  
  Serial.println();
  
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("已连接到WiFi");
    Serial.print("IP地址: ");
    Serial.println(WiFi.localIP());
    return true;
  } else {
    Serial.println("连接失败");
    return false;
  }
}

// 启动AP模式
void startAPMode() {
  WiFi.mode(WIFI_AP);
  WiFi.softAP(apSSID, apPassword);
  
  Serial.println("AP模式已启动");
  Serial.print("AP SSID: ");
  Serial.println(apSSID);
  Serial.print("AP IP地址: ");
  Serial.println(WiFi.softAPIP());
  
  apStartTime = millis(); // 记录AP启动时间
  
  // 设置Web服务器路由
  server.on("/", []() {
    String page = "<html><body>";
    page += "<h1>WiFi配置</h1>";
    page += "<form method='POST' action='/connect'>";
    page += "SSID: <input type='text' name='ssid'><br>";
    page += "密码: <input type='password' name='password'><br>";
    page += "<input type='submit' value='连接'>";
    page += "</form>";
    page += "</body></html>";
    server.send(200, "text/html", page);
  });
  
  server.on("/connect", []() {
    if (server.hasArg("ssid") && server.hasArg("password")) {
      String ssid = server.arg("ssid");
      String password = server.arg("password");
      
      saveWiFiConfig(ssid, password); // 保存配置到EEPROM
      
      server.send(200, "text/plain", "WiFi配置已保存。正在重启...");
      delay(1000);
      ESP.restart();
    } else {
      server.send(400, "text/plain", "错误请求");
    }
  });
  
  // 处理所有未定义的请求，重定向到配置页面
  server.onNotFound([]() {
    server.sendHeader("Location", String("http://") + WiFi.softAPIP().toString(), true);
    server.send(302, "text/plain", "");
  });
  
  server.begin();
  Serial.println("Web服务器已启动");
}

void setup() {
  Serial.begin(9600);
  Serial.println();
  
  // 尝试连接到保存的WiFi
  if (hasSavedWiFiConfig() && connectToSavedWiFi()) {
    // WiFi连接成功，执行正常操作
    // 这里可以添加你的应用代码
  } else {
    // WiFi连接失败或没有保存的配置，启动AP模式
    startAPMode();
  }
}

void loop() {
  // 处理DNS请求
  dnsServer.processNextRequest();
  
  // 处理HTTP请求
  server.handleClient();
  
  // 检查AP模式是否超时
  if (WiFi.getMode() == WIFI_AP && (millis() - apStartTime >= AP_TIMEOUT)) {
    Serial.println("AP模式超时。正在重启...");
    ESP.restart();
  }
  
  // 如果WiFi已连接，可以添加你的应用逻辑
  if (WiFi.status() == WL_CONNECTED) {
    // 应用代码
  }
  
  delay(10);
}
```

```cpp [页面美化]
//ESP8266连接WiFi页面已美化
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DNSServer.h>
#include <EEPROM.h>

const char* apSSID = "esp8266config";
const char* apPassword = "";
const int EEPROM_SIZE = 512;
const int SSID_ADDRESS = 0;
const int PASSWORD_ADDRESS = 128;
unsigned long apStartTime = 0;        // AP模式启动时间
const unsigned long AP_TIMEOUT = 120000; // 超时时间（120秒）

ESP8266WebServer server(80);
DNSServer dnsServer;

// 响应式Web配置页面 (HTML/CSS)
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ESP8266 WiFi配置</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
        body { background-color: #f0f2f5; padding: 20px; }
        .container { max-width: 500px; margin: 0 auto; }
        .card { background: white; border-radius: 10px; padding: 25px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #1a73e8; text-align: center; margin-bottom: 20px; font-size: 24px; }
        .form-group { margin-bottom: 18px; }
        label { display: block; margin-bottom: 6px; color: #5f6368; font-weight: 500; }
        input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; }
        input:focus { outline: none; border-color: #1a73e8; box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2); }
        button { width: 100%; padding: 12px; background: #1a73e8; color: white; border: none; 
                 border-radius: 6px; font-size: 16px; font-weight: 500; cursor: pointer; margin-bottom: 10px; }
        button:hover { background: #0d47a1; transition: background 0.3s; }
        .status { margin-top: 15px; padding: 12px; border-radius: 6px; text-align: center; 
                 color: white; font-weight: 500; }
        .success { background: #34a853; }
        .error { background: #ea4335; }
        .loading { background: #4285f4; }
        .wifi-list { margin-bottom: 20px; max-height: 200px; overflow-y: auto; border: 1px solid #eee; border-radius: 6px; }
        .wifi-item { padding: 12px; border-bottom: 1px solid #eee; display: flex; align-items: center; cursor: pointer; }
        .wifi-item:last-child { border-bottom: none; }
        .wifi-item:hover { background: #f8f9fa; }
        .wifi-item.selected { background: #e8f0fe; border-left: 4px solid #1a73e8; }
        .signal { margin-right: 10px; font-weight: bold; }
        .signal-strong { color: #34a853; }
        .signal-medium { color: #fbbc05; }
        .signal-weak { color: #ea4335; }
        .instructions { color: #5f6368; margin-bottom: 20px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <h1>WiFi网络配置</h1>
            <p class="instructions">选择可用网络或手动输入WiFi信息</p>
            
            <div class="wifi-list" id="wifiList">
                <div class="wifi-item">正在扫描网络...</div>
            </div>

            <div class="form-group">
                <label for="ssid">WiFi名称 (SSID)</label>
                <input type="text" id="ssid" name="ssid" placeholder="输入WiFi名称">
            </div>

            <div class="form-group">
                <label for="password">WiFi密码</label>
                <input type="password" id="password" name="password" placeholder="输入WiFi密码">
            </div>

            <form method="POST" action="/connect">
                <input type="hidden" id="formSsid" name="ssid">
                <input type="hidden" id="formPassword" name="password">
                <button type="submit">连接WiFi</button>
            </form>
            <button onclick="window.location.reload()">重新扫描</button>
        </div>
    </div>

    <script>
        // 页面加载完成后获取WiFi列表
        window.onload = function() {
            fetch('/wifiscan')
                .then(response => response.json())
                .then(networks => {
                    const list = document.getElementById('wifiList');
                    list.innerHTML = '';
                    
                    if (networks.length === 0) {
                        list.innerHTML = '<div class="wifi-item">未发现可用网络</div>';
                        return;
                    }
                    
                    networks.forEach(net => {
                        const item = document.createElement('div');
                        item.className = 'wifi-item';
                        
                        let signalClass = 'signal-weak';
                        let signalIcon = '▂___';
                        
                        if (net.rssi > -60) {
                            signalClass = 'signal-strong';
                            signalIcon = '▂▄▆█';
                        } else if (net.rssi > -75) {
                            signalClass = 'signal-medium';
                            signalIcon = '▂▄▆_';
                        }
                        
                        item.innerHTML = `
                            <div class="signal ${signalClass}">${signalIcon}</div>
                            <div class="ssid">${net.ssid}</div>
                        `;
                        
                        item.onclick = () => {
                            document.querySelectorAll('.wifi-item').forEach(el => el.classList.remove('selected'));
                            item.classList.add('selected');
                            document.getElementById('ssid').value = net.ssid;
                            document.getElementById('formSsid').value = net.ssid;
                        };
                        
                        list.appendChild(item);
                    });
                });
            
            // 同步输入框值到表单隐藏域
            document.getElementById('ssid').addEventListener('input', function() {
                document.getElementById('formSsid').value = this.value;
            });
            
            document.getElementById('password').addEventListener('input', function() {
                document.getElementById('formPassword').value = this.value;
            });
        };
    </script>
</body>
</html>
)rawliteral";

// 从EEPROM读取WiFi配置
void readWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  char ssid[128];
  char password[128];
  
  for (int i = 0; i < 128; i++) {
    ssid[i] = EEPROM.read(SSID_ADDRESS + i);
  }
  
  for (int i = 0; i < 128; i++) {
    password[i] = EEPROM.read(PASSWORD_ADDRESS + i);
  }
  
  if (strlen(ssid) > 0) {
    WiFi.begin(ssid, password);
    Serial.print("找到已保存的配置。正在连接到: ");
    Serial.println(ssid);
  }
  
  EEPROM.end();
}

// 保存WiFi配置到EEPROM
void saveWiFiConfig(String ssid, String password) {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  for (int i = 0; i < ssid.length(); i++) {
    EEPROM.write(SSID_ADDRESS + i, ssid[i]);
  }
  EEPROM.write(SSID_ADDRESS + ssid.length(), '\0');
  
  for (int i = 0; i < password.length(); i++) {
    EEPROM.write(PASSWORD_ADDRESS + i, password[i]);
  }
  EEPROM.write(PASSWORD_ADDRESS + password.length(), '\0');
  
  EEPROM.commit();
  EEPROM.end();
  
  Serial.println("WiFi配置已保存到EEPROM");
}

// 检查是否有保存的WiFi配置
bool hasSavedWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  char ssid[128];
  for (int i = 0; i < 128; i++) {
    ssid[i] = EEPROM.read(SSID_ADDRESS + i);
  }
  
  EEPROM.end();
  return (strlen(ssid) > 0);
}

// 连接到保存的WiFi
bool connectToSavedWiFi() {
  WiFi.mode(WIFI_STA);
  readWiFiConfig();
  
  Serial.print("正在连接到已保存的网络...");
  
  int retryCount = 0;
  while (WiFi.status() != WL_CONNECTED && retryCount < 20) {
    delay(500);
    Serial.print(".");
    retryCount++;
  }
  
  Serial.println();
  
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("已连接到WiFi");
    Serial.print("IP地址: ");
    Serial.println(WiFi.localIP());
    return true;
  } else {
    Serial.println("连接失败");
    return false;
  }
}

// 获取WiFi扫描结果并转换为JSON
String getWiFiScanResults() {
  int n = WiFi.scanNetworks();
  String json = "[";
  
  for (int i = 0; i < n; ++i) {
    if (i > 0) json += ",";
    json += "{\"ssid\":\"" + WiFi.SSID(i) + "\",\"rssi\":" + WiFi.RSSI(i) + "}";
  }
  
  json += "]";
  WiFi.scanDelete(); // 清除扫描结果
  return json;
}

// 启动AP模式
void startAPMode() {
  WiFi.mode(WIFI_AP_STA); // 同时支持AP和STA模式以便扫描
  WiFi.softAP(apSSID, apPassword);
  
  Serial.println("AP模式已启动");
  Serial.print("AP SSID: ");
  Serial.println(apSSID);
  Serial.print("AP IP地址: ");
  Serial.println(WiFi.softAPIP());
  
  apStartTime = millis();
  
  // 服务器路由配置
  server.on("/", []() {
    server.send_P(200, "text/html", index_html);
  });
  
  server.on("/wifiscan", []() {
    String json = getWiFiScanResults();
    server.send(200, "application/json", json);
    Serial.println("已发送WiFi扫描结果");
  });
  
  server.on("/connect", HTTP_POST, []() {
    String ssid = server.arg("ssid");
    String password = server.arg("password");
    
    saveWiFiConfig(ssid, password);
    
    // 美化的配置成功页面，显示已保存的信息和倒计时
    String response = R"rawliteral(
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>配置成功</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
        body { background-color: #f0f2f5; padding: 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        .card { background: white; border-radius: 10px; padding: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); max-width: 400px; width: 100%; }
        .success-icon { text-align: center; font-size: 60px; color: #34a853; margin-bottom: 20px; }
        h2 { color: #333; text-align: center; margin-bottom: 15px; }
        .config-info { margin-bottom: 25px; }
        .config-item { margin-bottom: 10px; }
        .config-label { color: #666; font-size: 14px; }
        .config-value { font-size: 18px; font-weight: 500; word-break: break-all; }
        .countdown { text-align: center; color: #666; margin-bottom: 20px; }
        .countdown-number { font-size: 24px; font-weight: bold; color: #1a73e8; }
        .instruction { text-align: center; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="card">
        <div class="success-icon">✓</div>
        <h2>WiFi配置已保存</h2>
        
        <div class="config-info">
            <div class="config-item">
                <div class="config-label">WiFi名称:</div>
                <div class="config-value">)rawliteral";
    response += ssid;
    response += R"rawliteral(</div>
            </div>
            <div class="config-item">
                <div class="config-label">WiFi密码:</div>
                <div class="config-value">)rawliteral";
    response += password;
    response += R"rawliteral(</div>
            </div>
        </div>
        
        <div class="countdown">
            设备正在重启 <span class="countdown-number" id="countdown">10</span> 秒
        </div>
        
        <div class="instruction">
            请观察手机WiFi列表，<br>
            若 <b>)rawliteral";
    response += apSSID;
    response += R"rawliteral(</b> 仍然存在，<br>
            请重新给设备配置WiFi
        </div>
    </div>

    <script>
        let seconds = 10;
        const countdownEl = document.getElementById('countdown');
        
        function updateCountdown() {
            seconds--;
            countdownEl.textContent = seconds;
            
            if (seconds <= 0) {
                // 倒计时结束后可以添加重定向逻辑
                // window.location.href = '/';
            } else {
                setTimeout(updateCountdown, 1000);
            }
        }
        
        // 开始倒计时
        setTimeout(updateCountdown, 1000);
    </script>
</body>
</html>
)rawliteral";
    
    server.send(200, "text/html; charset=utf-8", response);
    
    // 延长延迟时间，确保页面完全加载
    delay(10000); // 等待10秒后重启
    ESP.restart();
  });
  
  // 处理常见的Captive Portal探测URL
  server.on("/generate_204", []() {
    server.sendHeader("Location", String("http://") + WiFi.softAPIP().toString(), true);
    server.send(302, "text/plain", "");
  });
  
  server.on("/connecttest.txt", []() {
    server.sendHeader("Location", String("http://") + WiFi.softAPIP().toString(), true);
    server.send(302, "text/plain", "");
  });
  
  server.on("/captive.apple.com", []() {
    server.sendHeader("Location", String("http://") + WiFi.softAPIP().toString(), true);
    server.send(302, "text/plain", "");
  });
  
  server.on("/ncsi.txt", []() {
    server.sendHeader("Location", String("http://") + WiFi.softAPIP().toString(), true);
    server.send(302, "text/plain", "");
  });
  
  // 重定向所有其他请求到配置页面
  server.onNotFound([]() {
    server.sendHeader("Location", String("http://") + WiFi.softAPIP().toString(), true);
    server.send(302, "text/plain", "");
  });
  
  // 启动DNS服务器和Web服务器
  dnsServer.start(53, "*", WiFi.softAPIP());
  server.begin();
  Serial.println("Web服务器已启动");
}

void setup() {
  Serial.begin(9600);
  Serial.println();
  
  // 尝试连接到保存的WiFi
  if (hasSavedWiFiConfig() && connectToSavedWiFi()) {
    // WiFi连接成功，执行正常操作
    // 这里可以添加你的应用代码
  } else {
    // WiFi连接失败或没有保存的配置，启动AP模式
    startAPMode();
  }
}

void loop() {
  // 处理DNS请求
  dnsServer.processNextRequest();
  
  // 处理HTTP请求
  server.handleClient();
  
  // 检查AP模式是否超时
  if (WiFi.getMode() & WIFI_AP && (millis() - apStartTime >= AP_TIMEOUT)) {
    Serial.println("AP模式超时。正在重启...");
    ESP.restart();
  }
  
  // 如果WiFi已连接，可以添加你的应用逻辑
  if (WiFi.status() == WL_CONNECTED) {
    // 应用代码
  }
  
  delay(10);
}
```

```cpp [代码压缩]
//ESP8266连接WiFi页面已压缩
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DNSServer.h>
#include <EEPROM.h>

// 核心配置参数
const char* apSSID = "esp8266config";
const char* apPassword = "";
const int EEPROM_SIZE = 512, SSID_ADDR = 0, PWD_ADDR = 128;
unsigned long apStartTime = 0;
const unsigned long AP_TIMEOUT = 120000; // 120秒超时

ESP8266WebServer server(80);
DNSServer dnsServer;

// 精简响应式HTML（合并CSS、缩短类名）
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>WiFi配置</title>
    <style>
        *{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
        body{background:#f0f2f5;padding:20px}
        .c{max-width:500px;margin:0 auto}
        .card{background:#fff;border-radius:10px;padding:25px;box-shadow:0 2px 10px rgba(0,0,0,0.1)}
        h1{color:#1a73e8;text-align:center;margin:0 0 20px;font-size:24px}
        .instr{color:#5f6368;margin:0 0 20px;text-align:center}
        .wifi-list{max-height:200px;overflow-y:auto;border:1px solid #eee;border-radius:6px;margin:0 0 20px}
        .wifi-item{padding:12px;border-bottom:1px solid #eee;cursor:pointer}
        .wifi-item:last-child{border-bottom:none}
        .wifi-item:hover{background:#f8f9fa}
        .wifi-item.sel{background:#e8f0fe;border-left:4px solid #1a73e8}
        .form-group{margin:0 0 18px}
        label{display:block;margin:0 0 6px;color:#5f6368;font-weight:500}
        input{width:100%;padding:12px;border:1px solid #ddd;border-radius:6px;font-size:16px}
        input:focus{outline:none;border-color:#1a73e8;box-shadow:0 0 0 2px rgba(26,115,232,0.2)}
        button{width:100%;padding:12px;background:#1a73e8;color:#fff;border:none;border-radius:6px;font-size:16px;font-weight:500;cursor:pointer;margin:0 0 10px}
        button:hover{background:#0d47a1;transition:background 0.3s}
        .signal{margin:0 10px 0 0;font-weight:bold}
        .sig-strong{color:#34a853}
        .sig-med{color:#fbbc05}
        .sig-weak{color:#ea4335}
    </style>
</head>
<body>
    <div class="c">
        <div class="card">
            <h1>WiFi网络配置</h1>
            <p class="instr">选择可用网络或手动输入WiFi信息</p>
            
            <div class="wifi-list" id="wifiList">
                <div class="wifi-item">正在扫描网络...</div>
            </div>

            <div class="form-group">
                <label for="ssid">WiFi名称 (SSID)</label>
                <input type="text" id="ssid" placeholder="输入WiFi名称">
            </div>

            <div class="form-group">
                <label for="password">WiFi密码</label>
                <input type="password" id="password" placeholder="输入WiFi密码">
            </div>

            <form method="POST" action="/connect">
                <input type="hidden" id="formSsid" name="ssid">
                <input type="hidden" id="formPassword" name="password">
                <button type="submit">连接WiFi</button>
            </form>
            <button onclick="window.location.reload()">重新扫描</button>
        </div>
    </div>

    <script>
        window.onload=()=>{
            fetch('/wifiscan').then(r=>r.json()).then(networks=>{
                const list=document.getElementById('wifiList');
                list.innerHTML='';
                if(!networks.length){list.innerHTML='<div class="wifi-item">未发现可用网络</div>';return}
                networks.forEach(net=>{
                    const item=document.createElement('div');
                    item.className='wifi-item';
                    let sigClass='sig-weak',sigIcon='▂___';
                    if(net.rssi>-60){sigClass='sig-strong';sigIcon='▂▄▆█'}
                    else if(net.rssi>-75){sigClass='sig-med';sigIcon='▂▄▆_'}
                    item.innerHTML=`<div class="signal ${sigClass}">${sigIcon}</div><div>${net.ssid}</div>`;
                    item.onclick=()=>{
                        document.querySelectorAll('.wifi-item').forEach(el=>el.classList.remove('sel'));
                        item.classList.add('sel');
                        document.getElementById('ssid').value=net.ssid;
                        document.getElementById('formSsid').value=net.ssid;
                    };
                    list.appendChild(item);
                });
            });
            document.getElementById('ssid').addEventListener('input',e=>{
                document.getElementById('formSsid').value=e.target.value;
            });
            document.getElementById('password').addEventListener('input',e=>{
                document.getElementById('formPassword').value=e.target.value;
            });
        };
    </script>
</body>
</html>
)rawliteral";

// EEPROM读取WiFi配置
void readWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  char ssid[128]={0}, pwd[128]={0};
  for(int i=0;i<128;i++){ssid[i]=EEPROM.read(SSID_ADDR+i);pwd[i]=EEPROM.read(PWD_ADDR+i);}
  if(strlen(ssid)){WiFi.begin(ssid,pwd);Serial.print("连接保存的WiFi: ");Serial.println(ssid);}
  EEPROM.end();
}

// 保存WiFi配置到EEPROM
void saveWiFiConfig(String ssid, String pwd) {
  EEPROM.begin(EEPROM_SIZE);
  for(int i=0;i<128;i++){EEPROM.write(SSID_ADDR+i,0);EEPROM.write(PWD_ADDR+i,0);}
  for(int i=0;i<ssid.length()&&i<127;i++)EEPROM.write(SSID_ADDR+i,ssid[i]);
  for(int i=0;i<pwd.length()&&i<127;i++)EEPROM.write(PWD_ADDR+i,pwd[i]);
  EEPROM.commit();EEPROM.end();
  Serial.println("WiFi配置已保存");
}

// 检查是否有保存的配置
bool hasSavedWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  char ssid[128]={0};
  for(int i=0;i<128;i++)ssid[i]=EEPROM.read(SSID_ADDR+i);
  EEPROM.end();
  return strlen(ssid)>0;
}

// 连接保存的WiFi
bool connectToSavedWiFi() {
  WiFi.mode(WIFI_STA);
  readWiFiConfig();
  Serial.print("连接中...");
  int retry=0;
  while(WiFi.status()!=WL_CONNECTED&&retry<20){delay(500);Serial.print(".");retry++;}
  Serial.println();
  if(WiFi.status()==WL_CONNECTED){
    Serial.println("WiFi已连接");
    Serial.print("IP: ");Serial.println(WiFi.localIP());
    return true;
  }
  Serial.println("连接失败");
  return false;
}

// 生成WiFi扫描结果JSON
String getWiFiScanResults() {
  int n=WiFi.scanNetworks();
  String json="[";
  for(int i=0;i<n;i++){
    if(i)json+=",";
    json+="{\"ssid\":\""+WiFi.SSID(i)+"\",\"rssi\":"+WiFi.RSSI(i)+"}";
  }
  json+="]";
  WiFi.scanDelete();
  return json;
}

// 启动AP模式
void startAPMode() {
  WiFi.mode(WIFI_AP_STA);
  WiFi.softAP(apSSID, apPassword);
  Serial.println("AP模式启动");
  Serial.print("AP: ");Serial.println(apSSID);
  Serial.print("AP IP: ");Serial.println(WiFi.softAPIP());
  apStartTime=millis();

  server.on("/",[](){server.send_P(200,"text/html",index_html);});
  server.on("/wifiscan",[](){server.send(200,"application/json",getWiFiScanResults());});
  server.on("/connect",HTTP_POST,[](){
    String ssid=server.arg("ssid"),pwd=server.arg("password");
    saveWiFiConfig(ssid,pwd);
    String res=R"rawliteral(
<!DOCTYPE html>
<html><head><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
    *{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
    body{background:#f0f2f5;min-height:100vh;display:flex;justify-content:center;align-items:center;padding:20px}
    .card{background:#fff;border-radius:10px;padding:30px;box-shadow:0 4px 20px rgba(0,0,0,0.1);max-width:400px;width:100%}
    .icon{text-align:center;font-size:60px;color:#34a853;margin:0 0 20px}
    h2{color:#333;text-align:center;margin:0 0 15px}
    .info{margin:0 0 25px}
    .item{margin:0 0 10px}
    .label{color:#666;font-size:14px}
    .val{font-size:18px;font-weight:500;word-break:break-all}
    .countdown{text-align:center;color:#666;margin:0 0 20px}
    .num{font-size:24px;font-weight:bold;color:#1a73e8}
    .inst{text-align:center;color:#666;font-size:14px}
</style></head><body><div class="card">
    <div class="icon">✓</div>
    <h2>配置已保存</h2>
    <div class="info">
        <div class="item"><div class="label">WiFi名称:</div><div class="val">)rawliteral"+ssid+R"rawliteral(</div></div>
        <div class="item"><div class="label">WiFi密码:</div><div class="val">)rawliteral"+pwd+R"rawliteral(</div></div>
    </div>
    <div class="countdown">重启倒计时 <span class="num" id="t">10</span> 秒</div>
    <div class="inst">
        观察WiFi列表，若 <b>)rawliteral"+String(apSSID)+R"rawliteral(</b> 仍存在，<br>请重新配置
    </div>
</div><script>
    let s=10;const el=document.getElementById('t');
    function update(){s--;el.textContent=s;s>0?setTimeout(update,1000):null}
    update();
</script></body></html>
)rawliteral";
    server.send(200,"text/html;charset=utf-8",res);
    delay(10000);
    ESP.restart();
  });

  //  captive portal重定向
  server.on("/generate_204",[](){server.sendHeader("Location","http://"+WiFi.softAPIP().toString(),true);server.send(302,"text/plain","");});
  server.on("/connecttest.txt",[](){server.sendHeader("Location","/",true);server.send(302,"text/plain","");});
  server.on("/captive.apple.com",[](){server.sendHeader("Location","/",true);server.send(302,"text/plain","");});
  server.on("/ncsi.txt",[](){server.sendHeader("Location","/",true);server.send(302,"text/plain","");});
  server.onNotFound([](){server.sendHeader("Location","/",true);server.send(302,"text/plain","");});

  dnsServer.start(53,"*",WiFi.softAPIP());
  server.begin();
}

void setup() {
  Serial.begin(9600);
  Serial.println();
  if(hasSavedWiFiConfig()&&connectToSavedWiFi()){
    // WiFi连接成功后的应用代码
  }else{
    startAPMode();
  }
}

void loop() {
  dnsServer.processNextRequest();
  server.handleClient();
  if((WiFi.getMode()&WIFI_AP)&&millis()-apStartTime>=AP_TIMEOUT){
    Serial.println("AP超时，重启中...");
    ESP.restart();
  }
  if(WiFi.status()==WL_CONNECTED){
    // 运行中的应用逻辑
  }
  delay(10);
}
```

```cpp [添加指示灯]
//ESP8266连接WIFI代码压缩后添加指示灯
//LED 状态指示说明：
//未连接状态（包括连接失败、正在连接）：
//慢速闪烁（1 秒间隔）
//对应枚举值：LED_DISCONNECTED
//已连接状态：
//常亮
//对应枚举值：LED_CONNECTED
//AP 模式（等待配网）：
//快速闪烁（200ms 间隔）
//对应枚举值：LED_AP_MODE
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DNSServer.h>
#include <EEPROM.h>

// 核心配置参数
const char* apSSID = "esp8266config";
const char* apPassword = "";
const int EEPROM_SIZE = 512, SSID_ADDR = 0, PWD_ADDR = 128;
unsigned long apStartTime = 0;
const unsigned long AP_TIMEOUT = 120000; // 120秒超时

ESP8266WebServer server(80);
DNSServer dnsServer;

// LED状态定义
enum LedState {
  LED_DISCONNECTED,  // 未连接（慢速闪烁）
  LED_CONNECTED,     // 已连接（常亮）
  LED_AP_MODE,       // AP模式（快速闪烁）
  LED_SAVED_SUCCESS  // 配置保存成功（双闪）
};

LedState currentLedState = LED_DISCONNECTED;
unsigned long lastLedToggleTime = 0;
int ledToggleInterval = 1000;  // 默认未连接间隔（1秒）
bool ledState = HIGH;          // 默认LED熄灭
int doubleFlashCount = 0;      // 双闪计数器

// 精简响应式HTML
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>WiFi配置</title>
    <style>
        *{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
        body{background:#f0f2f5;padding:20px}
        .c{max-width:500px;margin:0 auto}
        .card{background:#fff;border-radius:10px;padding:25px;box-shadow:0 2px 10px rgba(0,0,0,0.1)}
        h1{color:#1a73e8;text-align:center;margin:0 0 20px;font-size:24px}
        .instr{color:#5f6368;margin:0 0 20px;text-align:center}
        .wifi-list{max-height:200px;overflow-y:auto;border:1px solid #eee;border-radius:6px;margin:0 0 20px}
        .wifi-item{padding:12px;border-bottom:1px solid #eee;cursor:pointer}
        .wifi-item:last-child{border-bottom:none}
        .wifi-item:hover{background:#f8f9fa}
        .wifi-item.sel{background:#e8f0fe;border-left:4px solid #1a73e8}
        .form-group{margin:0 0 18px}
        label{display:block;margin:0 0 6px;color:#5f6368;font-weight:500}
        input{width:100%;padding:12px;border:1px solid #ddd;border-radius:6px;font-size:16px}
        input:focus{outline:none;border-color:#1a73e8;box-shadow:0 0 0 2px rgba(26,115,232,0.2)}
        button{width:100%;padding:12px;background:#1a73e8;color:#fff;border:none;border-radius:6px;font-size:16px;font-weight:500;cursor:pointer;margin:0 0 10px}
        button:hover{background:#0d47a1;transition:background 0.3s}
        .signal{margin:0 10px 0 0;font-weight:bold}
        .sig-strong{color:#34a853}
        .sig-med{color:#fbbc05}
        .sig-weak{color:#ea4335}
    </style>
</head>
<body>
    <div class="c">
        <div class="card">
            <h1>WiFi网络配置</h1>
            <p class="instr">选择可用网络或手动输入WiFi信息</p>
            
            <div class="wifi-list" id="wifiList">
                <div class="wifi-item">正在扫描网络...</div>
            </div>

            <div class="form-group">
                <label for="ssid">WiFi名称 (SSID)</label>
                <input type="text" id="ssid" placeholder="输入WiFi名称">
            </div>

            <div class="form-group">
                <label for="password">WiFi密码</label>
                <input type="password" id="password" placeholder="输入WiFi密码">
            </div>

            <form method="POST" action="/connect">
                <input type="hidden" id="formSsid" name="ssid">
                <input type="hidden" id="formPassword" name="password">
                <button type="submit">连接WiFi</button>
            </form>
            <button onclick="window.location.reload()">重新扫描</button>
        </div>
    </div>

    <script>
        window.onload=()=>{
            fetch('/wifiscan').then(r=>r.json()).then(networks=>{
                const list=document.getElementById('wifiList');
                list.innerHTML='';
                if(!networks.length){list.innerHTML='<div class="wifi-item">未发现可用网络</div>';return}
                networks.forEach(net=>{
                    const item=document.createElement('div');
                    item.className='wifi-item';
                    let sigClass='sig-weak',sigIcon='▂___';
                    if(net.rssi>-60){sigClass='sig-strong';sigIcon='▂▄▆█'}
                    else if(net.rssi>-75){sigClass='sig-med';sigIcon='▂▄▆_'}
                    item.innerHTML=`<div class="signal ${sigClass}">${sigIcon}</div><div>${net.ssid}</div>`;
                    item.onclick=()=>{
                        document.querySelectorAll('.wifi-item').forEach(el=>el.classList.remove('sel'));
                        item.classList.add('sel');
                        document.getElementById('ssid').value=net.ssid;
                        document.getElementById('formSsid').value=net.ssid;
                    };
                    list.appendChild(item);
                });
            });
            document.getElementById('ssid').addEventListener('input',e=>{
                document.getElementById('formSsid').value=e.target.value;
            });
            document.getElementById('password').addEventListener('input',e=>{
                document.getElementById('formPassword').value=e.target.value;
            });
        };
    </script>
</body>
</html>
)rawliteral";

// 设置LED状态
void setLedState(LedState state) {
  currentLedState = state;
  lastLedToggleTime = millis();
  doubleFlashCount = 0;  // 重置双闪计数器
  
  // 根据不同状态设置闪烁间隔
  switch(state) {
    case LED_DISCONNECTED:  // 未连接状态
      ledToggleInterval = 1000;  // 1秒间隔（慢速闪烁）
      break;
      
    case LED_CONNECTED:     // 已连接状态
      digitalWrite(LED_BUILTIN, LOW);  // 常亮
      return;
      
    case LED_AP_MODE:       // AP模式状态
      ledToggleInterval = 200;  // 200ms间隔（快速闪烁）
      break;
      
    case LED_SAVED_SUCCESS: // 配置保存成功状态
      ledToggleInterval = 250;  // 250ms间隔（双闪）
      break;
  }
}

// 更新LED状态（在loop中调用）
void updateLed() {
  // 常亮状态无需更新
  if(currentLedState == LED_CONNECTED) return;
  
  // 双闪逻辑
  if(currentLedState == LED_SAVED_SUCCESS) {
    if(millis() - lastLedToggleTime >= ledToggleInterval) {
      lastLedToggleTime = millis();
      ledState = !ledState;
      digitalWrite(LED_BUILTIN, ledState);
      
      doubleFlashCount++;
      // 完成3次双闪（6次切换）后保持熄灭
      if(doubleFlashCount >= 6) {
        digitalWrite(LED_BUILTIN, HIGH);
      }
    }
    return;
  }
  
  // 其他闪烁状态
  if(millis() - lastLedToggleTime >= ledToggleInterval) {
    lastLedToggleTime = millis();
    ledState = !ledState;
    digitalWrite(LED_BUILTIN, ledState);
  }
}

// EEPROM读取WiFi配置
void readWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  char ssid[128]={0}, pwd[128]={0};
  for(int i=0;i<128;i++){ssid[i]=EEPROM.read(SSID_ADDR+i);pwd[i]=EEPROM.read(PWD_ADDR+i);}
  if(strlen(ssid)){WiFi.begin(ssid,pwd);Serial.print("连接保存的WiFi: ");Serial.println(ssid);}
  EEPROM.end();
}

// 保存WiFi配置到EEPROM
void saveWiFiConfig(String ssid, String pwd) {
  EEPROM.begin(EEPROM_SIZE);
  for(int i=0;i<128;i++){EEPROM.write(SSID_ADDR+i,0);EEPROM.write(PWD_ADDR+i,0);}
  for(int i=0;i<ssid.length()&&i<127;i++)EEPROM.write(SSID_ADDR+i,ssid[i]);
  for(int i=0;i<pwd.length()&&i<127;i++)EEPROM.write(PWD_ADDR+i,pwd[i]);
  EEPROM.commit();EEPROM.end();
  Serial.println("WiFi配置已保存");
}

// 检查是否有保存的配置
bool hasSavedWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  char ssid[128]={0};
  for(int i=0;i<128;i++)ssid[i]=EEPROM.read(SSID_ADDR+i);
  EEPROM.end();
  return strlen(ssid)>0;
}

// 连接保存的WiFi
bool connectToSavedWiFi() {
  setLedState(LED_DISCONNECTED);  // 设置为未连接状态（慢速闪烁）
  WiFi.mode(WIFI_STA);
  readWiFiConfig();
  Serial.print("连接中...");
  
  int retry=0;
  while(WiFi.status()!=WL_CONNECTED&&retry<20){
    delay(500);
    Serial.print(".");
    retry++;
  }
  Serial.println();
  
  if(WiFi.status()==WL_CONNECTED){
    Serial.println("WiFi已连接");
    Serial.print("IP: ");Serial.println(WiFi.localIP());
    setLedState(LED_CONNECTED);  // 设置为已连接状态（常亮）
    return true;
  }
  
  Serial.println("连接失败");
  return false;
}

// 生成WiFi扫描结果JSON
String getWiFiScanResults() {
  int n=WiFi.scanNetworks();
  String json="[";
  for(int i=0;i<n;i++){
    if(i)json+=",";
    json+="{\"ssid\":\""+WiFi.SSID(i)+"\",\"rssi\":"+WiFi.RSSI(i)+"}";
  }
  json+="]";
  WiFi.scanDelete();
  return json;
}

// 启动AP模式
void startAPMode() {
  setLedState(LED_AP_MODE);  // 设置为AP模式状态（快速闪烁）
  WiFi.mode(WIFI_AP_STA);
  WiFi.softAP(apSSID, apPassword);
  Serial.println("AP模式启动");
  Serial.print("AP: ");Serial.println(apSSID);
  Serial.print("AP IP: ");Serial.println(WiFi.softAPIP());
  apStartTime=millis();

  server.on("/",[](){server.send_P(200,"text/html",index_html);});
  server.on("/wifiscan",[](){server.send(200,"application/json",getWiFiScanResults());});
  server.on("/connect",HTTP_POST,[](){
    String ssid=server.arg("ssid"),pwd=server.arg("password");
    saveWiFiConfig(ssid,pwd);
    
    // 设置LED为配置保存成功状态
    setLedState(LED_SAVED_SUCCESS);
    
    // 配置成功页面添加LED状态提示
    String res=R"rawliteral(
<!DOCTYPE html>
<html><head><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
    *{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
    body{background:#f0f2f5;min-height:100vh;display:flex;justify-content:center;align-items:center;padding:20px}
    .card{background:#fff;border-radius:10px;padding:30px;box-shadow:0 4px 20px rgba(0,0,0,0.1);max-width:400px;width:100%}
    .icon{text-align:center;font-size:60px;color:#34a853;margin:0 0 20px}
    h2{color:#333;text-align:center;margin:0 0 15px}
    .info{margin:0 0 25px}
    .item{margin:0 0 10px}
    .label{color:#666;font-size:14px}
    .val{font-size:18px;font-weight:500;word-break:break-all}
    .countdown{text-align:center;color:#666;margin:0 0 20px}
    .num{font-size:24px;font-weight:bold;color:#1a73e8}
    .inst{text-align:center;color:#666;font-size:14px;margin:0 0 15px}
    .led-icon{font-size:24px;margin:0 0 5px}
    .led-text{font-weight:500}
</style></head><body><div class="card">
    <div class="icon">✓</div>
    <h2>配置已保存</h2>
    <div class="info">
        <div class="item"><div class="label">WiFi名称:</div><div class="val">)rawliteral"+ssid+R"rawliteral(</div></div>
        <div class="item"><div class="label">WiFi密码:</div><div class="val">)rawliteral"+pwd+R"rawliteral(</div></div>
    </div>

    <div class="countdown">重启倒计时 <span class="num" id="t">10</span> 秒</div>
    <div class="inst">
        观察设备LED状态变化:<br>
        - 重启后常亮: WiFi连接成功<br>
        - 重启后慢速闪烁: WiFi连接失败<br>
        - 若手机WiFi列表中 <b>)rawliteral"+String(apSSID)+R"rawliteral(</b> <br>仍存在，请重新配置。
    </div>
</div><script>
    let s=10;const el=document.getElementById('t');
    function update(){s--;el.textContent=s;s>0?setTimeout(update,1000):null}
    update();
</script></body></html>
)rawliteral";
    
    server.send(200,"text/html;charset=utf-8",res);
    
    // 显示保存成功状态3秒后重启
    delay(3000);
    ESP.restart();
  });

  //  captive portal重定向
  server.on("/generate_204",[](){server.sendHeader("Location","http://"+WiFi.softAPIP().toString(),true);server.send(302,"text/plain","");});
  server.on("/connecttest.txt",[](){server.sendHeader("Location","/",true);server.send(302,"text/plain","");});
  server.on("/captive.apple.com",[](){server.sendHeader("Location","/",true);server.send(302,"text/plain","");});
  server.on("/ncsi.txt",[](){server.sendHeader("Location","/",true);server.send(302,"text/plain","");});
  server.onNotFound([](){server.sendHeader("Location","/",true);server.send(302,"text/plain","");});

  dnsServer.start(53,"*",WiFi.softAPIP());
  server.begin();
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);  // 初始熄灭
  
  Serial.begin(9600);
  Serial.println();
  
  setLedState(LED_DISCONNECTED);  // 默认未连接状态
  delay(1000);  // 显示初始状态1秒
  
  if(hasSavedWiFiConfig()&&connectToSavedWiFi()){
    // WiFi连接成功后的应用代码
  }else{
    startAPMode();
  }
}

void loop() {
  dnsServer.processNextRequest();
  server.handleClient();
  
  // 检查AP模式超时
  if((WiFi.getMode()&WIFI_AP)&&millis()-apStartTime>=AP_TIMEOUT){
    Serial.println("AP超时，重启中...");
    ESP.restart();
  }
  
  // 如果WiFi已连接，可以添加应用逻辑
  if(WiFi.status()==WL_CONNECTED){
    // 应用代码
  }
  
  // 更新LED状态
  updateLed();
  
  delay(10);
}
```

```cpp [添加mqtt服务]
//ESP8266实现连接MQTT服务器
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DNSServer.h>
#include <EEPROM.h>
#include <PubSubClient.h>  // MQTT库

// -------------------------- 配置参数区（请在此处统一配置） --------------------------
// WiFi配置（无需修改，通过网页配置）
const char* apSSID = "esp82config";       // AP模式热点名称
const char* apPassword = "";      // AP模式热点密码

// MQTT配置
const char* mqtt_server = "broker.emqx.io";  // MQTT服务器地址
const uint16_t mqtt_port = 1883;             // MQTT服务器端口
const char* mqtt_client_id = "esp8266_client2";// MQTT客户端ID（建议唯一，可自定义）
const char* mqtt_username = "";               // MQTT用户名（无则留空）
const char* mqtt_password = "";               // MQTT密码（无则留空）
const char* mqtt_sub_topic = "esp8266/sub";   // 订阅的主题
const char* mqtt_pub_topic = "esp8266/pub";   // 发布的主题
// -----------------------------------------------------------------------------------

// EEPROM配置
const int EEPROM_SIZE = 512;
const int SSID_ADDRESS = 0;
const int PASSWORD_ADDRESS = 128;

// 网络对象
ESP8266WebServer server(80);
DNSServer dnsServer;
WiFiClient espClient;               // WiFi客户端（用于MQTT）
PubSubClient client(espClient);     // MQTT客户端


// -------------------------- MQTT相关函数 --------------------------
// MQTT消息回调函数（收到订阅主题消息时触发）
void mqttCallback(char* topic, byte* payload, unsigned int length) {
  Serial.print("收到消息 [");
  Serial.print(topic);
  Serial.print("]: ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
  // 可在此处添加消息处理逻辑（例如控制外设）
}

// MQTT重连函数
bool mqttReconnect() {
  // 生成唯一客户端ID（避免重复连接）
  String clientId = mqtt_client_id;
  clientId += "-";
  clientId += String(random(0xffff), HEX);

  // 尝试连接MQTT服务器
  if (client.connect(clientId.c_str(), mqtt_username, mqtt_password)) {
    Serial.println("MQTT连接成功");
    // 连接成功后订阅主题
    if (client.subscribe(mqtt_sub_topic)) {
      Serial.print("已订阅主题: ");
      Serial.println(mqtt_sub_topic);
    } else {
      Serial.print("订阅主题失败: ");
      Serial.println(mqtt_sub_topic);
    }
    // 可在此处添加初始发布消息（例如设备上线通知）
    client.publish(mqtt_pub_topic, "ESP8266已上线");
    return true;
  } else {
    Serial.print("MQTT连接失败，错误代码: ");
    Serial.println(client.state());  // 打印错误状态码（参考PubSubClient文档）
    return false;
  }
}

// 初始化MQTT
void initMQTT() {
  client.setServer(mqtt_server, mqtt_port);  // 设置MQTT服务器
  client.setCallback(mqttCallback);          // 设置消息回调函数
}


// -------------------------- 原有WiFi配置代码（无需修改） --------------------------
// 从EEPROM读取WiFi配置
void readWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  char ssid[128];
  char password[128];
  
  for (int i = 0; i < 128; i++) {
    ssid[i] = EEPROM.read(SSID_ADDRESS + i);
  }
  
  for (int i = 0; i < 128; i++) {
    password[i] = EEPROM.read(PASSWORD_ADDRESS + i);
  }
  
  // 检查是否有保存的配置
  if (strlen(ssid) > 0) {
    WiFi.begin(ssid, password);
    Serial.print("Found saved configuration. Connecting to: ");
    Serial.println(ssid);
  }
  
  EEPROM.end();
}

// 保存WiFi配置到EEPROM
void saveWiFiConfig(String ssid, String password) {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  // 保存SSID
  for (int i = 0; i < ssid.length(); i++) {
    EEPROM.write(SSID_ADDRESS + i, ssid[i]);
  }
  EEPROM.write(SSID_ADDRESS + ssid.length(), '\0'); // 字符串结束符
  
  // 保存密码
  for (int i = 0; i < password.length(); i++) {
    EEPROM.write(PASSWORD_ADDRESS + i, password[i]);
  }
  EEPROM.write(PASSWORD_ADDRESS + password.length(), '\0'); // 字符串结束符
  
  EEPROM.commit();
  EEPROM.end();
  
  Serial.println("WiFi configuration saved to EEPROM");
}

// 检查是否有保存的WiFi配置
bool hasSavedWiFiConfig() {
  EEPROM.begin(EEPROM_SIZE);
  delay(10);
  
  char ssid[128];
  for (int i = 0; i < 128; i++) {
    ssid[i] = EEPROM.read(SSID_ADDRESS + i);
  }
  
  EEPROM.end();
  
  return (strlen(ssid) > 0);
}

// 连接到保存的WiFi
bool connectToSavedWiFi() {
  WiFi.mode(WIFI_STA);
  readWiFiConfig(); // 从EEPROM读取配置
  
  Serial.print("Connecting to saved network...");
  
  int retryCount = 0;
  while (WiFi.status() != WL_CONNECTED && retryCount < 20) {
    delay(500);
    Serial.print(".");
    retryCount++;
  }
  
  Serial.println();
  
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("Connected to WiFi");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
    return true;
  } else {
    Serial.println("Connection failed");
    return false;
  }
}

// 启动AP模式
void startAPMode() {
  WiFi.mode(WIFI_AP);
  WiFi.softAP(apSSID, apPassword);
  
  Serial.println("AP mode started");
  Serial.print("AP SSID: ");
  Serial.println(apSSID);
  Serial.print("AP IP address: ");
  Serial.println(WiFi.softAPIP());
  
  // 设置DNS服务器
  dnsServer.start(53, "*", WiFi.softAPIP());
  
  // 设置Web服务器路由
  server.on("/", []() {
    String page = "<html><body>";
    page += "<h1>WiFi Configuration</h1>";
    page += "<form method='POST' action='/connect'>";
    page += "SSID: <input type='text' name='ssid'><br>";
    page += "Password: <input type='password' name='password'><br>";
    page += "<input type='submit' value='Connect'>";
    page += "</form>";
    page += "</body></html>";
    server.send(200, "text/html", page);
  });
  
  server.on("/connect", []() {
    if (server.hasArg("ssid") && server.hasArg("password")) {
      String ssid = server.arg("ssid");
      String password = server.arg("password");
      
      saveWiFiConfig(ssid, password); // 保存配置到EEPROM
      
      server.send(200, "text/plain", "WiFi configuration saved. Rebooting...");
      delay(1000);
      ESP.restart();
    } else {
      server.send(400, "text/plain", "Bad Request");
    }
  });
  
  // 处理所有未定义的请求，重定向到配置页面
  server.onNotFound([]() {
    server.sendHeader("Location", String("http://") + WiFi.softAPIP().toString(), true);
    server.send(302, "text/plain", "");
  });
  
  server.begin();
  Serial.println("Web server started");
}


// -------------------------- 初始化与主循环 --------------------------
void setup() {
  Serial.begin(9600);
  Serial.println();
  randomSeed(micros());  // 初始化随机数生成器（用于MQTT客户端ID）
  
  // 尝试连接到保存的WiFi
  if (hasSavedWiFiConfig() && connectToSavedWiFi()) {
    // WiFi连接成功，初始化MQTT
    initMQTT();
  } else {
    // WiFi连接失败或无保存配置，启动AP模式
    startAPMode();
  }
}

void loop() {
  // 处理DNS和HTTP请求（AP模式下需要）
  dnsServer.processNextRequest();
  server.handleClient();
  
  // 如果WiFi已连接，处理MQTT逻辑
  if (WiFi.status() == WL_CONNECTED) {
    // 检查MQTT连接状态，断开则重连
    if (!client.connected()) {
      static unsigned long lastReconnectAttempt = 0;
      unsigned long now = millis();
      // 每5秒尝试重连一次
      if (now - lastReconnectAttempt > 5000) {
        lastReconnectAttempt = now;
        if (mqttReconnect()) {
          lastReconnectAttempt = 0; // 重连成功重置计时器
        }
      }
    } else {
      // MQTT正常连接，处理消息循环
      client.loop();
      
      // 可在此处添加周期性发布逻辑（例如定时发送传感器数据）
      // 示例：每10秒发布一次消息
      static unsigned long lastPublishTime = 0;
      if (millis() - lastPublishTime > 10000) {
        lastPublishTime = millis();
        String temp = "当前时间: " + String(millis()/1000) + "s"; // 示例数据
        client.publish(mqtt_pub_topic, temp.c_str());
        Serial.print("已发布消息: ");
        Serial.println(temp);
      }
    }
  }
  
  delay(10);
}
```

:::


## 最后 [​](#最后)

代码开源，你可以随意复制使用修改，但是请注明出处，谢谢。

点击最下方的邮箱给我发送邮件。
