import "./Hero.css";
import {
  FaArrowRight,
  FaBullhorn,
  FaCode,
  FaGem,
  FaPalette,
  FaPrint,
  FaVideo,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import heroicons from "../assets/images/heroicons.png";
import heroimg from "../assets/images/heroimg.png";
import printMachine1 from "../assets/images/print_machine_1.png";
import printMachine2 from "../assets/images/print_machine_2.png";
import code from "../assets/images/heroimagebackground/c5d50bf6f8c087468512a868dc7abb41.jpg"
import dmkBg from "../assets/images/DMK  DUAL MARK KREATIVE.jpg";

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
      <div
        className="container"
        style={{
          "--bg1": `url(${printMachine1})`,
          "--bg2": `url(${printMachine2})`,
          "--bg3": `url(${code})`,
          "--bg4": `url(${dmkBg})`,
        } as React.CSSProperties}
      >
        <div className="launch-date">
          {" "}
          🎊🎁OFFICIALLY LAUNCHING • OCTOBER 15, 2026.
        </div>
        {/* Background slideshow layers */}
        <div className="bg-slide-3"></div>
        <div className="bg-slide-4"></div>
        <div className="bg-overlay"></div>
        {/* <!-- header nav ends here --> */}

        {/* <!-- hero section --> */}
        <section className="hero">
          <div className="hero-content-wrap">
            {/* Badge */}
            <div className="hero-badge" data-aos="fade-down" data-aos-delay="100">
              <span className="hero-badge-dot"></span>
              <span>Creative Brand Hub — Dualmark Kreative</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline" data-aos="fade-up" data-aos-delay="200">
              Turning Ideas Into
              <span className="hero-headline-accent"> Impactful Brand </span>
              Experiences.
            </h1>

            {/* Subtext */}
            <p className="hero-subtext" data-aos="fade-up" data-aos-delay="350">
              We create stunning designs, build modern websites, produce engaging
              videos, and deliver high-quality print solutions tailored to elevate
              your brand.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group" data-aos="fade-up" data-aos-delay="450">
              <Link to="/Product">
                <button className="hero-btn-primary">
                  Explore Portfolio <FaArrowRight size={13} />
                </button>
              </Link>
              <a
                href="https://wa.me/2347044572371"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hero-btn-secondary">
                  <FaWhatsapp size={16} />
                  Chat Us on WhatsApp
                </button>
              </a>
            </div>

            {/* Floating Stats */}
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="550">
              <div className="hero-stat-pill">
                <strong>100+</strong>
                <span>Projects Done</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-pill">
                <strong>30+</strong>
                <span>Happy Clients</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-pill">
                <strong>7+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrap" data-aos="fade-left" data-aos-delay="300">
            <div className="hero-image-glow"></div>
            <img
              src={heroimg}
              alt="Dualmark Kreative Brand Mascot"
              className="hero-mascot-img"
            />
          </div>
        </section>

        {/* <!-- heroicons section --> */}
        <section className="heroicons">
          <div className="heroicons-img">
            <img src={heroicons} />
          </div>
        </section>
      </div>
      {/* <!-- ===================== SERVICES ===================== --> */}
      <section className="dm-services" id="services">
        <div className="dm-services-header" data-aos="fade-up">
          <div className="dm-services-badge">
            <span className="dm-badge-dot"></span>
            <span>OUR EXPERTISE</span>
          </div>
          <h2>Transforming Ideas Into Digital Reality</h2>
          <p className="dm-services-subtitle">
            We deliver comprehensive creative and technological solutions tailored to scale your brand and engage your target audience.
          </p>
        </div>

        <div className="dm-services-grid">
          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaGem size={22} />
              </div>
              <span className="dm-service-number">01</span>
            </div>
            <h3>Branding</h3>
            <p>
              Complete brand identity: logos, color palettes, typography, and
              guidelines that make your business unforgettable.
            </p>
            <div className="dm-service-tags">
              <span>Logo Design</span>
              <span>Visual Identity</span>
              <span>Brand Guide</span>
            </div>
            <div className="dm-service-link">
              <span>Explore Solution</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </div>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaPalette size={22} />
              </div>
              <span className="dm-service-number">02</span>
            </div>
            <h3>Graphics Design</h3>
            <p>
              Eye-catching flyers, social media content, posters, and
              corporate materials designed to grab attention.
            </p>
            <div className="dm-service-tags">
              <span>Flyers & Posters</span>
              <span>Social Media</span>
              <span>Ad Creatives</span>
            </div>
            <div className="dm-service-link">
              <span>Explore Solution</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </div>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaVideo size={22} />
              </div>
              <span className="dm-service-number">03</span>
            </div>
            <h3>Video Editing</h3>
            <p>
              Engaging video edits, motion graphics, and commercial ads that tell your
              brand story and drive engagement.
            </p>
            <div className="dm-service-tags">
              <span>Motion Graphics</span>
              <span>Promo Videos</span>
              <span>Reels & Ads</span>
            </div>
            <div className="dm-service-link">
              <span>Explore Solution</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </div>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaCode size={22} />
              </div>
              <span className="dm-service-number">04</span>
            </div>
            <h3>Website Development</h3>
            <p>
              Fast, responsive, and conversion-focused websites built with
              modern web technologies for your business.
            </p>
            <div className="dm-service-tags">
              <span>Web Applications</span>
              <span>UI/UX Design</span>
              <span>SEO Optimized</span>
            </div>
            <div className="dm-service-link">
              <span>Explore Solution</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </div>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaPrint size={22} />
              </div>
              <span className="dm-service-number">05</span>
            </div>
            <h3>Printing Services</h3>
            <p>
              Premium quality printing for business cards, brochures, banners, branded
              packaging, and event materials.
            </p>
            <div className="dm-service-tags">
              <span>Business Cards</span>
              <span>Large Format</span>
              <span>Packaging</span>
            </div>
            <div className="dm-service-link">
              <span>Explore Solution</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </div>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaBullhorn size={22} />
              </div>
              <span className="dm-service-number">06</span>
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Creative campaigns, content strategies, social media management,
              and growth strategies to boost reach.
            </p>
            <div className="dm-service-tags">
              <span>Social Strategy</span>
              <span>Ad Campaigns</span>
              <span>Growth Hacking</span>
            </div>
            <div className="dm-service-link">
              <span>Explore Solution</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </div>
          </article>
        </div>
      </section>

      {/* <!-- ===================== PORTFOLIO SHOWCASE ===================== --> */}
      <section className="our-portfolio" id="portfolio">
        <div className="our-portfolio-header" data-aos="fade-up">
          <div className="dm-services-badge">
            <span className="dm-badge-dot"></span>
            <span>FEATURED WORK</span>
          </div>
          <h2>Our Creative Portfolio</h2>
          <p className="our-portfolio-subtitle">
            Every project tells a story of creativity, strategy, and technical excellence. Explore how we turn ideas into powerful brand experiences.
          </p>
        </div>

        <div className="our-portfolio-banner" data-aos="fade-up" data-aos-delay="100">
          <div className="our-portfolio-content">
            <span className="portfolio-tag">CREATIVE SHOWCASE</span>
            <h3>Explore Our Design & Engineering Journey</h3>
            <p>
              Discover our beautifully crafted brand identity designs, responsive websites, high-converting video edits, and premium printed collateral built for thriving businesses.
            </p>

            <div className="portfolio-highlights">
              <div className="portfolio-pill">✦ Brand Identity</div>
              <div className="portfolio-pill">✦ Web Applications</div>
              <div className="portfolio-pill">✦ Motion Graphics</div>
              <div className="portfolio-pill">✦ Print Collateral</div>
            </div>

            <Link to="/Product">
              <button className="portfolio1-btn">
                <span>Explore Products & Portfolio</span>
                <FaArrowRight size={13} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- ===================== ABOUT SECTION ===================== --> */}
      <section className="dm-about-home" id="about">
        <div className="dm-about-home-container">
          <div className="dm-about-home-text" data-aos="fade-right">
            <div className="dm-services-badge">
              <span className="dm-badge-dot"></span>
              <span>ABOUT DUALMARK KREATIVE</span>
            </div>

            <h2>Creative Solutions With Timeless Design & Strategy</h2>

            <p className="dm-about-home-lead">
              We blend creativity, strategy, and technology to create memorable brands and digital products that inspire confidence and drive growth.
            </p>

            <div className="dm-about-features-list">
              <div className="dm-about-feature-item">
                <span className="feature-dot">✓</span>
                <span>Strategic Visual Brand Identity</span>
              </div>
              <div className="dm-about-feature-item">
                <span className="feature-dot">✓</span>
                <span>Modern Web & App Development</span>
              </div>
              <div className="dm-about-feature-item">
                <span className="feature-dot">✓</span>
                <span>High-Impact Media & Print Production</span>
              </div>
            </div>

            <Link to="/About">
              <button className="about-home-btn">
                <span>Discover Our Story</span>
                <FaArrowRight size={13} />
              </button>
            </Link>
          </div>

          <div className="dm-about-home-stats-card" data-aos="fade-left" data-aos-delay="100">
            <div className="dm-about-stat-box">
              <h3>100+</h3>
              <p>Successful Projects</p>
            </div>

            <div className="dm-stat-divider-h"></div>

            <div className="dm-about-stat-box">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="dm-stat-divider-h"></div>

            <div className="dm-about-stat-box">
              <h3>7+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===================== CONTACT CTA SECTION ===================== --> */}
      <section className="dm-contact-cta" id="contact">
        <div className="dm-contact-cta-container">
          <div className="dm-contact-cta-content" data-aos="fade-right">
            <div className="dm-services-badge">
              <span className="dm-badge-dot"></span>
              <span>START A PROJECT</span>
            </div>

            <h2>Let's Create Something Remarkable Together.</h2>

            <p className="dm-contact-cta-sub">
              Ready to elevate your brand presence? Get in touch with our team today and let's bring your vision to life.
            </p>

            <div className="dm-contact-quick-pills">
              <div className="dm-quick-pill">
                <FaEnvelope size={14} className="pill-icon" />
                <span>abrahamdanielmunachi@gmail.com</span>
              </div>
              <div className="dm-quick-pill">
                <FaPhoneAlt size={14} className="pill-icon" />
                <span>+234 704 457 2371</span>
              </div>
              <div className="dm-quick-pill">
                <FaMapMarkerAlt size={14} className="pill-icon" />
                <span>Nigeria</span>
              </div>
            </div>

            <div className="dm-contact-cta-buttons">
              <Link to="/Contact">
                <button className="contact-cta-primary-btn">
                  <span>Contact Us Today</span>
                  <FaArrowRight size={13} />
                </button>
              </Link>
              <a
                href="https://wa.me/2347044572371"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cta-whatsapp-btn"
              >
                <FaWhatsapp size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="dm-contact-cta-image-wrap" data-aos="fade-left" data-aos-delay="100">
            <img src={contactimg} alt="Contact Us" className="dm-contact-cta-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
