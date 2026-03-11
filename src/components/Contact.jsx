export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container reveal">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="label section-label">Inquire</span>
            <h2>Begin the Conversation.</h2>
            <p style={{ color: 'var(--clr-gray)', fontSize: '1.1rem', maxWidth: '400px' }}>
              We accept a limited number of commissions annually to ensure our uncompromising standards are met for every client.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="label">Boutique & Atelier</span>
                <span>Dubai Design District, UAE</span>
              </div>
              <div className="contact-item">
                <span className="label">Direct Inquiry</span>
                <span>concierge@barkat.com</span>
              </div>
              <div className="contact-item">
                <span className="label">Follow Our Journey</span>
                <span>@barkat.official</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <input type="text" id="event-type" required />
                <label htmlFor="event-type">Event Type & Expected Date</label>
              </div>
              <div className="form-group" style={{ marginBottom: '3rem' }}>
                <textarea id="message" rows={3} required />
                <label htmlFor="message">Details of your vision</label>
              </div>
              <button type="submit" className="btn btn-black" style={{ width: '100%', fontSize: '1rem', padding: '1.2rem' }}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
