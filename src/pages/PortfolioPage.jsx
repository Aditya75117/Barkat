import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const FILTERS = [
  { id: 'all', label: 'All Events' },
  { id: 'Wedding', label: 'Weddings' },
  { id: 'Corporate', label: 'Corporate' },
  { id: 'Engagement', label: 'Engagements' },
  { id: 'Cultural', label: 'Cultural' },
];

const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Wedding', img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Al-Zahra Wedding', title: 'Al-Zahra Grand Wedding', date: 'May 2024 • Dubai Opera' },
  { id: 2, category: 'Corporate', img: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tech Summit', title: 'Vision 2030 Tech Summit', date: 'March 2024 • Ritz Carlton' },
  { id: 3, category: 'Engagement', img: 'https://images.pexels.com/photos/5451610/pexels-photo-5451610.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Engagement', title: 'Laila & Omar Engagement', date: 'February 2024 • Private Estate' },
  { id: 4, category: 'Cultural', img: 'https://images.pexels.com/photos/1058273/pexels-photo-1058273.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Heritage Fest', title: 'Al-Ula Heritage Nights', date: 'January 2024 • Heritage Site' },
  { id: 5, category: 'Wedding', img: 'https://images.pexels.com/photos/1792671/pexels-photo-1792671.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Royal Wedding', title: 'Royal Palace Reception', date: 'December 2023 • Abu Dhabi' },
  { id: 6, category: 'Corporate', img: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Luxury Dinner', title: 'Global Finance Gala', date: 'November 2023 • Burj Al Arab' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="portfolio-page">
      <Nav scrolled={true} />
      <header className="portfolio-page-header">
        <div className="container">
          <span className="label text-gold portfolio-page-header-label">Our Archive</span>
          <h1 className="portfolio-page-header-title">The Portfolio</h1>
          <p className="portfolio-page-header-desc">
            Explore our gallery of masterfully crafted events, where every detail tells a unique story of elegance and celebration.
          </p>
        </div>
      </header>

      <main className="container">
        <div className="filter-nav">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="card-img">
                <img src={item.img} alt={item.alt} />
                <div className="card-overlay">
                  <span className="card-category">{item.category}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-date">{item.date}</p>
                  <a href="/contact" className="btn-view">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
