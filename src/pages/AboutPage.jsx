import { useEffect } from 'react';
import Nav from '../components/Nav';

const values = [
  { icon: '✨', title: 'Creative Vision', desc: 'We transform ideas into breathtaking realities, blending artistic flair with meticulous planning.' },
  { icon: '🎯', title: 'Precision Execution', desc: 'Every timeline, vendor, and detail is managed with military-grade precision so you never worry.' },
  { icon: '💛', title: 'Heartfelt Service', desc: 'We listen deeply, act with empathy, and ensure your personality and culture shine through.' },
  { icon: '🌍', title: 'Cultural Excellence', desc: 'Rooted in tradition, we honour cultural nuances to make every event feel authentically yours.' },
];

const team = [
  { img: 'https://images.pexels.com/photos/3775116/pexels-photo-3775116.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Founder', name: 'Amara Barkat', role: 'Founder & Principal Designer' },
  { img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'COO', name: 'Zaid Al-Fayez', role: 'Director of Operations' },
  { img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Creative Lead', name: 'Layla Noor', role: 'Lead Creative Coordinator' },
];

const stats = [
  { number: '200+', label: 'Total Events', desc: 'Flawlessly executed events across the region since our founding.' },
  { number: '50+', label: 'Dream Weddings', desc: 'Bespoke wedding experiences crafted with love, culture, and precision.' },
  { number: '10+', label: 'Corporate Clients', desc: 'Trusted by leading brands for high-stakes summits and corporate galas.' },
];

export default function AboutPage() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <Nav scrolled={true} />
      <header className="about-hero">
        <div className="container reveal active">
          <span className="label" style={{ color: 'var(--clr-gold-light)', marginBottom: '1.5rem', display: 'block' }}>Company Story</span>
          <h1 className="about-hero-title">
            Who is<br />
            <span className="text-gold">Barkat?</span>
          </h1>
        </div>
      </header>

      <main>
        <section id="mission" className="mission-section">
          <div className="container reveal">
            <div className="mission-grid">
              <div className="mission-image">
                <img
                  src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Planning Session"
                  style={{ width: '100%', borderRadius: 'var(--radius-large)' }}
                />
              </div>
              <div className="mission-content">
                <span className="label" style={{ color: 'var(--clr-purple-light)', marginBottom: '1rem', display: 'block' }}>Who We Are</span>
                <h2>The Story Behind Barkat.</h2>
                <p>
                  Barkat Event Management was born from a simple but powerful conviction — that every celebration deserves to be extraordinary. Founded over a decade ago, we have grown from a boutique wedding studio into one of the region&apos;s most trusted names in luxury event production.
                </p>
                <p>
                  We are storytellers, designers, and orchestrators. Our team blends cultural sensitivity with contemporary vision to create events that feel deeply personal and visually breathtaking. From an intimate family gathering to a grand corporate summit, Barkat brings passion to every detail.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <a href="/contact" className="btn btn-black" style={{ background: 'var(--clr-deep)', color: 'white' }}>Meet the Visionaries</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container reveal">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
              <span className="label" style={{ color: 'var(--clr-purple-light)', marginBottom: '1rem', display: 'block' }}>Our Mission</span>
              <h2 style={{ fontSize: '3rem' }}>Deliver Memorable Experiences</h2>
              <p style={{ color: 'var(--clr-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
                Our mission is to deliver memorable experiences through creativity and precision — where every detail is intentional, every moment is curated, and every event becomes a cherished memory.
              </p>
            </div>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card">
                  <span className="value-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container reveal">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
              <span className="label" style={{ color: 'var(--clr-purple-light)', marginBottom: '1rem', display: 'block' }}>Our Team</span>
              <h2 style={{ fontSize: '3rem' }}>The People Behind the Magic</h2>
              <p style={{ color: 'var(--clr-gray)', fontSize: '1.05rem', lineHeight: '1.8', marginTop: '1rem' }}>
                Our diverse team of event specialists, designers, and coordinators share one common trait — an obsession with making your event perfect.
              </p>
            </div>
            <div className="team-grid">
              {team.map((member, i) => (
                <div key={i} className="team-member">
                  <div className="member-img">
                    <img src={member.img} alt={member.alt} />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <div className="container reveal">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <span className="label" style={{ color: 'var(--clr-gold-light)', marginBottom: '1rem', display: 'block' }}>By the Numbers</span>
              <h2 style={{ fontSize: '3rem', color: 'white' }}>Our Achievements</h2>
            </div>
            <div className="about-stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="about-stat-card">
                  <div className="about-stat-number">{s.number}</div>
                  <div className="about-stat-label">{s.label}</div>
                  <p className="about-stat-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container reveal">
            <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Join the Legacy.</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem' }}>
              Your story deserves a stage as grand as your vision. Let&apos;s create something timeless together.
            </p>
            <a href="/contact" className="btn btn-gold" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>Start Your Journey</a>
          </div>
        </section>
      </main>

      <footer className="footer-minimal">
        <div className="container">
          <div className="nav-logo" style={{ marginBottom: '1rem', color: 'var(--clr-gold-mid)' }}>BARKAT</div>
          <p className="footer-copy" style={{ opacity: 0.5, fontSize: '0.8rem', letterSpacing: '0.1em' }}>© 2024 BARKAT EVENT MANAGEMENT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
}
