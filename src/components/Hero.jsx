export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero-video-bg" />
      <div className="hero-content reveal active">
        <span className="label hero-label">Premier Event Management</span>
        <h1 className="hero-title">
          Creating<br />
          <span className="text-gold">Unforgettable Events</span>
        </h1>
        <p className="hero-subtitle">
          From grand weddings to corporate galas — Barkat Event Management turns your vision into a breathtaking, flawlessly executed experience.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-gold">Plan Your Event</a>
          <a href="#portfolio" className="btn btn-black">View Gallery</a>
        </div>
      </div>
    </header>
  );
}
