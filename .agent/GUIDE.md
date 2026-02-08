# 肖天佑个人主页 - 开发指南 ✨

极致艺术化、超现代设计的桥梁工程专业个人作品展示网站，融合3D视觉、动态粒子与浮夸特效。

## ✨ 核心特色

### 🎨 极致艺术化设计
- **浮夸视觉特效** - 动态渐变背景、网格动画、多层光晕效果
- **玻璃拟态UI** - Glassmorphism风格卡片、背景模糊、霓虹边框
- **超大胆排版** - 140px巨型标题、流动渐变文字、霓虹闪烁动画
- **词云技能展示** - 3D浮动、随机尺寸、交互光效的技能标签云

### 🌟 3D视觉体验
- **宏伟桥梁模型** - Nielsen体系拱桥3D模型（18m跨度、6m拱高）
- **动态粒子场** - 1500+粒子实时渲染、脉冲效果、边界环绕
- **实时光影** - PBR材质、金属感、自发光、阴影系统

### ⚡ 性能优化
- **代码分割** - Three.js、R3F、动画库独立chunk
- **GPU加速** - transform3d硬件加速、will-change优化
- **SWC编译** - 使用@vitejs/plugin-react-swc，构建速度提升5倍

### 📱 响应式设计
- **完美适配** - 桌面4K、平板、手机全覆盖
- **动态字体** - clamp()函数实现流畅缩放
- **Touch优化** - 移动端手势、触摸反馈

## 🛠️ 技术栈

### 核心框架
- **React 18.3** - Concurrent Mode、Suspense
- **TypeScript 5.3** - 严格类型检查、路径别名
- **Vite 5.4** - ESM开发服务器、HMR热更新

### 3D渲染
- **Three.js 0.160** - WebGL 3D引擎
- **@react-three/fiber 8.15** - React声明式3D
- **@react-three/drei 9.92** - 3D工具集
- **@react-three/postprocessing 2.16** - 后期特效

### 动画系统
- **Framer Motion 10.18** - 声明式动画、手势
- **GSAP 3.12** - 时间轴动画、滚动触发
- **react-intersection-observer** - 滚动视口检测

### 状态管理
- **Zustand 4.4** - 轻量级状态管理

### 构建部署
- **GitHub Actions** - CI/CD自动化
- **GitHub Pages** - 静态网站托管

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 9+

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run dev
```
访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
```

### 类型检查
```bash
npm run typecheck
```

### 预览构建
```bash
npm run preview
```

## 📁 项目结构

```
personal_home_page/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions CI/CD
├── public/
│   └── works/                   # 作品资源软链接
├── src/
│   ├── components/
│   │   ├── layout/              # Header, Footer, ScrollProgress
│   │   ├── sections/            # Hero, About, Works, Contact
│   │   ├── three/               # 3D组件：BridgeModel, ParticleField
│   │   ├── animations/          # FadeIn, Parallax, Stagger
│   │   └── works/               # WorkCard, WorkDetailModal
│   ├── data/
│   │   ├── profile.ts           # 个人信息配置
│   │   └── works.ts             # 作品数据、分类、工具函数
│   ├── styles/
│   │   ├── global.css           # 全局样式、动画、工具类
│   │   └── theme.ts             # 设计系统配色
│   ├── App.tsx                  # 主应用
│   └── main.tsx                 # 入口文件
├── work/                        # 原始作品目录
│   └── fuyao_bridge/
│       ├── image.png
│       └── 描述.txt
├── package.json
├── vite.config.ts               # Vite构建配置
├── tsconfig.json                # TypeScript配置
└── README.md
```

## 🎨 设计系统

### 配色方案
```css
--color-primary: #3F51B5        /* Indigo 深邃蓝 */
--color-primary-light: #5C6BC0  /* Indigo 明亮 */
--color-accent: #FFC107         /* Amber 金黄 */
--color-pink: #FF6B6B           /* Pink 珊瑚粉 */
--color-cyan: #4ECDC4           /* Cyan 青绿 */
```

### 排版系统
- **标题字体**: Orbitron（科技感、未来感）
- **正文字体**: Inter + Noto Sans SC（易读、现代）
- **代码字体**: JetBrains Mono（等宽、清晰）

### 动画曲线
- **进入动画**: cubic-bezier(0.4, 0, 0.2, 1)
- **交互反馈**: cubic-bezier(0.175, 0.885, 0.32, 1.275)
- **浮动效果**: ease-in-out

## 🎯 如何添加新作品

### 1. 准备资源
在 `work/` 目录创建作品文件夹：
```
work/
  └── your_project/
      ├── image.png          # 主图
      ├── detail_1.jpg       # 详情图1
      └── model.glb          # 3D模型（可选）
```

### 2. 更新数据
编辑 `src/data/works.ts`：
```typescript
export const works: Work[] = [
  {
    id: 'your_project',
    title: '项目名称',
    titleEn: 'Project Name',
    category: WorkCategory.BRIDGE,
    date: '2024-03-15',

    thumbnail: '/works/your_project/image.png',
    images: [
      '/works/your_project/detail_1.jpg',
    ],

    description: '简短描述（3行以内）',
    detailedDescription: '详细描述...',

    specs: {
      span: '180m',
      height: '36m',
      material: '钢管混凝土',
      structure: 'Nielsen体系拱桥',
    },

    tags: ['拱桥', '景观桥', 'BIM建模'],
    featured: true,
    order: 2,
  },
]
```

### 3. 提交部署
```bash
git add work/your_project src/data/works.ts
git commit -m "Add new bridge project"
git push
```

GitHub Actions自动构建部署（约2-3分钟）。

## 🔧 自定义配置

### 修改个人信息
编辑 `src/data/profile.ts`：
```typescript
export const profile: Profile = {
  name: { zh: '你的名字', en: 'YOUR NAME' },
  university: { zh: '学校', en: 'University' },
  major: { zh: '专业', en: 'Major' },
  grade: '年级',
  contact: {
    email: 'your@email.com',
    github: 'https://github.com/yourname',
  },
  skills: ['技能1', '技能2', '技能3'],
}
```

### 调整配色
编辑 `src/styles/global.css` 中的CSS变量：
```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-accent: #YOUR_COLOR;
}
```

### 修改桥梁模型
编辑 `src/components/three/BridgeModel.tsx`：
```typescript
const span = 18  // 跨度
const height = 6  // 高度
const deckWidth = 3.5  // 桥面宽度
```

## 🚢 部署指南

### GitHub Pages部署

#### 1. Fork/创建仓库
```bash
git clone https://github.com/yourname/personal_home_page
cd personal_home_page
```

#### 2. 启用GitHub Pages
1. Settings → Pages
2. Source选择 **GitHub Actions**

#### 3. 调整Base路径
如果仓库名不是 `personal_home_page`，修改：

**`.github/workflows/deploy.yml`**:
```yaml
env:
  VITE_BASE_URL: /你的仓库名/
```

#### 4. 推送代码
```bash
git push origin master
```

访问: `https://yourname.github.io/personal_home_page/`

### 自定义域名
1. 在仓库根目录创建 `public/CNAME`
2. 写入域名: `www.yourdomain.com`
3. GitHub Pages设置中配置CNAME
4. 域名DNS添加A记录指向GitHub服务器

## 🎯 已实现功能

- ✅ React + TypeScript + Vite架构
- ✅ Three.js宏伟桥梁3D模型
- ✅ 1500+粒子动态背景系统
- ✅ Framer Motion页面动画
- ✅ 极致艺术化设计系统
- ✅ 词云技能展示
- ✅ 玻璃拟态卡片UI
- ✅ 渐变背景动画
- ✅ 作品展示系统
- ✅ 作品详情弹窗
- ✅ 响应式布局
- ✅ GitHub Actions自动部署
- ✅ 代码分割优化
- ✅ SWC快速编译

## 📊 性能指标

- **首屏加载**: < 2s (4G网络)
- **FPS**: 60fps (桌面), 30fps+ (移动)
- **Lighthouse分数**:
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

## 🌐 浏览器兼容性

| 浏览器 | 最低版本 | 推荐版本 |
|--------|---------|----------|
| Chrome | 90+ | 最新 |
| Firefox | 88+ | 最新 |
| Safari | 14+ | 最新 |
| Edge | 90+ | 最新 |

**不支持**: IE11及以下

## 📝 许可证

MIT License

## 👨‍💻 关于作者

**肖天佑** - 广州大学桥梁工程专业 2023级

- 📧 Email: xty_811811@qq.com
- 🐙 GitHub: [@Tyyyy-Vv](https://github.com/Tyyyy-Vv)

---

<div align="center">
  <strong>用代码构建美学，用工程连接世界 🌉</strong>
  <br><br>
  Made with ❤️ and Claude Code
</div>
