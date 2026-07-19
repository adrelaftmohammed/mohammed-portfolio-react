import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useApp } from '../AppContext'
import { projects, services, articles } from '../data'
import ProjectCard from '../components/ProjectCard'
import AnimatedCounter from '../components/AnimatedCounter'
import Reveal from '../components/Reveal'
import profile from '../assets/profile.jpg'
import cvFile from '../assets/Mohammed_Al_Yazji_CV.pdf'

const skills = [
  ['Flutter', 'Mobile Apps'], ['Dart', 'Programming'], ['React', 'Front-End'],
  ['Firebase', 'Cloud Backend'], ['Firestore', 'Cloud Database'], ['Hive CE', 'Local Database'],
  ['HTML & CSS', 'Responsive UI'], ['JavaScript', 'Web'], ['OWASP', 'Security'], ['Git & GitHub', 'Version Control'],
]

export default function Home() {
  const { t } = useApp()
  const reduceMotion = useReducedMotion()

  return <>
    <section className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, x: -42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="status"
            animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 rgba(39,209,127,0)', '0 0 30px rgba(39,209,127,.12)', '0 0 0 rgba(39,209,127,0)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          ><i></i><span>{t('Available for remote work and freelance projects','متاح للعمل عن بُعد والمشاريع الحرة')}</span></motion.div>
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}>FLUTTER DEVELOPER · FRONT-END · WEB SECURITY</motion.div>
          <h1><span className="hero-line">{t('I build secure','أبني منتجات رقمية')}</span><span className="gradient-text">{t(' digital products',' آمنة')}</span><span className="hero-line">{t(' that feel exceptional.',' بمظهر استثنائي.')}</span></h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }}>{t('Cross-platform Flutter applications, responsive websites, secure authentication, Firebase solutions, and practical web security assessments.','تطبيقات Flutter متعددة المنصات، مواقع متجاوبة، تسجيل دخول آمن، حلول Firebase، وفحص عملي لأمن المواقع.')}</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}>
            <motion.div whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={{ scale: .98 }}>
              <Link className="btn primary" to="/projects">{t('View Projects','عرض المشاريع')}</Link>
            </motion.div>
            <motion.div whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={{ scale: .98 }}>
              <a className="btn secondary cv-button" href={cvFile} download><span className="cv-icon">↓</span>{t('Download CV','تحميل السيرة')}</a>
            </motion.div>
          </motion.div>
          <motion.div className="stats" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}>
            <motion.div className="stat" whileHover={reduceMotion ? undefined : { y: -6 }}><AnimatedCounter value={2} suffix="+"/><span>{t('Years Experience','سنوات خبرة')}</span></motion.div>
            <motion.div className="stat" whileHover={reduceMotion ? undefined : { y: -6 }}><AnimatedCounter value={3}/><span>{t('Featured Products','منتجات مميزة')}</span></motion.div>
            <motion.div className="stat" whileHover={reduceMotion ? undefined : { y: -6 }}><AnimatedCounter value={88} suffix="%"/><span>{t('Academic Grade','المعدل الأكاديمي')}</span></motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={reduceMotion ? false : { opacity: 0, x: 42, scale: .96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-orbits"><span/><span/><span/></div>
          <motion.div className="portrait" whileHover={reduceMotion ? undefined : { rotate: -.7, scale: 1.012 }} transition={{ type: 'spring', stiffness: 180, damping: 18 }}>
            <img src={profile} alt="Mohammed Al-Yazji" />
            <motion.div className="floating f1" animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><span>Flutter</span><strong>Dart · Firebase</strong></motion.div>
            <motion.div className="floating f2" animate={reduceMotion ? undefined : { y: [0, 9, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}><span>Security</span><strong>OWASP · Hardening</strong></motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="scroll-cue" animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>⌄</motion.div>
    </section>

    <section className="section band">
      <div className="container">
        <Reveal className="section-head"><div><span className="kicker">{t('SERVICES','الخدمات')}</span><h2>{t('What I can build for you.','ماذا أستطيع أن أبني لك؟')}</h2></div></Reveal>
        <div className="grid-3">
          {services.slice(0,3).map(([icon,title,en,ar], index) => <motion.article className="card service-card" key={title} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}><motion.div className="card-icon" whileHover={{ rotate: [0, -8, 8, 0], scale: 1.12 }}>{icon}</motion.div><h3>{title}</h3><p>{t(en,ar)}</p></motion.article>)}
        </div>
      </div>
    </section>

    <section className="section skills-section">
      <div className="container">
        <Reveal className="section-head"><div><span className="kicker">{t('TECHNICAL SKILLS','المهارات التقنية')}</span><h2>{t('Technologies I use to build secure digital products.','تقنيات أستخدمها لبناء منتجات رقمية آمنة.')}</h2></div></Reveal>
        <div className="skills-grid">
          {skills.map(([name, category], index) => <motion.article className="skill-item" key={name} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .045 }} whileHover={reduceMotion ? undefined : { y: -8, scale: 1.035 }}><span className="skill-number">{String(index + 1).padStart(2,'0')}</span><h3>{name}</h3><p>{category}</p><div className="skill-glow" /></motion.article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Reveal className="section-head"><div><span className="kicker">{t('FEATURED PROJECTS','مشاريع مختارة')}</span><h2>{t('Products built around real workflows.','منتجات مبنية حول احتياجات واقعية.')}</h2></div></Reveal>
        <div className="grid-3">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <Reveal className="section-head"><div><span className="kicker">{t('LATEST ARTICLES','أحدث المقالات')}</span><h2>{t('Practical notes on Flutter and security.','ملاحظات عملية حول Flutter والأمان.')}</h2></div></Reveal>
        <div className="grid-3">
          {articles.map((article,index) => <motion.article className="card article-preview" key={article.slug} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={reduceMotion ? undefined : { y: -8 }}><motion.div className="card-icon" whileHover={{ scale: 1.16, rotate: 5 }}>{article.emoji}</motion.div><h3>{article.title}</h3><p>{t(article.summaryEn,article.summaryAr)}</p><Link className="project-link" to={`/blog/${article.slug}`}>{t('Read Article ↗','قراءة المقال ↗')}</Link></motion.article>)}
        </div>
      </div>
    </section>
  </>
}
