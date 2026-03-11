export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">BARKAT</div>
        <p style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.6)', maxWidth: '400px', margin: '0 auto' }}>
          Creating unforgettable events that celebrate life&apos;s most precious moments. Your vision, our expertise.
        </p>
        <div className="footer-social">
          <a href="#"><span className="label">Instagram</span></a>
          <a href="#"><span className="label">Pinterest</span></a>
          <a href="#"><span className="label">Journal</span></a>
        </div>
        <div className="footer-copy">© 2024 BARKAT EVENT MANAGEMENT. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
}
