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

const socials = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter / X', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

function Footer() {
  return (
    <footer className="footer">

      {/* ── TOP BAND ── */}
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__top-left">
            <p className="footer__top-label">Based in Eldoret, Kenya</p>
            <h3 className="footer__top-title">
              Ready to uplift your community?
            </h3>
          </div>
          <Link to="/contact" className="footer__top-cta">
            Partner With Us
          </Link>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="container footer__main">

        {/* Brand col */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Tuji<span>inue</span>
          </Link>
          <p className="footer__tagline">
            Empowering Communities,<br />Transforming Lives.
          </p>
          <p className="footer__mission">
            A premier agent of change in Uasin Gishu County — blending
            grassroots trust with cutting-edge AI innovation since 2014.
          </p>

          {/* Social links */}
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="footer__col">
          <h4 className="footer__col-title">Programs</h4>
          <ul className="footer__col-links">
            {programs.map((p) => (
              <li key={p.label}>
                <Link to={p.path} className="footer__link">
                  <span className="footer__link-arrow">›</span>
                  {p.label}
                </Link>
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
                <Link to={l.path} className="footer__link">
                  <span className="footer__link-arrow">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Contact + Map */}
        <div className="footer__col footer__col--contact">
          <h4 className="footer__col-title">Find Us</h4>

          <div className="footer__contact-list">
            <div className="footer__contact-item">
              <div className="footer__contact-icon footer__contact-icon--location" />
              <div>
                <span className="footer__contact-label">Address</span>
                <span className="footer__contact-value">
                  Komora Center, Eldoret<br />Uasin Gishu County, Kenya
                </span>
              </div>
            </div>

            <div className="footer__contact-item">
              <div className="footer__contact-icon footer__contact-icon--email" />
              <div>
                <span className="footer__contact-label">Email</span>
                <a
                  href="mailto:info@tujiinue-cbo.org"
                  className="footer__contact-value footer__contact-link"
                >
                  info@tujiinue-cbo.org
                </a>
              </div>
            </div>

            <div className="footer__contact-item">
              <div className="footer__contact-icon footer__contact-icon--phone" />
              <div>
                <span className="footer__contact-label">Phone</span>
                <a
                  href="tel:+254700000000"
                  className="footer__contact-value footer__contact-link"
                >
                  +254 722 760 630
                </a>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="footer__map">
            <iframe
  title="Tujiinue CBO Location - Komora Center Eldoret"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.314377768251!2d35.26984566403632!3d0.5144847493665715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnNTIuMSJOIDM1wrAxNicxNS4wIkU!5e0!3m2!1sen!2ske!4v1234567890!5m2!1sen!2ske"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>

      </div>

      {/* ── PARTNERS STRIP ── */}
      <div className="footer__partners">
        <div className="container footer__partners-inner">
          <span className="footer__partners-label">Trusted Partners</span>

          <div className="footer__partners-list">
            {['USAID', 'RTI International', 'EDC', 'KEMRI', 'MoE Kenya', 'Uasin Gishu County'].map((p) => (
              <span key={p} className="footer__partner-tag">{p}</span>
            ))}
            
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Tujiinue Community-Based Organisation.
            All rights reserved.
          </p>
          <div className="footer__bottom-links">
            {/* <span className="footer__bottom-link">Privacy Policy</span>
            <span className="footer__bottom-divider">·</span>
            <span className="footer__bottom-link">Terms of Use</span> */}
            <span className="footer__bottom-divider">·</span>
            <span className="footer__bottom-link">CBO Registration No. 0020097</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;