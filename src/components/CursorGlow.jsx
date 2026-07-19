import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const reduceMotion = useReducedMotion()
  const smoothX = useSpring(x, { stiffness: 140, damping: 24, mass: .25 })
  const smoothY = useSpring(y, { stiffness: 140, damping: 24, mass: .25 })

  useEffect(() => {
    if (reduceMotion) return
    const move = (event) => { x.set(event.clientX - 170); y.set(event.clientY - 170) }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [reduceMotion, x, y])

  if (reduceMotion) return null
  return <motion.div className="cursor-glow" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />
}
