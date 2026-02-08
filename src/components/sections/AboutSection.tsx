import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '@data/profile'
import './AboutSection.css'

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const yBio = useTransform(scrollYProgress, [0, 1], [100, -100])
  
  return (
    <section id="about" className="about-section" ref={containerRef}>
      <div className="technical-grid-bg" />
      
      <div className="about-container">
        <aside className="about-sidebar">
          <motion.div 
            className="section-marker"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number">01</span>
            <span className="section-label">IDENTIFICATION</span>
          </motion.div>
          <div className="vertical-line" />
        </aside>

        <div className="about-main">
            <motion.header 
                className="about-header"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="header-top-row">
                    <span className="header-tag">Directory: /usr/profile/main</span>
                    <span className="header-status">STATUS: ONLINE</span>
                </div>
                <h2 className="title-glitch">ABOUT ME</h2>
                <div className="header-decoration">
                    <span className="deco-line"></span>
                    <span className="deco-code">SYS.PROFILE.INIT()</span>
                </div>
            </motion.header>

            <div className="blueprint-grid">
                <motion.div 
                    className="grid-item bio-module"
                    style={{ y: yBio }}
                >
                    <div className="corner-marker top-left" />
                    <div className="corner-marker bottom-right" />
                    <h3 className="module-label">PERSONAL_BIO // 个人简介</h3>
                    <p className="bio-text">{profile.bio.zh}</p>
                </motion.div>

                <div className="grid-right-col">
                    <motion.div 
                        className="grid-item stats-module"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="corner-marker top-right" />
                        <h3 className="module-label">PARAMETERS // 基本参数</h3>
                        
                        <div className="stat-row">
                            <span className="stat-label">AFFILIATION</span>
                            <span className="stat-value">{profile.university.zh}</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label">MAJOR</span>
                            <span className="stat-value">{profile.major.zh}</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label">STATUS</span>
                            <span className="stat-value highlight">{profile.grade} / ACTIVE</span>
                        </div>
                    </motion.div>

                    <div className="grid-item skills-module">
                        <h3 className="module-label">CORE_COMPETENCIES // 技能矩阵</h3>
                        <div className="skills-matrix">
                            {profile.skills.map((skill, i) => (
                                <motion.div 
                                    key={skill} 
                                    className="skill-cell"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ 
                                        backgroundColor: "rgba(63, 81, 181, 0.4)",
                                        borderColor: "#FFC107",
                                        x: 5
                                    }}
                                >
                                    <span className="skill-index">{String(i + 1).padStart(2, '0')}</span>
                                    <span className="skill-name">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
