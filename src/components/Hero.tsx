import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
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
        {/* <!-- header nav ends here --> */}

        {/* <!-- hero section --> */}
        <section className="hero">
          <div className="hero1">
            <span>CREATIVE BRAND HUB.</span>
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
          <p className="dm-eyebrow-dark">SERVICES</p>

          <h2>What We Do</h2>

          <div className="dm-service-grid">
            <article className="dm-service-card">
              <h3>Brand Identity</h3>
              <p>
                Strategic logos, visual identity systems, typography, color
                palettes, and branding guidelines.
              </p>
            </article>

            <article className="dm-service-card">
              <h3>Web Design & Development</h3>
              <p>
                Responsive websites built with modern technologies, optimized
                for performance and conversions.
              </p>
            </article>

            <article className="dm-service-card">
              <h3>UI / UX Design</h3>
              <p>
                Intuitive user interfaces and thoughtful digital experiences
                that delight users.
              </p>
            </article>

            <article className="dm-service-card">
              <h3>Digital Marketing</h3>
              <p>
                Creative campaigns, social media branding, and marketing
                strategies that drive growth.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* our-portfolio */}
      <section className="our-portfolio">
        <div className="our-portfolio1" data-aos="fade-up" data-aos-delay="50">
          <h1>OUR PORTFOLIO</h1>
          <h5>Our Work Speaks for Itself</h5>
          <p>
            Every project tells a story of creativity, passion, and excellence.
            Explore our portfolio to discover beautifully crafted designs,
            modern websites, engaging videos, and premium print materials
            created for businesses and individuals across various industries.
          </p>
          <button className="portfolio1-btn">
            Explore Now <FaArrowRight />
          </button>
        </div>
      </section>
      {/* <!-- ===================== ABOUT ===================== --> */}
      <section className="dm-about" id="about">
        <div className="dm-container-dm-about-wrapper">
          <div className="dm-about-content">
            <p className="dm-eyebrow-dm-eyebrow-dark">About Us</p>

            <h2>Creative solutions with timeless design.</h2>

            <p>
              We blend creativity, strategy, and technology to create memorable
              brands and digital products that inspire confidence and leave
              lasting impressions.
            </p>
          </div>

          <div className="dm-about-stats">
            <div className="dm-stat">
              <h3>50+</h3>
              <p>Projects</p>
            </div>

            <div className="dm-stat">
              <h3>30+</h3>
              <p>Clients</p>
            </div>

            <div className="dm-stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===================== CONTACT ===================== --> */}
      <section className="dm-contact" id="contact">
        <div className="dm-container-dm-contact-wrapper">
          {/* <!-- Contact Info --> */}
          <div className="dm-contact-info">
            <p className="dm-eyebrow">Contact</p>

            <h2>Let's create something remarkable.</h2>

            <p>Email: abrahamdanielmunachi@gmail.com</p>
            <p>Phone: +234 704 457 2371</p>
            <p>Location: Nigeria</p>
          </div>

          {/* <!-- Contact Form --> */}
          <form className="dm-contact-form">
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="text" placeholder="Subject" required />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button type="submit" className="dm-btn-dm-btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="contactimg">
          <img src={contactimg} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
