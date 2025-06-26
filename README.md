# Gemini CLI All in One

一站式解决所有 Gemini CLI 问题的综合性网站。

## 项目概述

本项目是基于 Next.js 14 构建的现代化网站，旨在为 Gemini CLI 用户提供全面的资源、教程和解决方案。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript
- **样式**: Tailwind CSS 3.4
- **动画**: Framer Motion
- **部署**: 推荐使用 Vercel

## 开发指南

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
geminicli-one/
├── app/                    # Next.js App Router 页面
├── components/            # React 组件
│   ├── ui/               # 基础 UI 组件
│   ├── layout/           # 布局组件
│   └── sections/         # 页面区块组件
├── lib/                   # 工具函数
├── public/               # 静态资源
└── styles/               # 全局样式
```

## 功能特性

- ✅ SEO 优化（动态 sitemap、结构化数据）
- ✅ 响应式设计（移动端优先）
- ✅ Google 品牌色系统
- ✅ 性能优化（图片优化、代码分割）
- ✅ 可访问性支持（ARIA、键盘导航）

## 部署

推荐使用 Vercel 部署：

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License