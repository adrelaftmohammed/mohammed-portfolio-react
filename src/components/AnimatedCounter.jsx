import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1100 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: .7 })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!isInView) return
    if (reduceMotion) {
      setCount(value)
      return
    }

    let frameId
    let startedAt

    const tick = timestamp => {
      startedAt ??= timestamp
      const progress = Math.min((timestamp - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [duration, isInView, reduceMotion, value])

  return <strong ref={ref}>{count}{suffix}</strong>
}
