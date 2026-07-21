import ScrollReveal from './ScrollReveal'

const STEPS = [
  {
    n: '01',
    title: 'Start with a conversation',
    desc: 'Then a scoped proposal with a fixed price and a defined deliverable. No discovery phase sold to justify the next discovery phase.',
  },
  {
    n: '02',
    title: 'I’ve carried the number',
    desc: 'Not just advised on it. Every engagement is scoped so there is something to own — a decision, a launch, a plan with my name on it.',
  },
  {
    n: '03',
    title: 'Embedded, not remote',
    desc: 'On site where it helps, direct with the people doing the work. The output is a decision you can act on, not a deck describing your own business back to you.',
  },
  {
    n: '04',
    title: 'Independent',
    desc: 'No reseller relationships, no supplier commissions, no referral fees. When I recommend a platform, nothing turns on which one you choose.',
  },
  {
    n: '05',
    title: 'Across Europe',
    desc: 'Dutch, English and French, with working Spanish, German and Greek. Useful when market entry means dealing with a regulator in their own language.',
  },
]

export default function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="wrap">
        <ScrollReveal>
          <div className="head">
            <span className="eyebrow">Approach</span>
            <h2>How the work actually runs</h2>
          </div>
          <div className="grid">
            {STEPS.map((s) => (
              <article className="app" key={s.n}>
                <span className="badge">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
