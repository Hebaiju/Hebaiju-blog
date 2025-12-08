import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang.D2CqqDQD.js";import"./chunks/@vueuse/motion.azCphnVb.js";import{e as _,u as g,a as C}from"./chunks/vue-router.DpalpfnG.js";import{aa as h,al as a,ag as p,af as n,ai as l,W as r,a9 as k,F as S,ab as E,Z as v}from"./framework.Dh18Cujy.js";import"./app.CmqufA6T.js";import"./chunks/dayjs.BdcnXKr1.js";import"./chunks/vue-i18n.DrqRw-jk.js";import"./chunks/pinia.Rnot4_r4.js";/* empty css                    */import"./chunks/nprogress.Bru8d7fl.js";import"./YunComment.vue_vue_type_style_index_0_lang.Cf1YGfNQ.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BE7ialfa.js";import"./post.Cf9nu-08.js";const x={class:"warning custom-block"},A={class:"custom-block-title custom-block-title-default"},B={class:"warning custom-block"},F={class:"custom-block-title custom-block-title-default"},M=_("/posts/251207-ESP8266AC-IR-Control",async i=>JSON.parse('{"title":"ESP8266控制空调","description":"","frontmatter":{"title":"ESP8266控制空调","date":"2025-12-9","updated":"2025-12-9","categories":"Code","icon":"i-ri-snowflake-fill","tags":["编程","ESP8266","项目"],"time_warning":"true | 3600000","draft":false,"hide":false,"codeHeightLimit":600},"headers":[],"relativePath":"pages/posts/251207-ESP8266AC-IR-Control.md","lastUpdated":null}'),{lazy:(i,t)=>i.name===t.name}),J={__name:"251207-ESP8266AC-IR-Control",setup(i,{expose:t}){const{data:o}=M(),d=C(),f=g(),c=Object.assign(f.meta.frontmatter||{},o.value?.frontmatter||{});return d.currentRoute.value.data=o.value,v("valaxy:frontmatter",c),globalThis.$frontmatter=c,t({frontmatter:{title:"ESP8266控制空调",date:"2025-12-9",updated:"2025-12-9",categories:"Code",icon:"i-ri-snowflake-fill",tags:["编程","ESP8266","项目"],time_warning:"true | 3600000",draft:!1,hide:!1,codeHeightLimit:600}}),(e,s)=>{const u=k("VT"),m=b;return E(),h(m,{frontmatter:S(c)},{"main-content-md":a(()=>[s[4]||(s[4]=n("h2",{id:"项目介绍",tabindex:"-1"},[l("项目介绍 "),n("a",{class:"header-anchor",href:"#项目介绍","aria-label":'Permalink to "项目介绍"'},"​")],-1)),s[5]||(s[5]=n("p",null,[l("本文章基于ESP8266开发板来实现对空调的控制，基本控制原理为，通过点灯科技APP向ESP8266来发送指令，ESP8266通过库来实现对红外LED的编码控制，从而实现对空调的控制。可以查看上一篇文章"),n("a",{href:"./251013-ESP8266DormitorySmartDoor"},"「宿舍智能门」 - 鹤白居的小站")],-1)),s[6]||(s[6]=n("p",null,[l("此项目源代码来源于B站博主"),n("a",{href:"https://space.bilibili.com/107884665",target:"_blank",rel:"noreferrer"},"DIY大白"),l("的视频"),n("a",{href:"https://www.bilibili.com/video/BV1JE411J77j/?share_source=copy_web&vd_source=c1934f3384f795e39369baf360bcb94c",target:"_blank",rel:"noreferrer"},"ESP8266红外遥控格力空调"),l("。首先感谢博主的开源精神，我将基于该原博主进行代码升级和功能优化。")],-1)),s[7]||(s[7]=n("hr",null,null,-1)),s[8]||(s[8]=n("h2",{id:"开始",tabindex:"-1"},[l("开始 "),n("a",{class:"header-anchor",href:"#开始","aria-label":'Permalink to "开始"'},"​")],-1)),s[9]||(s[9]=n("h2",{id:"材料准备",tabindex:"-1"},[l("材料准备 "),n("a",{class:"header-anchor",href:"#材料准备","aria-label":'Permalink to "材料准备"'},"​")],-1)),s[10]||(s[10]=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"名称"),n("th",{style:{"text-align":"center"}},"数量")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"ESP8266"),n("td",{style:{"text-align":"center"}},"1")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"红外LED"),n("td",{style:{"text-align":"center"}},"1")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"杜邦线"),n("td",{style:{"text-align":"center"}},"若干")])])],-1)),s[11]||(s[11]=n("p",null,"注意需要红外LED，分辨方法，通电之后肉眼看不见白光，而是只能使用手机摄像头能看见微弱的红光。",-1)),s[12]||(s[12]=n("p",null,[l("当然你仍然可以基于以前的"),n("a",{href:"https://www.hebaiju.cn/posts/251013-ESP8266DormitorySmartDoor",target:"_blank",rel:"noreferrer"},"开源项目-「宿舍智能门」 - 鹤白居的小站"),l("来继续在被控制端进行增加功能。这一次将使用RX引脚，兼容之前的项目。复用了这一段端口")],-1)),s[13]||(s[13]=n("h2",{id:"接线方法",tabindex:"-1"},[l("接线方法 "),n("a",{class:"header-anchor",href:"#接线方法","aria-label":'Permalink to "接线方法"'},"​")],-1)),s[14]||(s[14]=n("p",null,[l("红外LED长针连接ESP8266的RX引脚如下图的 "),n("strong",null,"7 GPIO3 U0RXD"),l(",短针连接在GND。")],-1)),s[15]||(s[15]=n("img",{src:"https://preview.cloud.189.cn/image/imageAction?param=901E54B6674F3BC055C07A20C2CDA50A449BA5F1D2DDCA8B8FC2A7A9BCEBD26108F8D9E45EF5D077282EA3892868CE20452733666294A2510BDD59C03FE58AAD41B9586569C216B0E97F80DEBF7A89737860B6BE090734470AB11C877C5E34FE821C13B21F6CC90922E658574EAD334E0AF8E09F",alt:"esp8266-01s",style:{zoom:"50%"}},null,-1)),s[16]||(s[16]=n("h2",{id:"测试代码",tabindex:"-1"},[l("测试代码 "),n("a",{class:"header-anchor",href:"#测试代码","aria-label":'Permalink to "测试代码"'},"​")],-1)),s[17]||(s[17]=n("p",null,"接下来，你就可以连接上电脑来刷写下面的测试代码，来测试是否能够点亮led",-1)),s[18]||(s[18]=n("p",null,"你通过串口需要向esp8266发送字符串 on 或者 off，然后通过手机摄像头，对准led观察是否有红色的闪光。多测试几次",-1)),s[19]||(s[19]=n("p",null,"当然你先需要安装下面的库文件。有疑问可以复制发送给ai，咨询什么是库文件，怎么安装，这里不做阐述。",-1)),n("div",x,[n("p",A,[r(u,{content:"blocks.warning"})]),s[0]||(s[0]=n("p",null,"注意应为复用RX引脚，所以在下述刷代码的时候请不要连接任何设备在GPIO3，否则刷写不成功。",-1))]),s[20]||(s[20]=n("div",{class:"language- max-h-600px"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"// 红外灯的测试配置")]),l(`
`),n("span",{class:"line"},[n("span",null,"// 正极连接esp8266D2 负极连接GND")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <IRremoteESP8266.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <IRsend.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <ir_Coolix.h>"),n("span",null,"  // 确保包含Coolix协议支持")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// 引脚定义（ESP8266 D2=GPIO4；ESP32 D5=GPIO14）")]),l(`
`),n("span",{class:"line"},[n("span",null,"const uint16_t kIrLed = 3;  // ESP8266用3")]),l(`
`),n("span",{class:"line"},[n("span",null,"IRsend irsend(kIrLed);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"void setup() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Serial.begin(115200);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  irsend.begin();  // 初始化红外发送")]),l(`
`),n("span",{class:"line"},[n("span",null,`  Serial.println("设备启动，输入 'on' 发送开机码，'off' 发送关机码");`)]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"void loop() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (Serial.available() > 0) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    String cmd = Serial.readStringUntil('\\n');")]),l(`
`),n("span",{class:"line"},[n("span",null,"    cmd.trim();")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // 发送Coolix 48位开机码（适配sendCoolix48函数）")]),l(`
`),n("span",{class:"line"},[n("span",null,'    if (cmd == "on") {')]),l(`
`),n("span",{class:"line"},[n("span",null,"      irsend.sendCoolix48(0xB20800000000, 48);  // 48位Coolix开机测试码")]),l(`
`),n("span",{class:"line"},[n("span",null,'      Serial.println("已发送开机码，查看LED是否闪烁");')]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // 发送Coolix 48位关机码")]),l(`
`),n("span",{class:"line"},[n("span",null,'    else if (cmd == "off") {')]),l(`
`),n("span",{class:"line"},[n("span",null,"      irsend.sendCoolix48(0xB20801000000, 48);  // 48位Coolix关机测试码")]),l(`
`),n("span",{class:"line"},[n("span",null,'      Serial.println("已发送关机码，查看LED是否闪烁");')]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    else {")]),l(`
`),n("span",{class:"line"},[n("span",null,`      Serial.println("未知指令，请输入 'on' 或 'off'");`)]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  delay(50);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[21]||(s[21]=n("h2",{id:"恭喜你",tabindex:"-1"},[l("恭喜你 "),n("a",{class:"header-anchor",href:"#恭喜你","aria-label":'Permalink to "恭喜你"'},"​")],-1)),s[22]||(s[22]=n("p",null,"已经完成1/2，",-1)),s[23]||(s[23]=n("p",null,"下面是B站博主的源代码，不能直接使用，我将基于此进行修改合并",-1)),s[24]||(s[24]=n("details",{class:"details custom-block"},[n("summary",null,"B站博主的源代码"),n("p",null,[n("a",{href:"https://liveou.lanzoue.com/io0Pz3d4xmta",target:"_blank",rel:"noreferrer"},"这是博主的文件包")]),n("div",{class:"language- max-h-600px"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"//这个源代码来源于B站，我将基于此进行修改")]),l(`
`),n("span",{class:"line"},[n("span",null,"#define BLINKER_WIFI//通讯方式")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <Blinker.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <IRsend.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <IRremoteESP8266.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <ir_Coolix.h>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,'char auth[] = "";//这里填写设备密钥')]),l(`
`),n("span",{class:"line"},[n("span",null,'char ssid[] = "";//这里填写wifi')]),l(`
`),n("span",{class:"line"},[n("span",null,'char pswd[] = "";//这里填写wifi码')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//暂存温度数据")]),l(`
`),n("span",{class:"line"},[n("span",null,"int nowtemp = 25;")]),l(`
`),n("span",{class:"line"},[n("span",null,"int num_Fan = 5;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//新建组件对象")]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerNumber NUM1("settemp");//温度数据组件')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton Midea_power("btn-pwr");//电源开关组件')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton Midea_setFan("btn-fan");//风速组件')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton Midea_cool("btn-cool");//制冷模式组件')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton Midea_dry("btn-dry");//干燥模式组件')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton Midea_hot("btn-hot");//制热模式组件')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton Midea_auto("btn-auto");//自动模式组件')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerSlider Slider1("ran-wen");//温度调节滑块')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,'//使用ESP32的D5针脚，如果你使用的是ESP8266,则把"5"改"4"即ESP8266的D2针脚')]),l(`
`),n("span",{class:"line"},[n("span",null,"const uint16_t kIrLed = 4;")]),l(`
`),n("span",{class:"line"},[n("span",null,"IRCoolixAC ac(kIrLed);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"void printState() {")]),l(`
`),n("span",{class:"line"},[n("span",null,'  Serial.println("Coolix A/C remote is in the following state:");')]),l(`
`),n("span",{class:"line"},[n("span",null,'  Serial.printf("  %s\\n", ac.toString().c_str());')]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//初始化")]),l(`
`),n("span",{class:"line"},[n("span",null,"void setup()")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Serial.begin(115200);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  BLINKER_DEBUG.stream(Serial);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ac.begin();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Midea_power.attach(Midea_power_callback);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Midea_setFan.attach(Midea_setFan_callback);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Midea_cool.attach(Midea_cool_callback);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Midea_dry.attach(Midea_dry_callback);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Midea_hot.attach(Midea_hot_callback);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Midea_auto.attach(Midea_auto_callback);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Slider1.attach(slider1_callback);")]),l(`
`),n("span",{class:"line"},[n("span",null,'  Serial.println("Default state of the remote.");')]),l(`
`),n("span",{class:"line"},[n("span",null,"  printState();")]),l(`
`),n("span",{class:"line"},[n("span",null,'  Serial.println("Setting desired state for A/C.");')]),l(`
`),n("span",{class:"line"},[n("span",null,"  Blinker.attachHeartbeat(heartbeat);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Blinker.begin(auth, ssid, pswd);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"void loop()")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Blinker.run();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//电源开关")]),l(`
`),n("span",{class:"line"},[n("span",null,"void Midea_power_callback(const String &state)")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,'  BLINKER_LOG("get button state: ", state);')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (state == BLINKER_CMD_ON)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.on();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.setMode(kCoolixCool);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.setTemp(25);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,'    Midea_power.icon("fal fa-power-off");')]),l(`
`),n("span",{class:"line"},[n("span",null,'    Midea_power.color("#00FF00");')]),l(`
`),n("span",{class:"line"},[n("span",null,'    Midea_power.text("开");')]),l(`
`),n("span",{class:"line"},[n("span",null,'    Midea_power.print("on");')]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  else if (state == BLINKER_CMD_OFF)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.off();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,'    Midea_power.icon("fal fa-power-off");')]),l(`
`),n("span",{class:"line"},[n("span",null,'    Midea_power.color("#FF0000");')]),l(`
`),n("span",{class:"line"},[n("span",null,'    Midea_power.text("关");')]),l(`
`),n("span",{class:"line"},[n("span",null,'    Midea_power.print("off");')]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//电源开关")]),l(`
`),n("span",{class:"line"},[n("span",null,"void slider1_callback(int32_t value)")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,'  BLINKER_LOG("get slider value: ", value);')]),l(`
`),n("span",{class:"line"},[n("span",null,"  nowtemp = value;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  NUM1.print(nowtemp);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ac.setTemp(nowtemp);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//风速心跳包")]),l(`
`),n("span",{class:"line"},[n("span",null,"void heartbeat()")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  switch (num_Fan)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 1:")]),l(`
`),n("span",{class:"line"},[n("span",null,'      Midea_setFan.text("静音");')]),l(`
`),n("span",{class:"line"},[n("span",null,"      break;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 2:")]),l(`
`),n("span",{class:"line"},[n("span",null,'      Midea_setFan.text("低速");')]),l(`
`),n("span",{class:"line"},[n("span",null,"      break;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 3:")]),l(`
`),n("span",{class:"line"},[n("span",null,'      Midea_setFan.text("中速");')]),l(`
`),n("span",{class:"line"},[n("span",null,"      break;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 4:")]),l(`
`),n("span",{class:"line"},[n("span",null,'      Midea_setFan.text("高速");')]),l(`
`),n("span",{class:"line"},[n("span",null,"      break;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"      case 5:")]),l(`
`),n("span",{class:"line"},[n("span",null,'      Midea_setFan.text("自动");')]),l(`
`),n("span",{class:"line"},[n("span",null,"      break;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Midea_setFan.print();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  NUM1.print(nowtemp);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//风速按钮")]),l(`
`),n("span",{class:"line"},[n("span",null,"void Midea_setFan_callback(const String &state)")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (state == BLINKER_CMD_BUTTON_TAP)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    num_Fan++;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    if (num_Fan >= 6)")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      num_Fan = 1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    switch (num_Fan)")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      case 1:")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ac.setFan(kCoolixFanFixed);")]),l(`
`),n("span",{class:"line"},[n("span",null,'        Midea_setFan.text("静音");')]),l(`
`),n("span",{class:"line"},[n("span",null,"        break;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"      case 2:")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ac.setFan(kCoolixFanMin);")]),l(`
`),n("span",{class:"line"},[n("span",null,'        Midea_setFan.text("低速");')]),l(`
`),n("span",{class:"line"},[n("span",null,"        break;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"      case 3:")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ac.setFan(kCoolixFanMed);")]),l(`
`),n("span",{class:"line"},[n("span",null,'        Midea_setFan.text("中速");')]),l(`
`),n("span",{class:"line"},[n("span",null,"        break;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"      case 4:")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ac.setFan(kCoolixFanMax);")]),l(`
`),n("span",{class:"line"},[n("span",null,'        Midea_setFan.text("高速");')]),l(`
`),n("span",{class:"line"},[n("span",null,"        break;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ")]),l(`
`),n("span",{class:"line"},[n("span",null,"      case 5:")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ac.setFan(kCoolixFanAuto0);")]),l(`
`),n("span",{class:"line"},[n("span",null,'        Midea_setFan.text("自动");')]),l(`
`),n("span",{class:"line"},[n("span",null,"        break;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    Midea_setFan.print();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//制冷模式")]),l(`
`),n("span",{class:"line"},[n("span",null,"void Midea_cool_callback(const String &state)")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (state == BLINKER_CMD_BUTTON_TAP)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.setMode(kCoolixCool);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//干燥模式")]),l(`
`),n("span",{class:"line"},[n("span",null,"void Midea_dry_callback(const String &state)")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (state == BLINKER_CMD_BUTTON_TAP)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.setMode(kCoolixDry);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//制热模式")]),l(`
`),n("span",{class:"line"},[n("span",null,"void Midea_hot_callback(const String &state)")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (state == BLINKER_CMD_BUTTON_TAP)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.setMode(kCoolixHeat);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//自动模式")]),l(`
`),n("span",{class:"line"},[n("span",null,"void Midea_auto_callback(const String &state)")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (state == BLINKER_CMD_BUTTON_TAP)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.setMode(kCoolixAuto);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//空调温度")]),l(`
`),n("span",{class:"line"},[n("span",null,"void Slider1_callback(int32_t value)")]),l(`
`),n("span",{class:"line"},[n("span",null,"{")]),l(`
`),n("span",{class:"line"},[n("span",null,'  BLINKER_LOG("get slider value: ", value);')]),l(`
`),n("span",{class:"line"},[n("span",null,"  nowtemp=value;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  NUM1.print(nowtemp);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.setTemp(nowtemp);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})]),n("p",null,"B站博主的BLINKER里面的界面配置，可以直接导入。"),n("div",{class:"language- max-h-600px"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{¨config¨{¨headerColor¨¨transparent¨¨headerStyle¨¨dark¨¨background¨{¨img¨¨assets/img/bg/1.jpg¨}}¨dashboard¨|{¨type¨¨btn¨¨ico¨¨fal fa-air-conditioner¨¨mode¨Ê¨t0¨´关´¨t1¨¨文本2¨¨bg¨Ë¨cols¨Ë¨rows¨Ë¨key¨¨btn-pwr¨´x´É´y´Ê¨speech¨|÷¨lstyle¨É¨clr¨¨#EA0909¨}{ß9¨num¨ßE¨温度¨ßB¨fal fa-thermometer-three-quarters¨ßO¨#076EEF¨¨min¨É¨max¨¤U¨uni¨´℃´ßHËßIÍßJËßK¨settemp¨´x´Í´y´ÊßM|÷ßNË¨rt¨»}{ß9¨ran¨ßEßRßO¨#00A90C¨ßV¤UßU¤HßHËßIÑßJËßK¨ran-wen¨´x´É´y´ÎßM|÷ßNË}{ß9ßAßB¨fal fa-fan¨ßDÉßE¨风速¨ßFßGßHËßIËßJËßK¨btn-fan¨´x´Ë´y´ÊßM|÷ßNÉßOßa}{ß9ßAßB¨fad fa-sun¨ßDÉßE¨干燥¨ßFßGßHËßIËßJËßK¨btn-dry¨´x´Ë´y´ÌßM|÷ßO¨#FBA613¨}{ß9ßAßB¨fad fa-fire-alt¨ßDÉßE¨制热¨ßFßGßHËßIËßJËßK¨btn-hot¨´x´Í´y´ÌßM|÷ßOßP}{ß9ßAßB¨fad fa-snowflakes¨ßDÉßE¨制冷¨ßFßGßHËßIËßJËßK¨btn-cool¨´x´É´y´ÌßM|÷ßOßT}{ß9ßAßB¨fad fa-user-robot¨ßDÉßE¨自动¨ßFßGßHËßIËßJËßK¨btn-auto¨´x´Ï´y´ÌßM|÷ßOßa}{ß9¨deb¨ßDÉßHÉßIÑßJÌßK¨debug¨´x´É´y´¤AßM|÷ßNÉ}÷ßY|ßX÷}")])])]),n("button",{class:"code-block-unfold-btn"})])],-1)),s[25]||(s[25]=n("h2",{id:"正式开始刷写代码",tabindex:"-1"},[l("正式开始刷写代码 "),n("a",{class:"header-anchor",href:"#正式开始刷写代码","aria-label":'Permalink to "正式开始刷写代码"'},"​")],-1)),s[26]||(s[26]=n("p",null,"以下代码可以直接刷写，注意安装库文件。",-1)),s[27]||(s[27]=n("div",{class:"language- max-h-600px"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/****************************************************************************************")]),l(`
`),n("span",{class:"line"},[n("span",null," * 终极融合版 v2.0 —— 智能风速匹配版")]),l(`
`),n("span",{class:"line"},[n("span",null," * 可以在其中修改，可以自己修改开机的模式")]),l(`
`),n("span",{class:"line"},[n("span",null," * 开门+板载灯控制+开关空调，自定义空调模式")]),l(`
`),n("span",{class:"line"},[n("span",null," ****************************************************************************************/")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <Servo.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#define BLINKER_WIFI")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <Blinker.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <NTPClient.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <WiFiUdp.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <PubSubClient.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <IRremoteESP8266.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <IRsend.h>")]),l(`
`),n("span",{class:"line"},[n("span",null,"#include <ir_Coolix.h>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ====================== 配置 ======================")]),l(`
`),n("span",{class:"line"},[n("span",null,'const char AUTH[] = "";//测试')]),l(`
`),n("span",{class:"line"},[n("span",null,'// const char AUTH[] = "";//正式')]),l(`
`),n("span",{class:"line"},[n("span",null,'const char WIFI_SSID[] = "";')]),l(`
`),n("span",{class:"line"},[n("span",null,'const char WIFI_PSWD[] = "";')]),l(`
`),n("span",{class:"line"},[n("span",null,'const char* CUSTOM_HOSTNAME = "开门猫";')]),l(`
`),n("span",{class:"line"},[n("span",null,'const char* mqtt_server = "broker.emqx.io";')]),l(`
`),n("span",{class:"line"},[n("span",null,"const int mqtt_port = 1883;")]),l(`
`),n("span",{class:"line"},[n("span",null,'const char* mqtt_topic = "switch/state";')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ====================== 硬件 ======================")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int SERVO_PIN = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int ONBOARD_LED_PIN = 2;  // 低电平亮")]),l(`
`),n("span",{class:"line"},[n("span",null,"const uint16_t kIrLed = 3;")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int MIN_ANGLE = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int MAX_ANGLE = 90;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ====================== 参数 ======================")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int OPEN_KEEP_TIME = 2000;")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int MOVE_TIME = 300;")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int VIBRATE_DELAY = 250;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ▼▼▼▼▼▼▼▼▼▼▼ 季节性配置区  ▼▼▼▼▼▼▼▼▼▼▼")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    夏天制冷填: kCoolixCool 冬天制热填: kCoolixHeat 其他可选: kCoolixAuto(自动), kCoolixDry(除湿), kCoolixFan(送风) ")]),l(`
`),n("span",{class:"line"},[n("span",null,"const uint8_t DEFAULT_AC_MODE = kCoolixCool; ")]),l(`
`),n("span",{class:"line"},[n("span",null,"// 2. 设置默认温度:")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int DEFAULT_AC_TEMP = 20;     //（16-30）         ")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// 3. 设置默认风速等级 (只需改这就行，硬件自动匹配):")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    1=静音(Fixed)")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    2=低速(Min)")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    3=中速(Med)")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    4=高速(Max) - 推荐夏天用这个")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    5=自动(Auto)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int DEFAULT_FAN_LEVEL = 4;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ====================== 对象 ======================")]),l(`
`),n("span",{class:"line"},[n("span",null,"WiFiUDP ntpUDP;")]),l(`
`),n("span",{class:"line"},[n("span",null,'NTPClient timeClient(ntpUDP, "pool.ntp.org", 8*3600, 60000);')]),l(`
`),n("span",{class:"line"},[n("span",null,"WiFiClient espClient;")]),l(`
`),n("span",{class:"line"},[n("span",null,"PubSubClient mqttClient(espClient);")]),l(`
`),n("span",{class:"line"},[n("span",null,"Servo myServo;")]),l(`
`),n("span",{class:"line"},[n("span",null,"IRsend irsend(kIrLed);")]),l(`
`),n("span",{class:"line"},[n("span",null,"IRCoolixAC ac(kIrLed);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ====================== Blinker 组件 ======================")]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton btn_servo("key-servo");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton btn_light("key-light");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton btn_pwr("btn-pwr");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton btn_fan("btn-fan");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton btn_cool("btn-cool");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton btn_dry("btn-dry");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton btn_hot("btn-hot");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerButton btn_auto("btn-auto");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerSlider slider_temp("ran-wen");')]),l(`
`),n("span",{class:"line"},[n("span",null,'BlinkerNumber NUM1("settemp");')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ====================== 状态变量 ======================")]),l(`
`),n("span",{class:"line"},[n("span",null,"bool lightState = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"bool timeSynced = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"bool lightManualOverride = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"static int lastHour = -1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"bool isOpening = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"unsigned long servoTimer = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"enum ServoState { IDLE, GO_TO_90, STAY_90, GO_TO_0 } servoState = IDLE;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"bool ac_power = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"uint8_t ac_mode = kCoolixCool;")]),l(`
`),n("span",{class:"line"},[n("span",null,"uint8_t ac_temp = 25;")]),l(`
`),n("span",{class:"line"},[n("span",null,"uint8_t ac_fan = kCoolixFanAuto0; // 这个现在由函数自动管理")]),l(`
`),n("span",{class:"line"},[n("span",null,"int fan_level = 5;                // 当前等级")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ====================== 核心辅助函数 ======================")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// 【新功能】智能风速设置函数：输入等级，自动设置变量和硬件指令")]),l(`
`),n("span",{class:"line"},[n("span",null,"void applyFanLevel(int level) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (level < 1) level = 1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (level > 5) level = 5;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  fan_level = level; // 更新全局等级变量")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // 根据等级自动匹配硬件指令")]),l(`
`),n("span",{class:"line"},[n("span",null,"  switch(fan_level) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 1: ac_fan = kCoolixFanFixed; break; // 静音")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 2: ac_fan = kCoolixFanMin;   break; // 低速")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 3: ac_fan = kCoolixFanMed;   break; // 中速")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 4: ac_fan = kCoolixFanMax;   break; // 高速")]),l(`
`),n("span",{class:"line"},[n("span",null,"    case 5: ac_fan = kCoolixFanAuto0; break; // 自动")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"String getModeText() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  switch(ac_mode) {")]),l(`
`),n("span",{class:"line"},[n("span",null,'    case kCoolixAuto: return "自动";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    case kCoolixCool: return "制冷";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    case kCoolixDry:  return "除湿";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    case kCoolixHeat: return "制热";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    default: return "送风";')]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"String getFanText() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  switch(fan_level) {")]),l(`
`),n("span",{class:"line"},[n("span",null,'    case 1: return "静音"; case 2: return "低速";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    case 3: return "中速"; case 4: return "高速"; case 5: return "自动";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    default: return "未知";')]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"void sendAcState() {")]),l(`
`),n("span",{class:"line"},[n("span",null,'  if (!ac_power) { ac.off(); ac.send(); Serial.println("【空调】已关机"); return; }')]),l(`
`),n("span",{class:"line"},[n("span",null,"  ac.on(); ac.setMode(ac_mode); ac.setTemp(ac_temp); ac.setFan(ac_fan); ac.send();")]),l(`
`),n("span",{class:"line"},[n("span",null,'  Serial.printf("【空调】已发送 → %s %d°C %s风 (等级%d)\\n", getModeText().c_str(), ac_temp, getFanText().c_str(), fan_level);')]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"void updateAppState() {")]),l(`
`),n("span",{class:"line"},[n("span",null,'  btn_light.print(lightState ? "on" : "off");')]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (ac_power) {")]),l(`
`),n("span",{class:"line"},[n("span",null,'    btn_pwr.color("#00FF00"); btn_pwr.text("已开机"); btn_pwr.print("on");')]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,'    btn_pwr.color("#FF0000"); btn_pwr.text("已关机"); btn_pwr.print("off");')]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  NUM1.print(ac_temp); slider_temp.print(ac_temp);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_fan.text(getFanText()); btn_fan.print();")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,'  String c="#CCCCCC", d="#CCCCCC", h="#CCCCCC", a="#CCCCCC";')]),l(`
`),n("span",{class:"line"},[n("span",null,"  if(ac_power){")]),l(`
`),n("span",{class:"line"},[n("span",null,'    if(ac_mode==kCoolixCool) c="#00B0FF";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    if(ac_mode==kCoolixDry)  d="#FFC107";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    if(ac_mode==kCoolixHeat) h="#FF5722";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    if(ac_mode==kCoolixAuto) a="#4CAF50";')]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_cool.color(c); btn_cool.print();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_dry.color(d);  btn_dry.print();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_hot.color(h);  btn_hot.print();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_auto.color(a); btn_auto.print();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ... 灯光和门锁逻辑保持不变，省略以节省空间，功能与v4.1完全一致 ...")]),l(`
`),n("span",{class:"line"},[n("span",null,"void updateLightStateAccordingToTime() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (!timeSynced) return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  int h = timeClient.getHours();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  bool shouldBeOn = (h >= 8 && h < 12) || (h >= 14 && h < 24);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  bool currentIsOn = (digitalRead(ONBOARD_LED_PIN) == LOW);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  bool newTimeSlot = (h != lastHour);")]),l(`
`),n("span",{class:"line"},[n("span",null,'  if (newTimeSlot) { lightManualOverride = false; lastHour = h; Serial.printf("【自动灯光】进入 %02d:00，清除反转\\n", h); }')]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (currentIsOn != shouldBeOn) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    if (lightManualOverride && !newTimeSlot) return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    lightState = shouldBeOn; digitalWrite(ONBOARD_LED_PIN, lightState ? LOW : HIGH);")]),l(`
`),n("span",{class:"line"},[n("span",null,'    btn_light.print(lightState ? "on" : "off"); Serial.printf("【自动灯光】%02d:%02d → 自动%s\\n", h, timeClient.getMinutes(), lightState?"开":"关");')]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"void toggleLightWithOverride() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  lightManualOverride = true; lightState = !lightState;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  digitalWrite(ONBOARD_LED_PIN, lightState ? LOW : HIGH);")]),l(`
`),n("span",{class:"line"},[n("span",null,'  btn_light.print(lightState ? "on" : "off"); Serial.println("【灯光】手动反转");')]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"void rotateServoSequence() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (isOpening) return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  isOpening = true; servoState = GO_TO_90; servoTimer = millis(); myServo.write(MAX_ANGLE);")]),l(`
`),n("span",{class:"line"},[n("span",null,'  Serial.println("【门锁】开门"); Blinker.print("门", "开");')]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"void handleServoNonBlock() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (!isOpening) return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if(servoState==GO_TO_90 && millis()-servoTimer>=VIBRATE_DELAY){ Blinker.vibrate(); servoState=STAY_90; servoTimer=millis(); }")]),l(`
`),n("span",{class:"line"},[n("span",null,'  else if(servoState==STAY_90 && millis()-servoTimer>=OPEN_KEEP_TIME){ myServo.write(MIN_ANGLE); Serial.println("【门锁】关门"); servoState=GO_TO_0; servoTimer=millis(); }')]),l(`
`),n("span",{class:"line"},[n("span",null,"  else if(servoState==GO_TO_0 && millis()-servoTimer>=MOVE_TIME){ isOpening=false; servoState=IDLE; }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ====================== setup ======================")]),l(`
`),n("span",{class:"line"},[n("span",null,"void setup() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Serial.begin(115200);")]),l(`
`),n("span",{class:"line"},[n("span",null,'  Serial.println(F("\\n=== 终极融合版 v4.2 (智能风速) ==="));')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  WiFi.hostname(CUSTOM_HOSTNAME);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  pinMode(ONBOARD_LED_PIN, OUTPUT); digitalWrite(ONBOARD_LED_PIN, HIGH);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  myServo.attach(SERVO_PIN); myServo.write(MIN_ANGLE);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  irsend.begin(); ac.begin();")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Blinker.begin(AUTH, WIFI_SSID, WIFI_PSWD);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  delay(3000); WiFi.hostname(CUSTOM_HOSTNAME);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  timeClient.begin();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  for(int i=0; i<10; i++) { if(timeClient.forceUpdate()) { timeSynced=true; break; } delay(1000); }")]),l(`
`),n("span",{class:"line"},[n("span",null,'  if(timeSynced) Serial.println("时间同步成功");')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_servo.attach([](const String &s) { rotateServoSequence(); });")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_light.attach([](const String &s) { toggleLightWithOverride(); });")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // ========== 空调逻辑优化区 ==========")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_pwr.attach([](const String &state){")]),l(`
`),n("span",{class:"line"},[n("span",null,"    if(state==BLINKER_CMD_ON && !ac_power){")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ac_power = true; ")]),l(`
`),n("span",{class:"line"},[n("span",null,"      // 1. 读取默认模式")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ac_mode = DEFAULT_AC_MODE; ")]),l(`
`),n("span",{class:"line"},[n("span",null,"      // 2. 读取默认温度")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ac_temp = DEFAULT_AC_TEMP; ")]),l(`
`),n("span",{class:"line"},[n("span",null,"      // 3. 读取默认等级，并自动计算硬件指令！")]),l(`
`),n("span",{class:"line"},[n("span",null,"      applyFanLevel(DEFAULT_FAN_LEVEL);")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ")]),l(`
`),n("span",{class:"line"},[n("span",null,'      Serial.println("【空调】一键启动(智能匹配风速)");')]),l(`
`),n("span",{class:"line"},[n("span",null,"    } else if(state==BLINKER_CMD_OFF){ ac_power=false; }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sendAcState(); updateAppState();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  slider_temp.attach([](int32_t v){ if(ac_power){ v=constrain(v,17,30); ac_temp=v; sendAcState(); updateAppState(); }});")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // 风速按钮：现在非常简洁，直接调用函数")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_fan.attach([](const String &s){ ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    if(ac_power){ ")]),l(`
`),n("span",{class:"line"},[n("span",null,"      int nextLevel = (fan_level >= 5) ? 1 : fan_level + 1; // 循环 1->2->3->4->5->1")]),l(`
`),n("span",{class:"line"},[n("span",null,"      applyFanLevel(nextLevel); // 一行代码搞定设置和硬件映射")]),l(`
`),n("span",{class:"line"},[n("span",null,"      sendAcState(); updateAppState(); ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_cool.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixCool;sendAcState();updateAppState();}});")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_dry.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixDry;sendAcState();updateAppState();}});")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_hot.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixHeat;sendAcState();updateAppState();}});")]),l(`
`),n("span",{class:"line"},[n("span",null,"  btn_auto.attach([](const String&s){if(ac_power&&s==BLINKER_CMD_BUTTON_TAP){ac_mode=kCoolixAuto;sendAcState();updateAppState();}});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Blinker.attachHeartbeat(updateAppState);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  mqttClient.setServer(mqtt_server, mqtt_port);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  mqttClient.setCallback([](char*t,byte*p,unsigned int l){")]),l(`
`),n("span",{class:"line"},[n("span",null,'    String m=""; for(unsigned int i=0;i<l;i++)m+=(char)p[i];')]),l(`
`),n("span",{class:"line"},[n("span",null,'    if(m=="on") rotateServoSequence(); ')]),l(`
`),n("span",{class:"line"},[n("span",null,'    if(m=="light") toggleLightWithOverride(); ')]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  updateAppState();")]),l(`
`),n("span",{class:"line"},[n("span",null,'  Serial.println("系统就绪");')]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"void loop() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Blinker.run();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  timeClient.update();")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if(!mqttClient.connected()){")]),l(`
`),n("span",{class:"line"},[n("span",null,'    String id="ESP8266-"+String(random(0xffff),HEX);')]),l(`
`),n("span",{class:"line"},[n("span",null,"    if(mqttClient.connect(id.c_str())) mqttClient.subscribe(mqtt_topic);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  mqttClient.loop();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  handleServoNonBlock();")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  static unsigned long lastCheck = 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if(millis() - lastCheck >= 30000){ updateLightStateAccordingToTime(); lastCheck = millis(); }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if(Serial.available()){")]),l(`
`),n("span",{class:"line"},[n("span",null,"    String c=Serial.readStringUntil('\\n'); c.trim(); c.toLowerCase();")]),l(`
`),n("span",{class:"line"},[n("span",null,'    if(c=="on") rotateServoSequence();')]),l(`
`),n("span",{class:"line"},[n("span",null,'    else if(c=="light") toggleLightWithOverride();')]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[28]||(s[28]=n("p",null,"注意：这里面可以自定义默认开机的空调模式，详情见注释",-1)),s[29]||(s[29]=n("div",{class:"language- max-h-600px"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"// ▼▼▼▼▼▼▼▼▼▼▼ 季节性配置区  ▼▼▼▼▼▼▼▼▼▼▼")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    夏天制冷填: kCoolixCool 冬天制热填: kCoolixHeat 其他可选: kCoolixAuto(自动), kCoolixDry(除湿), kCoolixFan(送风) ")]),l(`
`),n("span",{class:"line"},[n("span",null,"const uint8_t DEFAULT_AC_MODE = kCoolixCool; ")]),l(`
`),n("span",{class:"line"},[n("span",null,"// 2. 设置默认温度:")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int DEFAULT_AC_TEMP = 20;     //（16-30）         ")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// 3. 设置默认风速等级 (只需改这就行，硬件自动匹配):")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    1=静音(Fixed)")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    2=低速(Min)")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    3=中速(Med)")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    4=高速(Max) - 推荐夏天用这个")]),l(`
`),n("span",{class:"line"},[n("span",null,"//    5=自动(Auto)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const int DEFAULT_FAN_LEVEL = 4;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[30]||(s[30]=n("h2",{id:"app配置",tabindex:"-1"},[l("APP配置 "),n("a",{class:"header-anchor",href:"#app配置","aria-label":'Permalink to "APP配置"'},"​")],-1)),s[31]||(s[31]=n("p",null,"使用了可以遥控空调的代码记得使用新的app配置",-1)),s[32]||(s[32]=n("p",null,"如下：",-1)),s[33]||(s[33]=n("div",{class:"language- max-h-600px"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{¨config¨{¨headerColor¨¨transparent¨¨headerStyle¨¨dark¨¨background¨{¨img¨¨assets/img/bg/f1.jpg¨¨isFull¨»}}¨dashboard¨|{¨type¨¨btn¨¨ico¨¨fal fa-air-conditioner¨¨mode¨Ê¨t0¨´关´¨t1¨¨文本2¨¨bg¨Ë¨cols¨Ë¨rows¨Ë¨key¨¨btn-pwr¨´x´É´y´Ê¨speech¨|÷¨lstyle¨É¨clr¨¨#EA0909¨}{ßA¨num¨ßF¨温度¨ßC¨fal fa-thermometer-three-quarters¨ßP¨#076EEF¨¨min¨É¨max¨¤U¨uni¨´℃´ßIËßJÍßKËßL¨settemp¨´x´Í´y´ÊßN|÷ßOË}{ßA¨ran¨ßFßSßP¨#00A90C¨ßW¤UßV¤HßIËßJÑßKËßL¨ran-wen¨´x´É´y´ÎßN|÷ßOË¨rt¨«}{ßAßBßC¨fal fa-fan¨ßEÉßF¨风速¨ßGßHßIËßJËßKËßL¨btn-fan¨´x´Ë´y´ÊßN|÷ßOÉßPßa}{ßAßBßC¨fad fa-sun¨ßEÉßF¨干燥¨ßGßHßIËßJËßKËßL¨btn-dry¨´x´Ë´y´ÌßN|÷ßP¨#FBA613¨}{ßAßBßC¨fad fa-fire-alt¨ßEÉßF¨制热¨ßGßHßIËßJËßKËßL¨btn-hot¨´x´Í´y´ÌßN|÷ßPßQ}{ßAßBßC¨fad fa-snowflakes¨ßEÉßF¨制冷¨ßGßHßIËßJËßKËßL¨btn-cool¨´x´É´y´ÌßN|÷ßPßU}{ßAßBßC¨fad fa-user-robot¨ßEÉßF¨自动¨ßGßHßIËßJËßKËßL¨btn-auto¨´x´Ï´y´ÌßN|÷ßPßa}{ßA¨deb¨ßEÉßIÉßJÑßKÍßL¨debug¨´x´É´y´¤DßN|÷ßOÊ}{ßAßBßC¨far fa-door-open¨ßEÊßF¨文本1¨ßGßHßIÊßJÍßKÍßL¨key-servo¨´x´Ë´y´ÑßPßaßOË}{ßAßBßC¨far fa-lightbulb-on¨ßEÉßF´´ßGßHßIËßJËßKËßL¨key-light¨´x´Ï´y´¤BßOÉßPßU}÷ßc|÷}")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[34]||(s[34]=n("h2",{id:"注意",tabindex:"-1"},[l("注意 "),n("a",{class:"header-anchor",href:"#注意","aria-label":'Permalink to "注意"'},"​")],-1)),n("div",B,[n("p",F,[r(u,{content:"blocks.warning"})]),s[1]||(s[1]=n("p",null,"直接使用esp8266RX口来驱动红外LED会有功率过于小的问题，你需要设置一个新的电路来驱动LED，可以查看B站博主的视频来构建。",-1)),s[2]||(s[2]=n("p",null,"不添加电路只能实现5m范围的遥控",-1)),s[3]||(s[3]=n("p",null,"再次提醒，因为使用了RX引脚，所以在上传代码的时候如果RX被LED占用会刷写不上代码。",-1))]),s[35]||(s[35]=n("h2",{id:"结束",tabindex:"-1"},[l("结束 "),n("a",{class:"header-anchor",href:"#结束","aria-label":'Permalink to "结束"'},"​")],-1)),s[36]||(s[36]=n("p",null,"恭喜你，现在你可以通过这个来控制空调了。",-1))]),"main-header":a(()=>[p(e.$slots,"main-header")]),"main-header-after":a(()=>[p(e.$slots,"main-header-after")]),"main-nav":a(()=>[p(e.$slots,"main-nav")]),"main-content-before":a(()=>[p(e.$slots,"main-content-before")]),"main-content":a(()=>[p(e.$slots,"main-content")]),"main-content-after":a(()=>[p(e.$slots,"main-content-after")]),"main-nav-before":a(()=>[p(e.$slots,"main-nav-before")]),"main-nav-after":a(()=>[p(e.$slots,"main-nav-after")]),comment:a(()=>[p(e.$slots,"comment")]),footer:a(()=>[p(e.$slots,"footer")]),aside:a(()=>[p(e.$slots,"aside")]),"aside-custom":a(()=>[p(e.$slots,"aside-custom")]),default:a(()=>[p(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{J as default,M as usePageData};
