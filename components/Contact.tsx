import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <ScrollReveal>
        <div className="inner">
          <h2>If something here is relevant, write.</h2>
          <p>
            A short description of the situation is enough to start. I&apos;ll tell you honestly
            whether it&apos;s something I can help with.
          </p>
          <a href="mailto:info@kerdomax.com" className="mail">
            info@kerdomax.com
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
