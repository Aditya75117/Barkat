const galleryItems = [
  { src: 'https://images.pexels.com/photos/1792671/pexels-photo-1792671.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Grand wedding reception hall', large: true },
  { src: 'https://images.pexels.com/photos/5451610/pexels-photo-5451610.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Elegant floral arrangement' },
  { src: 'https://images.pexels.com/photos/1058273/pexels-photo-1058273.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Luxury modest fashion display', tall: true },
  { src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Detailed table setting with gold accents' },
  { src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Event atmospheric lighting' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container reveal">
        <div className="gallery-header">
          <div>
            <span className="label section-label">Selected Works</span>
            <h2>A Legacy of<br />Visual Poetry</h2>
          </div>
          <a href="#" className="btn btn-black">View Full Archive</a>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`gallery-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
