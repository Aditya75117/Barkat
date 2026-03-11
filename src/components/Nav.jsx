import { Link, useLocation } from 'react-router-dom';

export default function Nav({ scrolled }) {
  const location = useLocation();
  const isAbout = location.pathname === '/about';
  const isServices = location.pathname === '/services';
  const isPortfolio = location.pathname === '/portfolio';
  const isContact = location.pathname === '/contact';

  return (
    <nav id="navbar" className={scrolled || isAbout || isServices || isPortfolio || isContact ? 'nav-scrolled' : ''}>
      <Link to="/" className="nav-logo">BARKAT</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about" className={isAbout ? 'nav-link-active' : ''}>The Agency</Link>
        <Link to="/services" className={isServices ? 'nav-link-active' : ''}>Expertise</Link>
        <Link to="/portfolio" className={isPortfolio ? 'nav-link-active' : ''}>Portfolio</Link>
        <Link to="/contact" className={isContact ? 'nav-link-active' : ''}>Inquire</Link>
      </div>
      <Link to="/contact" className="btn btn-gold" style={{ padding: '0.6rem 1.5rem' }}>Book Consultation</Link>
    </nav>
  );
}
