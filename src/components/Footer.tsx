import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>XS - Canteen Pre-ordering</h3>
          <p>Streamlining college lunch breaks through efficient pre-ordering.</p>
          <div className="oss-badge">
            <a href="https://github.com/Project-xS" target="_blank" rel="noopener noreferrer" className="badge">Open Source Project</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/refund">Refund & Cancellation</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Project XS. Built with ❤️ for students.</p>
      </div>
    </footer>
  );
};

export default Footer;
