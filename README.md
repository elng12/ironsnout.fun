# Iron Snout Fun

一个有趣的在线游戏网站，集成了 Google AdSense 广告系统。

## 项目概述

Iron Snout Fun 是一个基于 HTML5 的在线游戏，玩家控制一只小猪对抗狼群。网站集成了 Google AdSense 广告系统来实现盈利。

## 功能特性

- 🎮 互动游戏体验
- 📱 响应式设计，支持移动设备
- 💰 Google AdSense 广告集成
- 🎨 现代化 UI 设计
- ⚡ 快速加载和流畅体验

## 技术栈

- **前端**: HTML5, CSS3, JavaScript
- **广告**: Google AdSense
- **设计**: 响应式布局，CSS Grid

## 文件结构

```
ironsnout.fun/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── game.js            # 游戏逻辑
├── README.md          # 项目说明
└── memory-bank/       # 项目文档
    ├── projectbrief.md
    ├── productContext.md
    ├── activeContext.md
    ├── systemPatterns.md
    ├── techContext.md
    └── progress.md
```

## Google AdSense 集成

网站集成了 Google AdSense 广告系统：

- **客户端 ID**: ca-pub-3219924658522446
- **广告位置**: 顶部、侧边栏、底部
- **加载方式**: 异步加载，不影响页面性能
- **响应式**: 自适应不同设备尺寸

### AdSense 代码示例

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3219924658522446"
        crossorigin="anonymous"></script>
```

## 游戏控制

- **方向键**: 控制小猪移动
- **空格键**: 攻击
- **开始按钮**: 开始游戏
- **暂停按钮**: 暂停/继续游戏
- **重新开始**: 重置游戏

## 本地开发

1. 克隆项目到本地
2. 使用本地服务器打开 `index.html`
3. 或者直接在浏览器中打开文件

### 推荐的本地服务器

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx http-server

# 使用 PHP
php -S localhost:8000
```

## 部署要求

- **HTTPS**: AdSense 要求使用 HTTPS 协议
- **域名验证**: 需要在 AdSense 中验证域名
- **内容政策**: 确保内容符合 Google AdSense 政策

## 性能优化

- 异步加载 AdSense 脚本
- CSS 和 JavaScript 优化
- 图片和资源压缩
- 缓存策略

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动浏览器

## 许可证

© 2024 Iron Snout Fun. All rights reserved.

## 联系信息

如有问题或建议，请通过以下方式联系：

- 项目仓库: [GitHub](https://github.com/your-username/ironsnout.fun)
- 邮箱: your-email@example.com

## 更新日志

### v1.0.0 (2024-01-19)
- 初始版本发布
- 基础游戏功能实现
- Google AdSense 集成
- 响应式设计