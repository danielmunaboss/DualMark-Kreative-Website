import "./Header.css";

import { Link, useLocation } from "react-router-dom";

import dmklogo from "../assets/images/DMK LOGO DUAL MARK KREATIVE2.png";

import { useState } from "react";
import menuicon from "../assets/images/menu.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const manutoggole = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className="navlogo">
        <div>
          <img src={dmklogo} />
        </div>
        <nav>
          <ul
            className="navul"
            style={{ maxHeight: menuOpen ? "200px" : "0px" }}
          >
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="homeline"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link to="./About" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="" onClick={() => setMenuOpen(false)}>
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navb">
          <Link to="">
            {" "}
            <button className="navbtn">Log in</button>
          </Link>
          <Link to="">
            {" "}
            <button className="navbtn2">Sign up</button>
          </Link>

          <img src={menuicon} className="menu-icon" onClick={manutoggole} />
        </div>
      </div>
    </div>
  );
};

export default Header;
