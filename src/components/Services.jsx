const services = [
  { icon: '💍', title: 'Wedding Planning', desc: 'Full-service wedding management from venue selection to day-of coordination, ensuring your special day is flawless and unforgettable.' },
  { icon: '🏢', title: 'Corporate Events', desc: 'Professional conferences, product launches, team-building events, and galas designed to impress clients and inspire teams.' },
  { icon: '🎂', title: 'Birthday Parties', desc: 'Milestone birthdays and themed celebrations crafted with premium decor, entertainment, and personalized touches for all ages.' },
  { icon: '💎', title: 'Engagements', desc: 'Romantic and memorable engagement ceremonies with bespoke setups, floral arrangements, and surprise elements tailored to your love story.' },
  { icon: '🌙', title: 'Cultural Events', desc: 'Culturally authentic celebrations that honor traditions with elegance — from Mehndi nights to Walimas and heritage festivals.' },
  { icon: '🥂', title: 'Private Parties', desc: 'Exclusive private gatherings crafted with curated themes, premium catering, and seamless entertainment for your most discerning guests.' },
];

export default function Services() {
  return (
    <section id="services" className="services-wrapper">
      <div className="container reveal">
        <div className="services-header">
          <span className="label text-gold services-header-label">What We Do</span>
          <h2 className="services-header-title">Our Services</h2>
          <p className="services-header-desc">
            From intimate gatherings to grand celebrations — we make every moment extraordinary.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-content">
                <span className="service-icon">{s.icon}</span>
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
