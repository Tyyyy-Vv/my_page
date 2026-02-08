import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import './ScrollProgress.css'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollPercentage(Math.round(latest * 100))
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <>
      {/* 顶部进度条 */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* 百分比指示器（可选） */}
      {scrollPercentage > 5 && (
        <motion.div
          className="scroll-percentage"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {scrollPercentage}%
        </motion.div>
      )}
    </>
  )
}

export default ScrollProgress
