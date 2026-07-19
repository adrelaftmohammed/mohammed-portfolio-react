import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useApp } from '../AppContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { language, toggleLanguage, toggleTheme, t } = useApp()

  const links = [
    ['/', t('Home','الرئيسية')],
    ['/services', t('Services','الخدمات')],
    ['/projects', t('Projects','المشاريع')],
    ['/blog', t('Blog','المدونة')],
    ['/contact', t('Contact','تواصل')],
  ]

  return <>
    <header className="header">
      <div className="container nav">
        <Link className="logo" to="/">
          <span className="logo-mark">MA</span>
          <span className="logo-copy">
            <strong>Mohammed Al-Yazji</strong>
            <small>{t('Flutter & Web Security','Flutter وأمن المواقع')}</small>
          </span>
        </Link>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([to,label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Menu">☰</button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Theme">◐</button>
          <button className="lang-btn" onClick={toggleLanguage}>{language === 'ar' ? 'EN' : 'AR'}</button>
        </div>
      </div>
    </header>
    <button className={open ? 'drawer-overlay show' : 'drawer-overlay'} onClick={() => setOpen(false)} aria-label="Close menu" />
  </>
}
