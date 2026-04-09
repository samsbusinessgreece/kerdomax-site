'use client'

import { useEffect, useState } from 'react'
import LogoIcon from './LogoIcon'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5vw',
        height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(15,26,46,0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
      >
        <LogoIcon size={34} />
        <span
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '0.04em',
          }}
        >
          <span style={{ color: 'var(--beige)' }}>KERDO</span>
          <span style={{ color: 'var(--teal)' }}>MAX</span>
        </span>
      </a>

      {/* Nav links — hidden on mobile */}
      <ul
        style={{
          display: 'flex', gap: '2rem', listStyle: 'none',
          margin: 0, padding: 0,
        }}
        className="nav-links-desktop"
      >
        {[
          { label: 'Features', id: 'features' },
          { label: 'How It Works', id: 'how-it-works' },
          { label: 'Pricing', id: 'pricing' },
          { label: 'Results', id: 'trust' },
        ].map(({ label, id }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--muted)', fontSize: '0.875rem', fontWeight: 500,
                letterSpacing: '0.02em', fontFamily: 'DM Sans, sans-serif',
                transition: 'color 0.2s', padding: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#beta"
        onClick={e => { e.preventDefault(); scrollTo('beta') }}
        style={{
          background: 'var(--teal)', color: 'var(--navy)',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700, fontSize: '0.8rem',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '10px 22px',
          border: 'none', borderRadius: '6px',
          cursor: 'pointer', textDecoration: 'none',
          display: 'inline-block',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--teal2)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--teal)')}
      >
        Get Early Access
      </a>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
