import { useApp } from '../AppContext'

export default function Footer() {
  const { t } = useApp()
  return <>
    <a className="whatsapp" href="https://wa.me/972595031617" target="_blank" rel="noreferrer">✆</a>
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Mohammed Al-Yazji</span>
        <span>{t('Built with security and clean design.','تم بناؤه بأمان وتصميم نظيف.')}</span>
      </div>
    </footer>
  </>
}
