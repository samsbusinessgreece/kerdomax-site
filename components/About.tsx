import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <ScrollReveal>
          <h2>Sam Depoortere</h2>
          <div className="cols">
            <div className="portrait" style={{ overflow: 'hidden', padding: 0 }}>
              <Image
                src="/images/sam-depoortere.png"
                alt="Portrait of Sam Depoortere, founder of Kerdomax"
                width={260}
                height={320}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
              />
            </div>
            <div className="col">
              <h3>OpenBet</h3>
              <p>
                Chief Product Officer since 2023 — the first senior product hire brought in to
                professionalise the function. Built a sixty-person organisation covering sportsbook,
                trading, platform, casino, responsible gaming and geo-location, with product, AI and
                UX reporting in.
              </p>
              <p>
                Client launches and renewals across OPAP, Veikkaus, WSB and Singapore Pools, with
                Tabcorp and Loterie Romande launching in 2026. Built the geo-location product from
                scratch with AWS and launched it with Fanatics.
              </p>
              <p>
                When the CTO left in 2025, he ran day-to-day technology across the full
                four-hundred-person organisation — ten offices, six time zones — for six months
                until a successor was in place.
              </p>
            </div>
            <div className="col">
              <h3>The operator side</h3>
              <p>
                Six years running TOTO Sportsbook &amp; Casino at Nederlandse Loterij as a full
                commercial P&amp;L, with a €50M budget and forty people across brand, customer and
                product. Built the online casino from nothing for the Dutch market opening and took
                it to market leadership within twelve months. Double-digit sportsbook growth for
                five consecutive years. Two Effie Golds.
              </p>
              <p>
                <strong>Before:</strong> Betway&apos;s Belgian market, run from London. In 2014,
                co-founded Media Odds in Gibraltar — pricing markets on politics, television and
                entertainment, a decade before prediction markets found their name.
              </p>
              <p>
                <strong>Background:</strong> MSc Economics, Ghent University. Executive education at
                London Business School. Belgian, based in Athens, working across Europe in Dutch,
                English and French.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
