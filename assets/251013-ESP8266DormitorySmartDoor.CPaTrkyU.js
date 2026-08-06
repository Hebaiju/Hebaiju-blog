import{Bt as e,Ht as t,Q as n,U as r,W as i,er as a,qn as o,qt as s,yn as c}from"./framework.BTQirQJB.js";import{n as l}from"./theme.8JZ-ZCgZ.js";import"./chunks/vue-i18n.C1-1dNXk.js";import{a as u,i as d}from"./chunks/vue-router.YUHqddSK.js";var f={__name:`251013-ESP8266DormitorySmartDoor`,setup(f,{expose:p}){let m=o(JSON.parse(`{"title":"开源项目-「宿舍智能门」","description":"搞钱，迎娶白富美，走上人生巅峰。","frontmatter":{"description":"搞钱，迎娶白富美，走上人生巅峰。","title":"开源项目-「宿舍智能门」","date":"2025-12-08","categories":["Code"],"tags":["ESP8266","宿舍","项目"],"codeHeightLimit":300,"firstImage":"https://pic1.imgdb.cn/i/0342DcLD501L1nEqhpV7xO.jpg"},"headers":[],"relativePath":"pages/posts/251013-ESP8266DormitorySmartDoor.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,t(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{description:`搞钱，迎娶白富美，走上人生巅峰。`,title:`开源项目-「宿舍智能门」`,date:`2025-12-08`,categories:[`Code`],tags:[`ESP8266`,`宿舍`,`项目`],codeHeightLimit:300}}),(t,o)=>{let u=l;return e(),i(u,{frontmatter:a(_)},{"main-content-md":c(()=>[...o[0]||=[r(`h2`,{id:`介绍-​`,tabindex:`-1`},[n(`介绍 `),r(`a`,{href:`#%E4%BB%8B%E7%BB%8D`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#介绍-​`,"aria-label":`Permalink to "介绍 [​](#介绍)"`},`​`)],-1),r(`p`,null,`本文基于Arduino平台，点灯科技，ESP8266开发板完成宿舍智能门项目的开发。最终目标是在手机上利用点灯科技APP来实现开门关门的功能。`,-1),r(`h3`,{id:`背景-​`,tabindex:`-1`},[n(`背景 `),r(`a`,{href:`#%E8%83%8C%E6%99%AF`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#背景-​`,"aria-label":`Permalink to "背景 [​](#背景)"`},`​`)],-1),r(`p`,null,`在科技高速发展的今天，智慧家庭，智慧大棚等拥有科技元素的，能够实现自动化，为了方便人类行为活动的科技产品，咱们均认为是有意义的。`,-1),r(`blockquote`,null,[r(`p`,null,`科技不是高高在上而是服务于人民。 --雷军`)],-1),r(`p`,null,`上面的全部是废话，不必在意。`,-1),r(`h3`,{id:`题外话-​`,tabindex:`-1`},[n(`题外话 `),r(`a`,{href:`#%E9%A2%98%E5%A4%96%E8%AF%9D`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#题外话-​`,"aria-label":`Permalink to "题外话 [​](#题外话)"`},`​`)],-1),r(`p`,null,`目前我就读大学，每天日复一日的重复着教室-食堂-宿舍，三点一线。当然呆着时间最多的就是宿舍了，然而学校宿舍门有些许老旧，是使用的老式的门，甚至都掉油漆，独有一份监狱风格。`,-1),r(`p`,null,`每次出门必须带钥匙，要不然就被关在了外面。曾经我们和大多数寝室一样选择将钥匙放在门框上，这是非常不保险的做法。安全度几乎为0。既然安全度为0又何必去安装一个门呢？`,-1),r(`h3`,{id:`正式背景介绍-​`,tabindex:`-1`},[n(`正式背景介绍 `),r(`a`,{href:`#%E6%AD%A3%E5%BC%8F%E8%83%8C%E6%99%AF%E4%BB%8B%E7%BB%8D`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#正式背景介绍-​`,"aria-label":`Permalink to "正式背景介绍 [​](#正式背景介绍)"`},`​`)],-1),r(`p`,null,`曾经，当然不是我哈^_^我可不会忘记带钥匙，我的舍友他们老是忘记带钥匙，而且还有的钥匙不见了，每次都需要等带钥匙的回来才能进入寝室，否则则跑到宿管借备用钥匙，然后回来开门，再去还备用钥匙。要跑3趟。简直就是无妄之灾。`,-1),r(`p`,null,`这些只是众多原因中的一个 \xA0a little bit`,-1),r(`p`,null,`废话不多说，现在开始手把手，从0开始，一步一步跟着来做，来学。`,-1),r(`h2`,{id:`被控制方-​`,tabindex:`-1`},[n(`被控制方 `),r(`a`,{href:`#%E8%A2%AB%E6%8E%A7%E5%88%B6%E6%96%B9`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#被控制方-​`,"aria-label":`Permalink to "被控制方 [​](#被控制方)"`},`​`)],-1),r(`hr`,null,null,-1),r(`p`,null,`本教程面对群众为新手，0基础。如果你觉得较为困难，请向AI工具进行提问，或者向大神请求解答，当然本博主十分愿意用零散的时间来换取一杯咖啡😚`,-1),r(`h3`,{id:`项目材料准备-​`,tabindex:`-1`},[n(`项目材料准备 `),r(`a`,{href:`#%E9%A1%B9%E7%9B%AE%E6%9D%90%E6%96%99%E5%87%86%E5%A4%87`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#项目材料准备-​`,"aria-label":`Permalink to "项目材料准备 [​](#项目材料准备)"`},`​`)],-1),r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`材料列表`),r(`th`,null,`数量`),r(`th`,null,`价格`),r(`th`,null,`图片`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`a`,{href:`https://item.taobao.com/item.htm?ali_refid=a3_430673_1006%3A1122812217%3AN%3Aqwnbk4ga1jWzvtXuIEnkGA%3D%3D%3Ab8ae833f50e89e1033037e7171b44b71&ali_trackid=1_b8ae833f50e89e1033037e7171b44b71&id=539003694382&mi_id=0000wlxqib2G4jBL3QpKyaNJ5dcj2DGzSUBDxbsbj2VQe4g&mm_sceneid=1_0_114003394_0&priceTId=214784b017603615514204927e0fbc&skuId=4383586252993&spm=a21n57.sem.item.7&utparam=%7B%22aplus_abtest%22%3A%225e2089e06d2fcc43feb549b1b0fa929d%22%7D&xxc=ad_ztc`,target:`_blank`,rel:`noreferrer`},`ESP8266-01s`)]),r(`td`,null,`1`),r(`td`,null,`6`),r(`td`,null,[r(`img`,{src:`https://pic1.imgdb.cn/i/0342DcLD501L1nEqhpV7xO.jpg`,width:`140`,alt:`ESP8266-01s`})])]),r(`tr`,null,[r(`td`,null,[r(`a`,{href:`https://detail.tmall.com/item.htm?ali_refid=a3_430673_1006%3A1109448581%3AN%3AGoWQiM5hj2WQTKuqS5zU%2FTMwO5ziiohA%3A1adfae2e21874b573340d58bda968b91&ali_trackid=1_1adfae2e21874b573340d58bda968b91&id=617225331165&mi_id=0000A_KbxPJhbihXdVyiUKSrEI6JDMbeszwla5V2dA91qck&mm_sceneid=1_0_57814139_0&priceTId=213e087717603619469582006e1712&skuId=4351773637185&spm=a21n57.sem.item.43&utparam=%7B%22aplus_abtest%22%3A%22996194b47c58d30515ffd684b5134803%22%7D&xxc=ad_ztc`,target:`_blank`,rel:`noreferrer`},`CH340烧录器`)]),r(`td`,null,`1`),r(`td`,null,`6`),r(`td`,null,[r(`img`,{src:`https://pic1.imgdb.cn/i/0342DcJZnPhn1DAIybk3md.jpg`,width:`140`,alt:`CH340烧录器`})])]),r(`tr`,null,[r(`td`,null,[r(`a`,{href:`https://item.taobao.com/item.htm?id=573547711366&mi_id=0000tkJtG5SnMi_-1x6GfGJs-MaEiZFSVOlP_lX__Xs9GQg&skuId=3906660838326&spm=tbpc.mytb_itemcollect.item.goods&upStreamPrice=1440`,target:`_blank`,rel:`noreferrer`},`舵机`)]),r(`td`,null,`1`),r(`td`,null,`15`),r(`td`,null,[r(`img`,{src:`https://pic1.imgdb.cn/i/0342DcLLx5mhRcEEZZ3dTG.jpg`,width:`140`,alt:`舵机`})])]),r(`tr`,null,[r(`td`,null,[r(`a`,{href:`https://detail.tmall.com/item.htm?ali_refid=a3_430673_1006%3A1359940039%3AH%3AJ1YENfCfO5vN1AQn%2FM74BhE1p4%2BYNbMK%3Ada41d710fe1de3ccaa4ac52ae102adbb&ali_trackid=282_da41d710fe1de3ccaa4ac52ae102adbb&id=683420525367&mi_id=0000aoePFcTdScHSwJzcHakgCWtzjXhVi9dxVZSwA1eqdvA&mm_sceneid=1_0_1496170099_0&priceTId=213e087717603623018451706e1712&skuId=5062477719044&spm=a21n57.sem.item.2&utparam=%7B%22aplus_abtest%22%3A%22a73f2474141db84db41c26eb550ce8ca%22%7D&xxc=ad_ztc`,target:`_blank`,rel:`noreferrer`},`USB线`)]),r(`td`,null,`1`),r(`td`,null,`2`),r(`td`,null,[r(`img`,{src:`https://pic1.imgdb.cn/i/0342DcguCzgetYCBPZ8XNE.jpg`,width:`140`,alt:`USB线`})])]),r(`tr`,null,[r(`td`,null,[r(`a`,{href:`https://item.taobao.com/item.htm?ali_refid=a3_430673_1006%3A1107255686%3AN%3AMsF9mE9KLTC2IibWJh%2BK1A%3D%3D%3Ae6188cb8ad452a06a8ff90ba8b235c44&ali_trackid=1_e6188cb8ad452a06a8ff90ba8b235c44&id=626699339752&mi_id=0000g_QPnIABA1wVeBciEX0FQ362C7ik5EppPrSJfo1biK8&mm_sceneid=1_0_30693817_0&priceTId=213e087717603623416314400e1712&skuId=6048588939883&spm=a21n57.sem.item.44&utparam=%7B%22aplus_abtest%22%3A%22a72a3e6180176186878aafdc7648e185%22%7D&xxc=ad_ztc`,target:`_blank`,rel:`noreferrer`},`杜邦线`)]),r(`td`,null,`若干`),r(`td`,null,`2`),r(`td`,null,[r(`img`,{src:`https://pic1.imgdb.cn/i/0342DcL7WY4SXhWCW9w1yT.jpg`,width:`140`,alt:`杜邦线`})])]),r(`tr`,null,[r(`td`,null,[r(`a`,{href:`https://item.taobao.com/item.htm?ali_refid=a3_430673_1006%3A1682218166%3AN%3Ak3UParKGYF%2FTnr04H%2FnB1w%3D%3D%3Acc5546591def63a47be2c967b14b7853&ali_trackid=1_cc5546591def63a47be2c967b14b7853&id=820130327778&mi_id=00005WGskN94dveeWmcuPk1ItOSxCugUI5tQrpd9piYjZ4A&mm_sceneid=1_0_3838888826_0&priceTId=213e087717603624095278730e1712&skuId=5528500289757&spm=a21n57.sem.item.132&utparam=%7B%22aplus_abtest%22%3A%22dddcd9a0bfd5668b7e3d51003e18de72%22%7D&xxc=ad_ztc`,target:`_blank`,rel:`noreferrer`},`扎带`)]),r(`td`,null,`若干`),r(`td`,null,`1`),r(`td`,null,[r(`img`,{src:`https://pic1.imgdb.cn/i/0342DcguJAkTITVPeFBu7D.jpg`,width:`140`,alt:`扎带`})])]),r(`tr`,null,[r(`td`,null,`电脑`),r(`td`,null,`1`),r(`td`,null,`自费`),r(`td`,null,`操作系统最好为window 11`)]),r(`tr`,null,[r(`td`,null,[r(`a`,{href:`https://www.arduino.cc/`,target:`_blank`,rel:`noreferrer`},`arduino`)]),r(`td`,null,`1`),r(`td`,null,`免费`),r(`td`,null,[r(`a`,{href:`https://downloads.arduino.cc/app-lab-release/ArduinoAppLab_0.1.23_Windows_x86-64_installer.exe`,target:`_blank`,rel:`noreferrer`},`官方下载`),n(`或者到教程里面领取`)])])])],-1),r(`h3`,{id:`功能说明-​`,tabindex:`-1`},[n(`功能说明 `),r(`a`,{href:`#%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#功能说明-​`,"aria-label":`Permalink to "功能说明 [​](#功能说明)"`},`​`)],-1),r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`功能`),r(`th`,null,`说明`),r(`th`,null,`支持方式`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,`远程开门（保持 2 秒）`),r(`td`,null,`一点即开，自动保持 2 秒后自动关门`),r(`td`,null,`Blinker App / MQTT / 串口`)]),r(`tr`,null,[r(`td`,null,`手机震动反馈`),r(`td`,null,`按下后约 0.25 秒立刻震动，感觉“秒开”`),r(`td`,null,`自动触发`)]),r(`tr`,null,[r(`td`,null,`自动灯光（按真实时间）`),r(`td`,null,`08:00–11:59 14:00–22:59 自动亮灯，其余时间关灯`),r(`td`,null,`NTP 网络校时，每 30 秒自动判断`)]),r(`tr`,null,[r(`td`,null,`手动反转灯`),r(`td`,null,`在自动时间段内仍可手动点亮/熄灭`),r(`td`,null,`Blinker App / MQTT / 串口`)]),r(`tr`,null,[r(`td`,null,`MQTT 远程控制`),r(`td`,null,[n(`发 `),r(`code`,null,`on`),n(` 开门，发 `),r(`code`,null,`light`),n(` 反转灯`)]),r(`td`,null,`Home Assistant / Node-RED 等`)]),r(`tr`,null,[r(`td`,null,`Wi-Fi 列表自定义名字`),r(`td`,null,`永远显示“开门猫”（或你改的名字），再见 ESP_XXXX`),r(`td`,null,`代码强制写入`)]),r(`tr`,null,[r(`td`,null,`串口调试命令`),r(`td`,null,`接电脑就能手动控制`),r(`td`,null,`见下方`)])])],-1),r(`h3`,{id:`接口说明-​`,tabindex:`-1`},[n(`接口说明 `),r(`a`,{href:`#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#接口说明-​`,"aria-label":`Permalink to "接口说明 [​](#接口说明)"`},`​`)],-1),r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`接口类型`),r(`th`,null,`名称 / Key / 主题`),r(`th`,null,`功能`),r(`th`,null,`具体命令 / Payload`),r(`th`,null,`备注`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`strong`,null,`Blinker 按钮`)]),r(`td`,null,[r(`code`,null,`servo`)]),r(`td`,null,`开门（保持 2 秒）`),r(`td`,null,`点击按钮`),r(`td`,null,`App 内默认显示“开门”`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`Blinker 按钮`)]),r(`td`,null,[r(`code`,null,`light`)]),r(`td`,null,`手动反转当前灯状态`),r(`td`,null,`点击按钮`),r(`td`,null,`自动时间段内仍可强制开关`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`设备显示名称`)]),r(`td`,null,[r(`code`,null,`CUSTOM_HOSTNAME`),n(`（代码里改）`)]),r(`td`,null,`Wi-Fi 列表 + App 显示的设备名`),r(`td`,null,[n(`当前默认：`),r(`strong`,null,`开门猫`)]),r(`td`,null,`烧录后永久生效，再见 ESP_XXXXXX`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`串口命令`)]),r(`td`,null,[r(`code`,null,`on`)]),r(`td`,null,`立刻开门一次（保持 2 秒）`),r(`td`,null,[n(`输入 `),r(`code`,null,`on`),n(` 回车`)]),r(`td`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`串口命令`)]),r(`td`,null,[r(`code`,null,`time`)]),r(`td`,null,`立刻强制同步网络时间`),r(`td`,null,[n(`输入 `),r(`code`,null,`time`),n(` 回车`)]),r(`td`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`串口命令`)]),r(`td`,null,[r(`code`,null,`light on`)]),r(`td`,null,`强制开灯`),r(`td`,null,[n(`输入 `),r(`code`,null,`light on`),n(` 回车`)]),r(`td`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`串口命令`)]),r(`td`,null,[r(`code`,null,`light off`)]),r(`td`,null,`强制关灯`),r(`td`,null,[n(`输入 `),r(`code`,null,`light off`),n(` 回车`)]),r(`td`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`MQTT 主题`)]),r(`td`,null,[r(`code`,null,`switch/state`)]),r(`td`,null,`主控制主题`),r(`td`,null,`—`),r(`td`,null,`设备自动订阅`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`MQTT 命令`)]),r(`td`,null,[r(`code`,null,`on`)]),r(`td`,null,`开门 2 秒`),r(`td`,null,[n(`发送字符串 `),r(`code`,null,`on`)]),r(`td`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`MQTT 命令`)]),r(`td`,null,[r(`code`,null,`light`)]),r(`td`,null,`反转当前灯状态`),r(`td`,null,[n(`发送字符串 `),r(`code`,null,`light`)]),r(`td`,null,`开→关 或 关→开`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`MQTT Broker`)]),r(`td`,null,`自建`),r(`td`),r(`td`,null,`—`),r(`td`,null,`无需账号，也可改成自家 EMQX/Mosquitto`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`NTP 时间服务器`)]),r(`td`,null,`ntp1.aliyun.com`),r(`td`,null,`北京时间自动校时（+8 区）`),r(`td`,null,`—`),r(`td`,null,`备用 pool.ntp.org`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`硬件接线`)]),r(`td`,null,`舵机信号线`),r(`td`,null,`GPIO0（D3）`),r(`td`,null,`—`),r(`td`,null,`SG90 / MG90S`)]),r(`tr`,null,[r(`td`,null,[r(`strong`,null,`硬件接线`)]),r(`td`,null,`灯控制（低电平亮）`),r(`td`,null,`GPIO2（D4）`),r(`td`,null,`—`),r(`td`,null,`板载 LED 或继电器`)])])],-1),r(`blockquote`,null,[r(`p`,null,`接线：舵机控制线连接D3引脚，正极接3.3V，负极接GND。灯是板载灯，不用管。`)],-1),r(`h3`,{id:`代码-​`,tabindex:`-1`},[n(`代码 `),r(`a`,{href:`#%E4%BB%A3%E7%A0%81`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#代码-​`,"aria-label":`Permalink to "代码 [​](#代码)"`},`​`)],-1),r(`p`,null,`提示`,-1),r(`p`,null,`请订阅代码中的库文件！！！`,-1),r(`p`,null,`功能代码`,-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`/****************************************************************************************`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * 项目名称：智能门控 + 自动灯光系统（终极版 - 开门保持2秒）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` * 作者 ： 鹤白居`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,` ****************************************************************************************/`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <Servo.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#define BLINKER_WIFI`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <Blinker.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <NTPClient.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <WiFiUdp.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <PubSubClient.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 配置 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char AUTH[] = "";          // ←←← 改成你自己的 Blinker Key`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char WIFI_SSID[] = "";     // ←←← 你的 Wi-Fi 名字`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char WIFI_PSWD[] = "";          // ←←← 你的 Wi-Fi 密码`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* mqtt_server = "";   // 全球公共免费（强烈推荐）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 可选替换（任选其一）：`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// "broker.hivemq.com"`),r(`span`,null,`      // 另一个免费公网`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// "test.mosquitto.org"`),r(`span`,null,`     // 测试用`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// "192.168.1.100"`),r(`span`,null,`          // 你自己内网的 EMQX/Mosquitto 地址`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int   mqtt_port   = 1883;               // 基本都用 1883，改了也连不上公网免费的`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* mqtt_topic  = "switch/state";     // 发 on 开门，发 light 反转灯`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* CUSTOM_HOSTNAME = "开门猫";  // 自定义WiFi列表显示的名字（改这里就行）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 舵机时间参数（集中管理，想改多久改多久）======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int OPEN_KEEP_TIME    = 2000;   // 门保持打开的时间（毫秒） ←←←← 你现在要的2秒`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int MOVE_TIME         = 300;    // 舵机从0→90或90→0需要的预计时间（实测300ms很稳）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int VIBRATE_DELAY     = 250;    // 开门后多久手机震动（比实际运动略早一点，手感更秒开）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`WiFiUDP ntpUDP;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`NTPClient timeClient(ntpUDP, "ntp1.aliyun.com", 8*3600, 60000);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`WiFiClient espClient;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`PubSubClient mqttClient(espClient);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton ServoButton("servo");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`BlinkerButton LightButton("light");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 硬件 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int SERVO_PIN = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int ONBOARD_LED_PIN = 2;   // 你实际灯接这里（低电平亮）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int MIN_ANGLE = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int MAX_ANGLE = 90;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int MIN_PULSE = 500;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int MAX_PULSE = 2500;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 状态 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`bool lightState = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`bool timeSynced = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`unsigned long lastNTPSync = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Servo myServo;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`bool isOpening = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`unsigned long servoTimer = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`enum ServoState { IDLE, GO_TO_90, STAY_90, GO_TO_0 } servoState = IDLE;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 开机欢迎 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void printWelcome() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(F("\\n"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(F("================================================"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(F(" 智能门控 + 自动灯光系统 已启动"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(F(" 项目名称：门控灯光终极版 v1.1"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.printf(" WiFi列表显示名：%s\\n", CUSTOM_HOSTNAME);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.printf(" 门保持打开时间：%d ms (%.1fs)\\n", OPEN_KEEP_TIME, OPEN_KEEP_TIME/1000.0);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(F(" 输入 time 可立刻强制同步时间"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(F("================================================"));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(F(""));`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== setup ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void setup() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.begin(115200);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  printWelcome();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 先强制设置自定义主机名（防Blinker偷偷改）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  WiFi.hostname(CUSTOM_HOSTNAME);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  WiFi.setHostname(CUSTOM_HOSTNAME);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  pinMode(ONBOARD_LED_PIN, OUTPUT);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  digitalWrite(ONBOARD_LED_PIN, HIGH);  // 初始关灯`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  myServo.attach(SERVO_PIN, MIN_PULSE, MAX_PULSE);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  myServo.write(MIN_ANGLE);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.begin(AUTH, WIFI_SSID, WIFI_PSWD);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // Blinker连上后再次强行改回来，100%显示“开门猫”`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  delay(3000);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  WiFi.hostname(CUSTOM_HOSTNAME);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  WiFi.setHostname(CUSTOM_HOSTNAME);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  while (!Blinker.connected()) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Blinker.run();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    delay(100);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.printf("WiFi和Blinker已连接，设备名已强制为：%s\\n", CUSTOM_HOSTNAME);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  timeClient.begin();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  for (int i = 0; i < 10; i++) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (timeClient.forceUpdate()) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      timeSynced = true;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.printf("开机时间同步成功：%02d:%02d:%02d\\n",`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`                    timeClient.getHours(), timeClient.getMinutes(), timeClient.getSeconds());`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    delay(1000);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Serial.print(".");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (!timeSynced) Serial.println("\\n启动同步失败，后续会继续尝试");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 控件回调`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  ServoButton.attach([](const String &state) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    rotateServoSequence();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Blinker.print("门", "开了！！！");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  });`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  LightButton.attach([](const String &state) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    lightState = !lightState;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    setLightState(lightState);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Serial.println("App手动反转当前时间段灯状态");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  });`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  mqttClient.setServer(mqtt_server, mqtt_port);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  mqttClient.setCallback([](char* topic, byte* payload, unsigned int length) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    String msg = "";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    for (int i = 0; i < length; i++) msg += (char)payload[i];`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (msg == "on") rotateServoSequence();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (msg == "light") {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      lightState = !lightState;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      setLightState(lightState);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("MQTT手动反转当前时间段灯状态");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  });`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== loop ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void loop() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.run();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  timeClient.update();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (!mqttClient.connected()) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    String id = "ESP8266-" + String(random(0xffff), HEX);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (mqttClient.connect(id.c_str())) mqttClient.subscribe(mqtt_topic);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    else delay(3000);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  mqttClient.loop();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 每30秒根据真实时间校准灯`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  static unsigned long lastCheck = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (millis() - lastCheck >= 30000) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    updateLightStateAccordingToTime();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    lastCheck = millis();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 每30分钟自动同步时间`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (millis() - lastNTPSync >= 1800000UL) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    timeClient.forceUpdate();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    lastNTPSync = millis();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  handleServoNonBlock();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 串口命令`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (Serial.available()) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    String cmd = Serial.readStringUntil('\\n');`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    cmd.trim(); cmd.toLowerCase();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (cmd == "time") {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.print("手动强制同步时间...");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      if (timeClient.forceUpdate()) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        timeSynced = true;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Serial.printf("成功！北京时间 %02d:%02d:%02d\\n",`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`                      timeClient.getHours(), timeClient.getMinutes(), timeClient.getSeconds());`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        updateLightStateAccordingToTime();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      } else Serial.println("失败");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    else if (cmd == "on") rotateServoSequence();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    else if (cmd == "light on")  { lightState = true;  setLightState(true);  Serial.println("串口强制开灯"); }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    else if (cmd == "light off") { lightState = false; setLightState(false); Serial.println("串口强制关灯"); }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 灯光自动逻辑 ======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void updateLightStateAccordingToTime() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (!timeSynced) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    setLightState(false);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  int h = timeClient.getHours();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  bool shouldBeOn = (h >= 8 && h < 12) || (h >= 14 && h < 23);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (lightState != shouldBeOn) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    lightState = shouldBeOn;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    setLightState(lightState);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Serial.printf("自动恢复：%d点 → %s\\n", h, lightState ? "开灯" : "关灯");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void setLightState(bool state) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  lightState = state;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  digitalWrite(ONBOARD_LED_PIN, state ? LOW : HIGH);  // 低电平亮`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Blinker.print("light", state ? "开" : "关");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// ====================== 舵机非阻塞控制（2秒版）======================`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void rotateServoSequence() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (isOpening) return;       // 防重复触发`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  isOpening = true;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  servoState = GO_TO_90;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  servoTimer = millis();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  myServo.write(MAX_ANGLE);    // 立刻开门`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void handleServoNonBlock() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (!isOpening) return;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  switch (servoState) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case GO_TO_90:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      if (millis() - servoTimer >= VIBRATE_DELAY) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Blinker.vibrate();     // 250ms后手机震动，手感超快`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        servoState = STAY_90;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        servoTimer = millis();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case STAY_90:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      if (millis() - servoTimer >= OPEN_KEEP_TIME) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        myServo.write(MIN_ANGLE);   // 开始关门`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        servoState = GO_TO_0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        servoTimer = millis();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    case GO_TO_0:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      if (millis() - servoTimer >= MOVE_TIME) {  // 给舵机足够时间回到0°`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        isOpening = false;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        servoState = IDLE;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      break;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h3`,{id:`app配置-​`,tabindex:`-1`},[n(`App配置 `),r(`a`,{href:`#app%E9%85%8D%E7%BD%AE`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#app配置-​`,"aria-label":`Permalink to "App配置 [​](#app配置)"`},`​`)],-1),r(`p`,null,`注意主题的订阅为servo和light`,-1),r(`p`,null,`一个是小灯，一个是控制舵机开门！`,-1),r(`p`,null,[r(`img`,{src:`https://pic1.imgdb.cn/i/0342DcKszwBq96c3vU0r54.jpg`,alt:`最终配置界面`}),r(`img`,{src:`https://pic1.imgdb.cn/i/0342DcKVVPim9bCkjCumYc.jpg`,alt:`组件名称配置界面`})],-1),r(`p`,null,`或者你可以通过直接导入界面配置文件`,-1),r(`p`,null,`信息`,-1),r(`p`,null,`右上角三个点——界面配置——复制下面替换掉里面的内容。`,-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`{¨version¨¨2.0.0¨¨config¨{¨headerColor¨¨transparent¨¨headerStyle¨¨dark¨¨background¨{¨img¨¨assets/img/headerbg.jpg¨¨isFull¨«}}¨dashboard¨|{¨type¨¨btn¨¨ico¨¨far fa-door-open¨¨mode¨É¨t0¨´门´¨t1¨¨文本2¨¨bg¨É¨cols¨Í¨rows¨Í¨key¨¨servo¨´x´Ë´y´Ð¨lstyle¨Ë¨clr¨¨#00A90C¨}{ßCßDßE¨fad fa-lightbulb-on¨ßGÉßH¨小灯¨ßIßJßKËßLËßMËßN¨light¨´x´Ï´y´ÒßQ¨#076EEF¨ßPÉ}{ßC¨deb¨ßGÉßKÉßLÑßMÌßN¨debug¨´x´É´y´¤D}÷¨actions¨|÷¨triggers¨|÷¨rt¨|÷}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`h3`,{id:`结语-​`,tabindex:`-1`},[n(`结语 `),r(`a`,{href:`#%E7%BB%93%E8%AF%AD`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#结语-​`,"aria-label":`Permalink to "结语 [​](#结语)"`},`​`)],-1),r(`p`,null,`如果你只需要实现手机上通过APP的传接来开门，那么到这里就结束了`,-1),r(`hr`,null,null,-1),r(`h2`,{id:`控制方-​`,tabindex:`-1`},[n(`控制方 `),r(`a`,{href:`#%E6%8E%A7%E5%88%B6%E6%96%B9`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#控制方-​`,"aria-label":`Permalink to "控制方 [​](#控制方)"`},`​`)],-1),r(`h3`,{id:`说明-​`,tabindex:`-1`},[n(`说明 `),r(`a`,{href:`#%E8%AF%B4%E6%98%8E`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#说明-​`,"aria-label":`Permalink to "说明 [​](#说明)"`},`​`)],-1),r(`p`,null,`当前已经完成了在门外面通过App进行控制，然而显示情况却有不同`,-1),r(`p`,null,`当我在宿舍里面的时候，有别人在外面敲门，我需要打开手机给别人开门，或者走过去开门。当然我是一个非常懒的人，能不动就绝对运动。`,-1),r(`blockquote`,null,[r(`p`,null,`懒是科技进步的动力源泉`)],-1),r(`p`,null,`所以如果能在我的桌面上有一个按钮来开门就好了`,-1),r(`p`,null,`我的具体实施过程是：在桌面上放置一个按钮，按钮连接esp8266开发板，由充电器给esp8266供电，按下按钮，控制方的esp8266来向被控制方的esp8266发送一条mqtt消息，从而来实现开门。`,-1),r(`p`,null,`材料有按钮，esp8266开发板，杜邦线，充电头（其实电脑上面也可以插着）`,-1),r(`p`,null,`信息`,-1),r(`p`,null,`这里的内容大部分都是类同的，就不重复无聊的地方，下面直接就是控制方的代码`,-1),r(`div`,{class:`language- max-h-300px`},[r(`button`,{title:`Copy code`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[r(`code`,{"v-pre":``},[r(`span`,{class:`line`},[r(`span`,null,`#include <ESP8266WiFi.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`#include <PubSubClient.h>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// WiFi配置`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* ssid = "";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* password = "";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// MQTT配置`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* mqttServer = "";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int mqttPort = 1883;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* mqttTopic = "switch/state";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const char* clientId = "esp8266-switch-054";`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 开关和LED引脚定义`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int switchPin = 0;    // 开关引脚`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const int ledPin = 2;       // LED引脚`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 状态变量（单击双击检测）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`int lastSteadyState = HIGH;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`int lastFlickerableState = HIGH;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`int currentState;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 时间变量`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`unsigned long lastDebounceTime = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`unsigned long debounceDelay = 50;    // 去抖延迟`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 单击双击检测变量`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`unsigned long firstClickTime = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`int clickCount = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`const unsigned long doubleClickDelay = 500;  // 双击最大间隔`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 创建WiFi客户端和MQTT客户端实例`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`WiFiClient espClient;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`PubSubClient client(espClient);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`// MQTT重连函数`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void reconnect() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  while (!client.connected()) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Serial.print("正在连接MQTT服务器...");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (client.connect(clientId)) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("连接成功");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    } else {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.print("连接失败，错误代码: ");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.print(client.state());`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("，5秒后重试...");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      delay(5000);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void setup() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 初始化串口`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.begin(115200);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 初始化引脚`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  pinMode(switchPin, INPUT_PULLUP);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  pinMode(ledPin, OUTPUT);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  digitalWrite(ledPin, HIGH);  // 关闭LED`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 连接WiFi`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.print("连接WiFi: ");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println(ssid);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  WiFi.begin(ssid, password);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  while (WiFi.status() != WL_CONNECTED) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    delay(500);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    Serial.print(".");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("WiFi连接成功");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 设置MQTT服务器`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  client.setServer(mqttServer, mqttPort);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  Serial.println("设备初始化完成，等待开关操作...");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`void loop() {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 维持MQTT连接`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (!client.connected()) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    reconnect();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  client.loop();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 读取当前引脚状态`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  currentState = digitalRead(switchPin);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 检测状态是否发生变化（去抖处理）`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (currentState != lastFlickerableState) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    lastDebounceTime = millis();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    lastFlickerableState = currentState;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 如果状态稳定超过去抖延迟`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if ((millis() - lastDebounceTime) > debounceDelay) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // 如果状态确实改变`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (lastSteadyState != currentState) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      lastSteadyState = currentState;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      // 检测到开关释放(从低到高的变化)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      if (currentState == HIGH) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        clickCount++;  // 增加点击计数`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Serial.print("检测到点击! 计数: ");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Serial.println(clickCount);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        // 如果是第一次点击，记录时间`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        if (clickCount == 1) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`          firstClickTime = millis();`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`        }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  // 检查双击间隔是否已过，判断点击类型`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (clickCount > 0 && (millis() - firstClickTime) > doubleClickDelay) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // 根据点击次数发送相应的MQTT消息`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (clickCount == 1) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("发送MQTT消息: on");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      client.publish(mqttTopic, "on");  // 单击发送"on"`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    } else if (clickCount == 2) {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println("发送MQTT消息: light");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      client.publish(mqttTopic, "light");  // 双击发送"light"`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    } else {`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.print("多次点击: ");`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`      Serial.println(clickCount);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // 重置点击计数`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`    clickCount = 0;`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`  delay(10);`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`button`,{class:`code-block-unfold-btn`})],-1),r(`p`,null,`信息`,-1),r(`p`,null,`由于mqtt的特性，你可以实现，一个开关控制多个门，或者多个开关控制一个门，你可以实现，或者给你的室友没人发一个`,-1),r(`h2`,{id:`最后-​`,tabindex:`-1`},[n(`最后 `),r(`a`,{href:`#%E6%9C%80%E5%90%8E`},`​`),n(),r(`a`,{class:`header-anchor`,href:`#最后-​`,"aria-label":`Permalink to "最后 [​](#最后)"`},`​`)],-1),r(`p`,null,`当然在这之后，esp8266开发板还剩下了2个io口，还能干很多事，所以我让rx这个io口连接一个红外led，直接让他接入空调，使得可以在手机上控制空调。这都是题外话了。`,-1),r(`p`,null,[n(`可以去查看之后的一篇文章`),r(`a`,{href:`./251207-ESP8266AC-IR-Control`},`「ESP8266控制空调」 - 鹤白居的小站`)],-1)]]),"main-header":c(()=>[s(t.$slots,`main-header`)]),"main-header-after":c(()=>[s(t.$slots,`main-header-after`)]),"main-nav":c(()=>[s(t.$slots,`main-nav`)]),"main-content-before":c(()=>[s(t.$slots,`main-content-before`)]),"main-content":c(()=>[s(t.$slots,`main-content`)]),"main-content-after":c(()=>[s(t.$slots,`main-content-after`)]),"main-nav-before":c(()=>[s(t.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[s(t.$slots,`main-nav-after`)]),comment:c(()=>[s(t.$slots,`comment`)]),footer:c(()=>[s(t.$slots,`footer`)]),aside:c(()=>[s(t.$slots,`aside`)]),"aside-custom":c(()=>[s(t.$slots,`aside-custom`)]),default:c(()=>[s(t.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};