import { motion, useReducedMotion } from 'framer-motion'

export default function AuroraBackground() {
  const reduceMotion = useReducedMotion()

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }

  return (
    <div className="aurora-background" aria-hidden="true">
      <motion.div
        className="aurora aurora-one"
        animate={reduceMotion ? undefined : { x: [0, 80, -30], y: [0, -45, 50], scale: [1, 1.15, .96] }}
        transition={transition}
      />
      <motion.div
        className="aurora aurora-two"
        animate={reduceMotion ? undefined : { x: [0, -70, 45], y: [0, 55, -40], scale: [1, .92, 1.18] }}
        transition={{ ...transition, duration: 22 }}
      />
      <motion.div
        className="aurora aurora-three"
        animate={reduceMotion ? undefined : { x: [0, 55, -60], y: [0, 35, -25], scale: [1, 1.12, .94] }}
        transition={{ ...transition, duration: 25 }}
      />
      <div className="noise-layer" />
    </div>
  )
}
