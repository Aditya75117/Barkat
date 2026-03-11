import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    function handleScroll() {
      setNavScrolled(window.scrollY > 50);
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav scrolled={navScrolled} />
      <Hero />
      <main>
        <section className="main-card">
          <AboutPreview />
        </section>
        <Services />
        <Portfolio />
        <WhyChoose />
        <Testimonials />
        <CTABanner />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
