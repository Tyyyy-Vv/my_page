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

  // Subtle parallax
  const yContent = useTransform(scrollYProgress, [0, 1], [50, -50])
  
  return (
    <section id="about" className="about-section" ref={containerRef}>
      {/* Background - Engineering Graph Paper */}
      <div className="eng-grid-bg" />
      
      <div className="about-container">
        {/* Left Column: Title Block */}
        <div className="about-left">
            <motion.div 
                className="section-idx"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                01
            </motion.div>
            <motion.h2 
                className="about-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                ABOUT<br/>ENGINEER
            </motion.h2>
            <div className="title-line"></div>
        </div>

        {/* Right Column: Content */}
        <motion.div 
            className="about-right"
            style={{ y: yContent }}
        >
            {/* Bio Block - Card Style */}
            <div className="content-block bio-block">
                <h3 className="block-label">PROFILE SUMMARY</h3>
                <p className="bio-text">{profile.bio.zh}</p>
            </div>

            {/* Stats Block - Row Style */}
            <div className="content-block stats-block">
                <div className="stat-item">
                     <span className="stat-label">UNIVERSITY</span>
                     <span className="stat-value">{profile.university.zh}</span>
                </div>
                <div className="stat-item">
                     <span className="stat-label">MAJOR</span>
                     <span className="stat-value">{profile.major.zh}</span>
                </div>
                <div className="stat-item">
                     <span className="stat-label">GRADE</span>
                     <span className="stat-value">{profile.grade}</span>
                </div>
            </div>

            {/* Skills - Grid Style */}
            <div className="content-block skills-block">
                <h3 className="block-label">TECHNICAL COMPETENCE</h3>
                <div className="skills-grid">
                    {profile.skills.map((skill, i) => (
                        <div key={skill} className="skill-item">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
