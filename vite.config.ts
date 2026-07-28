import { defineConfig } from 'vite'

// 站点通过 GitHub Pages 的自定义根域名(web.hebaiju.cn)提供，
// 因此 base 设为 '/'（根路径）。注意：此时 github.io 子路径会空白属正常，
// 只能通过自定义域名访问。未配置自定义域名前不要推送此配置。
export default defineConfig({
  base: '/',
})
