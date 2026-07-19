import { Link } from 'react-router-dom'
import { articles } from '../data'
import { useApp } from '../AppContext'

export default function Blog() {
  const { t } = useApp()
  return <>
    <section className="page-hero"><div className="container"><span className="kicker">{t('BLOG','المدونة')}</span><h1>{t('Flutter, Firebase and security notes.','مقالات حول Flutter وFirebase والأمان.')}</h1></div></section>
    <section className="section"><div className="container"><div className="article-list">
      {articles.map(article => <article className="card article-card" key={article.slug}><div className="article-thumb">{article.emoji}</div><div><span className="article-meta">July 2026</span><h3>{article.title}</h3><p>{t(article.summaryEn,article.summaryAr)}</p><Link className="project-link" to={`/blog/${article.slug}`}>{t('Read Article ↗','قراءة المقال ↗')}</Link></div></article>)}
    </div></div></section>
  </>
}
