---
description: 搞钱，迎娶白富美，走上人生巅峰。
title: 开源项目-「宿舍智能门」
date: 2025-12-08
categories:
- Code
tags:
- ESP8266
- 宿舍
- 项目
codeHeightLimit: 300
---

## 介绍 [​](#介绍)

本文基于Arduino平台，点灯科技，ESP8266开发板完成宿舍智能门项目的开发。最终目标是在手机上利用点灯科技APP来实现开门关门的功能。

### 背景 [​](#背景)

在科技高速发展的今天，智慧家庭，智慧大棚等拥有科技元素的，能够实现自动化，为了方便人类行为活动的科技产品，咱们均认为是有意义的。

> 科技不是高高在上而是服务于人民。 --雷军

上面的全部是废话，不必在意。

### 题外话 [​](#题外话)

目前我就读大学，每天日复一日的重复着教室-食堂-宿舍，三点一线。当然呆着时间最多的就是宿舍了，然而学校宿舍门有些许老旧，是使用的老式的门，甚至都掉油漆，独有一份监狱风格。

每次出门必须带钥匙，要不然就被关在了外面。曾经我们和大多数寝室一样选择将钥匙放在门框上，这是非常不保险的做法。安全度几乎为0。既然安全度为0又何必去安装一个门呢？

### 正式背景介绍 [​](#正式背景介绍)

曾经，当然不是我哈^\_^我可不会忘记带钥匙，我的舍友他们老是忘记带钥匙，而且还有的钥匙不见了，每次都需要等带钥匙的回来才能进入寝室，否则则跑到宿管借备用钥匙，然后回来开门，再去还备用钥匙。要跑3趟。简直就是无妄之灾。

这些只是众多原因中的一个  a little bit

废话不多说，现在开始手把手，从0开始，一步一步跟着来做，来学。

## 被控制方 [​](#被控制方)

---

本教程面对群众为新手，0基础。如果你觉得较为困难，请向AI工具进行提问，或者向大神请求解答，当然本博主十分愿意用零散的时间来换取一杯咖啡😚

### 项目材料准备 [​](#项目材料准备)

| 材料列表 | 数量 | 价格 | 图片 |
| --- | --- | --- | --- |
| [ESP8266-01s](https://item.taobao.com/item.htm?ali_refid=a3_430673_1006%3A1122812217%3AN%3Aqwnbk4ga1jWzvtXuIEnkGA%3D%3D%3Ab8ae833f50e89e1033037e7171b44b71&ali_trackid=1_b8ae833f50e89e1033037e7171b44b71&id=539003694382&mi_id=0000wlxqib2G4jBL3QpKyaNJ5dcj2DGzSUBDxbsbj2VQe4g&mm_sceneid=1_0_114003394_0&priceTId=214784b017603615514204927e0fbc&skuId=4383586252993&spm=a21n57.sem.item.7&utparam=%7B%22aplus_abtest%22%3A%225e2089e06d2fcc43feb549b1b0fa929d%22%7D&xxc=ad_ztc) | 1 | 6 | <img src="https://qntc.hebaiju.cn/img/door-esp8266-01s.jpg" width="140" alt="ESP8266-01s"> |
| [CH340烧录器](https://detail.tmall.com/item.htm?ali_refid=a3_430673_1006%3A1109448581%3AN%3AGoWQiM5hj2WQTKuqS5zU%2FTMwO5ziiohA%3A1adfae2e21874b573340d58bda968b91&ali_trackid=1_1adfae2e21874b573340d58bda968b91&id=617225331165&mi_id=0000A_KbxPJhbihXdVyiUKSrEI6JDMbeszwla5V2dA91qck&mm_sceneid=1_0_57814139_0&priceTId=213e087717603619469582006e1712&skuId=4351773637185&spm=a21n57.sem.item.43&utparam=%7B%22aplus_abtest%22%3A%22996194b47c58d30515ffd684b5134803%22%7D&xxc=ad_ztc) | 1 | 6 | <img src="https://qntc.hebaiju.cn/img/door-ch340.jpg" width="140" alt="CH340烧录器"> |
| [舵机](https://item.taobao.com/item.htm?id=573547711366&mi_id=0000tkJtG5SnMi_-1x6GfGJs-MaEiZFSVOlP_lX__Xs9GQg&skuId=3906660838326&spm=tbpc.mytb_itemcollect.item.goods&upStreamPrice=1440) | 1 | 15 | <img src="https://qntc.hebaiju.cn/img/door-servo.jpg" width="140" alt="舵机"> |
| [USB线](https://detail.tmall.com/item.htm?ali_refid=a3_430673_1006%3A1359940039%3AH%3AJ1YENfCfO5vN1AQn%2FM74BhE1p4%2BYNbMK%3Ada41d710fe1de3ccaa4ac52ae102adbb&ali_trackid=282_da41d710fe1de3ccaa4ac52ae102adbb&id=683420525367&mi_id=0000aoePFcTdScHSwJzcHakgCWtzjXhVi9dxVZSwA1eqdvA&mm_sceneid=1_0_1496170099_0&priceTId=213e087717603623018451706e1712&skuId=5062477719044&spm=a21n57.sem.item.2&utparam=%7B%22aplus_abtest%22%3A%22a73f2474141db84db41c26eb550ce8ca%22%7D&xxc=ad_ztc) | 1 | 2 | <img src="https://qntc.hebaiju.cn/img/door-usb.jpg" width="140" alt="USB线"> |
| [杜邦线](https://item.taobao.com/item.htm?ali_refid=a3_430673_1006%3A1107255686%3AN%3AMsF9mE9KLTC2IibWJh%2BK1A%3D%3D%3Ae6188cb8ad452a06a8ff90ba8b235c44&ali_trackid=1_e6188cb8ad452a06a8ff90ba8b235c44&id=626699339752&mi_id=0000g_QPnIABA1wVeBciEX0FQ362C7ik5EppPrSJfo1biK8&mm_sceneid=1_0_30693817_0&priceTId=213e087717603623416314400e1712&skuId=6048588939883&spm=a21n57.sem.item.44&utparam=%7B%22aplus_abtest%22%3A%22a72a3e6180176186878aafdc7648e185%22%7D&xxc=ad_ztc) | 若干 | 2 | <img src="https://qntc.hebaiju.cn/img/door-dupont.jpg" width="140" alt="杜邦线"> |
| [扎带](https://item.taobao.com/item.htm?ali_refid=a3_430673_1006%3A1682218166%3AN%3Ak3UParKGYF%2FTnr04H%2FnB1w%3D%3D%3Acc5546591def63a47be2c967b14b7853&ali_trackid=1_cc5546591def63a47be2c967b14b7853&id=820130327778&mi_id=00005WGskN94dveeWmcuPk1ItOSxCugUI5tQrpd9piYjZ4A&mm_sceneid=1_0_3838888826_0&priceTId=213e087717603624095278730e1712&skuId=5528500289757&spm=a21n57.sem.item.132&utparam=%7B%22aplus_abtest%22%3A%22dddcd9a0bfd5668b7e3d51003e18de72%22%7D&xxc=ad_ztc) | 若干 | 1 | <img src="https://qntc.hebaiju.cn/img/door-ziptie.jpg" width="140" alt="扎带"> |
| 电脑 | 1 | 自费 | 操作系统最好为window 11 |
| [arduino](https://www.arduino.cc/) | 1 | 免费 | [官方下载](https://downloads.arduino.cc/app-lab-release/ArduinoAppLab_0.1.23_Windows_x86-64_installer.exe)或者到教程里面领取 |

### 功能说明 [​](#功能说明)

| 功能 | 说明 | 支持方式 |
| --- | --- | --- |
| 远程开门（保持 2 秒） | 一点即开，自动保持 2 秒后自动关门 | Blinker App / MQTT / 串口 |
| 手机震动反馈 | 按下后约 0.25 秒立刻震动，感觉“秒开” | 自动触发 |
| 自动灯光（按真实时间） | 08:00–11:59 14:00–22:59 自动亮灯，其余时间关灯 | NTP 网络校时，每 30 秒自动判断 |
| 手动反转灯 | 在自动时间段内仍可手动点亮/熄灭 | Blinker App / MQTT / 串口 |
| MQTT 远程控制 | 发 `on` 开门，发 `light` 反转灯 | Home Assistant / Node-RED 等 |
| Wi-Fi 列表自定义名字 | 永远显示“开门猫”（或你改的名字），再见 ESP\_XXXX | 代码强制写入 |
| 串口调试命令 | 接电脑就能手动控制 | 见下方 |

### 接口说明 [​](#接口说明)

| 接口类型 | 名称 / Key / 主题 | 功能 | 具体命令 / Payload | 备注 |
| --- | --- | --- | --- | --- |
| **Blinker 按钮** | `servo` | 开门（保持 2 秒） | 点击按钮 | App 内默认显示“开门” |
| **Blinker 按钮** | `light` | 手动反转当前灯状态 | 点击按钮 | 自动时间段内仍可强制开关 |
| **设备显示名称** | `CUSTOM_HOSTNAME`（代码里改） | Wi-Fi 列表 + App 显示的设备名 | 当前默认：**开门猫** | 烧录后永久生效，再见 ESP\_XXXXXX |
| **串口命令** | `on` | 立刻开门一次（保持 2 秒） | 输入 `on` 回车 |  |
| **串口命令** | `time` | 立刻强制同步网络时间 | 输入 `time` 回车 |  |
| **串口命令** | `light on` | 强制开灯 | 输入 `light on` 回车 |  |
| **串口命令** | `light off` | 强制关灯 | 输入 `light off` 回车 |  |
| **MQTT 主题** | `switch/state` | 主控制主题 | — | 设备自动订阅 |
| **MQTT 命令** | `on` | 开门 2 秒 | 发送字符串 `on` |  |
| **MQTT 命令** | `light` | 反转当前灯状态 | 发送字符串 `light` | 开→关 或 关→开 |
| **MQTT Broker** | 自建 |  | — | 无需账号，也可改成自家 EMQX/Mosquitto |
| **NTP 时间服务器** | ntp1.aliyun.com | 北京时间自动校时（+8 区） | — | 备用 pool.ntp.org |
| **硬件接线** | 舵机信号线 | GPIO0（D3） | — | SG90 / MG90S |
| **硬件接线** | 灯控制（低电平亮） | GPIO2（D4） | — | 板载 LED 或继电器 |

> 接线：舵机控制线连接D3引脚，正极接3.3V，负极接GND。灯是板载灯，不用管。

### 代码 [​](#代码)

提示

请订阅代码中的库文件！！！

功能代码


```
/****************************************************************************************
 * 项目名称：智能门控 + 自动灯光系统（终极版 - 开门保持2秒）
 * 作者 ： 鹤白居
 ****************************************************************************************/
#include <Servo.h>
#define BLINKER_WIFI
#include <Blinker.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <PubSubClient.h>
// ====================== 配置 ======================
const char AUTH[] = "";          // ←←← 改成你自己的 Blinker Key
const char WIFI_SSID[] = "";     // ←←← 你的 Wi-Fi 名字
const char WIFI_PSWD[] = "";          // ←←← 你的 Wi-Fi 密码
const char* mqtt_server = "";   // 全球公共免费（强烈推荐）
// 可选替换（任选其一）：
// "broker.hivemq.com"      // 另一个免费公网
// "test.mosquitto.org"     // 测试用
// "192.168.1.100"          // 你自己内网的 EMQX/Mosquitto 地址
const int   mqtt_port   = 1883;               // 基本都用 1883，改了也连不上公网免费的
const char* mqtt_topic  = "switch/state";     // 发 on 开门，发 light 反转灯
const char* CUSTOM_HOSTNAME = "开门猫";  // 自定义WiFi列表显示的名字（改这里就行）

// ====================== 舵机时间参数（集中管理，想改多久改多久）======================
const int OPEN_KEEP_TIME    = 2000;   // 门保持打开的时间（毫秒） ←←←← 你现在要的2秒
const int MOVE_TIME         = 300;    // 舵机从0→90或90→0需要的预计时间（实测300ms很稳）
const int VIBRATE_DELAY     = 250;    // 开门后多久手机震动（比实际运动略早一点，手感更秒开）

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "ntp1.aliyun.com", 8*3600, 60000);
WiFiClient espClient;
PubSubClient mqttClient(espClient);
BlinkerButton ServoButton("servo");
BlinkerButton LightButton("light");

// ====================== 硬件 ======================
const int SERVO_PIN = 0;
const int ONBOARD_LED_PIN = 2;   // 你实际灯接这里（低电平亮）
const int MIN_ANGLE = 0;
const int MAX_ANGLE = 90;
const int MIN_PULSE = 500;
const int MAX_PULSE = 2500;

// ====================== 状态 ======================
bool lightState = false;
bool timeSynced = false;
unsigned long lastNTPSync = 0;
Servo myServo;

bool isOpening = false;
unsigned long servoTimer = 0;
enum ServoState { IDLE, GO_TO_90, STAY_90, GO_TO_0 } servoState = IDLE;

// ====================== 开机欢迎 ======================
void printWelcome() {
  Serial.println(F("\n"));
  Serial.println(F("================================================"));
  Serial.println(F(" 智能门控 + 自动灯光系统 已启动"));
  Serial.println(F(" 项目名称：门控灯光终极版 v1.1"));
  Serial.printf(" WiFi列表显示名：%s\n", CUSTOM_HOSTNAME);
  Serial.printf(" 门保持打开时间：%d ms (%.1fs)\n", OPEN_KEEP_TIME, OPEN_KEEP_TIME/1000.0);
  Serial.println(F(" 输入 time 可立刻强制同步时间"));
  Serial.println(F("================================================"));
  Serial.println(F(""));
}

// ====================== setup ======================
void setup() {
  Serial.begin(115200);
  printWelcome();

  // 先强制设置自定义主机名（防Blinker偷偷改）
  WiFi.hostname(CUSTOM_HOSTNAME);
  WiFi.setHostname(CUSTOM_HOSTNAME);

  pinMode(ONBOARD_LED_PIN, OUTPUT);
  digitalWrite(ONBOARD_LED_PIN, HIGH);  // 初始关灯
  myServo.attach(SERVO_PIN, MIN_PULSE, MAX_PULSE);
  myServo.write(MIN_ANGLE);

  Blinker.begin(AUTH, WIFI_SSID, WIFI_PSWD);

  // Blinker连上后再次强行改回来，100%显示“开门猫”
  delay(3000);
  WiFi.hostname(CUSTOM_HOSTNAME);
  WiFi.setHostname(CUSTOM_HOSTNAME);

  while (!Blinker.connected()) {
    Blinker.run();
    delay(100);
  }
  Serial.printf("WiFi和Blinker已连接，设备名已强制为：%s\n", CUSTOM_HOSTNAME);

  timeClient.begin();
  for (int i = 0; i < 10; i++) {
    if (timeClient.forceUpdate()) {
      timeSynced = true;
      Serial.printf("开机时间同步成功：%02d:%02d:%02d\n",
                    timeClient.getHours(), timeClient.getMinutes(), timeClient.getSeconds());
      break;
    }
    delay(1000);
    Serial.print(".");
  }
  if (!timeSynced) Serial.println("\n启动同步失败，后续会继续尝试");

  // 控件回调
  ServoButton.attach([](const String &state) {
    rotateServoSequence();
    Blinker.print("门", "开了！！！");
  });
  LightButton.attach([](const String &state) {
    lightState = !lightState;
    setLightState(lightState);
    Serial.println("App手动反转当前时间段灯状态");
  });

  mqttClient.setServer(mqtt_server, mqtt_port);
  mqttClient.setCallback([](char* topic, byte* payload, unsigned int length) {
    String msg = "";
    for (int i = 0; i < length; i++) msg += (char)payload[i];
    if (msg == "on") rotateServoSequence();
    if (msg == "light") {
      lightState = !lightState;
      setLightState(lightState);
      Serial.println("MQTT手动反转当前时间段灯状态");
    }
  });
}

// ====================== loop ======================
void loop() {
  Blinker.run();
  timeClient.update();

  if (!mqttClient.connected()) {
    String id = "ESP8266-" + String(random(0xffff), HEX);
    if (mqttClient.connect(id.c_str())) mqttClient.subscribe(mqtt_topic);
    else delay(3000);
  }
  mqttClient.loop();

  // 每30秒根据真实时间校准灯
  static unsigned long lastCheck = 0;
  if (millis() - lastCheck >= 30000) {
    updateLightStateAccordingToTime();
    lastCheck = millis();
  }

  // 每30分钟自动同步时间
  if (millis() - lastNTPSync >= 1800000UL) {
    timeClient.forceUpdate();
    lastNTPSync = millis();
  }

  handleServoNonBlock();

  // 串口命令
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim(); cmd.toLowerCase();
    if (cmd == "time") {
      Serial.print("手动强制同步时间...");
      if (timeClient.forceUpdate()) {
        timeSynced = true;
        Serial.printf("成功！北京时间 %02d:%02d:%02d\n",
                      timeClient.getHours(), timeClient.getMinutes(), timeClient.getSeconds());
        updateLightStateAccordingToTime();
      } else Serial.println("失败");
    }
    else if (cmd == "on") rotateServoSequence();
    else if (cmd == "light on")  { lightState = true;  setLightState(true);  Serial.println("串口强制开灯"); }
    else if (cmd == "light off") { lightState = false; setLightState(false); Serial.println("串口强制关灯"); }
  }
}

// ====================== 灯光自动逻辑 ======================
void updateLightStateAccordingToTime() {
  if (!timeSynced) {
    setLightState(false);
    return;
  }
  int h = timeClient.getHours();
  bool shouldBeOn = (h >= 8 && h < 12) || (h >= 14 && h < 23);

  if (lightState != shouldBeOn) {
    lightState = shouldBeOn;
    setLightState(lightState);
    Serial.printf("自动恢复：%d点 → %s\n", h, lightState ? "开灯" : "关灯");
  }
}

void setLightState(bool state) {
  lightState = state;
  digitalWrite(ONBOARD_LED_PIN, state ? LOW : HIGH);  // 低电平亮
  Blinker.print("light", state ? "开" : "关");
}

// ====================== 舵机非阻塞控制（2秒版）======================
void rotateServoSequence() {
  if (isOpening) return;       // 防重复触发
  isOpening = true;
  servoState = GO_TO_90;
  servoTimer = millis();
  myServo.write(MAX_ANGLE);    // 立刻开门
}

void handleServoNonBlock() {
  if (!isOpening) return;

  switch (servoState) {
    case GO_TO_90:
      if (millis() - servoTimer >= VIBRATE_DELAY) {
        Blinker.vibrate();     // 250ms后手机震动，手感超快
        servoState = STAY_90;
        servoTimer = millis();
      }
      break;

    case STAY_90:
      if (millis() - servoTimer >= OPEN_KEEP_TIME) {
        myServo.write(MIN_ANGLE);   // 开始关门
        servoState = GO_TO_0;
        servoTimer = millis();
      }
      break;

    case GO_TO_0:
      if (millis() - servoTimer >= MOVE_TIME) {  // 给舵机足够时间回到0°
        isOpening = false;
        servoState = IDLE;
      }
      break;
  }
}
```


### App配置 [​](#app配置)

注意主题的订阅为servo和light

一个是小灯，一个是控制舵机开门！

![最终配置界面](https://qntc.hebaiju.cn/img/door-final-config.jpeg)![组件名称配置界面](https://qntc.hebaiju.cn/img/door-component-config.jpeg)

或者你可以通过直接导入界面配置文件

信息

右上角三个点——界面配置——复制下面替换掉里面的内容。

```
{¨version¨¨2.0.0¨¨config¨{¨headerColor¨¨transparent¨¨headerStyle¨¨dark¨¨background¨{¨img¨¨assets/img/headerbg.jpg¨¨isFull¨«}}¨dashboard¨|{¨type¨¨btn¨¨ico¨¨far fa-door-open¨¨mode¨É¨t0¨´门´¨t1¨¨文本2¨¨bg¨É¨cols¨Í¨rows¨Í¨key¨¨servo¨´x´Ë´y´Ð¨lstyle¨Ë¨clr¨¨#00A90C¨}{ßCßDßE¨fad fa-lightbulb-on¨ßGÉßH¨小灯¨ßIßJßKËßLËßMËßN¨light¨´x´Ï´y´ÒßQ¨#076EEF¨ßPÉ}{ßC¨deb¨ßGÉßKÉßLÑßMÌßN¨debug¨´x´É´y´¤D}÷¨actions¨|÷¨triggers¨|÷¨rt¨|÷}
```

### 结语 [​](#结语)

如果你只需要实现手机上通过APP的传接来开门，那么到这里就结束了

---

## 控制方 [​](#控制方)

### 说明 [​](#说明)

当前已经完成了在门外面通过App进行控制，然而显示情况却有不同

当我在宿舍里面的时候，有别人在外面敲门，我需要打开手机给别人开门，或者走过去开门。当然我是一个非常懒的人，能不动就绝对运动。

> 懒是科技进步的动力源泉

所以如果能在我的桌面上有一个按钮来开门就好了

我的具体实施过程是：在桌面上放置一个按钮，按钮连接esp8266开发板，由充电器给esp8266供电，按下按钮，控制方的esp8266来向被控制方的esp8266发送一条mqtt消息，从而来实现开门。

材料有按钮，esp8266开发板，杜邦线，充电头（其实电脑上面也可以插着）

信息

这里的内容大部分都是类同的，就不重复无聊的地方，下面直接就是控制方的代码

```
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

// WiFi配置
const char* ssid = "";
const char* password = "";

// MQTT配置
const char* mqttServer = "";
const int mqttPort = 1883;
const char* mqttTopic = "switch/state";
const char* clientId = "esp8266-switch-054";

// 开关和LED引脚定义
const int switchPin = 0;    // 开关引脚
const int ledPin = 2;       // LED引脚

// 状态变量（单击双击检测）
int lastSteadyState = HIGH;
int lastFlickerableState = HIGH;
int currentState;

// 时间变量
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;    // 去抖延迟

// 单击双击检测变量
unsigned long firstClickTime = 0;
int clickCount = 0;
const unsigned long doubleClickDelay = 500;  // 双击最大间隔

// 创建WiFi客户端和MQTT客户端实例
WiFiClient espClient;
PubSubClient client(espClient);

// MQTT重连函数
void reconnect() {
  while (!client.connected()) {
    Serial.print("正在连接MQTT服务器...");
    if (client.connect(clientId)) {
      Serial.println("连接成功");
    } else {
      Serial.print("连接失败，错误代码: ");
      Serial.print(client.state());
      Serial.println("，5秒后重试...");
      delay(5000);
    }
  }
}

void setup() {
  // 初始化串口
  Serial.begin(115200);
  
  // 初始化引脚
  pinMode(switchPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, HIGH);  // 关闭LED
  
  // 连接WiFi
  Serial.print("连接WiFi: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi连接成功");
  
  // 设置MQTT服务器
  client.setServer(mqttServer, mqttPort);
  
  Serial.println("设备初始化完成，等待开关操作...");
}

void loop() {
  // 维持MQTT连接
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  
  // 读取当前引脚状态
  currentState = digitalRead(switchPin);

  // 检测状态是否发生变化（去抖处理）
  if (currentState != lastFlickerableState) {
    lastDebounceTime = millis();
    lastFlickerableState = currentState;
  }

  // 如果状态稳定超过去抖延迟
  if ((millis() - lastDebounceTime) > debounceDelay) {
    // 如果状态确实改变
    if (lastSteadyState != currentState) {
      lastSteadyState = currentState;
      
      // 检测到开关释放(从低到高的变化)
      if (currentState == HIGH) {
        clickCount++;  // 增加点击计数
        Serial.print("检测到点击! 计数: ");
        Serial.println(clickCount);
        
        // 如果是第一次点击，记录时间
        if (clickCount == 1) {
          firstClickTime = millis();
        }
      }
    }
  }

  // 检查双击间隔是否已过，判断点击类型
  if (clickCount > 0 && (millis() - firstClickTime) > doubleClickDelay) {
    // 根据点击次数发送相应的MQTT消息
    if (clickCount == 1) {
      Serial.println("发送MQTT消息: on");
      client.publish(mqttTopic, "on");  // 单击发送"on"
    } else if (clickCount == 2) {
      Serial.println("发送MQTT消息: light");
      client.publish(mqttTopic, "light");  // 双击发送"light"
    } else {
      Serial.print("多次点击: ");
      Serial.println(clickCount);
    }
    
    // 重置点击计数
    clickCount = 0;
  }
  
  delay(10);
}
```

信息

由于mqtt的特性，你可以实现，一个开关控制多个门，或者多个开关控制一个门，你可以实现，或者给你的室友没人发一个

## 最后 [​](#最后)

当然在这之后，esp8266开发板还剩下了2个io口，还能干很多事，所以我让rx这个io口连接一个红外led，直接让他接入空调，使得可以在手机上控制空调。这都是题外话了。

可以去查看之后的一篇文章[「ESP8266控制空调」 - 鹤白居的小站](./251207-ESP8266AC-IR-Control)
