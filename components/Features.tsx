'use client'

const features = [
  {
    title: 'Hyperlocal Dynamic Pricing',
    desc: 'AI trained on Greek demand signals, island seasonality, local festivals, and real-time market data. Not a global algorithm trying to guess Santorini in August.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Listing Optimization',
    desc: 'AI-generated titles, descriptions, and photo-order recommendations — tailored to what actually converts on Airbnb and Booking.com for Greek properties.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: 'Intelligent Guest Messaging',
    desc: 'Smart, multilingual templates with Greek cultural context. Auto-handles common queries so you can focus on your guests, not your inbox.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Alerts',
    desc: "Greece's STR regulations are evolving fast. KERDOMAX monitors changes and alerts you before they affect your listings — no legal surprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Revenue Dashboard',
    desc: 'Real-time view of your ADR, occupancy rate, and revenue across all your properties and platforms — in one place, in Greek or English.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Multi-Channel Sync',
    desc: 'Manage Airbnb, Booking.com, VRBO, and more from a single hub. Pricing updates propagate instantly — no double bookings, no drift.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section
      id="features"
      style={{ padding: '100px 5vw', background: 'var(--navy)' }}
    >
      {/* Header */}
      <div
        className="reveal"
        style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', gap: '2rem',
          marginBottom: '4rem', flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>
            What KERDOMAX Does
          </div>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--light)', margin: 0 }}>
            Every tool you need.<br />Nothing you don&apos;t.
          </h2>
        </div>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--muted)', maxWidth: '420px', lineHeight: 1.7, margin: 0 }}>
          Built for individual Greek hosts and small property managers — not a generic global platform retrofitted for your market.
        </p>
      </div>

      {/* Grid */}
      <div
        className="reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {features.map(({ title, desc, icon }) => (
          <div
            key={title}
            className="feat-card"
            style={{
              background: 'rgba(26,46,76,0.6)',
              padding: '2.5rem 2rem',
              position: 'relative',
              transition: 'background 0.25s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(26,46,76,0.95)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(26,46,76,0.6)')}
          >
            <div
              style={{
                width: '48px', height: '48px',
                background: 'rgba(46,211,198,0.1)',
                border: '1px solid rgba(46,211,198,0.2)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              {icon}
            </div>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--beige)', marginBottom: '0.6rem', letterSpacing: '0.01em' }}>
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
