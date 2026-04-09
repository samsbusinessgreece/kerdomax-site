'use client'

const tiers = [
  {
    name: 'Basic',
    price: '15',
    period: 'per month · 1–2 properties',
    featured: false,
    features: [
      'Dynamic pricing engine',
      'Basic occupancy forecasts',
      'Core guest message templates',
      '1–2 OTA channel sync',
      'Revenue dashboard',
      'Regulatory alert emails',
    ],
    cta: 'Start Free Beta',
    ctaHref: '#beta',
  },
  {
    name: 'Pro',
    price: '35',
    period: 'per month · 3–10 properties',
    featured: true,
    features: [
      'Everything in Basic',
      'Advanced AI pricing model',
      'Full listing optimization',
      'Multi-channel sync (all OTAs)',
      'Smart guest messaging AI',
      'Priority support',
    ],
    cta: 'Start Free Beta',
    ctaHref: '#beta',
  },
  {
    name: 'Business',
    price: '75',
    period: 'per month · 10+ properties',
    featured: false,
    features: [
      'Everything in Pro',
      'Full automation suite',
      'API access',
      'Custom performance reports',
      'Dedicated account manager',
      'White-glove onboarding',
    ],
    cta: 'Talk to Sales',
    ctaHref: '#beta',
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: '100px 5vw', background: 'var(--navy)' }}
    >
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>
          Pricing
        </div>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--light)', marginBottom: '1rem' }}>
          Simple, transparent plans
        </h2>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.7, margin: '0 auto' }}>
          No percentage-of-booking fees. No hidden charges. A flat monthly rate that pays for itself after a single optimized booking.
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
        {tiers.map(({ name, price, period, featured, features, cta, ctaHref }) => (
          <div
            key={name}
            style={{
              border: featured ? '1px solid var(--teal)' : '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              background: featured ? 'rgba(26,46,76,0.8)' : 'rgba(26,46,76,0.4)',
              display: 'flex', flexDirection: 'column',
              position: 'relative',
              transition: 'transform 0.25s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'none')}
          >
            {featured && (
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
                Most Popular
              </div>
            )}

            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>
              {name}
            </div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'var(--light)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.25rem' }}>
              <sup style={{ fontSize: '1.4rem', verticalAlign: 'super' }}>€</sup>{price}
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
              href={ctaHref}
              style={{
                textAlign: 'center', width: '100%', padding: '12px',
                display: 'inline-block', textDecoration: 'none',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700, fontSize: '0.8rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                borderRadius: '6px', cursor: 'pointer',
                transition: 'background 0.2s',
                ...(featured
                  ? { background: 'var(--teal)', color: 'var(--navy)', border: 'none' }
                  : { background: 'transparent', color: 'var(--teal)', border: '1.5px solid var(--teal)' }),
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = featured ? 'var(--teal2)' : 'rgba(46,211,198,0.08)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = featured ? 'var(--teal)' : 'transparent'
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
