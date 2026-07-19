import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useApp } from '../AppContext'

export default function ProjectCard({ project, index = 0 }) {
  const { t } = useApp()
  const reduceMotion = useReducedMotion()

  return <motion.article
    className="card project-card"
    initial={reduceMotion ? false : { opacity: 0, y: 34 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .18 }}
    transition={{ duration: .62, delay: index * .09, ease: [0.22, 1, 0.36, 1] }}
    whileHover={reduceMotion ? undefined : { y: -9, rotateX: 1.4, rotateY: -1.4 }}
  >
    <div className={`project-cover cover-${project.accent}`}>
      <motion.div
        className="project-symbol"
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
      >{project.icon}</motion.div>
      <div className="project-shine" />
    </div>
    <div className="project-body">
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{t(project.descriptionEn, project.descriptionAr)}</p>
      <div className="tech">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
      <div className="project-actions">
        <Link className="case-link" to={`/projects/${project.slug}`}>{t('Details','التفاصيل')}</Link>
        <a className="live-link" href={project.liveUrl} target="_blank" rel="noreferrer">{t('Open Website ↗','فتح الموقع ↗')}</a>
      </div>
    </div>
  </motion.article>
}
