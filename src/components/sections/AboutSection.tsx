import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { profile } from '@data/profile'
import './AboutSection.css'

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="about" className="about-section section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">关于我</h2>
          <p className="section-subtitle">About Me</p>

          <div className="about-grid">
            <motion.div
              className="about-bio"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>{profile.bio.zh}</p>
            </motion.div>

            <motion.div
              className="about-info"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="info-item">
                <span className="info-label">学校</span>
                <span className="info-value">{profile.university.zh}</span>
              </div>
              <div className="info-item">
                <span className="info-label">专业</span>
                <span className="info-value">{profile.major.zh}</span>
              </div>
              <div className="info-item">
                <span className="info-label">年级</span>
                <span className="info-value">{profile.grade}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="skills-title">技能专长</h3>
            <div className="skills-grid">
              {profile.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
