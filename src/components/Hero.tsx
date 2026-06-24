import "./Hero.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import dmklogo from "../assets/images/DMK LOGO DUAL MARK KREATIVE2.png";
import heroimg from "../assets/images/heroimg.png";
import heroicons from "../assets/images/heroicons.png";
import menuicon from "../assets/images/menu.png";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const manutoggole = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="body">
        {/* <!-- header nav section --> */}

        <div className="container">
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
                  <Link to="" className="homeline">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="">ABOUT</Link>
                </li>
                <li>
                  <Link to="">PRODUCTS</Link>
                </li>
                <li>
                  <Link to="">CONTACT US</Link>
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

          {/* <!-- header nav ends here --> */}

          {/* <!-- hero section --> */}
          <section className="hero">
            <div className="hero1">
              <div>
                <h1>TURNING IDEAS INTO IMPACTFUL BRAND EXPERIENCES</h1>
                <p>
                  We Create Stunning Designs, Build Modern Websites, Produce
                  Engaging Videos, And Deliver High-Quality Print Solutions.
                </p>
              </div>
              {/* <!-- call to action --> */}
              <div className="call-to-action">
                <div className="call-to">
                  <h3>
                    READY! TO CREATE SOMETHING AMAZING AND TAKE YOUR BRAND TO
                    THE NEXT LEVEL?
                  </h3>
                  <p>
                    From Concept To Completion, We Provide Creative Services
                    That Help Your Brand Stand Out And Grow.
                  </p>
                </div>
                <div className="cbtn">
                  <Link to="">
                    {" "}
                    <button className="callbtn">Explore Our Portfolio</button>
                  </Link>
                  <Link to="">
                    {" "}
                    <button className="callbtn2">Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-img">
              <img src={heroimg} />
            </div>
          </section>
          <section className="heroicons">
            <div className="heroicons-img">
              <img src={heroicons} />
            </div>
          </section>
        </div>
        {/* <!-- js toggolemenu --> */}
      </header>
    </div>
  );
};

export default Hero;
