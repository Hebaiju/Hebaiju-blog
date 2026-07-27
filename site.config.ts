import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://www.hebaiju.cn/',
  lang: 'zh-CN',
  title: '鹤白居的小站',
  author: {
    name: '鹤白居',
    avatar: '/head.jpg',
    status: {
      emoji: '🌱',
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

  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
  },

  encrypt: {
    enable: true,
  },
})
