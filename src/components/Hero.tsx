import "./Hero.css";
import {
  FaArrowRight,
  FaBullhorn,
  FaCode,
  FaGem,
  FaPalette,
  FaPrint,
  FaVideo,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import heroicons from "../assets/images/heroicons.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import contactimg from "../assets/images/contactus.png";

const Hero = () => {
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

  return (
    <div className="body">
      <div className="container">
        <div className="launch-date">
          {" "}
          🎊🎁OFFICIALLY LAUNCHING • OCTOBER 15, 2026.
        </div>
        {/* <!-- header nav ends here --> */}

        {/* <!-- hero section --> */}
        <section className="hero">
          <div className="hero1">
            <span>Creative Brand Hub.</span>
            <div>
              <h1>TURNING IDEAS INTO IMPACTFUL BRAND EXPERIENCES.</h1>
              <p>
                We Create Stunning Designs, Build Modern Websites, Produce
                Engaging Videos, And Deliver High-Quality Print Solutions..
              </p>
            </div>
            {/* <!-- call to action --> */}
            <div className="call-to-action">
              <div className="cbtn">
                <Link to="">
                  {" "}
                  <button className="callbtn">Explore Our Portfolio</button>
                </Link>
                <Link to="/Contact">
                  {" "}
                  <button className="callbtn2">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
          {/*   */}
        </section>

        {/* <!-- header nav section --> */}

        <section className="heroicons">
          <div className="heroicons-img">
            <img src={heroicons} />
          </div>
        </section>
      </div>
      {/* <!-- ===================== SERVICES ===================== --> */}
      <section className="dm-services" id="services">
        <div className="dm-container">
          <p className="dm-eyebrow-dark" data-aos="fade-up" data-aos-delay="50">
            Services
          </p>

          <h2 data-aos="fade-up" data-aos-delay="50">
            What We Do
          </h2>

          <div className="dm-service-grid">
            <article
              className="dm-service-card"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <FaGem size={20} />
              <h3>Branding</h3>
              <p>
                Complete brand identity: logos, color palettes, typography, and
                guidelines that make your business unforgettable.
              </p>
            </article>

            <article
              className="dm-service-card"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <FaPalette size={20} />
              <h3>Graphics Design</h3>
              <p>
                Eye-catching flyers, social media content, posters, and
                corporate materials designed to grab attention.
              </p>
            </article>

            <article
              className="dm-service-card"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <FaVideo size={20} />
              <h3>Video Editing</h3>
              <p>
                Engaging video edits, motion graphics, and ads that tell your
                brand story and drive engagement.
              </p>
            </article>

            <article
              className="dm-service-card"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <FaCode size={20} />
              <h3>Website Development</h3>
              <p>
                Fast, responsive, and conversion-focused websites built with
                modern technologies for your business.
              </p>
            </article>

            <article
              className="dm-service-card"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <FaPrint size={20} />
              <h3>Printing</h3>
              <p>
                Quality printing for business cards, brochures, banners, branded
                packaging and event materials.
              </p>
            </article>

            <article
              className="dm-service-card"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <FaBullhorn size={20} />
              <h3>Digital Marketing</h3>
              <p>
                Creative campaigns, content strategies social media branding,
                and growth strategies that put you in front of the right
                audience.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* our-portfolio */}
      <section className="our-portfolio">
        <div className="our-portfolio1" data-aos="fade-up" data-aos-delay="50">
          <h1>OUR PORTFOLIO</h1>
          <h5>Explore Our Creative Journey</h5>
          <p>
            Every project tells a story of creativity, passion, and excellence.
            Explore our portfolio to discover beautifully crafted designs,
            modern websites, engaging videos, and premium print materials
            created for businesses and individuals across various industries.
          </p>
          <button
            className="portfolio1-btn"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Explore Now <FaArrowRight />
          </button>
        </div>
      </section>
      {/* <!-- ===================== ABOUT ===================== --> */}
      <section className="dm-about" id="about">
        <div className="dm-container-dm-about-wrapper">
          <div className="dm-about-content">
            <p
              className="dm-eyebrow-dm-eyebrow-dark"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              About Us
            </p>

            <h2 data-aos="fade-up" data-aos-delay="50">
              Creative solutions with timeless design.
            </h2>

            <p data-aos="fade-up" data-aos-delay="50">
              We blend creativity, strategy, and technology to create memorable
              brands and digital products that inspire confidence and leave
              lasting impressions.
            </p>
          </div>

          <div className="dm-about-stats">
            <div className="dm-stat" data-aos="fade-up" data-aos-delay="50">
              <h3>100+</h3>
              <p>Projects</p>
            </div>

            <div className="dm-stat" data-aos="fade-up" data-aos-delay="70">
              <h3>30+</h3>
              <p>Clients</p>
            </div>

            <div className="dm-stat" data-aos="fade-up" data-aos-delay="90">
              <h3>7+</h3>
              <p>Years Experience</p>
            </div>
          </div>
          <Link to="/About">
            {" "}
            <button className="aboutbtn" data-aos="fade-up" data-aos-delay="50">
              Read More{" "}
            </button>
          </Link>
        </div>
      </section>

      {/* <!-- ===================== CONTACT ===================== --> */}
      <section className="dm-contact" id="contact">
        <div className="dm-container-dm-contact-wrapper">
          {/* <!-- Contact Info --> */}
          <div className="dm-contact-info">
            <p className="dm-eyebrow" data-aos="fade-up" data-aos-delay="50">
              Contact
            </p>

            <h2 data-aos="fade-up" data-aos-delay="50">
              Let's create something remarkable.
            </h2>

            <p data-aos="fade-up" data-aos-delay="50">
              Email: abrahamdanielmunachi@gmail.com
            </p>
            <p data-aos="fade-up" data-aos-delay="50">
              Phone: +234 704 457 2371
            </p>
            <p data-aos="fade-up" data-aos-delay="50">
              Location: Nigeria
            </p>
          </div>

          <Link to="/Contact">
            {" "}
            <button
              className="contactbtn"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Contact Us{" "}
            </button>
          </Link>
        </div>
        <div className="contactimg">
          <img src={contactimg} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
