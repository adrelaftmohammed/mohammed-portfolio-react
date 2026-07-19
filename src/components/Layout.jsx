import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import AuroraBackground from './AuroraBackground'
import IntroLoader from './IntroLoader'
import CursorGlow from './CursorGlow'
import ScrollProgress from './ScrollProgress'
import FloatingParticles from './FloatingParticles'

export default function Layout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return <>
    <IntroLoader />
    <ScrollProgress />
    <CursorGlow />
    <AuroraBackground />
    <FloatingParticles />
    <Header />
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -10, filter: 'blur(6px)' }}
        transition={{ duration: .48, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
    <Footer />
  </>
}
