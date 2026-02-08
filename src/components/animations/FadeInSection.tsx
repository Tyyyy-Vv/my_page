import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

const FadeInSection = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = ''
}: FadeInSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  })

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
    none: {}
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection
