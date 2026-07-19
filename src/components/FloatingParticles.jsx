import { motion, useReducedMotion } from 'framer-motion'

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 96}%`,
  top: `${(i * 53) % 92}%`,
  size: 3 + (i % 4),
  duration: 6 + (i % 5),
  delay: (i % 6) * .4,
}))

export default function FloatingParticles() {
  const reduceMotion = useReducedMotion()
  return <div className="particles" aria-hidden="true">
    {particles.map(p => <motion.span
      key={p.id}
      style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
      animate={reduceMotion ? undefined : { y: [0, -28, 0], x: [0, 12, 0], opacity: [.15, .7, .15], scale: [1, 1.7, 1] }}
      transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
    />)}
  </div>
}
