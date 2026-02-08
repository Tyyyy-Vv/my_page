# 肖天佑个人主页

极具设计感的桥梁工程专业个人作品展示网站，融合3D视觉特效与极简主义设计。

## 特色功能

- 🎨 **极简主义设计** - 大量留白，清晰层级，突出内容本身
- 🌟 **视觉特效** - 3D桥梁模型、粒子动画背景、视差滚动、流体动画
- 📱 **响应式设计** - 完美适配桌面、平板和移动设备
- ⚡ **性能优化** - 代码分割、懒加载、GPU加速
- 🚀 **自动部署** - GitHub Actions自动构建并部署到GitHub Pages

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **3D图形**: Three.js + @react-three/fiber
- **动画**: Framer Motion + GSAP
- **样式**: CSS Modules + 自定义设计系统
- **部署**: GitHub Actions + GitHub Pages

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:3000 查看效果

### 构建生产版本

```bash
npm run build
```

### 预览构建产物

```bash
npm run preview
```

## 项目结构

```
personal_home_page/
├── .github/workflows/
│   └── deploy.yml                    # GitHub Actions部署配置
├── public/
│   └── works/                        # 作品资源（软链接到work/）
├── src/
│   ├── components/
│   │   ├── layout/                   # Header, Footer, ScrollProgress
│   │   ├── sections/                 # HeroSection, AboutSection, WorksSection, ContactSection
│   │   ├── three/                    # Three.js 3D组件
│   │   ├── animations/               # 动画组件
│   │   └── works/                    # 作品相关组件
│   ├── data/
│   │   ├── works.ts                  # 作品数据配置
│   │   └── profile.ts                # 个人信息配置
│   ├── hooks/                        # 自定义React Hooks
│   ├── styles/
│   │   ├── theme.ts                  # 设计系统主题
│   │   └── global.css                # 全局样式
│   ├── App.tsx                       # 主应用组件
│   └── main.tsx                      # 应用入口
├── work/                             # 原始作品目录
│   └── fuyao_bridge/
│       ├── image.png
│       └── 描述.txt
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 添加新作品

### 步骤1：准备资源文件

在 `work/` 目录下创建新作品文件夹：

```
work/
  └── your_new_project/
      ├── thumbnail.jpg      # 缩略图（推荐尺寸：800x600px）
      ├── image_1.jpg        # 高清图1
      ├── image_2.jpg        # 高清图2
      └── model.glb          # 3D模型（可选）
```

### 步骤2：更新数据配置

编辑 `src/data/works.ts`，添加新作品对象：

```typescript
export const works: Work[] = [
  // 已有作品...

  // 新添加的作品
  {
    id: 'your_new_project',
    title: '项目名称',
    category: WorkCategory.BRIDGE,
    date: '2024-03-15',

    thumbnail: '/works/your_new_project/thumbnail.jpg',
    images: [
      '/works/your_new_project/image_1.jpg',
      '/works/your_new_project/image_2.jpg',
    ],

    description: '简短描述...',
    tags: ['标签1', '标签2'],

    order: 2,  // 排序（数字越小越靠前）
  },
]
```

### 步骤3：提交并部署

```bash
git add work/your_new_project src/data/works.ts
git commit -m "Add new project"
git push
```

GitHub Actions会自动构建并部署更新。

## 自定义配置

### 修改个人信息

编辑 `src/data/profile.ts`：

```typescript
export const profile: Profile = {
  name: { zh: '你的名字', en: 'YOUR NAME' },
  university: { zh: '你的学校', en: 'Your University' },
  major: { zh: '你的专业', en: 'Your Major' },
  // ... 其他配置
}
```

### 修改主题配色

编辑 `src/styles/theme.ts`：

```typescript
export const theme = {
  colors: {
    primary: { 500: '#你的主色' },
    accent: { main: '#你的强调色' },
    // ... 其他颜色
  }
}
```

## GitHub Pages部署

### 1. 启用GitHub Pages

1. 进入仓库 Settings → Pages
2. Source选择 "GitHub Actions"

### 2. 调整base路径

如果你的仓库名不是 `personal_home_page`，需要修改：

**`.github/workflows/deploy.yml`:**
```yaml
env:
  VITE_BASE_URL: /你的仓库名/
```

**`vite.config.ts`:**
```typescript
base: process.env.VITE_BASE_URL || '/',
```

### 3. 推送代码触发部署

```bash
git push
```

部署完成后，访问：`https://你的用户名.github.io/仓库名/`

## 性能优化

- ✅ **代码分割**: Three.js、动画库等大型依赖独立chunk
- ✅ **懒加载**: 图片和组件按需加载
- ✅ **GPU加速**: transform和opacity动画触发GPU渲染
- ✅ **资源压缩**: Vite自动压缩JS/CSS
- ⏳ **3D模型优化**: 使用GLTF/GLB格式，启用Draco压缩（待实现）

## 浏览器兼容性

- Chrome 90+（推荐）
- Firefox 88+
- Safari 14+
- Edge 90+

## 待办事项

- [ ] 增强Hero Section的3D桥梁模型（Three.js）
- [ ] 实现粒子系统动画
- [ ] 添加流体模拟背景
- [ ] 实现视差滚动效果
- [ ] 优化移动端体验
- [ ] 添加作品详情弹窗
- [ ] 实现暗色/亮色主题切换

## 许可证

MIT License

---

**开发者**: 肖天佑
**学校**: 广州大学
**专业**: 桥梁工程
**年级**: 2023级
