'use client'

import { useState } from 'react'
import { useLanguage } from './LanguageProvider'

const shieldIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const userIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
)

const bulletIcons = [shieldIcon, checkIcon, userIcon]

export default function BetaForm() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()
  const b = t.beta
  const f = b.form

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="beta"
      style={{
        padding: '100px 5vw',
        background: 'linear-gradient(135deg, rgba(26,46,76,0.5) 0%, rgba(15,26,46,1) 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '-200px', right: '-200px',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(46,211,198,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem', alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}
      >
        {/* Copy */}
        <div className="reveal">
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.75rem' }}>
            {b.tag}
          </div>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.015em', color: 'var(--light)', marginBottom: '1rem' }}>
            {b.heading1}<br />{b.heading2}
          </h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '440px' }}>
            {b.subhead}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {b.bullets.map((text, i) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 500, color: 'var(--muted)' }}>
                {bulletIcons[i]}
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          className="reveal"
          style={{
            background: 'rgba(26,46,76,0.5)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '2.5rem',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--beige)', marginBottom: '0.75rem' }}>
                {b.success.heading}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                {b.success.body}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                    {f.firstName}
                  </label>
                  <input className="form-input" type="text" placeholder="Nikos" required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                    {f.lastName}
                  </label>
                  <input className="form-input" type="text" placeholder="Papadopoulos" required />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                  {f.email}
                </label>
                <input className="form-input" type="email" placeholder="you@example.com" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                    {f.city}
                  </label>
                  <input className="form-input" type="text" placeholder={f.cityPlaceholder} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                    {f.properties}
                  </label>
                  <select className="form-input">
                    <option value="">{f.selectPlaceholder}</option>
                    {f.propertyOptions.map(opt => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                  {f.challenge} <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>{f.optional}</span>
                </label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder={f.challengePlaceholder}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'var(--teal)', color: 'var(--navy)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800, fontSize: '0.85rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '14px', border: 'none', borderRadius: '8px',
                  cursor: 'pointer', marginTop: '0.5rem',
                  transition: 'background 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'var(--teal2)'; el.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'var(--teal)'; el.style.transform = 'none' }}
              >
                {f.submit}
              </button>

              <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textAlign: 'center', marginTop: '0.75rem', lineHeight: 1.5 }}>
                {f.privacy}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
