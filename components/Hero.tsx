'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '120px 5vw 80px',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage:
            'linear-gradient(rgba(46,211,198,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(46,211,198,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(46,211,198,0.12) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0, pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px' }}>
        {/* Live badge */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(46,211,198,0.1)',
            border: '1px solid rgba(46,211,198,0.3)',
            borderRadius: '100px',
            padding: '6px 14px',
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--teal)',
            marginBottom: '2rem',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <span className="pulse-dot" />
          Now accepting beta hosts — Greece only
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--light)',
            marginBottom: '1.5rem',
          }}
        >
          Your Greek rental.<br />
          <span style={{ color: 'var(--teal)' }}>AI-optimized.</span><br />
          <span style={{ color: 'var(--beige)' }}>Effortlessly.</span>
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 300,
            color: 'var(--muted)',
            maxWidth: '580px',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
          }}
        >
          Dynamic pricing, listing optimization, and intelligent guest
          communication — built exclusively for the Greek short-term rental
          market. Stop leaving revenue on the table.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#beta"
            style={{
              background: 'var(--teal)', color: 'var(--navy)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700, fontSize: '0.85rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '13px 28px', border: 'none', borderRadius: '6px',
              cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--teal2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--teal)'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
          >
            Join the Beta — Free
          </a>
          <a
            href="#features"
            style={{
              background: 'transparent', color: 'var(--teal)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700, fontSize: '0.85rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '12px 28px',
              border: '1.5px solid var(--teal)', borderRadius: '6px',
              cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(46,211,198,0.08)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
          >
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap',
          }}
        >
          {[
            { num: '+28%', label: 'Avg. Revenue Uplift' },
            { num: '200K+', label: 'Greek STR Listings' },
            { num: '€7B', label: 'Annual Booking Volume' },
            { num: '3 min', label: 'Setup Time' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.8rem', fontWeight: 800,
                  color: 'var(--beige)',
                  letterSpacing: '-0.02em', lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: '0.75rem', fontWeight: 500,
                  color: 'var(--muted)',
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
