'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 5vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800, fontSize: '1.1rem',
            letterSpacing: '0.04em',
          }}
        >
          <span style={{ color: 'var(--beige)' }}>KERDO</span>
          <span style={{ color: 'var(--teal)' }}>MAX</span>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>
          AI Revenue Optimization for Greek Short-Term Rental Hosts
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['Privacy Policy', 'Terms', 'Contact'].map(link => (
          <a
            key={link}
            href={link === 'Contact' ? 'mailto:hello@kerdomax.io' : '#'}
            style={{
              fontSize: '0.8rem', color: 'var(--muted)',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--teal)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
          >
            {link}
          </a>
        ))}
      </div>

      <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
        © 2026 KERDOMAX. All rights reserved.
      </div>
    </footer>
  )
}
