import { motion } from 'framer-motion'
import { profile } from '@data/profile'
import BridgeCanvas from '@/components/three/BridgeCanvas'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* 3D Bridge Model */}
        <div className="hero-background">
          <BridgeCanvas />
        </div>

        {/* Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {profile.name.zh}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {profile.slogan.zh}
          </motion.p>

          <motion.div
            className="hero-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span>{profile.university.zh}</span>
            <span className="separator">·</span>
            <span>{profile.major.zh}</span>
            <span className="separator">·</span>
            <span>{profile.grade}</span>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button
              className="cta-button primary"
              onClick={() => {
                document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              查看作品
            </button>
            <button
              className="cta-button secondary"
              onClick={() => {
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              了解更多
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>滚动探索</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
