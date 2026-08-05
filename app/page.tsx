import type { CSSProperties } from "react";

const researchAreas = [
  "桥梁结构健康监测",
  "智能检测机器人",
  "结构振动与动力特性",
  "计算机视觉",
  "智能建造",
  "多源数据融合",
  "桥梁概念设计",
];

const signal = [
  16, 24, 35, 58, 30, 72, 42, 88, 52, 28, 66, 40, 80, 34, 62, 26, 48, 22,
  38, 18, 30, 14,
];

const timeline = [
  {
    year: "2023",
    title: "进入广州大学",
    text: "就读于土木与交通工程学院，逐步将学习与研究方向聚焦于桥梁工程、结构感知与智能建造。",
  },
  {
    year: "2025.03",
    title: "桥梁检测机器人专利申请",
    text: "以第 3 发明人参与跨座式单轨轨道梁动力特性检测机器人研究。",
  },
  {
    year: "2025.05",
    title: "“挑战杯”广东省一等奖",
    text: "参与《桥梁健康振动感测机器人》项目，以桥梁微振动感知服务结构健康筛查。",
  },
  {
    year: "2025",
    title: "《扶摇桥》获一等奖",
    text: "参加世界大学生桥梁设计大赛，完成西北地区跨黄河城市桥梁概念设计。",
  },
  {
    year: "2026.02",
    title: "国家发明专利获授权",
    text: "跨座式单轨轨道梁动力特性检测机器人相关发明专利正式授权。",
  },
  {
    year: "2026.06",
    title: "论文发表与片区赛获奖",
    text: "以第五作者发表英文期刊论文；《海风丝带》获世界大学生桥梁设计大赛南部片区赛三等奖。",
  },
];

const officialLinks = [
  {
    label: "广州大学｜挑战杯一等奖报道",
    href: "https://youth.gzhu.edu.cn/info/1044/2682.htm",
  },
  {
    label: "广州大学｜学生竞赛记录",
    href: "https://tm.gzhu.edu.cn/info/1058/2732.htm",
  },
  {
    label: "中国公路学会｜2025 获奖文件",
    href: "https://www.chts.cn/cms_files/filemanager/1389253025/attach/202512/b5af3efdf6ec4b5abed499f9d727da6f.pdf?fileName=%E5%85%B3%E4%BA%8E%E5%85%AC%E5%B8%83%E2%80%9C%E4%B8%AD%E4%BA%A4%E5%85%AC%E8%A7%84%E9%99%A2%E6%9D%AF%E2%80%9D2025%E4%B8%96%E7%95%8C%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%A1%A5%E6%A2%81%E8%AE%BE%E8%AE%A1%E5%A4%A7%E8%B5%9B%E8%8E%B7%E5%A5%96%E4%BD%9C%E5%93%81%E7%9A%84%E5%86%B3%E5%AE%9A.pdf",
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回顶部">
          <span className="brand-mark">XT</span>
          <span>
            肖天佑
            <small>TIANYOU XIAO</small>
          </span>
        </a>
        <nav aria-label="主导航">
          <a href="#research">研究</a>
          <a href="#output">成果</a>
          <a href="#honors">竞赛</a>
          <a href="#timeline">经历</a>
        </nav>
        <a className="header-cta" href="#sources">公开依据</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> GZHU · CLASS OF 2023</p>
          <h1>
            在桥梁与智能之间，
            <em>感知结构的真实状态。</em>
          </h1>
          <p className="hero-intro">
            肖天佑，广州大学土木与交通工程学院 2023 级本科生。研究经历围绕桥梁结构健康监测、智能检测机器人、计算机视觉与智能建造展开。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#output">查看代表成果 <span>↘</span></a>
            <a className="button button-ghost" href="#timeline">浏览学术时间轴</a>
          </div>
          <div className="topic-list" aria-label="研究方向">
            {researchAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>

        <figure className="blueprint" aria-label="桥梁结构与振动信号概念图">
          <figcaption>
            <span>STRUCTURAL SIGNAL / 01</span>
            <b>LIVE RESEARCH MAP</b>
          </figcaption>
          <div className="bridge-drawing" aria-hidden="true">
            <div className="bridge-arc" />
            <div className="bridge-deck" />
            <div className="hanger h1" /><div className="hanger h2" />
            <div className="hanger h3" /><div className="hanger h4" />
            <div className="pier p1" /><div className="pier p2" />
          </div>
          <div className="signal" aria-hidden="true">
            {signal.map((height, index) => (
              <span key={index} style={{ "--h": `${height}%` } as CSSProperties} />
            ))}
          </div>
          <div className="blueprint-note">
            <span>SHM</span>
            <p>VIBRATION<br />SENSING</p>
            <i>98%+</i>
          </div>
        </figure>

        <div className="hero-stats" aria-label="代表性成果统计">
          <div><strong>01</strong><span>英文学术论文<br /><small>第五作者</small></span></div>
          <div><strong>02</strong><span>国家发明专利<br /><small>其中一件已授权</small></span></div>
          <div><strong>03</strong><span>已核验竞赛获奖<br /><small>两项一等奖</small></span></div>
        </div>
      </section>

      <section className="section intro-section" id="research">
        <div className="section-heading">
          <p className="section-index">01 / PROFILE</p>
          <h2>从桥梁设计，走向<br /><em>结构感知与智能建造</em></h2>
        </div>
        <div className="profile-copy">
          <p className="lead">
            本科阶段的公开经历呈现出一条清晰的技术路径：从桥梁概念与结构设计出发，进一步进入振动测试、机器人检测、机器视觉与施工过程智能识别。
          </p>
          <p>
            他的工作连接了土木工程的物理对象与数据驱动方法——让机器人抵达难以触及的位置，让传感器记录微小振动，让视觉模型理解施工现场，也让桥梁设计同时回应安全、效率与美感。
          </p>
          <div className="principles">
            <div><span>01</span><b>结构为本</b><p>以力学行为和工程需求定义问题。</p></div>
            <div><span>02</span><b>感知为眼</b><p>用振动、视觉与多源数据获取真实状态。</p></div>
            <div><span>03</span><b>智能为用</b><p>让检测、识别与决策走向自动化。</p></div>
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="section-heading compact">
          <p className="section-index">02 / RESEARCH</p>
          <h2>研究与工程实践</h2>
          <p>四条相互衔接的实践线索，共同构成当前的研究画像。</p>
        </div>
        <div className="project-grid">
          <article className="project-card featured">
            <div className="card-top"><span>R–01</span><i>2025</i></div>
            <p className="card-kicker">STRUCTURAL HEALTH MONITORING</p>
            <h3>桥梁健康振动感测机器人</h3>
            <p>利用桥梁护栏作为运行轨道，自动走停、固定并采集微小振动信号，面向桥梁健康快速筛查与损伤空间定位。</p>
            <div className="card-result">“挑战杯”广东省一等奖</div>
          </article>
          <article className="project-card">
            <div className="card-top"><span>R–02</span><i>2025—2026</i></div>
            <p className="card-kicker">ROBOTIC INSPECTION</p>
            <h3>跨座式单轨轨道梁智能检测</h3>
            <p>围绕自动行走与停驻、振动信号采集、功率谱分析、SVD 模态识别与全局动力特性识别展开研究。</p>
            <div className="card-result">授权发明专利 · 第 3 发明人</div>
          </article>
          <article className="project-card">
            <div className="card-top"><span>R–03</span><i>2025—</i></div>
            <p className="card-kicker">COMPUTER VISION</p>
            <h3>施工装备视觉识别与安全预警</h3>
            <p>结合实例分割、目标跟踪与空间坐标映射，识别施工装备、人员运动状态及动态危险区域。</p>
            <div className="card-result">论文 + 发明专利申请</div>
          </article>
          <article className="project-card light">
            <div className="card-top"><span>R–04</span><i>2025—2026</i></div>
            <p className="card-kicker">CONCEPTUAL DESIGN</p>
            <h3>桥梁概念与结构设计</h3>
            <p>通过《扶摇桥》《海风丝带》等作品，将结构体系、场地条件、城市景观与桥梁形态协同表达。</p>
            <div className="card-result">世界大学生桥梁设计大赛</div>
          </article>
        </div>
      </section>

      <section className="section output-section" id="output">
        <div className="section-heading compact light-heading">
          <p className="section-index">03 / OUTPUT</p>
          <h2>论文与知识产权</h2>
          <p>仅收录目前能够由公开资料交叉核验的成果。</p>
        </div>

        <article className="paper-card">
          <div className="paper-meta">
            <span>JOURNAL PAPER · 2026</span>
            <b>第五作者</b>
          </div>
          <h3>Intelligent monitoring of subgrade filling workflows via automatic construction elements recognition using multi-source data fusion</h3>
          <p className="authors">Chuanjiang Chen · Junyong Zhou · Tang Tang · Zhuohui Lan · <strong>Tianyou Xiao</strong></p>
          <p className="journal"><i>Engineering, Construction and Architectural Management</i> · 1–26</p>
          <div className="paper-details">
            <p>研究融合施工流程知识、YOLOv11-CSA 视觉识别、传感器数据与随机森林，实现施工活动与完整填筑流程的自动识别和生产率分析。</p>
            <div className="paper-numbers">
              <div><strong>98%+</strong><span>要素及活动识别准确率</span></div>
              <div><strong>&lt; 1.7s</strong><span>施工时间识别误差</span></div>
              <div><strong>&lt; 5%</strong><span>生产率估计误差</span></div>
            </div>
          </div>
          <ExternalLink href="https://doi.org/10.1108/ECAM-11-2025-1857">DOI · 10.1108/ECAM-11-2025-1857</ExternalLink>
        </article>

        <div className="patent-grid">
          <article>
            <div className="patent-status"><span>已授权</span><b>CN119984699B</b></div>
            <h3>一种跨座式单轨轨道梁动力特性检测机器人及其检测方法</h3>
            <p>第 3 发明人 · 广州大学 · 2026 年 2 月 27 日授权</p>
            <ExternalLink href="https://patents.google.com/patent/CN119984699B/zh">查看专利记录</ExternalLink>
          </article>
          <article>
            <div className="patent-status pending"><span>申请中</span><b>CN120526347A</b></div>
            <h3>基于视觉分割的施工装备态势分析与事件识别方法及系统</h3>
            <p>第 4 发明人 · 广州大学 · 2025 年 8 月 22 日公开</p>
            <ExternalLink href="https://patents.google.com/patent/CN120526347A/zh">查看专利记录</ExternalLink>
          </article>
        </div>
      </section>

      <section className="section honors-section" id="honors">
        <div className="section-heading compact">
          <p className="section-index">04 / HONORS</p>
          <h2>竞赛与荣誉</h2>
        </div>
        <div className="honors-list">
          <article>
            <span className="honor-year">2025</span>
            <div><p>世界大学生桥梁设计大赛</p><h3>一等奖 · 《扶摇桥》</h3><small>西北地区跨黄河城市桥梁｜团队成员</small></div>
            <b>01</b>
          </article>
          <article>
            <span className="honor-year">2025</span>
            <div><p>第十八届“挑战杯”广东大学生课外学术科技作品竞赛</p><h3>广东省一等奖</h3><small>《桥梁健康振动感测机器人》｜项目成员</small></div>
            <b>02</b>
          </article>
          <article>
            <span className="honor-year">2026</span>
            <div><p>世界大学生桥梁设计大赛南部片区赛</p><h3>三等奖 · 《海风丝带》</h3><small>热带海岛度假区人行天桥｜团队成员</small></div>
            <b>03</b>
          </article>
        </div>
        <p className="honors-note">注：此前旧材料中出现的 2024 年《惠通桥》相关获奖，因目前缺少能够确认肖天佑在获奖团队中的可靠公开证据，未纳入本页。</p>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-heading compact light-heading">
          <p className="section-index">05 / TIMELINE</p>
          <h2>学术经历时间轴</h2>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article key={`${item.year}-${item.title}`}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <time>{item.year}</time>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section sources-section" id="sources">
        <div>
          <p className="section-index">06 / EVIDENCE</p>
          <h2>公开、准确、可核验。</h2>
        </div>
        <div className="sources-copy">
          <p>本页依据广州大学官方报道、赛事公示、论文 DOI 与专利数据库整理。截至 2026 年 8 月，暂未公开或无法可靠确认的信息——如具体本科专业、GPA、排名与论文分工——不作推断。</p>
          <div className="source-links">
            {officialLinks.map((link) => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}
          </div>
        </div>
      </section>

      <footer>
        <div><b>肖天佑</b><span>TIANYOU XIAO · ACADEMIC PORTFOLIO</span></div>
        <p>BRIDGES · SENSING · INTELLIGENCE</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
