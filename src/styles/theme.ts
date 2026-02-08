// 主题配置 - 设计系统
export const theme = {
  colors: {
    // 主色：深空蓝（代表专业、理性）
    primary: {
      50: '#E8EAF6',
      100: '#C5CAE9',
      200: '#9FA8DA',
      300: '#7986CB',
      400: '#5C6BC0',
      500: '#3F51B5', // 主色
      600: '#3949AB',
      700: '#303F9F',
      800: '#283593',
      900: '#1A237E',
    },

    // 辅助色：建筑金（代表工程、品质）
    accent: {
      light: '#FFD54F',
      main: '#FFC107', // 金色强调
      dark: '#FFA000',
    },

    // 中性色：极简灰度
    neutral: {
      bg: '#0A0E27',      // 深色背景
      surface: '#1A1F3A',  // 卡片背景
      border: '#2D3548',   // 边框
      text: {
        primary: '#FFFFFF',
        secondary: '#B0B8D4',
        tertiary: '#6B7494',
      }
    },

    // 功能色
    success: '#4CAF50',   // 结构稳定
    warning: '#FF9800',   // 应力警告
    error: '#F44336',     // 结构失效

    // 渐变
    gradients: {
      hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      card: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      stress: 'linear-gradient(90deg, #2196F3 0%, #00BCD4 50%, #FFC107 75%, #F44336 100%)',
      radial: 'radial-gradient(circle at 50% 50%, rgba(63, 81, 181, 0.15) 0%, transparent 70%)',
    }
  },

  // 字体系统
  fonts: {
    display: "'Orbitron', 'Noto Sans SC', sans-serif",  // 大标题
    body: "'Inter', 'Noto Sans SC', sans-serif",        // 正文
    mono: "'JetBrains Mono', monospace",                // 数据/代码
  },

  // 字体大小
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
  },

  // 间距系统（基于8px）
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
    '3xl': '6rem',  // 96px
    '4xl': '8rem',  // 128px
    '5xl': '12rem', // 192px
  },

  // 断点
  breakpoints: {
    xs: '0px',      // 手机
    sm: '640px',    // 大手机
    md: '768px',    // 平板
    lg: '1024px',   // 小桌面
    xl: '1280px',   // 桌面
    '2xl': '1536px', // 大屏
  },

  // 容器最大宽度
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1400px',
  },

  // 缓动函数（Easing）
  easing: {
    // 入场：快入慢出（自信）
    enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // 出场：慢入快出（果断）
    exit: 'cubic-bezier(0.4, 0, 1, 1)',
    // 弹性：工程弹性（专业特色）
    elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    // 平滑：物理真实
    smooth: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },

  // 动画时长
  duration: {
    fast: '150ms',      // 微交互
    base: '300ms',      // 元素入场
    slow: '500ms',      // 页面转场
    slower: '800ms',    // 复杂动画
  },

  // 阴影
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(63, 81, 181, 0.5)',
    glowGold: '0 0 30px rgba(255, 193, 7, 0.6)',
  },

  // 边框半径
  borderRadius: {
    sm: '0.25rem',   // 4px
    base: '0.5rem',  // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    full: '9999px',  // 圆形
  },

  // Z-index层级
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
} as const

export type Theme = typeof theme
