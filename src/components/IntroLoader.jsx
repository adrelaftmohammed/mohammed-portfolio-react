import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function IntroLoader() {
  const [visible, setVisible] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), reduceMotion ? 250 : 1900)
    return () => clearTimeout(timer)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: reduceMotion ? .15 : .7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="loader-orbit"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          >
            <span className="loader-dot" />
          </motion.div>
          <motion.div
            className="loader-logo"
            initial={reduceMotion ? false : { scale: .7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: .5, ease: 'backOut' }}
          >MA</motion.div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .35 }}
          >Mohammed Al-Yazji</motion.p>
          <div className="loader-track"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.35, ease: 'easeInOut' }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
