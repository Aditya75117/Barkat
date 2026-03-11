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
          <span className="label about-hero-label">Company Story</span>
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
                  className="mission-image-img"
                />
              </div>
              <div className="mission-content">
                <span className="label mission-content-label">Who We Are</span>
                <h2 className="mission-content-title">The Story Behind Barkat.</h2>
                <p className="mission-content-text">
                  Barkat Event Management was born from a simple but powerful conviction — that every celebration deserves to be extraordinary. Founded over a decade ago, we have grown from a boutique wedding studio into one of the region&apos;s most trusted names in luxury event production.
                </p>
                <p className="mission-content-text">
                  We are storytellers, designers, and orchestrators. Our team blends cultural sensitivity with contemporary vision to create events that feel deeply personal and visually breathtaking. From an intimate family gathering to a grand corporate summit, Barkat brings passion to every detail.
                </p>
                <div className="mission-cta-wrap">
                  <a href="/contact" className="btn btn-black btn-visionaries">Meet the Visionaries</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container reveal">
            <div className="values-section-header">
              <span className="label values-section-header-label">Our Mission</span>
              <h2 className="values-section-header-title">Deliver Memorable Experiences</h2>
              <p className="values-section-header-desc">
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
            <div className="team-section-header">
              <span className="label team-section-header-label">Our Team</span>
              <h2 className="team-section-header-title">The People Behind the Magic</h2>
              <p className="team-section-header-desc">
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
            <div className="timeline-section-header">
              <span className="label timeline-section-header-label">By the Numbers</span>
              <h2 className="timeline-section-header-title">Our Achievements</h2>
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
            <h2 className="final-cta-title">Join the Legacy.</h2>
            <p className="final-cta-desc">
              Your story deserves a stage as grand as your vision. Let&apos;s create something timeless together.
            </p>
            <a href="/contact" className="btn btn-gold final-cta-btn">Start Your Journey</a>
          </div>
        </section>
      </main>

      <footer className="footer-minimal">
        <div className="container">
          <div className="nav-logo footer-minimal-logo">BARKAT</div>
          <p className="footer-copy footer-minimal-copy">© 2024 BARKAT EVENT MANAGEMENT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
}
