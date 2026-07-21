import ScrollReveal from './ScrollReveal'

const SERVICES = [
  {
    n: '01',
    title: 'Commercial & Growth',
    who: 'Operators · Suppliers',
    desc: 'For operators entering new markets, and suppliers rethinking how they sell. The work sits close to the P&L — what the revenue model should be, what it’s worth, and what has to change to get there.',
    list: 'Market entry & licensing / Pricing & commercial model / Partnership negotiation / Portfolio strategy & monetisation',
  },
  {
    n: '02',
    title: 'Product, AI & Organisation',
    who: 'Operators · Suppliers',
    desc: 'For businesses whose product organisation isn’t delivering, or who need to tell real AI opportunity from theatre. AI here is a commercial lever: what it does to margin and throughput, not what it demonstrates.',
    list: 'Roadmap & metrics / Organisational design / Platform selection & build-vs-buy / AI from pilot to production / Interim product leadership',
  },
  {
    n: '03',
    title: 'Commercial & Product Diligence',
    who: 'Private Equity · Acquirers',
    desc: 'Commercial diligence and technical diligence usually come from two firms that never talk to each other. The interesting questions sit in between: whether the growth case survives contact with the platform meant to deliver it.',
    list: 'Commercial model validation / Platform & product assessment / Organisation capability / AI claims tested against reality / Post-deal value creation',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <ScrollReveal>
          <div className="grid">
            {SERVICES.map((s) => (
              <article className="svc" key={s.n}>
                <span className="badge">{s.n}</span>
                <h3>{s.title}</h3>
                <span className="who">{s.who}</span>
                <p>{s.desc}</p>
                <p className="list">{s.list}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
