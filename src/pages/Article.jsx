import { Navigate, useParams } from 'react-router-dom'
import { articles } from '../data'
import { useApp } from '../AppContext'

const content = {
  'flutter-auth-security': {
    en:'Authentication should include email verification, safe password reset, session handling and database authorization.',
    ar:'يجب أن تشمل المصادقة التحقق من البريد وإعادة كلمة المرور بشكل آمن وإدارة الجلسات وصلاحيات قاعدة البيانات.'
  },
  'firebase-security-rules': {
    en:'Firebase Authentication identifies users, but Firestore rules must still validate ownership and allowed operations.',
    ar:'تحدد مصادقة Firebase هوية المستخدم، لكن قواعد Firestore يجب أن تتحقق من الملكية والعمليات المسموحة.'
  },
  'responsive-rtl': {
    en:'Arabic RTL interfaces require direction-aware navigation, icons, spacing and careful handling of mixed English content.',
    ar:'تحتاج واجهات RTL العربية إلى تنقل وأيقونات ومسافات تراعي الاتجاه ومعالجة دقيقة للمحتوى الإنجليزي المختلط.'
  }
}

export default function Article() {
  const { slug } = useParams()
  const article = articles.find(item => item.slug === slug)
  const { t } = useApp()
  if (!article) return <Navigate to="/blog" replace />

  return <>
    <section className="page-hero"><div className="container"><span className="kicker">ARTICLE</span><h1>{article.title}</h1><p>Mohammed Al-Yazji · July 2026</p></div></section>
    <section className="section"><div className="container article-content"><div className="article-hero-icon">{article.emoji}</div><p>{t(content[slug].en,content[slug].ar)}</p><h2>{t('Practical Guidance','إرشادات عملية')}</h2><p>{t('Use trusted authentication providers, validate every write, keep permissions minimal, and test the interface on real mobile screens.','استخدم مزودي مصادقة موثوقين، وتحقق من كل عملية كتابة، واجعل الصلاحيات في الحد الأدنى، واختبر الواجهة على شاشات هاتف حقيقية.')}</p></div></section>
  </>
}
