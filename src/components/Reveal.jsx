import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, direction = 'up', amount = .18 }) {
  const reduceMotion = useReducedMotion()
  const offset = direction === 'left' ? { x: -34 } : direction === 'right' ? { x: 34 } : { y: 28 }

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
