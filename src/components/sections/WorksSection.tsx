import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { works, Work } from '@data/works'
import WorkCard from '@/components/works/WorkCard'
import WorkDetailModal from '@/components/works/WorkDetailModal'
import './WorksSection.css'

const WorksSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedWork(null), 300)
  }

  return (
    <section id="works" className="works-section section" ref={ref}>
      <div className="container">
        <motion.div
          style={{ position: 'relative' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="works-header"
        >
          <h2 className="section-title">我的作品</h2>
          <p className="section-subtitle">My Works</p>
        </motion.div>

        <div className="works-grid">
          {works.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              index={index}
              onClick={() => handleWorkClick(work)}
            />
          ))}
        </div>
      </div>

      <WorkDetailModal
        work={selectedWork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default WorksSection
