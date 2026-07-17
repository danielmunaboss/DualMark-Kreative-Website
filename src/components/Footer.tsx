import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import footerlogo from "../assets/images/footerlogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer1">
          <Link to="/">
            <div>
              <img src={footerlogo} />
            </div>
          </Link>
          <div>
            <h5>
              +234-704-457-2371 <p>dmk@gmail.com</p>
            </h5>
          </div>
        </div>
        <div className="footer2">
          <div className="footer3">
            <h2>DUAL MARK KREATIVE</h2>
            <p>
              We transform creative ideas into powerful visual experiences. Our
              solutions help businesses build strong, memorable brands. Through
              creativity and innovation, we help your business stand out and
              grow.
            </p>
          </div>
          <div className="footer4">
            <h2>QUIK LINK</h2>
            <ul className="footer-ul">
              <li>
                <Link to="/" className="footer-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/About">ABOUT</Link>
              </li>
              <li>
                <Link to="">PRODUCTS</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="footer5">
            <h2>CONTACT</h2>
            <p className="footerp">
              <FaPhoneAlt size={10} />
              <small>+234-704-457-2371</small>
            </p>
            <p className="footerp">
              <FaEnvelope size={10} /> <small>dmk@gmail.com</small>
            </p>
            <p className="footerp">
              <FaMapMarkedAlt size={10} /> <small>OWERR, IMO STATE</small>
            </p>
            <div className="footer-icons">
              {" "}
              <Link to="">
                <FaFacebookF size={15} className="footer-icons1" />
              </Link>
              <Link to="">
                <FaLinkedinIn size={15} className="footer-icons1" />
              </Link>
              <Link to="">
                <FaTwitter size={15} className="footer-icons1" />
              </Link>
              <Link to="">
                <FaInstagram size={15} className="footer-icons1" />
              </Link>
              <Link to="">
                <FaWhatsapp size={15} className="footer-icons1" />
              </Link>
              <Link to="">
                <FaGithub size={15} className="footer-icons1" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />

        <small className="footer-copyright">
          &copy; 2026 DUAL MARK KREATIVE. All Rights Reserved
        </small>
      </footer>
    </div>
  );
};

export default Footer;
