---
description: 搞钱，迎娶白富美，走上人生巅峰。
title: ESP8266控制空调
date: 2025-12-09
categories:
- Code
tags:
- 编程
- ESP8266
- 项目
codeHeightLimit: 300
---

## 项目介绍 [​](#项目介绍)

本文章基于ESP8266开发板来实现对空调的控制，基本控制原理为，通过点灯科技APP向ESP8266来发送指令，ESP8266通过库来实现对红外LED的编码控制，从而实现对空调的控制。可以查看上一篇文章[「宿舍智能门」 - 鹤白居的小站](./251013-ESP8266DormitorySmartDoor)

此项目源代码来源于B站博主[DIY大白](https://space.bilibili.com/107884665)的视频[ESP8266红外遥控格力空调](https://www.bilibili.com/video/BV1JE411J77j/?share_source=copy_web&vd_source=c1934f3384f795e39369baf360bcb94c)。首先感谢博主的开源精神，我将基于该原博主进行代码升级和功能优化。

---

## 开始 [​](#开始)

## 材料准备 [​](#材料准备)

| 名称 | 数量 |
| --- | --- |
| ESP8266 | 1 |
| 红外LED | 1 |
| 杜邦线 | 若干 |

注意需要红外LED，分辨方法，通电之后肉眼看不见白光，而是只能使用手机摄像头能看见微弱的红光。

当然你仍然可以基于以前的[开源项目-「宿舍智能门」 - 鹤白居的小站](https://www.hebaiju.cn/posts/251013-ESP8266DormitorySmartDoor)来继续在被控制端进行增加功能。这一次将使用RX引脚，兼容之前的项目。复用了这一段端口

## 接线方法 [​](#接线方法)

红外LED长针连接ESP8266的RX引脚如下图的 **7 GPIO3 U0RXD**,短针连接在GND。

![ESP826601s引脚.png](https://pic1.imgdb.cn/i/0342Dbvqd1uSPvGvJKkmHF.png)![ESP8266引脚.jpg](https://pic1.imgdb.cn/i/0342DbwHd48GSPQUsGZuJg.jpg)

## 测试代码 [​](#测试代码)

接下来，你就可以连接上电脑来刷写下面的测试代码，来测试是否能够点亮led

你通过串口需要向esp8266发送字符串 on 或者 off，然后通过手机摄像头，对准led观察是否有红色的闪光。多测试几次

当然你先需要安装下面的库文件。有疑问可以复制发送给ai，咨询什么是库文件，怎么安装，这里不做阐述。

注意

注意应为复用RX引脚，所以在下述刷代码的时候请不要连接任何设备在GPIO3，否则刷写不成功。

```
// 红外灯的测试配置
// 正极连接esp8266D2 负极连接GND
#include <IRremoteESP8266.h>
#include <IRsend.h>
#include <ir_Coolix.h>  // 确保包含Coolix协议支持

// 引脚定义（ESP8266 D2=GPIO4；ESP32 D5=GPIO14）
const uint16_t kIrLed = 3;  // ESP8266用3
IRsend irsend(kIrLed);

void setup() {
  Serial.begin(115200);
  irsend.begin();  // 初始化红外发送
  Serial.println("设备启动，输入 'on' 发送开机码，'off' 发送关机码");
}

void loop() {
  if (Serial.available() > 0) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();

    // 发送Coolix 48位开机码（适配sendCoolix48函数）
    if (cmd == "on") {
      irsend.sendCoolix48(0xB20800000000, 48);  // 48位Coolix开机测试码
      Serial.println("已发送开机码，查看LED是否闪烁");
    }
    // 发送Coolix 48位关机码
    else if (cmd == "off") {
      irsend.sendCoolix48(0xB20801000000, 48);  // 48位Coolix关机测试码
      Serial.println("已发送关机码，查看LED是否闪烁");
    }
    else {
      Serial.println("未知指令，请输入 'on' 或 'off'");
    }
  }
  delay(50);
}
```

## 恭喜你 [​](#恭喜你)

已经完成1/2，

下面是B站博主的源代码，不能直接使用，我将基于此进行修改合并

B站博主的源代码

[这是博主的文件包](https://liveou.lanzoue.com/io0Pz3d4xmta)

```
//这个源代码来源于B站，我将基于此进行修改
#define BLINKER_WIFI//通讯方式
#include <Blinker.h>
#include <IRsend.h>
#include <IRremoteESP8266.h>
#include <ir_Coolix.h>

char auth[] = "";//这里填写设备密钥
char ssid[] = "";//这里填写wifi
char pswd[] = "";//这里填写wifi码

//暂存温度数据
int nowtemp = 25;
int num_Fan = 5;

//新建组件对象
BlinkerNumber NUM1("settemp");//温度数据组件
BlinkerButton Midea_power("btn-pwr");//电源开关组件
BlinkerButton Midea_setFan("btn-fan");//风速组件
BlinkerButton Midea_cool("btn-cool");//制冷模式组件
BlinkerButton Midea_dry("btn-dry");//干燥模式组件
BlinkerButton Midea_hot("btn-hot");//制热模式组件
BlinkerButton Midea_auto("btn-auto");//自动模式组件
BlinkerSlider Slider1("ran-wen");//温度调节滑块

//使用ESP32的D5针脚，如果你使用的是ESP8266,则把"5"改"4"即ESP8266的D2针脚
const uint16_t kIrLed = 4;
IRCoolixAC ac(kIrLed);

void printState() {
  Serial.println("Coolix A/C remote is in the following state:");
  Serial.printf("  %s\n", ac.toString().c_str());
}

//初始化
void setup()
{
  Serial.begin(115200);
  BLINKER_DEBUG.stream(Serial);
  ac.begin();
  Midea_power.attach(Midea_power_callback);
  Midea_setFan.attach(Midea_setFan_callback);
  Midea_cool.attach(Midea_cool_callback);
  Midea_dry.attach(Midea_dry_callback);
  Midea_hot.attach(Midea_hot_callback);
  Midea_auto.attach(Midea_auto_callback);
  Slider1.attach(slider1_callback);
  Serial.println("Default state of the remote.");
  printState();
  Serial.println("Setting desired state for A/C.");
  Blinker.attachHeartbeat(heartbeat);
  Blinker.begin(auth, ssid, pswd);
}

void loop()
{
  Blinker.run();
}

//电源开关
void Midea_power_callback(const String &state)
{
  BLINKER_LOG("get button state: ", state);

  if (state == BLINKER_CMD_ON)
  {
    ac.on();
    ac.setMode(kCoolixCool);
    ac.setTemp(25);
    ac.send();
    Midea_power.icon("fal fa-power-off");
    Midea_power.color("#00FF00");
    Midea_power.text("开");
    Midea_power.print("on");
  }
  else if (state == BLINKER_CMD_OFF)
  {
    ac.off();
    ac.send();
    Midea_power.icon("fal fa-power-off");
    Midea_power.color("#FF0000");
    Midea_power.text("关");
    Midea_power.print("off");
  }
}

//电源开关
void slider1_callback(int32_t value)
{
  BLINKER_LOG("get slider value: ", value);
  nowtemp = value;
  NUM1.print(nowtemp);
  ac.setTemp(nowtemp);
  ac.send();
}

//风速心跳包
void heartbeat()
{
  switch (num_Fan)
  {
    case 1:
      Midea_setFan.text("静音");
      break;

    case 2:
      Midea_setFan.text("低速");
      break;

    case 3:
      Midea_setFan.text("中速");
      break;

    case 4:
      Midea_setFan.text("高速");
      break;

      case 5:
      Midea_setFan.text("自动");
      break;
  }
  Midea_setFan.print();
  NUM1.print(nowtemp);
}

//风速按钮
void Midea_setFan_callback(const String &state)
{
  if (state == BLINKER_CMD_BUTTON_TAP)
  {
    num_Fan++;
    if (num_Fan >= 6)
    {
      num_Fan = 1;
    }
    switch (num_Fan)
    {
      case 1:
        ac.setFan(kCoolixFanFixed);
        Midea_setFan.text("静音");
        break;

      case 2:
        ac.setFan(kCoolixFanMin);
        Midea_setFan.text("低速");
        break;

      case 3:
        ac.setFan(kCoolixFanMed);
        Midea_setFan.text("中速");
        break;

      case 4:
        ac.setFan(kCoolixFanMax);
        Midea_setFan.text("高速");
        break;
        
      case 5:
        ac.setFan(kCoolixFanAuto0);
        Midea_setFan.text("自动");
        break;

    }
    Midea_setFan.print();
    ac.send();
  }
}

//制冷模式
void Midea_cool_callback(const String &state)
{
  if (state == BLINKER_CMD_BUTTON_TAP)
  {
    ac.setMode(kCoolixCool);
    ac.send();
  }
}

//干燥模式
void Midea_dry_callback(const String &state)
{
  if (state == BLINKER_CMD_BUTTON_TAP)
  {
    ac.setMode(kCoolixDry);
    ac.send();
  }
}

//制热模式
void Midea_hot_callback(const String &state)
{
  if (state == BLINKER_CMD_BUTTON_TAP)
  {
    ac.setMode(kCoolixHeat);
    ac.send();
  }
}

//自动模式
void Midea_auto_callback(const String &state)
{
  if (state == BLINKER_CMD_BUTTON_TAP)
  {
    ac.setMode(kCoolixAuto);
    ac.send();
  }
}

//空调温度
void Slider1_callback(int32_t value)
{
  BLINKER_LOG("get slider value: ", value);
  nowtemp=value;
  NUM1.print(nowtemp);
    ac.setTemp(nowtemp);
    ac.send();
}
```

B站博主的BLINKER里面的界面配置，可以直接导入。

```
{¨config¨{¨headerColor¨¨transparent¨¨headerStyle¨¨dark¨¨background¨{¨img¨¨assets/img/bg/1.jpg¨}}¨dashboard¨|{¨type¨¨btn¨¨ico¨¨fal fa-air-conditioner¨¨mode¨Ê¨t0¨´关´¨t1¨¨文本2¨¨bg¨Ë¨cols¨Ë¨rows¨Ë¨key¨¨btn-pwr¨´x´É´y´Ê¨speech¨|÷¨lstyle¨É¨clr¨¨#EA0909¨}{ß9¨num¨ßE¨温度¨ßB¨fal fa-thermometer-three-quarters¨ßO¨#076EEF¨¨min¨É¨max¨¤U¨uni¨´℃´ßHËßIÍßJËßK¨settemp¨´x´Í´y´ÊßM|÷ßNË¨rt¨»}{ß9¨ran¨ßEßRßO¨#00A90C¨ßV¤UßU¤HßHËßIÑßJËßK¨ran-wen¨´x´É´y´ÎßM|÷ßNË}{ß9ßAßB¨fal fa-fan¨ßDÉßE¨风速¨ßFßGßHËßIËßJËßK¨btn-fan¨´x´Ë´y´ÊßM|÷ßNÉßOßa}{ß9ßAßB¨fad fa-sun¨ßDÉßE¨干燥¨ßFßGßHËßIËßJËßK¨btn-dry¨´x´Ë´y´ÌßM|÷ßO¨#FBA613¨}{ß9ßAßB¨fad fa-fire-alt¨ßDÉßE¨制热¨ßFßGßHËßIËßJËßK¨btn-hot¨´x´Í´y´ÌßM|÷ßOßP}{ß9ßAßB¨fad fa-snowflakes¨ßDÉßE¨制冷¨ßFßGßHËßIËßJËßK¨btn-cool¨´x´É´y´ÌßM|÷ßOßT}{ß9ßAßB¨fad fa-user-robot¨ßDÉßE¨自动¨ßFßGßHËßIËßJËßK¨btn-auto¨´x´Ï´y´ÌßM|÷ßOßa}{ß9¨deb¨ßDÉßHÉßIÑßJÌßK¨debug¨´x´É´y´¤AßM|÷ßNÉ}÷ßY|ßX÷}
```

## 正式开始刷写代码 [​](#正式开始刷写代码)

以下代码可以直接刷写，注意安装库文件。

```
/****************************************************************************************
 * v2.0 —— 智能风速匹配版
 * 可以在其中修改，可以自己修改开机的模式
 * 开门+板载灯控制+开关空调，自定义空调模式
 ****************************************************************************************/
#include <Servo.h>
#define BLINKER_WIFI
#include <Blinker.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <PubSubClient.h>
#include <IRremoteESP8266.h>
#include <IRsend.h>
#include <ir_Coolix.h>

// ====================== 配置 ======================
const char AUTH[] = "";                         //电灯科技密钥测试
// const char AUTH[] = "";                      //电灯科技密钥正式
const char WIFI_SSID[] = "";                    //WIFI名称
const char WIFI_PSWD[] = "";                    //WIFI密码
const char* CUSTOM_HOSTNAME = "开门猫";          //设备名称
const char* mqtt_server = "";                   //mqtt服务器
const int mqtt_port = 1883;                     //mqtt端口
const char* mqtt_topic = "switch/state";        //mqtt主题订阅

// ====================== 硬件 ======================
const int SERVO_PIN = 0;
const int ONBOARD_LED_PIN = 2;  // 低电平亮
const uint16_t kIrLed = 3;
const int MIN_ANGLE = 0;
const int MAX_ANGLE = 90;

// ====================== 参数 ======================
const int OPEN_KEEP_TIME = 2000;
const int MOVE_TIME = 300;
const int VIBRATE_DELAY = 250;

// ▼▼▼▼▼▼▼▼▼▼▼ 季节性配置区  ▼▼▼▼▼▼▼▼▼▼▼

//    夏天制冷填: kCoolixCool 冬天制热填: kCoolixHeat 其他可选: kCoolixAuto(自动), kCoolixDry(除湿), kCoolixFan(送风) 
const uint8_t DEFAULT_AC_MODE = kCoolixCool; 
// 2. 设置默认温度:
const int DEFAULT_AC_TEMP = 20;     //（16-30）         

// 3. 设置默认风速等级 (只需改这就行，硬件自动匹配):
//    1=静音(Fixed)
//    2=低速(Min)
//    3=中速(Med)
//    4=高速(Max) - 推荐夏天用这个
//    5=自动(Auto)
const int DEFAULT_FAN_LEVEL = 4;

// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

// ====================== 对象 ======================
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", 8*3600, 60000);
WiFiClient espClient;
PubSubClient mqttClient(espClient);
Servo myServo;
IRsend irsend(kIrLed);
IRCoolixAC ac(kIrLed);

// ====================== Blinker 组件 ======================
BlinkerButton btn_servo("key-servo");
BlinkerButton btn_light("key-light");
BlinkerButton btn_pwr("btn-pwr");
BlinkerButton btn_fan("btn-fan");
BlinkerButton btn_cool("btn-cool");
BlinkerButton btn_dry("btn-dry");
BlinkerButton btn_hot("btn-hot");
BlinkerButton btn_auto("btn-auto");
BlinkerSlider slider_temp("ran-wen");
BlinkerNumber NUM1("settemp");

// ====================== 状态变量 ======================
bool lightState = false;
bool timeSynced = false;
bool lightManualOverride = false;
static int lastHour = -1;
bool isOpening = false;
unsigned long servoTimer = 0;
enum ServoState { IDLE, GO_TO_90, STAY_90, GO_TO_0 } servoState = IDLE;

bool ac_power = false;
uint8_t ac_mode = kCoolixCool;
uint8_t ac_temp = 25;
uint8_t ac_fan = kCoolixFanAuto0; // 这个现在由函数自动管理
int fan_level = 5;                // 当前等级

// ====================== 核心辅助函数 ======================

// 【新功能】智能风速设置函数：输入等级，自动设置变量和硬件指令
void applyFanLevel(int level) {
  if (level < 1) level = 1;
  if (level > 5) level = 5;
  
  fan_level = level; // 更新全局等级变量

  // 根据等级自动匹配硬件指令
  switch(fan_level) {
    case 1: ac_fan = kCoolixFanFixed; break; // 静音
    case 2: ac_fan = kCoolixFanMin;   break; // 低速
    case 3: ac_fan = kCoolixFanMed;   break; // 中速
    case 4: ac_fan = kCoolixFanMax;   break; // 高速
    case 5: ac_fan = kCoolixFanAuto0; break; // 自动
  }
}

String getModeText() {
  switch(ac_mode) {
    case kCoolixAuto: return "自动";
    case kCoolixCool: return "制冷";
    case kCoolixDry:  return "除湿";
    case kCoolixHeat: return "制热";
    default: return "送风";
  }
}
String getFanText() {
  switch(fan_level) {
    case 1: return "静音"; case 2: return "低速";
    case 3: return "中速"; case 4: return "高速"; case 5: return "自动";
    default: return "未知";
  }
}

void sendAcState() {
  if (!ac_power) { ac.off(); ac.send(); Serial.println("【空调】已关机"); return; }
  ac.on(); ac.setMode(ac_mode); ac.setTemp(ac_temp); ac.setFan(ac_fan); ac.send();
  Serial.printf("【空调】已发送 → %s %d°C %s风 (等级%d)\n", getModeText().c_str(), ac_temp, getFanText().c_str(), fan_level);
}

void updateAppState() {
  btn_light.print(lightState ? "on" : "off");
  if (ac_power) {
    btn_pwr.color("#00FF00"); btn_pwr.text("已开机"); btn_pwr.print("on");
  } else {
    btn_pwr.color("#FF0000"); btn_pwr.text("已关机"); btn_pwr.print("off");
  }
  NUM1.print(ac_temp); slider_temp.print(ac_temp);
  btn_fan.text(getFanText()); btn_fan.print();

  String c="#CCCCCC", d="#CCCCCC", h="#CCCCCC", a="#CCCCCC";
  if(ac_power){
    if(ac_mode==kCoolixCool) c="#00B0FF";
    if(ac_mode==kCoolixDry)  d="#FFC107";
    if(ac_mode==kCoolixHeat) h="#FF5722";
    if(ac_mode==kCoolixAuto) a="#4CAF50";
  }
  btn_cool.color(c); btn_cool.print();
  btn_dry.color(d);  btn_dry.print();
  btn_hot.color(h);  btn_hot.print();
  btn_auto.color(a); btn_auto.print();
}

// ... 灯光和门锁逻辑保持不变，省略以节省空间，功能与v4.1完全一致 ...
void updateLightStateAccordingToTime() {
  if (!timeSynced) return;
  int h = timeClient.getHours();
  bool shouldBeOn = (h >= 8 && h < 12) || (h >= 14 && h < 24);
  bool currentIsOn = (digitalRead(ONBOARD_LED_PIN) == LOW);
  bool newTimeSlot = (h != lastHour);
  if (newTimeSlot) { lightManualOverride = false; lastHour = h; Serial.printf("【自动灯光】进入 %02d:00，清除反转\n", h); }
  if (currentIsOn != shouldBeOn) {
    if (lightManualOverride && !newTimeSlot) return;
    lightState = shouldBeOn; digitalWrite(ONBOARD_LED_PIN, lightState ? LOW : HIGH);
    btn_light.print(lightState ? "on" : "off"); Serial.printf("【自动灯光】%02d:%02d → 自动%s\n", h, timeClient.getMinutes(), lightState?"开":"关");
  }
}
void toggleLightWithOverride() {
  lightManualOverride = true; lightState = !lightState;
  digitalWrite(ONBOARD_LED_PIN, lightState ? LOW : HIGH);
  btn_light.print(lightState ? "on" : "off"); Serial.println("【灯光】手动反转");
}
void rotateServoSequence() {
  if (isOpening) return;
  isOpening = true; servoState = GO_TO_90; servoTimer = millis(); myServo.write(MAX_ANGLE);
  Serial.println("【门锁】开门"); Blinker.print("门", "开");
}
void handleServoNonBlock() {
  if (!isOpening) return;
  if(servoState==GO_TO_90 && millis()-servoTimer>=VIBRATE_DELAY){ Blinker.vibrate(); servoState=STAY_90; servoTimer=millis(); }
  else if(servoState==STAY_90 && millis()-servoTimer>=OPEN_KEEP_TIME){ myServo.write(MIN_ANGLE); Serial.println("【门锁】关门"); servoState=GO_TO_0; servoTimer=millis(); }
  else if(servoState==GO_TO_0 && millis()-servoTimer>=MOVE_TIME){ isOpening=false; servoState=IDLE; }
}

// ====================== setup ======================
void setup() {
  Serial.begin(115200);
  Serial.println(F("\n=== 终极融合版 v4.2 (智能风速) ==="));

  WiFi.hostname(CUSTOM_HOSTNAME);
  pinMode(ONBOARD_LED_PIN, OUTPUT); digitalWrite(ONBOARD_LED_PIN, HIGH);
  myServo.attach(SERVO_PIN); myServo.write(MIN_ANGLE);
  irsend.begin(); ac.begin();

  Blinker.begin(AUTH, WIFI_SSID, WIFI_PSWD);
  delay(3000); WiFi.hostname(CUSTOM_HOSTNAME);

  timeClient.begin();
  for(int i=0; i<10; i++) { if(timeClient.forceUpdate()) { timeSynced=true; break; } delay(1000); }
  if(timeSynced) Serial.println("时间同步成功");

  btn_servo.attach([](const String &s) { rotateServoSequence(); });
  btn_light.attach([](const String &s) { toggleLightWithOverride(); });

  // ========== 空调逻辑优化区 ==========
  btn_pwr.attach([](const String &state){
    if(state==BLINKER_CMD_ON && !ac_power){
      ac_power = true; 
      // 1. 读取默认模式
      ac_mode = DEFAULT_AC_MODE; 
      // 2. 读取默认温度
      ac_temp = DEFAULT_AC_TEMP; 
      // 3. 读取默认等级，并自动计算硬件指令！
      applyFanLevel(DEFAULT_FAN_LEVEL);
      
      Serial.println("【空调】一键启动(智能匹配风速)");
    } else if(state==BLINKER_CMD_OFF){ ac_power=false; }
    sendAcState(); updateAppState();
  });

  slider_temp.attach([](int32_t v){ if(ac_power){ v=constrain(v,17,30); ac_temp=v; sendAcState(); updateAppState(); }});
  
  // 风速按钮：现在非常简洁，直接调用函数
  btn_fan.attach([](const String &s){ 
    if(ac_power){ 
      int nextLevel = (fan_level >= 5) ? 1 : fan_level + 1; // 循环 1->2->3->4->5->1
      applyFanLevel(nextLevel); // 一行代码搞定设置和硬件映射
      sendAcState(); updateAppState(); 
    }
  });

  btn_cool.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixCool;sendAcState();updateAppState();}});
  btn_dry.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixDry;sendAcState();updateAppState();}});
  btn_hot.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixHeat;sendAcState();updateAppState();}});
  btn_auto.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixAuto;sendAcState();updateAppState();}});

  Blinker.attachHeartbeat(updateAppState);

  mqttClient.setServer(mqtt_server, mqtt_port);
  mqttClient.setCallback([](char*t,byte*p,unsigned int l){
    String m=""; for(unsigned int i=0;i<l;i++)m+=(char)p[i];
    if(m=="on") rotateServoSequence(); 
    if(m=="light") toggleLightWithOverride(); 
  });

  updateAppState();
  Serial.println("系统就绪");
}

void loop() {
  Blinker.run();
  timeClient.update();

  if(!mqttClient.connected()){
    String id="ESP8266-"+String(random(0xffff),HEX);
    if(mqttClient.connect(id.c_str())) mqttClient.subscribe(mqtt_topic);
  }
  mqttClient.loop();
  handleServoNonBlock();

  static unsigned long lastCheck = 0;
  if(millis() - lastCheck >= 30000){ updateLightStateAccordingToTime(); lastCheck = millis(); }

  if(Serial.available()){
    String c=Serial.readStringUntil('\n'); c.trim(); c.toLowerCase();
    if(c=="on") rotateServoSequence();
    else if(c=="light") toggleLightWithOverride();
  }
}
```

注意：这里面可以自定义默认开机的空调模式，详情见注释

```
// ▼▼▼▼▼▼▼▼▼▼▼ 季节性配置区  ▼▼▼▼▼▼▼▼▼▼▼

//    夏天制冷填: kCoolixCool 冬天制热填: kCoolixHeat 其他可选: kCoolixAuto(自动), kCoolixDry(除湿), kCoolixFan(送风) 
const uint8_t DEFAULT_AC_MODE = kCoolixCool; 
// 2. 设置默认温度:
const int DEFAULT_AC_TEMP = 20;     //（16-30）         

// 3. 设置默认风速等级 (只需改这就行，硬件自动匹配):
//    1=静音(Fixed)
//    2=低速(Min)
//    3=中速(Med)
//    4=高速(Max) - 推荐夏天用这个
//    5=自动(Auto)
const int DEFAULT_FAN_LEVEL = 4;

// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
```

## APP配置 [​](#app配置)

使用了可以遥控空调的代码记得使用新的app配置

如下：

```
{¨config¨{¨headerColor¨¨transparent¨¨headerStyle¨¨dark¨¨background¨{¨img¨¨assets/img/bg/f1.jpg¨¨isFull¨»}}¨dashboard¨|{¨type¨¨btn¨¨ico¨¨fal fa-air-conditioner¨¨mode¨Ê¨t0¨´关´¨t1¨¨文本2¨¨bg¨Ë¨cols¨Ë¨rows¨Ë¨key¨¨btn-pwr¨´x´É´y´Ê¨speech¨|÷¨lstyle¨É¨clr¨¨#EA0909¨}{ßA¨num¨ßF¨温度¨ßC¨fal fa-thermometer-three-quarters¨ßP¨#076EEF¨¨min¨É¨max¨¤U¨uni¨´℃´ßIËßJÍßKËßL¨settemp¨´x´Í´y´ÊßN|÷ßOË}{ßA¨ran¨ßFßSßP¨#00A90C¨ßW¤UßV¤HßIËßJÑßKËßL¨ran-wen¨´x´É´y´ÎßN|÷ßOË¨rt¨«}{ßAßBßC¨fal fa-fan¨ßEÉßF¨风速¨ßGßHßIËßJËßKËßL¨btn-fan¨´x´Ë´y´ÊßN|÷ßOÉßPßa}{ßAßBßC¨fad fa-sun¨ßEÉßF¨干燥¨ßGßHßIËßJËßKËßL¨btn-dry¨´x´Ë´y´ÌßN|÷ßP¨#FBA613¨}{ßAßBßC¨fad fa-fire-alt¨ßEÉßF¨制热¨ßGßHßIËßJËßKËßL¨btn-hot¨´x´Í´y´ÌßN|÷ßPßQ}{ßAßBßC¨fad fa-snowflakes¨ßEÉßF¨制冷¨ßGßHßIËßJËßKËßL¨btn-cool¨´x´É´y´ÌßN|÷ßPßU}{ßAßBßC¨fad fa-user-robot¨ßEÉßF¨自动¨ßGßHßIËßJËßKËßL¨btn-auto¨´x´Ï´y´ÌßN|÷ßPßa}{ßA¨deb¨ßEÉßIÉßJÑßKÍßL¨debug¨´x´É´y´¤DßN|÷ßOÊ}{ßAßBßC¨far fa-door-open¨ßEÊßF¨文本1¨ßGßHßIÊßJÍßKÍßL¨key-servo¨´x´Ë´y´ÑßPßaßOË}{ßAßBßC¨far fa-lightbulb-on¨ßEÉßF´´ßGßHßIËßJËßKËßL¨key-light¨´x´Ï´y´¤BßOÉßPßU}÷ßc|÷}
```

## 注意 [​](#注意)

注意

直接使用esp8266RX口来驱动红外LED会有功率过于小的问题，你需要设置一个新的电路来驱动LED，可以查看B站博主的视频来构建。

不添加电路只能实现5m范围的遥控

再次提醒，因为使用了RX引脚，所以在上传代码的时候如果RX被LED占用会刷写不上代码。

## 结束 [​](#结束)

恭喜你，现在你可以通过这个来控制空调了。
