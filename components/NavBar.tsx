'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="bar">
        <a href="#top" className="brand">
          KERDOMAX
        </a>
        <nav aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="bar-cta">
          Start a conversation
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="overlay"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </header>

      <div
        className={`overlay${open ? ' open' : ''}`}
        id="overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <button className="close" onClick={() => setOpen(false)}>
          Close
        </button>
        <nav aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
