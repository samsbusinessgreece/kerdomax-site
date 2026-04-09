const metrics = [
  { num: '+28%', label: 'Avg. revenue uplift' },
  { num: '3×',   label: 'Faster listing setup' },
  { num: '94%',  label: 'Queries auto-handled' },
  { num: '€5B+', label: 'Market we\'re built for' },
]

const testimonials = [
  {
    quote: 'Managing pricing manually during peak season on Mykonos was a nightmare. The kind of local signal an AI like this could act on in minutes would have taken me hours every week.',
    name: 'Nikos P.',
    meta: '4 villas, Mykonos',
  },
  {
    quote: "The challenge isn't just pricing — it's the guest messages, the listings, the regulations. I need one tool that handles all of it, not three separate subscriptions.",
    name: 'Maria S.',
    meta: '8 apartments, Athens',
  },
  {
    quote: "PriceLabs is powerful but it doesn't know that Easter week in Rhodes is completely different from the same week in Thessaloniki. Local context is everything.",
    name: 'Yannis D.',
    meta: '12 units, Rhodes & Crete',
  },
]

export default function Trust() {
  return (
    <section
      id="trust"
      style={{
        padding: '100px 5vw',
        background: 'rgba(26,46,76,0.2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem', alignItems: 'start',
        }}
      >
        {/* Left: metrics */}
        <div className="reveal">
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>
            Why KERDOMAX
          </div>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--light)', marginBottom: '1rem' }}>
            Numbers that matter<br />to Greek hosts
          </h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Built after talking to dozens of hosts across Athens, Crete, and the Aegean islands. These are the results they told us they need.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {metrics.map(({ num, label }) => (
              <div
                key={label}
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  background: 'rgba(26,46,76,0.4)',
                }}
              >
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: 'var(--teal)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {num}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '6px' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: testimonials */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {testimonials.map(({ quote, name, meta }) => (
            <div
              key={name}
              style={{
                borderLeft: '2px solid var(--teal)',
                padding: '1.25rem 1.5rem',
                background: 'rgba(26,46,76,0.4)',
                borderRadius: '0 12px 12px 0',
              }}
            >
              <blockquote
                style={{
                  fontSize: '0.95rem', fontStyle: 'italic',
                  fontWeight: 300, color: 'var(--light)',
                  lineHeight: 1.65, marginBottom: '0.75rem',
                }}
              >
                &ldquo;{quote}&rdquo;
              </blockquote>
              <cite style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--beige)', fontStyle: 'normal', letterSpacing: '0.04em' }}>
                {name}{' '}
                <span style={{ color: 'var(--muted)', fontWeight: 400 }}>· {meta}</span>
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
