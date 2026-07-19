import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'
import { useApp } from '../AppContext'

export default function Projects() {
  const { t } = useApp()
  return <>
    <section className="page-hero"><div className="container"><span className="kicker">{t('PROJECTS','المشاريع')}</span><h1>{t('Selected applications and systems.','تطبيقات وأنظمة مختارة.')}</h1><p>{t('Each project includes its technologies, live link and detailed case study.','كل مشروع يحتوي على التقنيات والرابط المباشر ودراسة تفصيلية.')}</p></div></section>
    <section className="section"><div className="container"><div className="grid-3">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></div></section>
  </>
}
