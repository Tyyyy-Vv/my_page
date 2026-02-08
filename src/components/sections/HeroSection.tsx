import { motion } from 'framer-motion'
import { profile } from '@data/profile'
import BridgeCanvas from '@/components/three/BridgeCanvas'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Structural Grid Overlay - Static & Rigorous */}
      <div className="structural-grid" />
      
      <div className="hero-container">
        {/* 3D Bridge Model */}
        <div className="hero-background">
          <BridgeCanvas />
        </div>

        <motion.div 
          className="hero-main-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
            <div className="content-frame">
                {/* Engineering Header */}
                <div className="eng-header">
                    <span className="eng-id">NO. 2024-XTY</span>
                    <div className="eng-line"></div>
                    <span className="eng-loc">GZ, CHINA</span>
                </div>

                {/* Main Title - Monumental & Static */}
                <div className="title-block">
                    <motion.h1
                        className="hero-name"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {profile.name.zh}
                    </motion.h1>
                    <motion.h2
                        className="hero-role"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        BRIDGE ENGINEERING UNDERGRADUATE
                    </motion.h2>
                </div>

                {/* Slogan - Rigorous */}
                <motion.div 
                    className="slogan-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p className="hero-slogan">{profile.slogan.zh}</p>
                </motion.div>

                {/* Info Block - Structured Data */}
                <motion.div 
                    className="info-structure"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="info-column">
                        <label>AFFILIATION</label>
                        <span>{profile.university.zh}</span>
                    </div>
                    <div className="info-divider"></div>
                    <div className="info-column">
                        <label>MAJOR</label>
                        <span>{profile.major.zh}</span>
                    </div>
                </motion.div>

                {/* CTA Buttons - Heavy & Solid */}
                <motion.div 
                    className="cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <button 
                        className="btn-structural primary"
                        onClick={() => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        查看作品
                    </button>
                    <button 
                        className="btn-structural secondary"
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        联系我
                    </button>
                </motion.div>
            </div>
        </motion.div>

        {/* Scroll - Static Line */}
        <motion.div 
            className="scroll-mark"
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            transition={{ duration: 1, delay: 1.2 }}
        >
            <span className="scroll-label">SCROLL</span>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
