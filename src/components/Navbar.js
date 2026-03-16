import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/components/Navbar.css';
import logoImg from '../assets/logo.png'; // Import the logo

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Programs',
    path: '/programs',
    dropdown: [
      { label: 'Education & Literacy', path: '/programs/education' },
      { label: 'Agri-Hub', path: '/programs/agri-hub' },
      { label: 'Health (M-IMCI)', path: '/programs/health' },
    ],
  },
  { label: 'Impact', path: '/impact' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* Logo with image */}
        <Link to="/" className="navbar__logo">
          <img src={logoImg} alt="Tujiinue CBO" className="navbar__logo-img" />
          <span className="navbar__logo-text">Tuji<span>inue</span></span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="navbar__item navbar__item--dropdown"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <span className="navbar__link">
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                {programsOpen && (
                  <ul className="navbar__dropdown">
                    {link.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <NavLink to={sub.path} className="navbar__dropdown-link">
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label} className="navbar__item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="navbar__cta">
          Partner With Us
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    className="navbar__mobile-link navbar__mobile-dropdown-toggle"
                    onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{
                        transform: mobileProgramsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.3s'
                      }}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {mobileProgramsOpen && (
                    <div className="navbar__mobile-submenu">
                      {link.dropdown.map((sub) => (
                        <NavLink
                          key={sub.label}
                          to={sub.path}
                          className="navbar__mobile-link navbar__mobile-link--sub"
                          onClick={() => { setMenuOpen(false); setMobileProgramsOpen(false); }}
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className="navbar__mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="navbar__cta navbar__cta--mobile"
            onClick={() => setMenuOpen(false)}
          >
            Partner With Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;