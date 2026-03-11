const testimonials = [
  {
    stars: '★★★★★',
    quote: '"Barkat made our wedding absolutely magical! Every detail was perfect — from the floral arrangements to the lighting. Our guests are still talking about it."',
    initial: 'S',
    name: 'Sarah & Khalid',
    event: 'Wedding — Dubai',
  },
  {
    stars: '★★★★★',
    quote: '"Our corporate gala was a massive success. Barkat\'s team was professional, creative, and handled every challenge with ease. Highly recommended!"',
    initial: 'R',
    name: 'Raza Enterprises',
    event: 'Corporate Gala — 2024',
  },
  {
    stars: '★★★★★',
    quote: '"My daughter\'s engagement was beyond our dreams. The decor, the ambiance, the coordination — everything was flawless. Thank you Barkat!"',
    initial: 'F',
    name: 'Fatima Al-Hassan',
    event: 'Engagement Ceremony',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container reveal">
        <div className="testimonials-header">
          <span className="label testimonials-header-label">Client Love</span>
          <h2 className="testimonials-header-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">{t.stars}</div>
              <p className="testimonial-card-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initial}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-event">{t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
