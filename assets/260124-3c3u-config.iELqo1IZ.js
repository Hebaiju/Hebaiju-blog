import{Bt as e,G as t,Ht as n,Q as r,U as i,W as a,er as o,qn as s,qt as c,yn as l}from"./framework.BTQirQJB.js";import{n as u}from"./theme.8JZ-ZCgZ.js";import"./chunks/vue-i18n.C1-1dNXk.js";import{a as d,i as f}from"./chunks/vue-router.YUHqddSK.js";var p={__name:`260124-3c3u-config`,setup(p,{expose:m}){let h=s(JSON.parse(`{"title":"3C3U-金萝卜组织文档贰","description":"搞钱，迎娶白富美，走上人生巅峰。","frontmatter":{"description":"搞钱，迎娶白富美，走上人生巅峰。","title":"3C3U-金萝卜组织文档贰","date":"2026-02-24","categories":["游戏"],"tags":["3c3u.org","无规则服","minecraft"],"codeHeightLimit":300,"firstImage":"https://pic1.imgdb.cn/i/0342DbvtwTXWm9CQVrF9X0.png"},"headers":[],"relativePath":"pages/posts/260124-3c3u-config.md"}`)),g=d(),_=f(),v=Object.assign(_.meta.frontmatter||{},h.value?.frontmatter||{});return g.currentRoute.value.data=h.value,n(`valaxy:frontmatter`,v),globalThis.$frontmatter=v,m({frontmatter:{description:`搞钱，迎娶白富美，走上人生巅峰。`,title:`3C3U-金萝卜组织文档贰`,date:`2026-02-24`,categories:[`游戏`],tags:[`3c3u.org`,`无规则服`,`minecraft`],codeHeightLimit:300}}),(n,s)=>{let d=u;return e(),a(d,{frontmatter:o(v)},{"main-content-md":l(()=>[s[0]||=i(`h2`,{id:`_3c3u-金萝卜-mcc命令行客户端使用文档-​`,tabindex:`-1`},[r(`3C3U-金萝卜-MCC命令行客户端使用文档 `),i(`a`,{href:`#_3c3u-%E9%87%91%E8%90%9D%E5%8D%9C-mcc%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#_3c3u-金萝卜-mcc命令行客户端使用文档-​`,"aria-label":`Permalink to "3C3U-金萝卜-MCC命令行客户端使用文档 [​](#_3c3u-金萝卜-mcc命令行客户端使用文档)"`},`​`)],-1),s[1]||=i(`blockquote`,null,[i(`p`,null,`本篇文章将介绍金萝卜使用的命令行客户端，后台控制，链接等。`)],-1),s[2]||=i(`p`,null,`目前本基地有正式成员4人。`,-1),t(` more `),s[3]||=i(`h3`,{id:`_3c3u-org金萝卜组织账号列表`,tabindex:`-1`},[r(`3C3U.ORG金萝卜组织账号列表 `),i(`a`,{class:`header-anchor`,href:`#_3c3u-org金萝卜组织账号列表`,"aria-label":`Permalink to "3C3U.ORG金萝卜组织账号列表"`},`​`)],-1),s[4]||=i(`p`,null,[i(`a`,{href:`https://docs.qq.com/doc/DY1puc1ZyYXFxc1VO`,target:`_blank`,rel:`noreferrer`},`成员列表请查看文档`)],-1),s[5]||=i(`h2`,{id:`简要描述`,tabindex:`-1`},[r(`简要描述 `),i(`a`,{class:`header-anchor`,href:`#简要描述`,"aria-label":`Permalink to "简要描述"`},`​`)],-1),s[6]||=i(`p`,null,`经过第一次的使用MCC客户端以及自己搭建服务器节点后，目前发现很多问题。`,-1),s[7]||=i(`p`,null,`情况如下`,-1),s[8]||=i(`p`,null,`之前未长期续费的原因：`,-1),s[9]||=i(`p`,null,`1.使用“润雨云”提供的面板服务器，我发现了我会经常容易忘记签到，导致一个月漏掉了很多天。从而导致不能及时给服务器续费。故后面没有使用润雨云的面板服务器。`,-1),s[10]||=i(`p`,null,[r(`2.同时的方案还有：购买nat便宜服务器，续费价格3元一个月。以及连续续费两个月，随后因为`),i(`strong`,null,`过年`),r(`从而导致忘记续费，且服务器商家会将服务器关机，然后需要我手动打开，才能连接成功，故已经抛弃当前方案。`)],-1),s[11]||=i(`p`,null,`当前情况：`,-1),s[12]||=i(`p`,null,`以上两种使用服务器方式均已失效，没能实现长期续费……`,-1),s[13]||=i(`p`,null,`现在解决办法：`,-1),s[14]||=i(`p`,null,[r(`经过之前搭建服务器的经验，结合当前比较火的`),i(`strong`,null,`飞牛NAS`),r(`其中可以使用Docker来安装MCSM面板从而来使用MCC客户端。综合考虑之后，我决定购买一台小主机。要求是功耗低，能够长时间开机，可以远程管理。经过查找后选定了一个J1900cpu的瘦客户端来作为我的服务器。`)],-1),s[15]||=i(`p`,null,`在网络方面我选择了使用frp的ipv4穿透+ipv6直连。`,-1),s[16]||=i(`h2`,{id:`mcsmanager-panel-​`,tabindex:`-1`},[r(`MCSManager Panel `),i(`a`,{href:`#mcsmanager-panel`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#mcsmanager-panel-​`,"aria-label":`Permalink to "MCSManager Panel [​](#mcsmanager-panel)"`},`​`)],-1),s[17]||=i(`p`,null,`使用指南：`,-1),s[18]||=i(`h3`,{id:`_1-登陆-​`,tabindex:`-1`},[r(`1.登陆 `),i(`a`,{href:`#_1-%E7%99%BB%E9%99%86`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#_1-登陆-​`,"aria-label":`Permalink to "1.登陆 [​](#_1-登陆)"`},`​`)],-1),s[19]||=i(`p`,null,[r(`在浏览器地址栏输入`),i(`strong`,null,`f.hebaiju.cn:23333`),r(`及可以访问到web控制面板。随后输入账号密码即可`)],-1),s[20]||=i(`figure`,null,[i(`img`,{src:`https://pic1.imgdb.cn/i/0342DbvtwTXWm9CQVrF9X0.png`,alt:`MCSM登陆面板0001`,loading:`lazy`,decoding:`async`})],-1),s[21]||=i(`h3`,{id:`_2-应用实例-​`,tabindex:`-1`},[r(`2.应用实例 `),i(`a`,{href:`#_2-%E5%BA%94%E7%94%A8%E5%AE%9E%E4%BE%8B`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#_2-应用实例-​`,"aria-label":`Permalink to "2.应用实例 [​](#_2-应用实例)"`},`​`)],-1),s[22]||=i(`p`,null,`因为服务器的连接采用frp端口映射和ipv6直连。`,-1),s[23]||=i(`p`,null,`①若你有ipv6则可以使用ipv6节点来更快的进行访问，若看不明白则选择ipv4默认节点即可。两个节点只有线路不同，内容均为相同。`,-1),s[24]||=i(`p`,null,`②随后既可以进入例如jb_19CM该机器人终端进行管理。`,-1),s[25]||=i(`p`,null,`另外：该web面板属于“傻瓜式”操作逻辑，故此随后将不会对简单的操作进行解释，可以自行研究。`,-1),s[26]||=i(`figure`,null,[i(`img`,{src:`https://pic1.imgdb.cn/i/0342DbvZrRtrZkvQmVpm77.png`,alt:`PixPin_2026-02-24_16-48-41.png`,loading:`lazy`,decoding:`async`})],-1),s[27]||=i(`h4`,{id:`_1应用实例讲解-​`,tabindex:`-1`},[r(`①应用实例讲解 `),i(`a`,{href:`#_1%E5%BA%94%E7%94%A8%E5%AE%9E%E4%BE%8B%E8%AE%B2%E8%A7%A3`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#_1应用实例讲解-​`,"aria-label":`Permalink to "①应用实例讲解 [​](#_1应用实例讲解)"`},`​`)],-1),s[28]||=i(`p`,null,`进入演示的jb_19CM中后会有如下图界面，在点击开启实例之后会有几率在实例进程和应用进程中间点击如①关闭按钮可以会卡在正在停止中，也就是将关闭指令没有发送到MCC机器人程序当中，而实例误以为已经发送成功指令，从而一直卡在②的终止处。从而不能完整的保存配置文件，有几率下次不能成功启动实例。`,-1),s[29]||=i(`p`,null,[r(`还有一种情况为`),i(`strong`,null,`关闭实例命令`),r(`错误，如下图④处。MCC机器人的关机指令为`),i(`code`,null,`/quit`),r(`而默认关闭容器的命令为`),i(`code`,null,`Ctrl+C`),r(` / `),i(`code`,null,`^C`),r(`。导致MCC机器人不能识别`)],-1),s[30]||=i(`p`,null,[r(`解决办法为：点击③终端设置，将命令修改为`),i(`code`,null,`/quit`),r(`。注意若要关闭web窗口任然实现容器运行需要`),i(`strong`,null,`关闭仿真终端`),r(`开关`)],-1),s[31]||=i(`figure`,null,[i(`img`,{src:`https://pic1.imgdb.cn/i/0342DbvY6aeIfPMetuWkVi.png`,alt:`PixPin_2026-02-24_18-15-15.png`,loading:`lazy`,decoding:`async`})],-1),s[32]||=i(`h3`,{id:`_3-关于实例的高级配置-​`,tabindex:`-1`},[r(`3.关于实例的高级配置 `),i(`a`,{href:`#_3-%E5%85%B3%E4%BA%8E%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#_3-关于实例的高级配置-​`,"aria-label":`Permalink to "3.关于实例的高级配置 [​](#_3-关于实例的高级配置)"`},`​`)],-1),s[33]||=i(`p`,null,`只有管理员可以修改和管理`,-1),s[34]||=i(`h4`,{id:`_1启动命令-mcc-jb-19cm-​`,tabindex:`-1`},[r(`①启动命令：`),i(`code`,null,`./mcc jb_19CM`),r(),i(`a`,{href:`#_1%E5%90%AF%E5%8A%A8%E5%91%BD%E4%BB%A4-mcc-jb-19cm`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#_1启动命令-mcc-jb-19cm-​`,"aria-label":'Permalink to "①启动命令：`./mcc jb_19CM` [​](#_1启动命令-mcc-jb-19cm)"'},`​`)],-1),s[35]||=i(`figure`,null,[i(`img`,{src:`https://pic1.imgdb.cn/i/0342Dbvq2sD5ANBrWg1kDb.png`,alt:`PixPin_2026-02-24_18-35-36.png`,loading:`lazy`,decoding:`async`})],-1),s[36]||=i(`p`,null,`简单的示例如下`,-1),s[37]||=i(`div`,{class:`language- max-h-300px`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[i(`code`,{"v-pre":``},[i(`span`,{class:`line`},[i(`span`,null,`#登陆一个账户：notch，密码是：password123 要进入的服务器IP： mc.someserver.com:25565`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MinecraftClient.exe notch password123 mc.someserver.com:25565`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`#使用命令行参数覆盖来自MinecraftClient.ini的设置`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MinecraftClient.exe --debugmessages=false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`#使用其他ini并覆盖语言为中文`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MinecraftClient.exe CustomSettingsFile.ini --language=zh`)])])]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[38]||=i(`p`,null,[r(`更多启动命令的配置参考 `),i(`a`,{href:`https://mccteam.github.io/l10n/zh-Hans/guide/usage.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%94%A8%E6%B3%95`,target:`_blank`,rel:`noreferrer`},`Minecraft 命令行客户端`),r(`。`)],-1),s[39]||=i(`h4`,{id:`_2高级设置-​`,tabindex:`-1`},[r(`②高级设置 `),i(`a`,{href:`#_2%E9%AB%98%E7%BA%A7%E8%AE%BE%E7%BD%AE`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#_2高级设置-​`,"aria-label":`Permalink to "②高级设置 [​](#_2高级设置)"`},`​`)],-1),s[40]||=i(`p`,null,`高级设置中没有需要修改和配置的内容`,-1),s[41]||=i(`h4`,{id:`_3容器化-​`,tabindex:`-1`},[r(`③容器化 `),i(`a`,{href:`#_3%E5%AE%B9%E5%99%A8%E5%8C%96`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#_3容器化-​`,"aria-label":`Permalink to "③容器化 [​](#_3容器化)"`},`​`)],-1),s[42]||=i(`p`,null,[r(`现在实例采取`),i(`a`,{href:`https://www.runoob.com/docker/docker-intro.html`,target:`_blank`,rel:`noreferrer`},`Docker 容器的形式`),r(`来运行以此来保护主机的安全性。`)],-1),s[43]||=i(`p`,null,`可以设置的内容不多，按照图片中设置即可`,-1),s[44]||=i(`figure`,null,[i(`img`,{src:`https://pic1.imgdb.cn/i/0342DbMDvCOjjxBrnqOfzW.png`,alt:`PixPin_2026-02-24_20-05-59.png`,loading:`lazy`,decoding:`async`})],-1),s[45]||=i(`p`,null,[r(`其中值得注意的是`),i(`strong`,null,`环境变量`),r(`可以向容器内传递参数，如下图中的参数就能将容器的系统语言修改为中文。从而使MCC获取到的参数修改为中文。该方法在其他的地方仍然适用。`)],-1),s[46]||=i(`figure`,null,[i(`img`,{src:`https://pic1.imgdb.cn/i/0342DbMFaHKmImhL0q7VHj.png`,alt:`PixPin_2026-02-24_20-09-10.png`,loading:`lazy`,decoding:`async`})],-1),s[47]||=i(`p`,null,`④容器限制界面暂时没有东西需要修改`,-1),s[48]||=i(`figure`,null,[i(`img`,{src:`https://pic1.imgdb.cn/i/0342DbKNHx99zvFn0iURgF.png`,alt:`PixPin_2026-02-24_20-01-01.png`,loading:`lazy`,decoding:`async`})],-1),s[49]||=i(`h2`,{id:`文件管理-​`,tabindex:`-1`},[r(`文件管理 `),i(`a`,{href:`#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#文件管理-​`,"aria-label":`Permalink to "文件管理 [​](#文件管理)"`},`​`)],-1),s[50]||=i(`p`,null,`如图所示其中有很多文件，我将一一介绍：`,-1),s[51]||=i(`ul`,null,[i(`li`,null,`Sentry：这个是用于机器人的UUID，不用管`),i(`li`,null,`lang：这个是服务器的翻译配置文件，里面有一个zh_cn.json。`),i(`li`,null,`log.txt：这个是服务器消息日志文件。用于记录聊天成就等信息。可以在配置文件里面开启或者关闭，或者`),i(`li`,null,`MinecraftClient-20250522-285-linux-x64：机器人本体。文件名称可以修改。`),i(`li`,null,`MinecraftClient.backup.ini:机器人配置文件备份，若配置损坏则读取这个。`),i(`li`,null,[r(`MinecraftClient.ini：机器人配置文件，优先读取，可以修改，但是记得备份。点击`),i(`a`,{href:`https://mccteam.github.io/l10n/zh-Hans/guide/`,target:`_blank`,rel:`noreferrer`},`Minecraft 命令行客户端`),r(`查看详细配置。`)]),i(`li`,null,`core：这个我也不知道是干什么的。`)],-1),s[52]||=i(`figure`,null,[i(`img`,{src:`https://pic1.imgdb.cn/i/0342DbMLEV9ZXMSEuU7M1S.png`,alt:`PixPin_2026-02-24_20-31-14.png`,loading:`lazy`,decoding:`async`})],-1),s[53]||=i(`h2`,{id:`挂机机器人详细配置-​`,tabindex:`-1`},[r(`挂机机器人详细配置 `),i(`a`,{href:`#%E6%8C%82%E6%9C%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#挂机机器人详细配置-​`,"aria-label":`Permalink to "挂机机器人详细配置 [​](#挂机机器人详细配置)"`},`​`)],-1),s[54]||=i(`p`,null,[r(`你可以访问`),i(`a`,{href:`https://mccteam.github.io/l10n/zh-Hans/guide/`,target:`_blank`,rel:`noreferrer`},`Minecraft 命令行客户端`),r(`来查看更加详细的配置。`)],-1),s[55]||=i(`div`,{class:`language- max-h-300px`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[i(`code`,{"v-pre":``},[i(`span`,{class:`line`},[i(`span`,null,`# 启动配置文件`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 请不要在此文件中记录任何无关的东西，因为这个文件会被MCC覆盖写入。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# `)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 对 MCC（Minecraft 命令行客户端）不熟悉？请看这个文档：https://mccteam.github.io/g/conf.html`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 想升级到较新的版本吗？请访问 https://github.com/MCCTeam/Minecraft-Console-Client/#download`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Head]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`"Current Version" = "GitHub build 281, built on 2024-12-27 from commit 2409de2"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`"Latest Version" = "GitHub build 285, built on 2025-05-22"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Main]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Main.General]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Account = { Login = "", Password = "" }     # Login请填写邮箱或玩家名称。若要以离线模式登录请使用"-"作为密码。若留空则使用交互式登录。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Server = { Host = "" }                      # 游戏服务器的地址和端口，可填入域名或IP地址。（可删除端口字段，会自动解析SRV记录）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`AccountType = "microsoft"                   # 帐户类型：mojang 或是 microsoft 或是 yggdrasil。此项设置也会影响交互式登录。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Method = "mcc"                              # 微软账户的登录方式：mcc 或是 browser（手动在网页上登录）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`AuthServer = { Host = "", Port = 443 }      # Yggdrasil API 认证服务器的域名与端口。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 在更改这里的某项设置之前，请确保你理解了该选项的影响。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Main.Advanced]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`EnableSentry = true                         # Set to false to opt-out of Sentry error logging.`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Language = "zh_cn"                          # 请使用Minecraft语言代码填写，详见 https://mccteam.github.io/r/l-code.html`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`LoadMccTranslation = true                   # 在可用时加载应用于MCC的翻译，关闭则仅使用英语。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ConsoleTitle = "%username%@%serverip% - Minecraft Console Client"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`InternalCmdChar = "slash"                   # MCC内部命令的前缀，可使用 "none", "slash"(/) 或 "backslash"(\\)。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MessageCooldown = 1.0                       # 控制向服务器发送消息的最小间隔时间（秒）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`BotOwners = [ "Player1", "Player2", ]       # 设置机器人的所有者。/!\\服务器管理员可以伪装成任何玩家!`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MinecraftVersion = "auto"                   # 游戏版本，可使用 "auto"(自动) 或类似 "1.X.X" 的值。设定具体版本将跳过从服务器解析的过程。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`EnableForge = "no"                          # 可使用 "auto"(自动)，"no"(禁用) 或是 "force"(强制启用，仅在 1.13 及更高的版本中可用)。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`BrandInfo = "mcc"                           # 客户端标识，可用 "mcc"，"vanilla"(原版客户端) 或 "none"(空标识)。这用于改变MCC向服务器发送的客户端标识内容。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ChatbotLogFile = ""                         # 留空将禁用 ChatBot 写入日志文件。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`PrivateMsgsCmdName = "tell"                 # 远程控制功能将会使用它。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ShowSystemMessages = true                   # 显示游戏服务器的系统消息（来自管理员或命令方块等）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ShowXPBarMessages = true                    # 显示经验条上方的消息，如果被此类消息刷屏请禁用此选项。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ShowChatLinks = true                        # 解码聊天信息里的链接，并在控制台单独显示。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ShowInventoryLayout = true                  # 以字符画形式显示库存布局。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`TerrainAndMovements = false                 # 开启地形处理将消耗更多的内存、CPU和网络带宽，但这允许你进行移动以及和方块交互。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MoveHeadWhileWalking = true                 # 在移动时转向头部。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MovementSpeed = 2                           # 高于 2 的移动速度可能会被检测为作弊。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`TemporaryFixBadpacket = false               # 暂时修复一些服务器上的坏数据包问题。需要先启用“TerrainAndMovements”。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`InventoryHandling = false                   # 启用库存处理（可操作背包、箱子等容器）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`EntityHandling = false                      # 启用实体处理。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`SessionCache = "disk"                       # 如何缓存会话令牌。可使用 "none"(不缓存)，"memory"(内存缓存) 或 "disk"(磁盘缓存)。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ProfileKeyCache = "disk"                    # 如何缓存聊天签名密钥。可使用 "none"(不缓存)，"memory"(内存缓存) 或 "disk"(磁盘缓存)。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ResolveSrvRecords = "fast"                  # 可填写 "no"，"fast"（超时时间为五秒钟）或是 "yes"。加入某些服务器需要开启此项。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`PlayerHeadAsIcon = true                     # 使用玩家皮肤头像作为窗口图标，这仅在部分旧版控制台中有效。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ExitOnFailure = false                       # 发生错误时是否直接退出，用于在非交互式脚本中使用MCC。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`CacheScript = true                          # 缓存已编译的脚本，以便在低端设备上更快的加载。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Timestamps = false                          # 在聊天信息头部添加时间戳。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`AutoRespawn = false                         # 死亡时自动重生（开启前请确保你的出生点是安全的）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MinecraftRealms = false                     # 启用对加入我的世界领域(Realms)服务器的支持。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`TcpTimeout = 30                             # 与服务器的TCP连接超时时间（秒）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`EnableEmoji = true                          # 如果关闭，Emoji表情符号将被替换成更简单的字符（用于 "/chunk status" 命令）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MinTerminalWidth = 16                       # 当使用终端宽度来计算显示的图像大小时，限制其最小宽度。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MinTerminalHeight = 10                      # 当使用终端高度来计算显示的图像大小时，限制其最小高度。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`IgnoreInvalidPlayerName = true              # 忽略无效的玩家名`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# AccountList：使你可以不用输入账号信息而快速在多个账号间切换`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 可用命令示例："/tell <mybot> reco Player2"，"/connect <serverip> Player1"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Main.Advanced.AccountList]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`AccountNikename1 = { Login = "playerone@email.com", Password = "thepassword" }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`AccountNikename2 = { Login = "TestBot", Password = "-" }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# ServerList：可用使用服务器别名快速连接到该服务器`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 别名不能包含空格和小数点"，而且 "localhost" 不能作为别名使用。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 可用命令示例："/tell <mybot> connect Server1"，"/connect Server2"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Main.Advanced.ServerList]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ServerAlias1 = { Host = "mc.awesomeserver.com" }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ServerAlias2 = { Host = "192.168.1.27", Port = 12345 }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 聊天签名相关设置（影响1.19及以上版本）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Signature]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`LoginWithSecureProfile = true               # 仅微软账户可用。如禁用此项，将无法签名消息和进入某些的服务器。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`SignChat = true                             # 是否签名发送的聊天消息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`SignMessageInCommand = true                 # 是否签名指令中的消息。例如"/msg"和"/me"中的消息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MarkLegallySignedMsg = true                 # 是否使用绿色色块标识拥有合法签名的聊天。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MarkModifiedMsg = true                      # 是否使用黄色色块标识被服务器更改过的聊天。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MarkIllegallySignedMsg = true               # 是否使用红色色块标识没有合法签名的聊天。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MarkSystemMessage = true                    # 是否使用灰色色块标识系统消息（它们总是不会被签名）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ShowModifiedChat = true                     # 设置为 true，显示被服务器修改过的信息；设置为 false，显示经过签名的原始信息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ShowIllegalSignedChat = true                # 是否显示没有被正确签名的聊天消息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 此项设置仅会影响到控制台中的信息（日志）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Logging]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`DebugMessages = false                       # 请在提交错误报告之前先启用此项。谢谢！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ChatMessages = true                         # 是否显示来自服务器的聊天消息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`InfoMessages = true                         # 信息性的消息。（大部分来自MCC内部）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`WarningMessages = true                      # 显示警告消息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ErrorMessages = true                        # 显示错误消息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ChatFilterRegex = ".*"                      # 过滤聊天消息所用的正则表达式。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`DebugFilterRegex = ".*"                     # 过滤调试消息所用的正则表达式。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`FilterMode = "disable"                      # 过滤方式："disable"（禁用），"blacklist"（隐藏匹配的消息） 或 "whitelist"（仅显示匹配的消息）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`LogToFile = false                           # 是否将日志信息写入到文件。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`LogFile = "console-log.txt"                 # 日志文件名称。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`PrependTimestamp = false                    # 写入日志文件时是否添加时间戳。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`SaveColorCodes = false                      # 是否保留消息中的颜色字符。（例如"§b"）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Console]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Console.General]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ConsoleColorMode = "vt100_24bit"            # 使用“disable”、“legacy_4bit”、“vt100_4bit”、“vt100_8bit”或“vt100_24bit”。如果终端上出现“←[0m”等乱码，您可以尝试切换到“legacy_4bit”模式，或者直接禁用它。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Display_Input = true                        # 您可以使用“Ctrl+P”打印当前输入和光标位置。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`History_Input_Records = 32                  # Console.General.History_Input_Records`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 命令补全建议的设置。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 只在使用“vt100_24bit”颜色模式时才可自定义颜色。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Console.CommandSuggestion]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enable = true                               # 是否在控制台中显示命令建议。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enable_Color = true`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Use_Basic_Arrow = false                     # 如果命令建议中的箭头未在您的终端中正确显示，请启用此选项。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Max_Suggestion_Width = 30`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Max_Displayed_Suggestions = 6`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Text_Color = "#f8fafc"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Text_Background_Color = "#64748b"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Highlight_Text_Color = "#334155"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Highlight_Text_Background_Color = "#fde047"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Tooltip_Color = "#7dd3fc"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Highlight_Tooltip_Color = "#3b82f6"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Arrow_Symbol_Color = "#d1d5db"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[AppVar]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 可以在某些字段中以 "%yourvar%" 的形式使用。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# %username% 和 %serverip% 为保留的变量名。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[AppVar.VarStirng]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`your_var = "your_value"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`"your var 2" = "your value 2"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 通过代理连接到服务器。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 如果Mojang/微软登录服务被防火墙阻断，设置Enabled_Login=true以使用代理进行登录。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 如果到Minecraft游戏服务器的连接被防火墙阻止，设置Enabled_Ingame=true以使用代理连接游戏服务器。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 在启用代理前，请确保你的服务器规则允许使用代理或VPN，否则你可能面临被封禁等风险！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[Proxy]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled_Update = false                      # 下载MCC的更新时是否通过代理服务器。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled_Login = false                       # 是否使用代理连接Mojang或微软的登录服务器。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled_Ingame = false                      # 是否通过代理连接Minecraft游戏服务器。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Server = { Host = "0.0.0.0", Port = 8080 }  # 代理服务器必须允许HTTPS登录。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Proxy_Type = "HTTP"                         # 支持的代理类型："HTTP"，"SOCKS4"，"SOCKS4a"，"SOCKS5"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Username = ""                               # 只有连接到受密码保护的代理才需要。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Password = ""                               # 只有连接到受密码保护的代理才需要。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 下面的设置将会被发送到游戏服务器，只影响一些服务器端的东西，比如你的皮肤。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[MCSettings]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = true                              # 如果禁用，下面的设置就不会被发送到服务器上。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Locale = "en_US"                            # 请使用Minecraft的语言代码填写，详见[Main.Advanced.Language]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`RenderDistance = 8                          # 渲染距离，取值范围[0 - 255]。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Difficulty = "peaceful"                     # Minecraft 1.7及更早版本难度。"peaceful"，"easy"，"normal"，"difficult"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ChatMode = "enabled"                        # 使用 "enabled"（完全启用聊天）、"commands"（仅限命令）或 "disabled"（完全禁用聊天）。这允许你禁言自己...`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ChatColors = true                           # 这允许你在服务器端禁用聊天颜色。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MainHand = "left"                           # 在1.9及更高版本中的主手设置。"left"（左手） 或 "right"（右手）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[MCSettings.Skin]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Cape = true`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Hat = true`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Jacket = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Sleeve_Left = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Sleeve_Right = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Pants_Left = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Pants_Right = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# MCC会尽力检测聊天信息，但有些服务器有不寻常的聊天格式`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 当这种情况发生时，你需要在下面自定义匹配聊天所用的正则表达式`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 详见 https://mccteam.github.io/g/conf/#chat-format-section`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatFormat]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Builtins = true                             # 是否启用MCC内置的聊天检测规则。设置为 false 以避免与自定义格式冲突。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`UserDefined = false                         # 是否启用下方的自定义正则表达式进行聊天检测。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Public = "^<([a-zA-Z0-9_]+)> (.+)$"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Private = "^([a-zA-Z0-9_]+) whispers to you: (.+)$"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`TeleportRequest = '^([a-zA-Z0-9_]+) has requested (?:to|that you) teleport to (?:you|them)\\.$'`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# =============================== #`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# Minecraft 控制台客户端 机器人  #`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# =============================== #`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 当检测到特定聊天消息或特定事件发生时提醒你`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`#  # 对检测特定玩家的聊天消息很有用。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.Alerts]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Beep_Enabled = true                         # 除了高亮显示外，当检测到一个词时还会播放类似蜂鸣器的哔哔声。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_By_Words = false                    # 在收到指定的关键词后触发提醒。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_By_Rain = false                     # 在开始下雨和停止下雨时触发提醒。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_By_Thunderstorm = false             # 在雷暴天气的开始与结束触发提醒。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Log_To_File = false                         # 是否将提醒消息写入到日志文件。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Log_File = "alerts-log.txt"                 # 日志文件的路径。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 触发提醒的聊天关键词列表。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Matches = [ "Yourname", " whispers ", "-> me", "admin", ".com", ]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 出现这些关键词后该条消息一定不触发提醒。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Excludes = [ "myserver.com", "Yourname>:", "Player Yourname", "Yourname joined", "Yourname left", "[Lockette] (Admin)", " Yourname:", "Yourname is", ]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 定期发送命令，或让机器人随机走动，以避免检测到挂机后被踢出服务器`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`#  # /!\\启用前请确保你的服务器规则不禁止反AFK机制！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\如果启用随机移动，请将机器人围在围栏里，以防走失！（建议尺寸5x5x5）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AntiAFK]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Delay = { min = 60.0, max = 60.0 }          # 执行操作的间隔时间。（秒）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Command = "/ping"                           # 发送给服务器的指令。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Use_Sneak = false                           # 在发送命令时是否蹲下。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Use_Terrain_Handling = false                # 启用地形处理，以使机器人能够四处移动。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Walk_Range = 5                              # 机器人可以随机移动的范围（注意：范围越大，速度越慢）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Walk_Retries = 20                           # 尝试移动失败几次后在改为发送命令模式。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 自动攻击周围的生物`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 使用此功能之前，你需要开启实体处理。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\确保你的服务器允许使用自动攻击。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\服务器插件可能会认为此功能时作弊，并可能会封禁你的账号，所以请自己检查服务器规则是否允许。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AutoAttack]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Mode = "single"                             # "single"（单目标） 或 "multi"（多目标）。一次攻击一个生物还是范围内的所有生物。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Priority = "distance"                       # "health"（生命值）或 "distance"（距离）。当使用"single"模式时，以哪一个属性确定优先级。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Cooldown_Time = { Custom = false, value = 1.0 } # 每次攻击间的冷却时间，设置 "Custom = false" 以让MCC自动计算攻击速度。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Interaction = "Attack"                      # 可选项："Interact"（交互），"Attack"（攻击） 或 "InteractAt"（交互并攻击）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Attack_Range = 4.0                          # 上限介于 1 到 4`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Attack_Hostile = true                       # 是否攻击敌对生物。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Attack_Passive = false                      # 是否攻击被动生物。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`List_Mode = "whitelist"                     # 将实体列表作为 "whitelist"（白名单）还是 "blacklist"（黑名单）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Entites_List = [ "Zombie", "Cow", ]         # 你可以在这里找到所有的实体名称：https://mccteam.github.io/r/entity/#L15`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 自动使用背包中的物品进行合成。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 请看 https://mccteam.github.io/g/bots/#auto-craft`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你需要启用库存处理来使用这个功能`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 如果需要使用工作台，你还需要启用地形处理。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AutoCraft]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`CraftingTable = { X = 123.0, Y = 65.0, Z = 456.0 } # 如果你打算使用工作台，请填写它所在的位置。（需要启用地形处理）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`OnFailure = "abort"                         # 合成失败时应该怎么处理，"abort"（中止）或 "wait"（等待）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# Recipes.Name：给该配方起一个独一无二的名字。（不能包含空白字符）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# Recipes.Type：合成类型，"player"（背包2x2）或 "table"（工作台3x3）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# Recipes.Result：合成的目标物品`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# Recipes.Slots：合成的物品摆放方式，以从左到右、从上到下的格式填写。需留空请填写"Null"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 最新的物品命名请看：https://mccteam.github.io/r/item/#L12`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[[ChatBot.AutoCraft.Recipes]]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Name = "Recipe-Name-1"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Type = "player"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Result = "StoneBricks"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Slots = [ "Stone", "Stone", "Stone", "Stone", ]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[[ChatBot.AutoCraft.Recipes]]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Name = "Recipe-Name-2"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Type = "table"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Result = "StoneBricks"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Slots = [ "Stone", "Stone", "Null", "Stone", "Stone", "Null", "Null", "Null", "Null", ]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 自动挖掘方块。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你需要启用地形处理来使用这个功能。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你可以使用 "/digbot start" 和 "/digbot stop" 指令来控制 AutoDig 的启停。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 由于MCC目前还不支持精确计算方块的碰撞体积，在获取看向的方块时，视线上所有的方块都被看作是完整的立方体。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 查询方块的名称，请访问 https://mccteam.github.io/r/block/#L15`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AutoDig]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Mode = "lookat"                             # "lookat"，"fixedpos" 或 "both"。挖掘看向的方块还是固定位置的方块，或者是两个条件都满足的方块。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 使用 "fixedpos" 或 "both" 模式时，方块的坐标。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Locations = [`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`	{ x = 123.5, y = 64.0, z = 234.5 },`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`	{ x = 124.5, y = 63.0, z = 235.5 },`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Location_Order = "distance"                 # "distance" 或 "index"，当使用 "fixedpos" 模式时，按照到玩家的距离，还是列表中的顺序确定挖掘的方块。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Auto_Start_Delay = 3.0                      # 进入游戏后等待多少秒后开始自动挖掘，设置为-1禁用自动开始。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Dig_Timeout = 60.0                          # 若挖掘一个方块用时超过这个值，将会重新获取目标进行挖掘。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Log_Block_Dig = true                        # 是否输出挖掘方块的相关信息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`List_Type = "whitelist"                     # 将方块列表作为 "whitelist"（白名单）还是 "blacklist"（黑名单）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Blocks = [ "Cobblestone", "Stone", ]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 自动从背包/库存中丢弃指定的物品`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你需要启用库存处理来使用这个功能`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 查询物品命名：https://mccteam.github.io/r/item/#L12`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AutoDrop]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Mode = "include"                            # "include"（丢弃列表中的物品），"exclude"（丢弃列表外的所有物品） 或 "everything"（丢弃所有物品）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Items = [ "Cobblestone", "Dirt", ]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 在饱食度较低是自动在背包中寻找食物食用。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你需要启用库存处理来使用这个功能。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AutoEat]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Threshold = 6`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 使用鱼竿自动钓鱼。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 指南：https://mccteam.github.io/g/bots/#auto-fishing`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你可以使用"/fish"命令来手动进行控制。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 启用前请确保服务器允许你自动钓鱼。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AutoFishing]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Antidespawn = false                         # 如果你之前没有启用过这个选项，请保持它为 false 。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Mainhand = true                             # 使用主手还是副手拿鱼竿。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Auto_Start = true                           # 是否在进入服务器后自动开始钓鱼，禁用此功能后，你需要使用"/usehand"手动使用鱼竿一次。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Cast_Delay = 0.4                            # 钓到鱼后多久开始下一次钓鱼（抛竿）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Fishing_Delay = 3.0                         # 进入服务器后多久后开始自动钓鱼。（秒）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Fishing_Timeout = 300.0                     # 多少秒后没有钓到鱼视为超时。超时后会重新抛竿。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Durability_Limit = 2.0                      # 不会使用低于此耐久度的鱼竿（鱼竿耐久度最高为64）。（需要启用库存处理）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Auto_Rod_Switch = true                      # 在当前鱼竿不可用后自动切换到背包中的其他鱼竿。（需要启用库存处理）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Stationary_Threshold = 0.001                # 鱼钩在X轴和Z轴方向上的移动小于这个值将被认为是静止的，过高的阈值会在抛竿途中触发收竿。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Hook_Threshold = 0.2                        # 一个“静止”的鱼钩，在Y轴方向上的移动超过这个阈值将被认为钓到了鱼。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Log_Fish_Bobber = false                     # 用于调整以上两个阈值，启用后会在收到鱼钩实体移动数据包后打印其坐标变化。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enable_Move = false                         # 这允许玩家在钓到鱼后改变其位置或朝向。（需要启用地形处理）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 会按照 "1->2->3->4->3->2->1->2->..." 的顺序执行。每次可用改变位置、朝向或是都改变。推荐只改变朝向。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[[ChatBot.AutoFishing.Movements]]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`facing = { yaw = 12.34, pitch = -23.45 }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[[ChatBot.AutoFishing.Movements]]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`XYZ = { x = 123.45, y = 64.0, z = -654.32 }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`facing = { yaw = -25.14, pitch = 36.25 }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[[ChatBot.AutoFishing.Movements]]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`XYZ = { x = -1245.63, y = 63.5, z = 1.2 }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 在被服务器断开连接时自动重连，例如服务器重启时。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 谨慎使用Ignore_Kick_Message=true，这会在服务器管理员将你踢出时依然连回！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AutoRelog]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Delay = { min = 3.0, max = 3.0 }            # 重新加入到服务器前的延迟时间。(单位：秒)`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Retries = 3                                 # 重新登录服务器失败时的重试次数，使用-1表示无限重试。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Ignore_Kick_Message = false                 # 当设置为 true 时，将不考虑踢出的信息直接重连。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 如果踢出信息与这其中的任何一个字符串匹配，那么将触发自动重连。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Kick_Messages = [ "Connection has been lost", "Server is restarting", "Server is full", "Too Many people", ]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 当聊天消息与文件中的规则匹配时，自动执行指定命令。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 服务器管理员可以以任意玩家的身份发送任意消息，记住这一点！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 此机器人如果设置的不得当可能会造成刷屏，建议设置一个冷却时间。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.AutoRespond]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Matches_File = "matches.ini"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Match_Colors = false                        # 不要删除文本中的颜色代码（使用§字符的代码）。注意：启用后你的匹配模板也必须包括颜色代码。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 将聊天信息写入到日志文件中。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.ChatLog]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Add_DateTime = true`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Log_File = "chatlog-%username%-%serverip%.txt"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Filter = "messages"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 此机器人允许您通过Discord频道发送和接收消息和命令。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 您也可以在文档中阅读此机器人的配置方法(文档中有图像)。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 文档：https://mccteam.github.io/g/bots/#discord-bridge`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 配置方法：`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 首先您需要在 Discord 开发者中心上创建一个机器人，这有一个视频教程：https://www.youtube.com/watch?v=2FgMnZViNPA。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 重要/! : 创建机器人时，您必须启用"Message Content Intent"，"Server Members Intent"和"Presence Intent"才能使机器人工作！还请小心跟随教程，不要错过任何步骤！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 创建机器人时，复制生成的令牌并将其粘贴在"Token"字段中 (令牌很重要，保证它们的安全)。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 复制"Application ID"并访问：https://discordapi.com/permissions.html`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 粘贴您复制过的ID并在权限中检查"Administrator"字段，然后点击底部的链接。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 这将打开您的服务器的邀请菜单，选择您想邀请机器人的服务器并邀请他。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 邀请机器人后，前往您的Discord客户端访问设置 -> 高级并启用"Developer Mode"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 退出设置并右击邀请机器人进入服务器列表中的服务器 然后点击"Copy ID"，然后将ID粘贴到下方的"GuildId"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 然后右键单击要与机器人互动的频道，然后右键单击选择> "Copy ID"，然后将ID粘贴到下方的"ChannelId"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 最后，在频道发送一条消息， 右键单击你的昵称，然后右键单击选择> "Copy ID"，然后将ID粘贴到下方的"OwnersIds"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# -----------------------------------------------------------`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 如何使用：`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 希望运行MCC指令时，在指令前加上点 "."。例如 ".move 143 64 735"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 希望发送聊天信息时，只需要直接发送就好了。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.DiscordBridge]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Token = "your bot token here"               # 你的Discord机器人的令牌。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`GuildId = 1018553894831403028               # 你邀请机器人加入的服务器ID。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ChannelId = 1018565295654326364             # 你想要使机器人与 MCC 交互的频道ID。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`OwnersIds = [ 978757810781323276, ]         # 你希望能够使用机器人与 MCC 交互的用户ID列表。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Message_Send_Timeout = 3                    # 如果信息无法被发送至Discord时，要等候多少秒才取消发送。（最小 1 秒）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 消息格式`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 使用 { 和 } 包裹的单词将在代码执行过程中被替换，请不要更改它们！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 例如，{message} 将替换为实际的消息，{username} 将替换为用户名， {timestamp} 将替换为当前时间。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 了解Discord消息格式，请访问：https://mccteam.github.io/r/dc-fmt.html`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`PrivateMessageFormat = "**[Private Message]** {username}: {message}"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`PublicMessageFormat = "{username}: {message}"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`TeleportRequestMessageFormat = "A new Teleport Request from **{username}**!"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 自动为你耕种农作物（种下，收获和骨粉催熟）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 可用的农作物类型：Beetroot（甜菜根）, Carrot（萝卜）, Melon（西瓜）, Netherwart（地狱疣）, Pumpkin（南瓜）, Potato（马铃薯）, Wheat（小麦）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 使用方法："/farmer start" 指令和 "/farmer stop" 指令。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 注意：这是新加入的机器人，它不完美并且只在 1.19.2 版本进行过测试。它有些小问题，例如有时候不能对萝卜或马铃薯使用骨粉催熟；`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 或机器人会在耕地上跳跃并破坏耕地（这很少发生，但还是有机率出现）。我们期待可以改善它。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 另外，如果你的耕地只有一格厚，请加厚至两格以上，否则机器人在重新连接时有可能会穿过耕地并掉落。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 此外，如果机器人走到边缘时将不会拾起所有的掉落物，我们已有计划在未来添加这个选项，同时加入将农作物放到箱子及从箱子补充骨粉。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.Farmer]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Delay_Between_Tasks = 1.0                   # 任务之间的延迟时间（最短为1秒）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 让机器人跟随指定玩家`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 注意这是一个实验性的功能，目前的寻路速度可能很慢，你可能需要时常等一会机器人来让它跟上你。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你可以调整"Update_Limit"，找到最适合你的速度。（注意不要设置的太低，这样可能导致反效果或使MCC卡顿）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 在使用此功能之前，请先确保服务器规则允许你这样做。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.FollowPlayer]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Update_Limit = 1.5                          # 机器人寻路的间隔时间（以秒为单位）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Stop_At_Distance = 3.0                      # 如果玩家在该范围内，则视为已经接近玩家了。（防止机器人将玩家推开而产生无限循环）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 一个用于演示聊天互动的小游戏。玩家可以一次一个字母地猜出神秘的单词。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你需要正确地使用 ChatFormat，并在 botowners 中添加自己，用/tell <bot username> start`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 这个机器人可能会造成刷屏，如果许多玩家与它互动。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.HangmanGame]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`English = true`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`FileWords_EN = "hangman-en.txt"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`FileWords_FR = "hangman-fr.txt"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 在玩家和服务器之间中继消息，就像一个邮件插件一样。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 这个机器人可以在收件人离线时存储消息，并在他们加入服务器时发送消息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 服务器管理员可以以任意玩家的身份发送任意消息，请记住这一点。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.Mailer]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`DatabaseFile = "MailerDatabase.ini"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`IgnoreListFile = "MailerIgnoreList.ini"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`PublicInteractions = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MaxMailsPerPlayer = 10`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MaxDatabaseSize = 10000`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`MailRetentionDays = 30`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 允许你将地图渲染成.jpg图片，该图片会被渲染到Rendered_Maps文件夹中。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 注意：这个功能目前只对解决使用地图的验证码有用。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 如果一些服务器解决验证码的时间很短，请启用Auto_Render_On_Update并准备快速打开该文件。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 在linux上，你可以使用FTP来访问生成的文件。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.Map]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Render_In_Console = true                    # 是否在控制台中渲染地图。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Save_To_File = false                        # 是否将地图保存为文件。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Auto_Render_On_Update = false               # 一旦接收到新的地图或已有地图被更新，自动渲染该地图。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Delete_All_On_Unload = true                 # 在卸载/重新加载地图时删除所有已渲染的地图（退出MCC时不会删除图像）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Notify_On_First_Update = true               # 当第一次从服务器上收到一张地图时，发送一个通知。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Rasize_Rendered_Image = false               # 调整渲染图像的大小，当渲染的图像较小或需要发送到Discord时，这很有用。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Resize_To = 512                             # 渲染的图像应调整到的大小，以像素为单位（例如 512）。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 将已渲染地图（保存到文件）通过Discord/Telegram Bridge发送到Discord/Telegram频道（Discord/Telegram Bridge必须已激活并完成配置！）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你需要激活 Save_To_File 才能使用此功能。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 我们同时建议打开调整大小功能。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Send_Rendered_To_Discord = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Send_Rendered_To_Telegram = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 定期记录当前的玩家列表到文件中。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.PlayerListLogger]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`File = "playerlog.txt"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Delay = 60.0                                # （单位：秒）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 通过游戏中的私聊向机器人发送MCC控制台命令`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 你需要先配置好[ChatFormat]章节的设置，并在[Main.Advanced.bot_owners]中添加自己的账号。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 服务器管理员可以以任意玩家的身份发送任意消息，仅在信任他们时启用本功能。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.RemoteControl]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`AutoTpaccept = true`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`AutoTpaccept_Everyone = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 使用"/replay start"开始记录游戏，并在之后使用 Replay Mod (https://www.replaymod.com/) 进行重放。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 请注意，由于技术限制，玩家自身不会显示在重放文件中。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 你应该使用"/replay stop"停止记录或者使用"/quit"退出程序，否则回放文件可能会损坏。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.ReplayCapture]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Backup_Interval = 300.0                     # 每间隔多少秒自动保存一次回放文件，以秒为单位。使用-1禁用自动保存。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 在加入服务器时、到达特定时间时或以设定的时间间隔执行命令或脚本文件`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 详细使用方法请查看：https://mccteam.github.io/g/bots/#script-scheduler`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.ScriptScheduler]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[[ChatBot.ScriptScheduler.TaskList]]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Task_Name = "Task Name 1"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_On_First_Login = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_On_Login = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_On_Times = { Enable = true, Times = [ 14:00:00, ] }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_On_Interval = { Enable = true, MinTime = 3.6, MaxTime = 4.8 }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Action = "send /hello"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[[ChatBot.ScriptScheduler.TaskList]]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Task_Name = "Task Name 2"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_On_First_Login = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_On_Login = true`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_On_Times = { Enable = false, Times = [ ] }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Trigger_On_Interval = { Enable = false, MinTime = 1.0, MaxTime = 10.0 }`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Action = "send /login pass"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 这个 Chatbot 可以让你通过Telegram机器人使用Telegram频道或私聊来与MCC交互。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 注意：你不能从群组对话发送信息和指令，你只能从私人信息发送，但你可以从客户端取得群组对话的信息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# -----------------------------------------------------------`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 配置：`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 首先你需要创建一个Telegram机器人并取得API密钥。请到Telegram找到@botfather`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 点击开始按钮，阅读机器人的信息，然后输入 "/newbot"。@botfather 将会引导你创建机器人。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 当成功创建机器人后，复制API钥匙，然后贴在 "ChatBot.TelegramBridge" 部分中的 "Token" 字段（本部分）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 请勿与任何人分享API密钥，并将它存储在安全的地方。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 然后启动客户端和你的Telegram，在Telegram中寻找你新创建的机器人并与机器人打开私人信息。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 点击开始按钮，输入并发送 ".chatid" 指令来获得聊天室ID。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 复制聊天室ID （例子：2627844670），然后贴在 "ChannelId" 字段和 "Authorized_Chat_Ids" 字段 （"Authorized_Chat_Ids" 字段是一个数字而不是字符串），存储配置文档。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 现在你可以通过私聊信息来使用机器人。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 如果你没有将聊天室ID加到 "Authorized_Chat_Ids" 字段，任何找到你的机器人的人将能够运行指令和发送信息！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ "Authorized_Chat_Ids" 字段中的ID应该是一个数字而不是字符串！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# -----------------------------------------------------------`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 注意：如果你希望通过群组来接收信息，将群组暂时改为公开，邀请你的机器人到群组并给与机器人管理员权限，最后将群组改为私人。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 然后将 "ChannelId" 字段设为 @群组名称（必须包括@，例子："@mysupersecretchannel"），你可以在频道邀请链接看到这个用户名。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 只需包含用户名加上@在前面，不需要包括剩下的链接。例如你的链接是 "https://t.me/mysupersecretchannel"，"ChannelId" 字段将会是 "@mysupersecretchannel"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# /!\\ 注意，你将不能从群组发送信息到客户端！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# -----------------------------------------------------------`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 如何使用：`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 希望运行MCC指令时，在指令前加上点 "."。例如 ".move 143 64 735"。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 希望发送聊天信息时，只需要直接发送就好了。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.TelegramBridge]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Token = "your bot token here"               # 你的Telegram机器人的令牌。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`ChannelId = ""                              # 你想要使机器人与 MCC 交互的频道ID。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Authorized_Chat_Ids = [ ]                   # 允许发送信息和运行指令的聊天室ID列表。要获得你的私人聊天室ID，请在 Telegram 中使用 ".chatid" 指令。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Message_Send_Timeout = 3                    # 如果信息无法被发送至Telegram时，要等候多少秒才取消发送。（最小 1 秒）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 消息格式`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 使用 { 和 } 包裹的单词将在代码执行过程中被替换，请不要更改它们！`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 例如，{message} 将替换为实际的消息，{username} 将替换为用户名， {timestamp} 将替换为当前时间。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 了解Telegram消息格式，请访问：https://mccteam.github.io/r/tg-fmt.html`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`PrivateMessageFormat = "*(Private Message)* {username}: {message}"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`PublicMessageFormat = "{username}: {message}"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`TeleportRequestMessageFormat = "A new Teleport Request from **{username}**!"`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 一个收集掉落物的Chat Bot。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.ItemsCollector]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Collect_All_Item_Types = true               # 如果被设置为true，则机器人会拾取所有的掉落物，无论其类型如何。如果您需要使用掉落物白名单，请将该选项设置为false。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Items_Whitelist = [ "Diamond", "NetheriteIngot", ] # 在这个列表中，您可以指定机器人要有目标地拾取某些掉落物。要启用该选项，请将Collect_All_Item_Types设为false。（PS：这并不能阻止机器人意外地拾取其他掉落物，它只是前往它发现掉落物的位置。）\\n您可以参照掉落物类型列表：https://raw.githubusercontent.com/MCCTeam/Minecraft-Console-Client/master/MinecraftClient/Inventory/ItemType.cs`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Delay_Between_Tasks = 300                   # 机器人扫描掉落物的延迟，以毫秒为单位。（推荐：300~500ms左右）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Collection_Radius = 30.0                    # 机器人搜寻掉落物的半径。（默认：30格）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Always_Return_To_Start = true               # 如果您将其设置为true，则机器人会在拾取完所有掉落物后返回起始位置。`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Prioritize_Clusters = false                 # 如果设置为 true，机器人将会在收集完所有物品之后处理，而不是收集一次就处理`)]),r(`
`),i(`span`,{class:`line`},[i(`span`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`# 通过Web Sockets来远程控制MCC机器人.\\n# 在远程和异步执行MCC中的程序很有用.\\n# JavaScript示例: https://github.com/milutinke/MCC.js.git\\n# 协议规范很快将会在文档种提供`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`[ChatBot.WebSocketBot]`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Enabled = false`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Ip = "127.0.0.1"                            # WebSocket服务器监听的IP地址`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Port = 8043                                 # Websocket服务器绑定的端口`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`Password = "1f635d72954d451383a6f2629f450f8c" # 密码会用于Web Socket服务器的身份验证（建议修改默认密码并设置一个强密码）`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`DebugMode = false                           # 此选项适用于使用Chat Bot远程执行程序/命令/函数`)]),r(`
`),i(`span`,{class:`line`},[i(`span`,null,`AllowIpAlias = false                        # 允许 IP 别名，如 "localhost"；如果使用容器，则可以使用容器名称...`)])])]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[56]||=i(`hr`,null,null,-1),s[57]||=i(`h2`,{id:`附-账号列表-​`,tabindex:`-1`},[r(`附：账号列表 `),i(`a`,{href:`#%E9%99%84%E8%B4%A6%E5%8F%B7%E5%88%97%E8%A1%A8`},`​`),r(),i(`a`,{class:`header-anchor`,href:`#附-账号列表-​`,"aria-label":`Permalink to "附：账号列表 [​](#附账号列表)"`},`​`)],-1)]),"main-header":l(()=>[c(n.$slots,`main-header`)]),"main-header-after":l(()=>[c(n.$slots,`main-header-after`)]),"main-nav":l(()=>[c(n.$slots,`main-nav`)]),"main-content-before":l(()=>[c(n.$slots,`main-content-before`)]),"main-content":l(()=>[c(n.$slots,`main-content`)]),"main-content-after":l(()=>[c(n.$slots,`main-content-after`)]),"main-nav-before":l(()=>[c(n.$slots,`main-nav-before`)]),"main-nav-after":l(()=>[c(n.$slots,`main-nav-after`)]),comment:l(()=>[c(n.$slots,`comment`)]),footer:l(()=>[c(n.$slots,`footer`)]),aside:l(()=>[c(n.$slots,`aside`)]),"aside-custom":l(()=>[c(n.$slots,`aside-custom`)]),default:l(()=>[c(n.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{p as default};