'use client'

import { useState } from 'react'

type Card = { name: string; tag: string; val: string }

const CARDS: Card[] = [
  { name: 'OpenBet', tag: 'Supplier', val: 'Chief Product Officer' },
  { name: 'TOTO', tag: 'Operator', val: '€180M → €1.2B' },
  { name: 'Betway', tag: 'Operator', val: 'Belgium, from London' },
  { name: 'Ned. Loterij', tag: 'Operator', val: 'Casino #1 in 12 months' },
  { name: 'Media Odds', tag: 'Founder', val: 'Co-founded 2014' },
]

function FlipCard({ card, ariaHidden }: { card: Card; ariaHidden?: boolean }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="flip">
      <div
        className={`inner${flipped ? ' is-flipped' : ''}`}
        tabIndex={ariaHidden ? -1 : 0}
        role={ariaHidden ? undefined : 'button'}
        aria-hidden={ariaHidden}
        aria-label={ariaHidden ? undefined : `${card.name} — ${card.val}`}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setFlipped((f) => !f)
          }
        }}
      >
        <div className="face front">
          <span className="wm">{card.name}</span>
          <span className="tag">{card.tag}</span>
        </div>
        <div className="face back">
          <span className="co">{card.name}</span>
          <span className="val">{card.val}</span>
        </div>
      </div>
    </div>
  )
}

export default function TrackRecord() {
  return (
    <section className="cardband" aria-label="Track record">
      <div className="lbl">
        <span>Over a decade at the table — hover or tap a card</span>
      </div>
      <div className="cardrow">
        {CARDS.map((c) => (
          <FlipCard key={c.name} card={c} />
        ))}
        {/* duplicate set for seamless marquee loop */}
        {CARDS.map((c) => (
          <FlipCard key={`dup-${c.name}`} card={c} ariaHidden />
        ))}
      </div>
    </section>
  )
}
