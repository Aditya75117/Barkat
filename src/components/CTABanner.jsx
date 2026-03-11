export default function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="container cta-banner-content reveal">
        <span className="label" style={{ color: 'var(--clr-gold-light)', display: 'block', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>Ready to Begin?</span>
        <h2>
          Let&apos;s Plan Your<br />
          <span className="text-gold">Dream Event</span>
        </h2>
        <p>Tell us your vision and we&apos;ll handle everything else. Limited bookings available — secure your date today.</p>
        <a href="#contact" className="btn btn-gold" style={{ fontSize: '1.05rem', padding: '1.1rem 3rem' }}>Get a Quote</a>
      </div>
    </div>
  );
}
