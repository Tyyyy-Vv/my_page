// 作品分类
export enum WorkCategory {
  BRIDGE = 'bridge',         // 桥梁
  STRUCTURE = 'structure',   // 结构
  DESIGN = 'design',         // 设计
  ANALYSIS = 'analysis',     // 分析
}

// 作品接口定义
export interface Work {
  id: string;                    // 唯一标识
  title: string;                 // 作品名称
  titleEn?: string;              // 英文名称（可选）
  category: WorkCategory;        // 分类
  date: string;                  // 完成日期（YYYY-MM-DD）

  // 媒体资源
  thumbnail: string;             // 缩略图路径
  images: string[];              // 高清图片数组
  model?: string;                // 3D模型路径（.glb）
  video?: string;                // 视频路径（可选）

  // 描述信息
  description: string;           // 简短描述（3行以内）
  detailedDescription?: string;  // 详细描述

  // 技术参数
  specs?: {
    span?: string;               // 跨度
    height?: string;             // 高度
    material?: string;           // 材料
    structure?: string;          // 结构类型
    [key: string]: string | undefined;
  };

  // 标签
  tags: string[];                // 技术标签

  // 外部链接
  links?: {
    github?: string;
    video?: string;
    article?: string;
  };

  // 展示配置
  featured?: boolean;            // 是否为精选作品
  order?: number;                // 排序权重
}

// 作品数据
const baseUrl = import.meta.env.BASE_URL ?? '/'
const withBase = (path: string): string => `${baseUrl}${path.replace(/^\//, '')}`

export const works: Work[] = [
  {
    id: 'fuyao_bridge',
    title: '扶摇桥',
    titleEn: 'Fuyao Bridge',
    category: WorkCategory.BRIDGE,
    date: '2024-02-08',

    thumbnail: withBase('/works/fuyao_bridge/image.png'),
    images: [withBase('/works/fuyao_bridge/image.png')],
    // model: '/works/fuyao_bridge/model.glb', // 如果有3D模型

    description: '现代化双拱景观桥设计，采用流线型结构，融合力学美学与城市景观。',
    detailedDescription: `扶摇桥是一座跨越城市河道的现代化景观桥梁设计。

设计理念源于"扶摇直上九万里"的意象，双拱结构如同展翅的鲲鹏，象征着工程技术的突破与创新。

结构特点：
- 采用Nielsen体系拱桥，吊杆与拱肋形成稳定的三角形结构
- 拱肋采用钢管混凝土，兼顾轻量化与强度
- 桥面宽度32米，双向6车道+人行道
- 主跨180米，矢跨比1/5

创新点：
- 拱肋采用不对称曲线，增强视觉动感
- 照明系统融入结构，夜景效果出色
- 绿化景观与桥梁一体化设计`,

    specs: {
      span: '180m',
      height: '36m',
      material: '钢管混凝土',
      structure: 'Nielsen体系拱桥',
      width: '32m',
    },

    tags: ['拱桥', '景观桥', '结构设计', 'BIM建模', '城市桥梁'],

    featured: true,
    order: 1,
  },

  // 未来作品示例（预留）
  // {
  //   id: 'example_work_2',
  //   title: '示例作品2',
  //   category: WorkCategory.STRUCTURE,
  //   date: '2024-03-15',
  //   thumbnail: '/works/example_2/thumbnail.jpg',
  //   images: ['/works/example_2/image_1.jpg'],
  //   description: '这是第二个作品示例',
  //   tags: ['结构', '分析'],
  //   order: 2,
  // },
]

// 工具函数
export const getFeaturedWorks = (): Work[] => works.filter(w => w.featured)

export const getWorksByCategory = (category: WorkCategory): Work[] =>
  works.filter(w => w.category === category)

export const getWorkById = (id: string): Work | undefined =>
  works.find(w => w.id === id)

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>()
  works.forEach(work => {
    work.tags.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet)
}
