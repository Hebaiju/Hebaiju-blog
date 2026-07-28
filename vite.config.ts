import { defineConfig } from 'vite'

// GitHub Pages 项目仓库(Hebaiju-blog)会把站点挂在 /Hebaiju-blog/ 子路径下，
// 必须设置 base 让 CSS/JS/图片等资源的相对路径正确解析。
// 只有在 GitHub Pages 设置里配置了自定义根域名(如 www.hebaiju.cn)后，
// 才能把 base 改为 '/'（此时站点以根路径提供，github.io 子路径会 404 属正常）。
export default defineConfig({
  base: '/Hebaiju-blog/',
})
