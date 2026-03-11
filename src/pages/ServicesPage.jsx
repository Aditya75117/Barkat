import { useEffect } from 'react';
import Nav from '../components/Nav';

const serviceStacks = [
  {
    heroImg: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Luxury Wedding',
    label: 'Union of Hearts',
    labelGold: true,
    title: 'Wedding Planning',
    description: "We don't just plan weddings; we craft legacies of love. Our management spans from conceptual design to flawless day-of execution.",
    cta: 'Plan Your Wedding',
    ctaHref: '/contact',
    tiers: [
      {
        name: 'The Essentials',
        items: ['On-site Wedding Day Director', 'Vendor Management (60 Days)', 'Detailed Timeline Creation'],
      },
      {
        name: 'The Signature',
        items: ['End-to-end Concept Design', 'Budget & Vendor Negotiation', 'Concierge Guest Services'],
      },
    ],
  },
  {
    heroImg: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Corporate Gala',
    label: 'Brand Experience',
    labelGold: false,
    title: 'Corporate Events',
    description: 'Elevate your brand with strategically designed environments that align business objectives with breathtaking aesthetics.',
    cta: 'Request Proposal',
    ctaHref: '/contact',
    tiers: [
      {
        name: 'Professional',
        items: ['AV & Tech Management', 'Branded Stage Design', 'Catering Management'],
      },
      {
        name: 'Gala Tier',
        items: ['Immersive Tech Experiences', 'International Artist Booking', 'VIP Logistics & Security'],
      },
    ],
  },
  {
    heroImg: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Private Party',
    label: 'Milestone Moments',
    labelGold: true,
    title: 'Private Events',
    description: 'From avant-garde birthday themes to intimate soirées, we handle the unconventional and whimsical with equal finesse.',
    cta: 'Book Celebration',
    ctaHref: '/contact',
    tiers: [
      {
        name: 'Intimate',
        items: ['Floral Art Installations', 'Curated Chef Table', 'Atmospheric Lighting'],
      },
      {
        name: 'The Odyssey',
        items: ['360 Venue Transformation', 'Themed Performers', 'Interactive Culinary Labs'],
      },
    ],
  },
];

export default function ServicesPage() {
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
    <div className="services-page">
      <Nav scrolled={true} />
      <header className="services-page-header">
        <div className="header-content">
          <span className="label">Our Expertise</span>
          <h1>Curated <span className="text-gold">Service Tiers</span></h1>
          <p className="services-page-header-desc">
            From boutique celebrations to global corporate gatherings, we provide scalable solutions tailored to the most discerning visions.
          </p>
        </div>
      </header>

      {serviceStacks.map((stack, index) => (
        <section key={index} className="service-stack-section">
          <div className="service-stack-hero">
            <img src={stack.heroImg} alt={stack.heroAlt} />
          </div>
          <div className="service-stack-card-container reveal">
            <div className="service-stack-card">
              <div className="service-stack-meta">
                <span className={`label ${stack.labelGold ? 'text-gold' : 'label-purple'}`}>
                  {stack.label}
                </span>
                <h2>{stack.title}</h2>
                <p className="description">{stack.description}</p>
                <a href={stack.ctaHref} className="btn-gold">{stack.cta}</a>
              </div>
              <div className="service-stack-details">
                <div className="tier-grid">
                  {stack.tiers.map((tier, i) => (
                    <div key={i} className="tier-item">
                      <h4>{tier.name}</h4>
                      <ul className="tier-list">
                        {tier.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <footer className="footer-services">
        <div className="container">
          <span className="nav-logo footer-services-logo">BARKAT</span>
          <p className="footer-copy">© 2024 BARKAT EVENT MANAGEMENT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
