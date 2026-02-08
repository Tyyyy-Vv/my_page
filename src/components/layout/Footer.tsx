import { profile } from '@data/profile'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* 左侧：版权信息 */}
          <div className="footer-left">
            <p className="copyright">
              © {currentYear} {profile.name.zh}. All rights reserved.
            </p>
            <p className="footer-subtitle">
              {profile.university.zh} · {profile.major.zh}
            </p>
          </div>

          {/* 右侧：联系方式 */}
          <div className="footer-right">
            {profile.contact.email && (
              <a
                href={`mailto:${profile.contact.email}`}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            )}
            {profile.contact.github && (
              <a
                href={profile.contact.github}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {profile.contact.linkedin && (
              <a
                href={profile.contact.linkedin}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* 底部装饰线 */}
        <div className="footer-decoration"></div>
      </div>
    </footer>
  )
}

export default Footer
