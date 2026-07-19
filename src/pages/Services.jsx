import { useApp } from '../AppContext'
import { services } from '../data'

export default function Services() {
  const { t } = useApp()
  return <>
    <section className="page-hero"><div className="container"><span className="kicker">{t('SERVICES','الخدمات')}</span><h1>{t('Development and security services.','خدمات التطوير والأمان.')}</h1><p>{t('Flexible services for individuals, startups and organizations.','خدمات مرنة للأفراد والشركات الناشئة والمؤسسات.')}</p></div></section>
    <section className="section"><div className="container"><div className="grid-3">
      {services.map(([icon,title,en,ar]) => <article className="card" key={title}><div className="card-icon">{icon}</div><h3>{title}</h3><p>{t(en,ar)}</p></article>)}
    </div></div></section>
  </>
}
