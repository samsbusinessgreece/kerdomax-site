'use client'

import { useLanguage } from './LanguageProvider'

const prices = ['15', '35', '75']
const featured = [false, true, false]

export default function Pricing() {
  const { t } = useLanguage()
  const p = t.pricing

  return (
    <section
      id="pricing"
      style={{ padding: '100px 5vw', background: 'var(--navy)' }}
    >
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>
          {p.tag}
        </div>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--light)', marginBottom: '1rem' }}>
          {p.heading}
        </h2>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.7, margin: '0 auto' }}>
          {p.subhead}
        </p>
      </div>

      <div
        className="reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px', margin: '0 auto',
        }}
      >
        {p.tiers.map(({ name, period, features, cta }, i) => (
          <div
            key={name}
            style={{
              border: featured[i] ? '1px solid var(--teal)' : '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              background: featured[i] ? 'rgba(26,46,76,0.8)' : 'rgba(26,46,76,0.4)',
              display: 'flex', flexDirection: 'column',
              position: 'relative',
              transition: 'transform 0.25s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'none')}
          >
            {featured[i] && (
              <div
                style={{
                  position: 'absolute', top: '-1px', left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--teal)', color: 'var(--navy)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.65rem', fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '4px 16px',
                  borderRadius: '0 0 8px 8px',
                }}
              >
                {p.mostPopular}
              </div>
            )}

            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>
              {name}
            </div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'var(--light)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.25rem' }}>
              <sup style={{ fontSize: '1.4rem', verticalAlign: 'super' }}>€</sup>{prices[i]}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
              {period}
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 0 1.5rem' }} />

            <ul style={{ listStyle: 'none', margin: '0 0 2rem', padding: 0, flex: 1 }}>
              {features.map(f => (
                <li
                  key={f}
                  style={{
                    fontSize: '0.85rem', fontWeight: 400, color: 'var(--light)',
                    padding: '0.45rem 0',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#beta"
              style={{
                textAlign: 'center', width: '100%', padding: '12px',
                display: 'inline-block', textDecoration: 'none',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700, fontSize: '0.8rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                borderRadius: '6px', cursor: 'pointer',
                transition: 'background 0.2s',
                ...(featured[i]
                  ? { background: 'var(--teal)', color: 'var(--navy)', border: 'none' }
                  : { background: 'transparent', color: 'var(--teal)', border: '1.5px solid var(--teal)' }),
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = featured[i] ? 'var(--teal2)' : 'rgba(46,211,198,0.08)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = featured[i] ? 'var(--teal)' : 'transparent'
              }}
            >
              {cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
