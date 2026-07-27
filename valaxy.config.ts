import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-ri-archive-line',
  'i-ri-price-tag-3-line',
  'i-ri-folder-2-line',
  'i-ri-link-m',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '鹤白居的小站',
    },

    pages: [
      {
        name: '归档',
        url: '/archives/',
        icon: 'i-ri-archive-line',
        color: 'dodgerblue',
      },
      {
        name: '分类',
        url: '/categories/',
        icon: 'i-ri-folder-2-line',
        color: 'seagreen',
      },
      {
        name: '标签',
        url: '/tags/',
        icon: 'i-ri-price-tag-3-line',
        color: 'mediumpurple',
      },
      {
        name: '友链',
        url: '/links/',
        icon: 'i-ri-link-m',
        color: 'coral',
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
})
