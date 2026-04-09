'use client'

const steps = [
  {
    num: '01',
    title: 'Connect Your Listings',
    desc: 'Link your Airbnb and Booking.com accounts securely in one click. KERDOMAX imports your properties, calendars, and historical data automatically.',
  },
  {
    num: '02',
    title: 'AI Calibrates for Your Market',
    desc: 'Our model analyzes your specific location, property type, and the competitive landscape around you — then builds a custom pricing and content strategy.',
  },
  {
    num: '03',
    title: 'Review & Approve',
    desc: 'You stay in control. Review AI recommendations before they go live. Set limits, override anything, and build trust with the system over time.',
  },
  {
    num: '04',
    title: 'Watch Revenue Grow',
    desc: 'Prices adjust automatically around events, seasons, and demand shifts. Your dashboard tracks the impact in real time — revenue, occupancy, ADR.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: '100px 5vw',
        background: 'linear-gradient(180deg, var(--navy) 0%, rgba(26,46,76,0.3) 100%)',
      }}
    >
      <div
        className="reveal"
        style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}
      >
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>
          Getting Started
        </div>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--light)', marginBottom: '1rem' }}>
          Up and running in minutes
        </h2>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
          No technical knowledge required. No long contracts. Just connect, optimize, and earn more.
        </p>
      </div>

      <div
        className="reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
        }}
      >
        {steps.map(({ num, title, desc }) => (
          <div
            key={num}
            style={{
              padding: '2rem',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              background: 'rgba(26,46,76,0.4)',
              transition: 'border-color 0.25s, transform 0.25s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(46,211,198,0.4)'
              el.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.transform = 'none'
            }}
          >
            <div
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '3.5rem', fontWeight: 800,
                color: 'rgba(46,211,198,0.15)',
                lineHeight: 1, marginBottom: '0.75rem',
                letterSpacing: '-0.04em',
              }}
            >
              {num}
            </div>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--beige)', marginBottom: '0.5rem' }}>
              {title}
            </h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
