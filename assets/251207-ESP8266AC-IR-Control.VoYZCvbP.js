import{Bt as e,Ht as t,Q as n,U as r,W as i,er as a,qn as o,qt as s,yn as c}from"./framework.BTQirQJB.js";import{n as l}from"./theme.8JZ-ZCgZ.js";import"./chunks/vue-i18n.C1-1dNXk.js";import{a as u,i as d}from"./chunks/vue-router.YUHqddSK.js";var f={__name:`251207-ESP8266AC-IR-Control`,setup(f,{expose:p}){let m=o(JSON.parse(`{"title":"ESP8266控制空调","description":"搞钱，迎娶白富美，走上人生巅峰。","frontmatter":{"description":"搞钱，迎娶白富美，走上人生巅峰。","title":"ESP8266控制空调","date":"2025-12-09","categories":["Code"],"tags":["编程","ESP8266","项目"],"codeHeightLimit":300,"firstImage":"https://pic1.imgdb.cn/i/0342Dbvqd1uSPvGvJKkmHF.png"},"headers":[],"relativePath":"pages/posts/251207-ESP8266AC-IR-Control.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,t(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{description:`搞钱，迎娶白富美，走上人生巅峰。`,title:`ESP8266控制空调`,date:`2025-12-09`,categories:[`Code`],tags:[`编程`,`ESP8266`,`项目`],codeHeightLimit:300}}),(t,o)=>{let u=l;return e(),i(u,{frontmatter:a(_)},{"main-content-md":c(()=>[...o[0]||=[r(`h2`,{id:`项目介绍-​`,tabindex:`-1`},[n(`项目介绍 `),r(`a`,{href:`#%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#项目介绍-​`,"aria-label":`Permalink to "项目介绍 [​](#项目介绍)"`},`​`)],-1),r(`p`,null,[n(`本文章基于ESP8266开发板来实现对空调的控制，基本控制原理为，通过点灯科技APP向ESP8266来发送指令，ESP8266通过库来实现对红外LED的编码控制，从而实现对空调的控制。可以查看上一篇文章`),r(`a`,{href:`./251013-ESP8266DormitorySmartDoor`},`「宿舍智能门」 - 鹤白居的小站`)],-1),r(`p`,null,[n(`此项目源代码来源于B站博主`),r(`a`,{href:`https://space.bilibili.com/107884665`,target:`_blank`,rel:`noreferrer`},`DIY大白`),n(`的视频`),r(`a`,{href:`https://www.bilibili.com/video/BV1JE411J77j/?share_source=copy_web&vd_source=c1934f3384f795e39369baf360bcb94c`,target:`_blank`,rel:`noreferrer`},`ESP8266红外遥控格力空调`),n(`。首先感谢博主的开源精神，我将基于该原博主进行代码升级和功能优化。`)],-1),r(`hr`,null,null,-1),r(`h2`,{id:`开始-​`,tabindex:`-1`},[n(`开始 `),r(`a`,{href:`#%E5%BC%80%E5%A7%8B`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#开始-​`,"aria-label":`Permalink to "开始 [​](#开始)"`},`​`)],-1),r(`h2`,{id:`材料准备-​`,tabindex:`-1`},[n(`材料准备 `),r(`a`,{href:`#%E6%9D%90%E6%96%99%E5%87%86%E5%A4%87`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#材料准备-​`,"aria-label":`Permalink to "材料准备 [​](#材料准备)"`},`​`)],-1),r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`名称`),r(`th`,null,`数量`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,`ESP8266`),r(`td`,null,`1`)]),r(`tr`,null,[r(`td`,null,`红外LED`),r(`td`,null,`1`)]),r(`tr`,null,[r(`td`,null,`杜邦线`),r(`td`,null,`若干`)])])],-1),r(`p`,null,`注意需要红外LED，分辨方法，通电之后肉眼看不见白光，而是只能使用手机摄像头能看见微弱的红光。`,-1),r(`p`,null,[n(`当然你仍然可以基于以前的`),r(`a`,{href:`https://www.hebaiju.cn/posts/251013-ESP8266DormitorySmartDoor`,target:`_blank`,rel:`noreferrer`},`开源项目-「宿舍智能门」 - 鹤白居的小站`),n(`来继续在被控制端进行增加功能。这一次将使用RX引脚，兼容之前的项目。复用了这一段端口`)],-1),r(`h2`,{id:`接线方法-​`,tabindex:`-1`},[n(`接线方法 `),r(`a`,{href:`#%E6%8E%A5%E7%BA%BF%E6%96%B9%E6%B3%95`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#接线方法-​`,"aria-label":`Permalink to "接线方法 [​](#接线方法)"`},`​`)],-1),r(`p`,null,[n(`红外LED长针连接ESP8266的RX引脚如下图的 `),r(`strong`,null,`7 GPIO3 U0RXD`),n(`,短针连接在GND。`)],-1),r(`p`,null,[r(`img`,{src:`https://pic1.imgdb.cn/i/0342Dbvqd1uSPvGvJKkmHF.png`,alt:`ESP826601s引脚.png`}),r(`img`,{src:`https://pic1.imgdb.cn/i/0342DbwHd48GSPQUsGZuJg.jpg`,alt:`ESP8266引脚.jpg`})],-1),r(`h2`,{id:`测试代码-​`,tabindex:`-1`},[n(`测试代码 `),r(`a`,{href:`#%E6%B5%8B%E8%AF%95%E4%BB%A3%E7%A0%81`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#测试代码-​`,"aria-label":`Permalink to "测试代码 [​](#测试代码)"`},`​`)],-1),r(`p`,null,`接下来，你就可以连接上电脑来刷写下面的测试代码，来测试是否能够点亮led`,-1),r(`p`,null,`你通过串口需要向esp8266发送字符串 on 或者 off，然后通过手机摄像头，对准led观察是否有红色的闪光。多测试几次`,-1),r(`p`,null,`当然你先需要安装下面的库文件。有疑问可以复制发送给ai，咨询什么是库文件，怎么安装，这里不做阐述。`,-1),r(`p`,null,`注意`,-1),r(`p`,null,`注意应为复用RX引脚，所以在下述刷代码的时候请不要连接任何设备在GPIO3，否则刷写不成功。`,-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`// 红外灯的测试配置`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 正极连接esp8266D2 负极连接GND`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <IRremoteESP8266.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <IRsend.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <ir_Coolix.h>`),r(`span`,null,`  // 确保包含Coolix协议支持`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 引脚定义（ESP8266 D2=GPIO4；ESP32 D5=GPIO14）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const uint16_t kIrLed = 3;  // ESP8266用3`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`IRsend irsend(kIrLed);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void setup() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.begin(115200);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  irsend.begin();  // 初始化红外发送`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("设备启动，输入 'on' 发送开机码，'off' 发送关机码");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void loop() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (Serial.available() > 0) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    String cmd = Serial.readStringUntil('\\n');`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    cmd.trim();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // 发送Coolix 48位开机码（适配sendCoolix48函数）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (cmd == "on") {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      irsend.sendCoolix48(0xB20800000000, 48);  // 48位Coolix开机测试码`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("已发送开机码，查看LED是否闪烁");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // 发送Coolix 48位关机码`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    else if (cmd == "off") {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      irsend.sendCoolix48(0xB20801000000, 48);  // 48位Coolix关机测试码`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("已发送关机码，查看LED是否闪烁");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    else {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("未知指令，请输入 'on' 或 'off'");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  delay(50);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h2`,{id:`恭喜你-​`,tabindex:`-1`},[n(`恭喜你 `),r(`a`,{href:`#%E6%81%AD%E5%96%9C%E4%BD%A0`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#恭喜你-​`,"aria-label":`Permalink to "恭喜你 [​](#恭喜你)"`},`​`)],-1),r(`p`,null,`已经完成1/2，`,-1),r(`p`,null,`下面是B站博主的源代码，不能直接使用，我将基于此进行修改合并`,-1),r(`p`,null,`B站博主的源代码`,-1),r(`p`,null,[r(`a`,{href:`https://liveou.lanzoue.com/io0Pz3d4xmta`,target:`_blank`,rel:`noreferrer`},`这是博主的文件包`)],-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`//这个源代码来源于B站，我将基于此进行修改`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#define BLINKER_WIFI//通讯方式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <Blinker.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <IRsend.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <IRremoteESP8266.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <ir_Coolix.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`char auth[] = "";//这里填写设备密钥`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`char ssid[] = "";//这里填写wifi`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`char pswd[] = "";//这里填写wifi码`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//暂存温度数据`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`int nowtemp = 25;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`int num_Fan = 5;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//新建组件对象`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerNumber NUM1("settemp");//温度数据组件`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton Midea_power("btn-pwr");//电源开关组件`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton Midea_setFan("btn-fan");//风速组件`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton Midea_cool("btn-cool");//制冷模式组件`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton Midea_dry("btn-dry");//干燥模式组件`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton Midea_hot("btn-hot");//制热模式组件`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton Midea_auto("btn-auto");//自动模式组件`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerSlider Slider1("ran-wen");//温度调节滑块`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//使用ESP32的D5针脚，如果你使用的是ESP8266,则把"5"改"4"即ESP8266的D2针脚`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const uint16_t kIrLed = 4;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`IRCoolixAC ac(kIrLed);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void printState() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("Coolix A/C remote is in the following state:");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.printf("  %s\\n", ac.toString().c_str());`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//初始化`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void setup()`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.begin(115200);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  BLINKER_DEBUG.stream(Serial);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  ac.begin();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Midea_power.attach(Midea_power_callback);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Midea_setFan.attach(Midea_setFan_callback);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Midea_cool.attach(Midea_cool_callback);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Midea_dry.attach(Midea_dry_callback);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Midea_hot.attach(Midea_hot_callback);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Midea_auto.attach(Midea_auto_callback);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Slider1.attach(slider1_callback);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("Default state of the remote.");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  printState();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("Setting desired state for A/C.");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.attachHeartbeat(heartbeat);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.begin(auth, ssid, pswd);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void loop()`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.run();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//电源开关`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void Midea_power_callback(const String &state)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  BLINKER_LOG("get button state: ", state);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (state == BLINKER_CMD_ON)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.on();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.setMode(kCoolixCool);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.setTemp(25);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_power.icon("fal fa-power-off");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_power.color("#00FF00");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_power.text("开");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_power.print("on");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  else if (state == BLINKER_CMD_OFF)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.off();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_power.icon("fal fa-power-off");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_power.color("#FF0000");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_power.text("关");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_power.print("off");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//电源开关`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void slider1_callback(int32_t value)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  BLINKER_LOG("get slider value: ", value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  nowtemp = value;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  NUM1.print(nowtemp);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  ac.setTemp(nowtemp);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//风速心跳包`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void heartbeat()`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  switch (num_Fan)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 1:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Midea_setFan.text("静音");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 2:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Midea_setFan.text("低速");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 3:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Midea_setFan.text("中速");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 4:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Midea_setFan.text("高速");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      case 5:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Midea_setFan.text("自动");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Midea_setFan.print();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  NUM1.print(nowtemp);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//风速按钮`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void Midea_setFan_callback(const String &state)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (state == BLINKER_CMD_BUTTON_TAP)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    num_Fan++;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (num_Fan >= 6)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      num_Fan = 1;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    switch (num_Fan)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      case 1:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        ac.setFan(kCoolixFanFixed);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Midea_setFan.text("静音");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      case 2:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        ac.setFan(kCoolixFanMin);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Midea_setFan.text("低速");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      case 3:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        ac.setFan(kCoolixFanMed);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Midea_setFan.text("中速");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      case 4:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        ac.setFan(kCoolixFanMax);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Midea_setFan.text("高速");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      case 5:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        ac.setFan(kCoolixFanAuto0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Midea_setFan.text("自动");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Midea_setFan.print();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//制冷模式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void Midea_cool_callback(const String &state)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (state == BLINKER_CMD_BUTTON_TAP)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.setMode(kCoolixCool);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//干燥模式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void Midea_dry_callback(const String &state)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (state == BLINKER_CMD_BUTTON_TAP)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.setMode(kCoolixDry);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//制热模式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void Midea_hot_callback(const String &state)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (state == BLINKER_CMD_BUTTON_TAP)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.setMode(kCoolixHeat);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//自动模式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void Midea_auto_callback(const String &state)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (state == BLINKER_CMD_BUTTON_TAP)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.setMode(kCoolixAuto);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//空调温度`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void Slider1_callback(int32_t value)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`{`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  BLINKER_LOG("get slider value: ", value);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  nowtemp=value;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  NUM1.print(nowtemp);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.setTemp(nowtemp);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`p`,null,`B站博主的BLINKER里面的界面配置，可以直接导入。`,-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`{¨config¨{¨headerColor¨¨transparent¨¨headerStyle¨¨dark¨¨background¨{¨img¨¨assets/img/bg/1.jpg¨}}¨dashboard¨|{¨type¨¨btn¨¨ico¨¨fal fa-air-conditioner¨¨mode¨Ê¨t0¨´关´¨t1¨¨文本2¨¨bg¨Ë¨cols¨Ë¨rows¨Ë¨key¨¨btn-pwr¨´x´É´y´Ê¨speech¨|÷¨lstyle¨É¨clr¨¨#EA0909¨}{ß9¨num¨ßE¨温度¨ßB¨fal fa-thermometer-three-quarters¨ßO¨#076EEF¨¨min¨É¨max¨¤U¨uni¨´℃´ßHËßIÍßJËßK¨settemp¨´x´Í´y´ÊßM|÷ßNË¨rt¨»}{ß9¨ran¨ßEßRßO¨#00A90C¨ßV¤UßU¤HßHËßIÑßJËßK¨ran-wen¨´x´É´y´ÎßM|÷ßNË}{ß9ßAßB¨fal fa-fan¨ßDÉßE¨风速¨ßFßGßHËßIËßJËßK¨btn-fan¨´x´Ë´y´ÊßM|÷ßNÉßOßa}{ß9ßAßB¨fad fa-sun¨ßDÉßE¨干燥¨ßFßGßHËßIËßJËßK¨btn-dry¨´x´Ë´y´ÌßM|÷ßO¨#FBA613¨}{ß9ßAßB¨fad fa-fire-alt¨ßDÉßE¨制热¨ßFßGßHËßIËßJËßK¨btn-hot¨´x´Í´y´ÌßM|÷ßOßP}{ß9ßAßB¨fad fa-snowflakes¨ßDÉßE¨制冷¨ßFßGßHËßIËßJËßK¨btn-cool¨´x´É´y´ÌßM|÷ßOßT}{ß9ßAßB¨fad fa-user-robot¨ßDÉßE¨自动¨ßFßGßHËßIËßJËßK¨btn-auto¨´x´Ï´y´ÌßM|÷ßOßa}{ß9¨deb¨ßDÉßHÉßIÑßJÌßK¨debug¨´x´É´y´¤AßM|÷ßNÉ}÷ßY|ßX÷}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h2`,{id:`正式开始刷写代码-​`,tabindex:`-1`},[n(`正式开始刷写代码 `),r(`a`,{href:`#%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%A7%8B%E5%88%B7%E5%86%99%E4%BB%A3%E7%A0%81`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#正式开始刷写代码-​`,"aria-label":`Permalink to "正式开始刷写代码 [​](#正式开始刷写代码)"`},`​`)],-1),r(`p`,null,`以下代码可以直接刷写，注意安装库文件。`,-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`/****************************************************************************************`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * v2.0 —— 智能风速匹配版`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * 可以在其中修改，可以自己修改开机的模式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * 开门+板载灯控制+开关空调，自定义空调模式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` ****************************************************************************************/`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <Servo.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#define BLINKER_WIFI`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <Blinker.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <NTPClient.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <WiFiUdp.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <PubSubClient.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <IRremoteESP8266.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <IRsend.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <ir_Coolix.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 配置 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char AUTH[] = "";                         //电灯科技密钥测试`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// const char AUTH[] = "";`),r(`span`,null,`                      //电灯科技密钥正式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char WIFI_SSID[] = "";                    //WIFI名称`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char WIFI_PSWD[] = "";                    //WIFI密码`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* CUSTOM_HOSTNAME = "开门猫";          //设备名称`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* mqtt_server = "";                   //mqtt服务器`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int mqtt_port = 1883;                     //mqtt端口`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* mqtt_topic = "switch/state";        //mqtt主题订阅`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 硬件 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int SERVO_PIN = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int ONBOARD_LED_PIN = 2;  // 低电平亮`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const uint16_t kIrLed = 3;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int MIN_ANGLE = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int MAX_ANGLE = 90;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 参数 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int OPEN_KEEP_TIME = 2000;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int MOVE_TIME = 300;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int VIBRATE_DELAY = 250;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ▼▼▼▼▼▼▼▼▼▼▼ 季节性配置区  ▼▼▼▼▼▼▼▼▼▼▼`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    夏天制冷填: kCoolixCool 冬天制热填: kCoolixHeat 其他可选: kCoolixAuto(自动), kCoolixDry(除湿), kCoolixFan(送风) `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const uint8_t DEFAULT_AC_MODE = kCoolixCool; `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 2. 设置默认温度:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int DEFAULT_AC_TEMP = 20;     //（16-30）         `)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 3. 设置默认风速等级 (只需改这就行，硬件自动匹配):`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    1=静音(Fixed)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    2=低速(Min)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    3=中速(Med)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    4=高速(Max) - 推荐夏天用这个`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    5=自动(Auto)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int DEFAULT_FAN_LEVEL = 4;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 对象 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`WiFiUDP ntpUDP;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`NTPClient timeClient(ntpUDP, "pool.ntp.org", 8*3600, 60000);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`WiFiClient espClient;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`PubSubClient mqttClient(espClient);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Servo myServo;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`IRsend irsend(kIrLed);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`IRCoolixAC ac(kIrLed);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== Blinker 组件 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton btn_servo("key-servo");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton btn_light("key-light");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton btn_pwr("btn-pwr");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton btn_fan("btn-fan");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton btn_cool("btn-cool");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton btn_dry("btn-dry");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton btn_hot("btn-hot");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton btn_auto("btn-auto");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerSlider slider_temp("ran-wen");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerNumber NUM1("settemp");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 状态变量 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`bool lightState = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`bool timeSynced = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`bool lightManualOverride = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`static int lastHour = -1;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`bool isOpening = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`unsigned long servoTimer = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`enum ServoState { IDLE, GO_TO_90, STAY_90, GO_TO_0 } servoState = IDLE;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`bool ac_power = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`uint8_t ac_mode = kCoolixCool;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`uint8_t ac_temp = 25;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`uint8_t ac_fan = kCoolixFanAuto0; // 这个现在由函数自动管理`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`int fan_level = 5;                // 当前等级`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 核心辅助函数 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 【新功能】智能风速设置函数：输入等级，自动设置变量和硬件指令`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void applyFanLevel(int level) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (level < 1) level = 1;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (level > 5) level = 5;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  fan_level = level; // 更新全局等级变量`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 根据等级自动匹配硬件指令`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  switch(fan_level) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 1: ac_fan = kCoolixFanFixed; break; // 静音`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 2: ac_fan = kCoolixFanMin;   break; // 低速`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 3: ac_fan = kCoolixFanMed;   break; // 中速`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 4: ac_fan = kCoolixFanMax;   break; // 高速`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 5: ac_fan = kCoolixFanAuto0; break; // 自动`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`String getModeText() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  switch(ac_mode) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case kCoolixAuto: return "自动";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case kCoolixCool: return "制冷";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case kCoolixDry:  return "除湿";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case kCoolixHeat: return "制热";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    default: return "送风";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`String getFanText() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  switch(fan_level) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 1: return "静音"; case 2: return "低速";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case 3: return "中速"; case 4: return "高速"; case 5: return "自动";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    default: return "未知";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void sendAcState() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (!ac_power) { ac.off(); ac.send(); Serial.println("【空调】已关机"); return; }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  ac.on(); ac.setMode(ac_mode); ac.setTemp(ac_temp); ac.setFan(ac_fan); ac.send();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.printf("【空调】已发送 → %s %d°C %s风 (等级%d)\\n", getModeText().c_str(), ac_temp, getFanText().c_str(), fan_level);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void updateAppState() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_light.print(lightState ? "on" : "off");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (ac_power) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    btn_pwr.color("#00FF00"); btn_pwr.text("已开机"); btn_pwr.print("on");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  } else {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    btn_pwr.color("#FF0000"); btn_pwr.text("已关机"); btn_pwr.print("off");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  NUM1.print(ac_temp); slider_temp.print(ac_temp);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_fan.text(getFanText()); btn_fan.print();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  String c="#CCCCCC", d="#CCCCCC", h="#CCCCCC", a="#CCCCCC";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if(ac_power){`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(ac_mode==kCoolixCool) c="#00B0FF";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(ac_mode==kCoolixDry)  d="#FFC107";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(ac_mode==kCoolixHeat) h="#FF5722";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(ac_mode==kCoolixAuto) a="#4CAF50";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_cool.color(c); btn_cool.print();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_dry.color(d);  btn_dry.print();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_hot.color(h);  btn_hot.print();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_auto.color(a); btn_auto.print();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ... 灯光和门锁逻辑保持不变，省略以节省空间，功能与v4.1完全一致 ...`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void updateLightStateAccordingToTime() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (!timeSynced) return;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  int h = timeClient.getHours();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  bool shouldBeOn = (h >= 8 && h < 12) || (h >= 14 && h < 24);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  bool currentIsOn = (digitalRead(ONBOARD_LED_PIN) == LOW);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  bool newTimeSlot = (h != lastHour);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (newTimeSlot) { lightManualOverride = false; lastHour = h; Serial.printf("【自动灯光】进入 %02d:00，清除反转\\n", h); }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (currentIsOn != shouldBeOn) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (lightManualOverride && !newTimeSlot) return;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    lightState = shouldBeOn; digitalWrite(ONBOARD_LED_PIN, lightState ? LOW : HIGH);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    btn_light.print(lightState ? "on" : "off"); Serial.printf("【自动灯光】%02d:%02d → 自动%s\\n", h, timeClient.getMinutes(), lightState?"开":"关");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void toggleLightWithOverride() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  lightManualOverride = true; lightState = !lightState;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  digitalWrite(ONBOARD_LED_PIN, lightState ? LOW : HIGH);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_light.print(lightState ? "on" : "off"); Serial.println("【灯光】手动反转");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void rotateServoSequence() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (isOpening) return;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  isOpening = true; servoState = GO_TO_90; servoTimer = millis(); myServo.write(MAX_ANGLE);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("【门锁】开门"); Blinker.print("门", "开");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void handleServoNonBlock() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (!isOpening) return;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if(servoState==GO_TO_90 && millis()-servoTimer>=VIBRATE_DELAY){ Blinker.vibrate(); servoState=STAY_90; servoTimer=millis(); }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  else if(servoState==STAY_90 && millis()-servoTimer>=OPEN_KEEP_TIME){ myServo.write(MIN_ANGLE); Serial.println("【门锁】关门"); servoState=GO_TO_0; servoTimer=millis(); }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  else if(servoState==GO_TO_0 && millis()-servoTimer>=MOVE_TIME){ isOpening=false; servoState=IDLE; }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== setup ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void setup() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.begin(115200);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(F("\\n=== 终极融合版 v4.2 (智能风速) ==="));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  WiFi.hostname(CUSTOM_HOSTNAME);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  pinMode(ONBOARD_LED_PIN, OUTPUT); digitalWrite(ONBOARD_LED_PIN, HIGH);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  myServo.attach(SERVO_PIN); myServo.write(MIN_ANGLE);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  irsend.begin(); ac.begin();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.begin(AUTH, WIFI_SSID, WIFI_PSWD);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  delay(3000); WiFi.hostname(CUSTOM_HOSTNAME);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  timeClient.begin();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  for(int i=0; i<10; i++) { if(timeClient.forceUpdate()) { timeSynced=true; break; } delay(1000); }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if(timeSynced) Serial.println("时间同步成功");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_servo.attach([](const String &s) { rotateServoSequence(); });`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_light.attach([](const String &s) { toggleLightWithOverride(); });`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // ========== 空调逻辑优化区 ==========`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_pwr.attach([](const String &state){`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(state==BLINKER_CMD_ON && !ac_power){`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      ac_power = true; `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      // 1. 读取默认模式`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      ac_mode = DEFAULT_AC_MODE; `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      // 2. 读取默认温度`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      ac_temp = DEFAULT_AC_TEMP; `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      // 3. 读取默认等级，并自动计算硬件指令！`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      applyFanLevel(DEFAULT_FAN_LEVEL);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("【空调】一键启动(智能匹配风速)");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    } else if(state==BLINKER_CMD_OFF){ ac_power=false; }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    sendAcState(); updateAppState();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  });`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  slider_temp.attach([](int32_t v){ if(ac_power){ v=constrain(v,17,30); ac_temp=v; sendAcState(); updateAppState(); }});`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 风速按钮：现在非常简洁，直接调用函数`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_fan.attach([](const String &s){ `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(ac_power){ `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      int nextLevel = (fan_level >= 5) ? 1 : fan_level + 1; // 循环 1->2->3->4->5->1`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      applyFanLevel(nextLevel); // 一行代码搞定设置和硬件映射`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      sendAcState(); updateAppState(); `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  });`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_cool.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixCool;sendAcState();updateAppState();}});`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_dry.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixDry;sendAcState();updateAppState();}});`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_hot.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixHeat;sendAcState();updateAppState();}});`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  btn_auto.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixAuto;sendAcState();updateAppState();}});`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.attachHeartbeat(updateAppState);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  mqttClient.setServer(mqtt_server, mqtt_port);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  mqttClient.setCallback([](char*t,byte*p,unsigned int l){`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    String m=""; for(unsigned int i=0;i<l;i++)m+=(char)p[i];`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(m=="on") rotateServoSequence(); `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(m=="light") toggleLightWithOverride(); `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  });`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  updateAppState();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("系统就绪");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void loop() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.run();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  timeClient.update();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if(!mqttClient.connected()){`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    String id="ESP8266-"+String(random(0xffff),HEX);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(mqttClient.connect(id.c_str())) mqttClient.subscribe(mqtt_topic);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  mqttClient.loop();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  handleServoNonBlock();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  static unsigned long lastCheck = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if(millis() - lastCheck >= 30000){ updateLightStateAccordingToTime(); lastCheck = millis(); }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if(Serial.available()){`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    String c=Serial.readStringUntil('\\n'); c.trim(); c.toLowerCase();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(c=="on") rotateServoSequence();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    else if(c=="light") toggleLightWithOverride();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`p`,null,`注意：这里面可以自定义默认开机的空调模式，详情见注释`,-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`// ▼▼▼▼▼▼▼▼▼▼▼ 季节性配置区  ▼▼▼▼▼▼▼▼▼▼▼`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    夏天制冷填: kCoolixCool 冬天制热填: kCoolixHeat 其他可选: kCoolixAuto(自动), kCoolixDry(除湿), kCoolixFan(送风) `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const uint8_t DEFAULT_AC_MODE = kCoolixCool; `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 2. 设置默认温度:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int DEFAULT_AC_TEMP = 20;     //（16-30）         `)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 3. 设置默认风速等级 (只需改这就行，硬件自动匹配):`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    1=静音(Fixed)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    2=低速(Min)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    3=中速(Med)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    4=高速(Max) - 推荐夏天用这个`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`//    5=自动(Auto)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int DEFAULT_FAN_LEVEL = 4;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h2`,{id:`app配置-​`,tabindex:`-1`},[n(`APP配置 `),r(`a`,{href:`#app%E9%85%8D%E7%BD%AE`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#app配置-​`,"aria-label":`Permalink to "APP配置 [​](#app配置)"`},`​`)],-1),r(`p`,null,`使用了可以遥控空调的代码记得使用新的app配置`,-1),r(`p`,null,`如下：`,-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`{¨config¨{¨headerColor¨¨transparent¨¨headerStyle¨¨dark¨¨background¨{¨img¨¨assets/img/bg/f1.jpg¨¨isFull¨»}}¨dashboard¨|{¨type¨¨btn¨¨ico¨¨fal fa-air-conditioner¨¨mode¨Ê¨t0¨´关´¨t1¨¨文本2¨¨bg¨Ë¨cols¨Ë¨rows¨Ë¨key¨¨btn-pwr¨´x´É´y´Ê¨speech¨|÷¨lstyle¨É¨clr¨¨#EA0909¨}{ßA¨num¨ßF¨温度¨ßC¨fal fa-thermometer-three-quarters¨ßP¨#076EEF¨¨min¨É¨max¨¤U¨uni¨´℃´ßIËßJÍßKËßL¨settemp¨´x´Í´y´ÊßN|÷ßOË}{ßA¨ran¨ßFßSßP¨#00A90C¨ßW¤UßV¤HßIËßJÑßKËßL¨ran-wen¨´x´É´y´ÎßN|÷ßOË¨rt¨«}{ßAßBßC¨fal fa-fan¨ßEÉßF¨风速¨ßGßHßIËßJËßKËßL¨btn-fan¨´x´Ë´y´ÊßN|÷ßOÉßPßa}{ßAßBßC¨fad fa-sun¨ßEÉßF¨干燥¨ßGßHßIËßJËßKËßL¨btn-dry¨´x´Ë´y´ÌßN|÷ßP¨#FBA613¨}{ßAßBßC¨fad fa-fire-alt¨ßEÉßF¨制热¨ßGßHßIËßJËßKËßL¨btn-hot¨´x´Í´y´ÌßN|÷ßPßQ}{ßAßBßC¨fad fa-snowflakes¨ßEÉßF¨制冷¨ßGßHßIËßJËßKËßL¨btn-cool¨´x´É´y´ÌßN|÷ßPßU}{ßAßBßC¨fad fa-user-robot¨ßEÉßF¨自动¨ßGßHßIËßJËßKËßL¨btn-auto¨´x´Ï´y´ÌßN|÷ßPßa}{ßA¨deb¨ßEÉßIÉßJÑßKÍßL¨debug¨´x´É´y´¤DßN|÷ßOÊ}{ßAßBßC¨far fa-door-open¨ßEÊßF¨文本1¨ßGßHßIÊßJÍßKÍßL¨key-servo¨´x´Ë´y´ÑßPßaßOË}{ßAßBßC¨far fa-lightbulb-on¨ßEÉßF´´ßGßHßIËßJËßKËßL¨key-light¨´x´Ï´y´¤BßOÉßPßU}÷ßc|÷}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h2`,{id:`注意-​`,tabindex:`-1`},[n(`注意 `),r(`a`,{href:`#%E6%B3%A8%E6%84%8F`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#注意-​`,"aria-label":`Permalink to "注意 [​](#注意)"`},`​`)],-1),r(`p`,null,`注意`,-1),r(`p`,null,`直接使用esp8266RX口来驱动红外LED会有功率过于小的问题，你需要设置一个新的电路来驱动LED，可以查看B站博主的视频来构建。`,-1),r(`p`,null,`不添加电路只能实现5m范围的遥控`,-1),r(`p`,null,`再次提醒，因为使用了RX引脚，所以在上传代码的时候如果RX被LED占用会刷写不上代码。`,-1),r(`h2`,{id:`结束-​`,tabindex:`-1`},[n(`结束 `),r(`a`,{href:`#%E7%BB%93%E6%9D%9F`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#结束-​`,"aria-label":`Permalink to "结束 [​](#结束)"`},`​`)],-1),r(`p`,null,`恭喜你，现在你可以通过这个来控制空调了。`,-1)]]),"main-header":c(()=>[s(t.$slots,`main-header`)]),"main-header-after":c(()=>[s(t.$slots,`main-header-after`)]),"main-nav":c(()=>[s(t.$slots,`main-nav`)]),"main-content-before":c(()=>[s(t.$slots,`main-content-before`)]),"main-content":c(()=>[s(t.$slots,`main-content`)]),"main-content-after":c(()=>[s(t.$slots,`main-content-after`)]),"main-nav-before":c(()=>[s(t.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[s(t.$slots,`main-nav-after`)]),comment:c(()=>[s(t.$slots,`comment`)]),footer:c(()=>[s(t.$slots,`footer`)]),aside:c(()=>[s(t.$slots,`aside`)]),"aside-custom":c(()=>[s(t.$slots,`aside-custom`)]),default:c(()=>[s(t.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};