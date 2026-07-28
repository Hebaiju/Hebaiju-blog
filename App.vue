<script setup lang="ts">
// 51.La V6 访客统计
// 代码来自 51.La 后台：报表 → 应用 → 普通安装 → 复制代码
// Valaxy 会把这个用户级 App 与主题 App 并存渲染（不覆盖主题），
// useHead 在 SSR 构建时也会把脚本写进静态 HTML 的 <head>，浏览器按序执行。
import { useHead } from '@unhead/vue'

useHead({
  script: [
    {
      src: '//sdk.51.la/js-sdk-pro.min.js',
      charset: 'UTF-8',
      id: 'LA_COLLECT',
    },
    {
      innerHTML:
        'LA.init({id:"3Ny1uac0PW8pSlg2",ck:"3Ny1uac0PW8pSlg2",autoTrack:true,screenRecord:true})',
    },
  ],
})
</script>
