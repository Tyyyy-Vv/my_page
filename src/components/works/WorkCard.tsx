import { motion } from 'framer-motion'
import { Work } from '@data/works'
import './WorkCard.css'

interface WorkCardProps {
  work: Work
  index: number
  onClick: () => void
}

const WorkCard = ({ work, index, onClick }: WorkCardProps) => {
  return (
    <motion.article
      className="work-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ y: -8 }}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="work-card-image-wrapper">
        {work.featured && (
          <div className="work-card-badge">精选</div>
        )}
        <img
          src={work.thumbnail}
          alt={work.title}
          className="work-card-image"
          loading="lazy"
        />
        <div className="work-card-overlay">
          <span className="view-details">查看详情</span>
        </div>
      </div>

      {/* Content */}
      <div className="work-card-content">
        <div className="work-card-header">
          <h3 className="work-card-title">{work.title}</h3>
          {work.titleEn && (
            <p className="work-card-title-en">{work.titleEn}</p>
          )}
        </div>

        <p className="work-card-description">{work.description}</p>

        <div className="work-card-meta">
          <span className="work-card-category">{work.category}</span>
          <span className="work-card-date">{work.date}</span>
        </div>

        {work.tags && work.tags.length > 0 && (
          <div className="work-card-tags">
            {work.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="work-card-tag">{tag}</span>
            ))}
            {work.tags.length > 3 && (
              <span className="work-card-tag-more">+{work.tags.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default WorkCard
