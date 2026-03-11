const reasons = [
  { icon: '💡', title: 'Creative Event Concepts', desc: 'We bring fresh, original ideas to every event — transforming ordinary spaces into extraordinary experiences that leave guests speechless.' },
  { icon: '👥', title: 'Professional Team', desc: 'Our experienced planners, coordinators, and designers work seamlessly together to deliver perfection at every stage of your event.' },
  { icon: '✏️', title: 'Custom Event Planning', desc: 'No two events are alike. We tailor every element — theme, decor, timeline, and entertainment — specifically around your vision and needs.' },
  { icon: '🤝', title: 'Premium Vendor Network', desc: 'Benefit from our trusted network of top-tier vendors — florists, caterers, photographers, and entertainers — to elevate every detail.' },
  { icon: '✅', title: 'Stress-Free Execution', desc: 'We handle everything so you don\'t have to. On the day of your event, simply arrive and enjoy — we\'ve got every detail covered.' },
  { icon: '⭐', title: 'Proven Track Record', desc: 'With 500+ successful events and a 98% client satisfaction rate, our reputation speaks for itself — excellence is our standard.' },
];

export default function WhyChoose() {
  return (
    <div className="why-section">
      <div className="container reveal">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <span className="label" style={{ color: 'var(--clr-purple-light)', display: 'block', marginBottom: '1rem' }}>Why Us</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--clr-black)' }}>Why Choose Barkat?</h2>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="why-card">
              <div className="why-icon">{r.icon}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
