import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import dmklogo from "../assets/images/DMK LOGO DUAL MARK KREATIVE2.png";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">

        {/* Column 1 - Brand Info */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo-link">
            <img src={dmklogo} alt="Dualmark Kreative Logo" className="footer-logo-img" />
          </Link>
          <p className="brand-desc">
            We transform creative ideas into powerful visual experiences. Our
            solutions help businesses build strong, memorable brands through
            thoughtful design, premium print, and modern digital development.
          </p>
          <div className="footer-social-row">
            <a
              href="https://www.facebook.com/share/19Ad45EhXF/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://wa.me/2347044572371"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={14} />
            </a>
            <a
              href="https://github.com/danielmunaboss"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <FaGithub size={14} />
            </a>
            <Link to="" className="footer-social-icon" aria-label="Instagram">
              <FaInstagram size={14} />
            </Link>
            <Link to="" className="footer-social-icon" aria-label="Twitter">
              <FaTwitter size={14} />
            </Link>
            <Link to="" className="footer-social-icon" aria-label="LinkedIn">
              <FaLinkedinIn size={14} />
            </Link>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Product">Products</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Details */}
        <div className="footer-col contact-col">
          <h3>Contact Info</h3>
          <ul className="footer-contact-list">
            <li>
              <FaPhoneAlt size={12} className="footer-icon-accent" />
              <a href="tel:+2347044572371">+234 704 457 2371</a>
            </li>
            <li>
              <FaEnvelope size={12} className="footer-icon-accent" />
              <a href="mailto:dmk@gmail.com">dmk@gmail.com</a>
            </li>
            <li>
              <FaMapMarkerAlt size={12} className="footer-icon-accent" />
              <span>Owerri, Imo State, Nigeria</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="copyright-text">
            &copy; 2026 DUAL MARK KREATIVE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
