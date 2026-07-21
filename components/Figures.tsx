'use client'

import { useEffect, useRef, useState } from 'react'

type Fig = { target: number; format: (v: number) => string; label: string }

const FIGURES: Fig[] = [
  {
    target: 1.2,
    format: (v) => `€${v.toFixed(1)}B`,
    label: 'Revenue at TOTO, grown from €180M during tenure',
  },
  {
    target: 400,
    format: (v) => `${Math.round(v)}`,
    label: 'Person product & technology organisation led across ten offices',
  },
  {
    target: 12,
    format: (v) => `${Math.round(v)}`,
    label: 'Months from launch to market leader, Dutch online casino',
  },
  {
    target: 20,
    format: (v) => `${Math.round(v)}%`,
    label: 'Delivery cycle time removed by the AI programme at OpenBet',
  },
]

export default function Figures() {
  const ref = useRef<HTMLElement>(null)
  const [vals, setVals] = useState(() => FIGURES.map(() => 0))
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = () => {
      if (started.current) return
      started.current = true
      if (reduce) {
        setVals(FIGURES.map((f) => f.target))
        return
      }
      const dur = 1300
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur)
        const e = 1 - Math.pow(1 - t, 3)
        setVals(FIGURES.map((f) => f.target * e))
        if (t < 1) requestAnimationFrame(tick)
        else setVals(FIGURES.map((f) => f.target))
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="figures" ref={ref} aria-label="Track record in numbers">
      <div className="wrap">
        <div className="grid">
          {FIGURES.map((f, i) => (
            <div className="fig" key={f.label}>
              <div className="num">{f.format(vals[i])}</div>
              <p>{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
