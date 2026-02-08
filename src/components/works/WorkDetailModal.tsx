import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Work } from '@data/works'
import './WorkDetailModal.css'

interface WorkDetailModalProps {
  work: Work | null
  isOpen: boolean
  onClose: () => void
}

const WorkDetailModal = ({ work, isOpen, onClose }: WorkDetailModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!work) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="work-detail-modal"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>

            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <h2 className="modal-title">{work.title}</h2>
                {work.titleEn && <p className="modal-title-en">{work.titleEn}</p>}
                <div className="modal-meta">
                  <span className="modal-category">{work.category}</span>
                  <span className="modal-date">{work.date}</span>
                </div>
              </div>

              {/* Images Gallery */}
              <div className="modal-gallery">
                {work.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={`${work.title} - ${idx + 1}`}
                    className="modal-image"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  />
                ))}
              </div>

              {/* Description */}
              <div className="modal-description">
                <h3>项目介绍</h3>
                <p className="description-brief">{work.description}</p>
                {work.detailedDescription && (
                  <div className="description-detailed">
                    {work.detailedDescription.split('\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Specifications */}
              {work.specs && (
                <div className="modal-specs">
                  <h3>技术参数</h3>
                  <div className="specs-grid">
                    {Object.entries(work.specs).map(([key, value]) => (
                      value && (
                        <div key={key} className="spec-item">
                          <span className="spec-label">{key}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {work.tags && work.tags.length > 0 && (
                <div className="modal-tags">
                  <h3>技术标签</h3>
                  <div className="tags-list">
                    {work.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {work.links && (
                <div className="modal-links">
                  {work.links.github && (
                    <a href={work.links.github} target="_blank" rel="noopener noreferrer" className="link-button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default WorkDetailModal
