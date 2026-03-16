import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const programs = [
  { label: 'Education & Literacy', path: '/programs/education' },
  { label: 'Agri-Hub', path: '/programs/agri-hub' },
  { label: 'Health (M-IMCI)', path: '/programs/health' },
];

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Team', path: '/team' },
  { label: 'Impact', path: '/impact' },
  { label: 'Contact', path: '/contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Tuji<span>inue</span>
          </Link>
          <p className="footer__tagline">
            Empowering Communities,<br />Transforming Lives.
          </p>
          <p className="footer__mission">
            A premier agent of change in Uasin Gishu County — blending grassroots trust with cutting-edge AI innovation.
          </p>
        </div>

        {/* Programs */}
        <div className="footer__col">
          <h4 className="footer__col-title">Programs</h4>
          <ul className="footer__col-links">
            {programs.map((p) => (
              <li key={p.label}>
                <Link to={p.path} className="footer__link">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__col-links">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="footer__link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Get In Touch</h4>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__contact-icon">📍</span>
              Komora Center, Eldoret, Uasin Gishu
            </li>
            <li>
              <span className="footer__contact-icon">✉️</span>
              info@tujiinuecbo.or.ke
            </li>
          </ul>
          <Link to="/contact" className="footer__cta">Partner With Us</Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Tujiinue CBO. All rights reserved.
          </p>
          <p className="footer__credit">
            Built with <span className="accent">♥</span> for the community
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;