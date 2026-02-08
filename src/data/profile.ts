// 个人信息配置
export interface Profile {
  name: {
    zh: string
    en: string
  }
  title: {
    zh: string
    en: string
  }
  university: {
    zh: string
    en: string
  }
  major: {
    zh: string
    en: string
  }
  grade: string
  slogan: {
    zh: string
    en: string
  }
  bio: {
    zh: string
    en: string
  }
  skills: string[]
  contact: {
    email?: string
    github?: string
    linkedin?: string
    wechat?: string
  }
  social: {
    platform: string
    url: string
    icon: string
  }[]
}

export const profile: Profile = {
  name: {
    zh: '肖天佑',
    en: 'XIAO TIANYOU',
  },

  title: {
    zh: '桥梁工程师',
    en: 'Bridge Engineer',
  },

  university: {
    zh: '广州大学',
    en: 'Guangzhou University',
  },

  major: {
    zh: '桥梁工程',
    en: 'Bridge Engineering',
  },

  grade: '2023级',

  slogan: {
    zh: '桥梁工程 · 创造连接',
    en: 'Bridge Engineering · Creating Connections',
  },

  bio: {
    zh: '广州大学桥梁工程专业在读学生，专注于桥梁结构设计与分析。热爱将工程力学与美学设计相结合，致力于创造既安全可靠又具有视觉美感的桥梁作品。',
    en: 'Bridge Engineering student at Guangzhou University, focusing on bridge structural design and analysis. Passionate about combining engineering mechanics with aesthetic design to create bridges that are both safe and visually appealing.',
  },

  skills: [
    '结构设计',
    'BIM建模',
    '有限元分析',
    '桥梁美学',
    '力学计算',
    'AutoCAD',
    'Midas Civil',
    'ANSYS',
  ],

  contact: {
    email: 'xiaotyou@example.com', // 替换为真实邮箱
    // github: 'https://github.com/xiaotyou',
    // linkedin: 'https://linkedin.com/in/xiaotyou',
    // wechat: 'xiaotyou_wechat',
  },

  social: [
    // {
    //   platform: 'GitHub',
    //   url: 'https://github.com/xiaotyou',
    //   icon: 'github',
    // },
    // 可以添加更多社交平台
  ],
}

export default profile
