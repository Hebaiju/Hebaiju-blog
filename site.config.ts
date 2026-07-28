import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://web.hebaiju.cn/',
  lang: 'zh-CN',
  title: '鹤白居的小站',
  author: {
    name: 'HEBAIJU',
    avatar: 'https://pic1.imgdb.cn/item/699da71c01b9a5550a554137.jpg',
    status: {
      emoji: '😁',
      message: '小破站建设中',
    },
  },
  description: '鹤白居的个人博客，记录生活与学习。',

  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Hebaiju',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/3546981114841718',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:wbix@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  // 全站搜索：开启后导航栏出现搜索按钮，文章/页面可被站内搜索（默认本地 Fuse.js 检索，无需后端）
  search: {
    enable: true,
  },

  // 赞赏/打赏：开启后文章页底部显示「赞助」区域（可配二维码等）；当前 false = 不显示
  sponsor: {
    enable: false,
  },

  // 文章加密：开启后，文章 frontmatter 写 encrypt: true 就需要输入密码才能看正文。
  // 全局密码从环境变量 VALAXY_ENCRYPT_PASSWORD 读取（务必用 .env 或 CI secrets，别写进本文件）
  encrypt: {
    enable: true,
  },

  // 评论系统：开启后文章页底部渲染评论区。
  // 具体用哪家由 valaxy.config.ts 的 addons 决定（当前接的是 Waline，后端 https://msg.hebaiju.cn）
  comment: {
    enable: true,
  },
})
