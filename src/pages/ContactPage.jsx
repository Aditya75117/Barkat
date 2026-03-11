import Nav from '../components/Nav';

export default function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="contact-page">
      <Nav scrolled={true} />
      <header className="contact-hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <span className="label">Get in Touch</span>
          <h1>Begin Your <span className="text-gold">Journey</span></h1>
        </div>
      </header>

      <main className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <section className="form-container">
              <h2>Tell Us About Your Event</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input id="contact-name" type="text" placeholder="e.g. Alexander Pierce" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input id="contact-email" type="email" placeholder="alex@example.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input id="contact-phone" type="tel" placeholder="+971 -- --- ----" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="contact-event-type">Event Type</label>
                    <select id="contact-event-type" required>
                      <option value="" disabled>Select Type</option>
                      <option value="wedding">Wedding Celebration</option>
                      <option value="corporate">Corporate Gala</option>
                      <option value="private">Private Soirée</option>
                      <option value="cultural">Cultural Heritage Event</option>
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="contact-message">Message / Vision</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Briefly describe the ambiance and scale you envision..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-gold contact-page-submit-btn">
                  Submit Inquiry
                </button>
              </form>
            </section>

            <aside className="info-container">
              <div className="info-block">
                <h3>Contact Details</h3>
                <div className="contact-detail">
                  <div className="icon-box">📞</div>
                  <div className="detail-text">
                    <p>Call Us</p>
                    <p>+971 4 555 0123</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="icon-box">✉️</div>
                  <div className="detail-text">
                    <p>Email Us</p>
                    <p>concierge@barkatevents.com</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="icon-box">📍</div>
                  <div className="detail-text">
                    <p>Office Address</p>
                    <p>Suite 402, Building 7<br />Dubai Design District, UAE</p>
                  </div>
                </div>
              </div>
              <div className="gold-divider" />
              <div className="info-block">
                <h3>Our Location</h3>
                <div className="map-block">
                  <div className="map-placeholder" />
                  <div className="map-overlay">
                    <div className="map-marker" />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="contact-page-footer">
        <div className="container">
          <div className="footer-logo">BARKAT</div>
          <p className="contact-page-footer-tagline">Crafting the world&apos;s most exquisite celebrations.</p>
          <div className="footer-copy">© 2024 BARKAT EVENT MANAGEMENT. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
}
