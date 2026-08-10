import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import dmklogo from "../assets/images/DMK LOGO DUAL MARK KREATIVE2.png";
import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaTimes, FaBars } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/About" },
    { label: "PRODUCTS", to: "/Product" },
    { label: "CONTACT", to: "/Contact" },
  ];

  return (
    <header className="nav-header">
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo-link" onClick={() => setMenuOpen(false)}>
          <img src={dmklogo} alt="Dualmark Kreative Logo" className="nav-logo-img" />
        </Link>

        {/* Desktop + Mobile Nav */}
        <nav className={`nav-menu ${menuOpen ? "nav-menu--open" : ""}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.to} className="nav-item">
                <Link
                  to={link.to}
                  className={`nav-link ${pathname === link.to ? "nav-link--active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile-only CTA row inside the menu */}
          <div className="nav-mobile-cta">
            <a
              href="https://wa.me/2347044572371"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-pill nav-cta-pill--ghost"
              onClick={() => setMenuOpen(false)}
            >
              <FaWhatsapp size={14} /> WhatsApp
            </a>
            <Link
              to="/Contact"
              className="nav-cta-pill nav-cta-pill--solid"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Desktop Action Buttons + Hamburger */}
        <div className="nav-actions">
          <a
            href="https://wa.me/2347044572371"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn nav-btn--ghost"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={15} />
          </a>
          <Link to="" className="nav-btn nav-btn--solid" aria-label="Instagram">
            <FaInstagram size={15} />
          </Link>

          <button
            className={`nav-hamburger ${menuOpen ? "nav-hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
