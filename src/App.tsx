import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import WorksSection from './components/sections/WorksSection'
import ContactSection from './components/sections/ContactSection'
import ParticleBackground from './components/three/ParticleBackground'

function App() {
  useEffect(() => {
    // 页面加载完成后添加淡入动画
    document.body.classList.add('animate-fadeIn')
  }, [])

  return (
    <>
      <ParticleBackground />
      <ScrollProgress />
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App
