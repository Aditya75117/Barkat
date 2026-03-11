const portfolioItems = [
  { img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Wedding', title: 'Grand Wedding — 2024' },
  { img: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Corporate', title: 'Corporate Gala — 2024' },
  { img: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Dinner', title: 'Luxury Dinner — 2023' },
  { img: 'https://images.pexels.com/photos/1792671/pexels-photo-1792671.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Reception', title: 'Wedding Reception — 2023' },
  { img: 'https://images.pexels.com/photos/5451610/pexels-photo-5451610.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Floral', title: 'Floral Showcase — 2023' },
  { img: 'https://images.pexels.com/photos/1058273/pexels-photo-1058273.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Private', title: 'Private Celebration — 2023' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container reveal">
        <div className="gallery-header">
          <div>
            <span className="label section-label">Our Work</span>
            <h2>Featured Events &<br />Portfolio</h2>
          </div>
          <a href="#gallery" className="btn btn-black">View All Events</a>
        </div>
        <div className="portfolio-masonry">
          {portfolioItems.map((item, i) => (
            <div key={i} className="masonry-item">
              <img src={item.img} alt={item.alt} />
              <div className="item-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
