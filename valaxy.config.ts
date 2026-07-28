import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'

// 在此添加你需要的图标（加入白名单，避免被 UnoCSS 清除）
const safelist = [
  'i-ri-home-line',
  'i-ri-archive-line',
  'i-ri-price-tag-3-line',
  'i-ri-folder-2-line',
  'i-ri-link-m',
  'i-ri-global-line',
]

/**
 * 用户配置
 */
export default defineValaxyConfig<UserThemeConfig>({
  // 站点级配置见 site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '鹤白居的小站',
    },

    nav: [
      { text: '文章', link: '/posts/', icon: 'i-ri-article-line' },
      { text: '友链', link: '/links/', icon: 'i-ri-link' },
    ],

    pages: [
      {
        name: '归档',
        url: '/archives/',
        icon: 'i-ri-archive-line',
        color: 'dodgerblue',
      },
      // {
      //   name: '分类',
      //   url: '/categories/',
      //   icon: 'i-ri-folder-2-line',
      //   color: 'seagreen',
      // },
      // {
      //   name: '标签',
      //   url: '/tags/',
      //   icon: 'i-ri-price-tag-3-line',
      //   color: 'mediumpurple',
      // },
      {
        name: '友链',
        url: '/links/',
        icon: 'i-ri-link-m',
        color: 'coral',
      },
      {
        name: '快捷链接',
        url: '/nav-link/',
        icon: 'i-ri-global-line',
        color: 'mediumspringgreen',
      },
    ],

    footer: {
      since: 2025,
      beian: {
        enable: false,
      },
    },
    
  },

  unocss: { safelist },

  addons: [
    addonWaline({
      serverURL: 'https://msg.hebaiju.cn',
    }),
  ],
})
