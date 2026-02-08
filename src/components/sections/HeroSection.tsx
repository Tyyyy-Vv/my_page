import { motion } from 'framer-motion'
import { profile } from '@data/profile'
import BridgeCanvas from '@/components/three/BridgeCanvas'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid-overlay" />
      
      <div className="hero-container">
        {/* 3D Bridge Model (Background) */}
        <div className="hero-background">
          <BridgeCanvas />
        </div>

        {/* Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-status-bar">
             <span className="status-item">SYSTEM: ONLINE</span>
             <span className="status-item">LOC: GUANGZHOU</span>
             <span className="status-item blinking">_</span>
          </div>

          <motion.h1
            className="hero-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="glitch-text" data-text={profile.name.zh}>{profile.name.zh}</span>
          </motion.h1>

          <motion.div 
            className="hero-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {profile.slogan.zh}
          </motion.p>

          <motion.div
            className="hero-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="info-tag">{profile.university.zh}</span>
            <span className="info-tag">{profile.major.zh}</span>
            <span className="info-tag">{profile.grade}</span>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              className="tech-button primary"
              onClick={() => {
                document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="btn-content">查看作品 // WORKS</span>
              <span className="btn-corner top-left"></span>
              <span className="btn-corner bottom-right"></span>
            </button>
            <button
              className="tech-button secondary"
              onClick={() => {
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
               <span className="btn-content">了解更多 // MORE</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="scroll-text">SCROLL_DOWN</span>
          <div className="scroll-line"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
