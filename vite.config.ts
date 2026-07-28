import { defineConfig } from 'vite'

// GitHub Pages 项目仓库(hebaiju-blog-test)会把站点挂在 /hebaiju-blog-test/ 子路径下，
// 设置 base 让 CSS/JS/图片等资源的相对路径正确解析。
// 部署到根域名(hebaiju.cn 或 hebaiju.github.io)时，把 base 改回 '/' 或整行删除即可。
export default defineConfig({
  base: '/hebaiju-blog-test/',
})
