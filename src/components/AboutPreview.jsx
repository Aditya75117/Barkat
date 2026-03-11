export default function AboutPreview() {
  return (
    <div id="about" className="container about-preview reveal">
      <div className="about-preview-grid">
        <div className="about-preview-img">
          <img
            src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Elegant event"
          />
          <div className="img-badge">
            <span className="badge-num">500+</span>
            <span className="badge-lbl">Events Delivered</span>
          </div>
        </div>
        <div className="about-text">
          <span className="label section-label">About Barkat</span>
          <h2>Extraordinary Experiences, Flawlessly Executed.</h2>
          <p>
            Barkat Event Management specializes in creating extraordinary experiences for weddings, corporate events, birthdays, and celebrations. With over a decade of excellence, we transform your vision into moments that last a lifetime.
          </p>
          <p>
            Our passionate team of planners, designers, and coordinators manages every detail—from concept to execution—so you can simply enjoy the occasion.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h4>500+</h4>
              <span className="label">Events Completed</span>
            </div>
            <div className="stat-item">
              <h4>12+</h4>
              <span className="label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <h4>98%</h4>
              <span className="label">Happy Clients</span>
            </div>
          </div>
          <a href="#about-full" className="btn btn-black" style={{ marginTop: '2.5rem' }}>Learn More</a>
        </div>
      </div>
    </div>
  );
}
