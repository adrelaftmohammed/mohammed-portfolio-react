import { Navigate, useParams } from 'react-router-dom'
import { projects } from '../data'
import { useApp } from '../AppContext'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  const { t } = useApp()
  if (!project) return <Navigate to="/projects" replace />

  const content = {
    'exchange-ledger': {
      challengeEn:'Managing many daily transactions across banks, wallets and USDT platforms makes manual tracking difficult.',
      challengeAr:'إدارة معاملات يومية كثيرة عبر البنوك والمحافظ ومنصات USDT تجعل المتابعة اليدوية صعبة.',
      solutionEn:'The app records flows, updates balances, calculates profit/loss and exports PDF and Excel reports.',
      solutionAr:'يسجل التطبيق التدفقات ويحدث الأرصدة ويحسب الربح والخسارة ويصدر تقارير PDF وExcel.'
    },
    'stable-manager': {
      challengeEn:'Stable owners need one secure place for horses, feeding, health care, approvals and costs.',
      challengeAr:'يحتاج أصحاب الإسطبلات مكانًا آمنًا واحدًا للخيول والتغذية والرعاية والموافقات والتكاليف.',
      solutionEn:'The app provides role-based access for owners and administrators with organized reports.',
      solutionAr:'يوفر التطبيق صلاحيات للمالكين والإدارة مع تقارير منظمة.'
    },
    'work-writer-ai': {
      challengeEn:'Users need a simple workspace for professional messages, reports and reusable templates.',
      challengeAr:'يحتاج المستخدمون مساحة بسيطة للرسائل والتقارير والقوالب الاحترافية.',
      solutionEn:'The app organizes writing, saved history, templates and PDF export in Arabic and English.',
      solutionAr:'ينظم التطبيق الكتابات والسجل والقوالب وتصدير PDF بالعربية والإنجليزية.'
    }
  }[slug]

  return <>
    <section className="page-hero"><div className="container">
      <span className="kicker">PROJECT CASE STUDY</span>
      <h1>{project.title}</h1>
      <p>{t(project.descriptionEn, project.descriptionAr)}</p>
      <div className="tech">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
      <div className="inline-actions"><a className="btn primary" href={project.liveUrl} target="_blank" rel="noreferrer">{t('Open Live Website ↗','فتح الموقع المباشر ↗')}</a></div>
    </div></section>

    <section className="section"><div className="container article-content">
      <div className={`project-cover detail-cover cover-${project.accent}`}><div className="project-symbol">{project.icon}</div></div>
      <h2>{t('The Challenge','التحدي')}</h2><p>{t(content.challengeEn,content.challengeAr)}</p>
      <h2>{t('The Solution','الحل')}</h2><p>{t(content.solutionEn,content.solutionAr)}</p>
      <h2>{t('Technologies','التقنيات')}</h2><div className="grid-2">{project.tech.map(item => <div className="card" key={item}>{item}</div>)}</div>
    </div></section>
  </>
}
