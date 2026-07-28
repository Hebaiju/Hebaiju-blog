---
description: 搞钱，迎娶白富美，走上人生巅峰。
title: 为博客添加 Waline 评论系统
date: 2026-04-08
categories:
- 技术折腾
tags:
- 博客
- Waline
- 评论系统
codeHeightLimit: 300
---

> 终于把评论系统搞定了！趁着还有记忆，把整个过程记录下来，包括踩过的坑和最终的解决方案。

## 用到的工具和网站 [​](#用到的工具和网站)

| 工具/网站 | 用途 |
| --- | --- |
| [Waline](https://waline.js.org/) | 评论系统服务端 |
| [Vercel](https://vercel.com/) | 部署 Waline 后端 |
| [Neon](https://neon.tech/) | 免费 PostgreSQL 数据库 |
| [valaxy-addon-waline](https://www.npmjs.com/package/valaxy-addon-waline) | Valaxy 博客的 Waline 插件 |
| [数据管理](https://kotodama.yunyoujun.cn/login) | Waline 管理后台 |
| [kotodama](https://github.com/YunYouJun/kotodama) | 云游君 |

## 背景 [​](#背景)

之前博客一直没有评论功能，总感觉少了点什么。趁着有空，决定给博客加一个评论系统。

选择 Waline 的原因很简单：

- Valaxy 主题生态支持好
- 国产项目，中文文档友好
- 支持 PostgreSQL 数据库
- 免费、开源

## 部署过程 [​](#部署过程)

### 第一步：部署 Waline 后端 [​](#第一步-部署-waline-后端)

在 Vercel 上直接部署官方示例项目：

```
https://vercel.com/new/clone?repository-url=https://github.com/walinejs/waline/tree/main/example
```

部署完成后会得到一个 Vercel 项目地址，我的是：`https://msg.hebaiju.cn`

### 第二步：创建数据库 [​](#第二步-创建数据库)

使用 Neon 免费 PostgreSQL 数据库。在 [Neon](https://neon.tech) 创建一个新项目，拿到连接字符串。

然后在 Vercel 项目中添加环境变量：

| 变量名 | 值 |
| --- | --- |
| `DATABASE_URL` | 你的 Neon 连接字符串 |

### 第三步：博客安装 Waline 插件 [​](#第三步-博客安装-waline-插件)

bash

```
pnpm add valaxy-addon-waline
```

然后在 `valaxy.config.ts` 中添加配置：

typescript

```
import { addonWaline } from 'valaxy-addon-waline'

export default defineValaxyConfig({
  addons: [
    addonWaline({
      serverURL: 'https://msg.hebaiju.cn',
    }),
  ],
})
```

重启开发服务器，评论框就出现了！

## 踩过的坑 [​](#踩过的坑)

### 坑一：SMTP 配置导致服务崩溃 [​](#坑一-smtp-配置导致服务崩溃)

一开始看到评论注册需要邮件验证，就配置了 QQ 邮箱 SMTP。结果：

- 邮件发送失败
- 服务开始报错
- 最后完全崩溃，访问显示 `FUNCTION_INVOCATION_FAILED`

解决方案：删除所有 SMTP 相关环境变量，重新部署。

### 坑二：无法登录管理后台 [​](#坑二-无法登录管理后台)

配置了 SMTP 后，注册页面提示"邮件发送失败"。没有邮件验证就无法注册账号，也就无法登录管理后台。

解决方案：阅读官方文档后发现，**第一个注册的用户自动成为管理员**！所以：

1. 删除 SMTP 配置
2. 重新部署
3. 直接访问 `/ui/register` 注册第一个账号
4. 这个账号就是管理员！
5. 如果需要进行评论管理，直接在网站后面添加“/ui”

### 坑三：服务崩溃后无法恢复 [​](#坑三-服务崩溃后无法恢复)

服务崩溃后，无论怎么 Redeploy 都恢复不了。

解决方案：删除整个 Vercel 项目，从头重新部署官方示例。

## 最终效果 [​](#最终效果)

- 评论服务地址：[https://msg.hebaiju.cn/](https://msg.hebaiju.cn/)
- 数据库：Neon PostgreSQL
- 管理后台：通过官方管理界面登录管理

## 总结 [​](#总结)

1. **官方文档和视频要认真看** — 我之前就是因为没仔细看视频，漏了关键配置，导致后续一系列问题
2. **第一个注册的就是管理员** — 这个文档里有写，但我之前没注意到
3. **SMTP 不是必须的** — 如果不需要邮件通知功能，完全可以不配置
4. **遇到问题先看文档** — 大部分问题文档里都有答案

好了，评论系统搞定了，博客更完整了！

---

*有什么问题欢迎留言讨论。*
