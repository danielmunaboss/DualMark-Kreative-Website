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
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
          🎊🎁OFFICIALLY LAUNCHING • OCTOBER 15, 2026
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
              <span>Creative &amp; Digital Brand Studio</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline" data-aos="fade-up" data-aos-delay="200">
              Turning Ideas Into Brands That
              <span className="hero-headline-accent"> Make an Impact.</span>
            </h1>

            {/* Subtext */}
            <p className="hero-subtext" data-aos="fade-up" data-aos-delay="350">
              We help businesses, startups, and personal brands build stronger identities and digital presence through strategic branding, creative content, websites, digital marketing, and media production.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group" data-aos="fade-up" data-aos-delay="450">
              <Link to="/Product">
                <button className="hero-btn-primary">
                  View Our Work <FaArrowRight size={13} />
                </button>
              </Link>
              <a
                href="https://wa.me/2347044572371"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hero-btn-secondary">
                  <FaWhatsapp size={16} />
                  Chat with Us on WhatsApp
                </button>
              </a>
            </div>

            {/* Floating Stats */}
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="550">
              <div className="hero-stat-pill">
                <strong>100+</strong>
                <span>Projects Delivered</span>
              </div>
              <div className="hero-stat-divider"></div>

              <div className="hero-stat-pill">
                <strong>30+</strong>
                <span>Clients Served</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-pill">
                <strong>Since 2025</strong>
                <span>Building Brands &amp; Digital Experiences</span>
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
            <span>Our expertise</span>
          </div>
          <h2>Building Brands for the Digital World.</h2>
          <p className="dm-services-subtitle">
            We combine strategy, creativity, technology, and media to help businesses build stronger brands, reach their audiences, and grow their digital presence.
          </p>
        </div>

        <div className="dm-services-grid">
          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="50"
            onClick={() => navigate("/Product?category=branding")}
            style={{ cursor: "pointer" }}
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaGem size={22} />
              </div>
              <span className="dm-service-number">01</span>
            </div>
            <h3>Branding</h3>
            <p>
              Complete brand identities, from logos and visual systems to typography and brand guidelines, designed to make your business recognizable and consistent.
            </p>
            <div className="dm-service-tags">
              <span>Logo Design</span>
              <span>Brand Identity</span>
              <span>Apparel &amp; Merchandise</span>
            </div>
            <Link to="/Product?category=branding" className="dm-service-link" onClick={(e) => e.stopPropagation()}>
              <span>Explore Service</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </Link>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => navigate("/Product?category=design")}
            style={{ cursor: "pointer" }}
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaPalette size={22} />
              </div>
              <span className="dm-service-number">02</span>
            </div>
            <h3>Graphic Design</h3>
            <p>
              Professional visual communication for campaigns, social media, marketing materials, businesses, and organizations.
            </p>
            <div className="dm-service-tags">
              <span>Corporate Design</span>
              <span>Social Media Design</span>
              <span>Ad Creatives</span>
            </div>
            <Link to="/Product?category=design" className="dm-service-link" onClick={(e) => e.stopPropagation()}>
              <span>Explore Service</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </Link>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="150"
            onClick={() => navigate("/Product?category=printing")}
            style={{ cursor: "pointer" }}
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaPrint size={22} />
              </div>
              <span className="dm-service-number">03</span>
            </div>
            <h3>Printing</h3>
            <p>
              Professional print and branded materials that extend your visual identity into the physical world.
            </p>
            <div className="dm-service-tags">
              <span>Business Cards</span>
              <span>Flex Banners</span>
              <span>Branded Materials</span>
            </div>
            <Link to="/Product?category=printing" className="dm-service-link" onClick={(e) => e.stopPropagation()}>
              <span>Explore Service</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </Link>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => navigate("/Product?category=video")}
            style={{ cursor: "pointer" }}
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaVideo size={22} />
              </div>
              <span className="dm-service-number">04</span>
            </div>
            <h3>Video Editing</h3>
            <p>
              Turn raw footage into polished, engaging videos for social media, events, campaigns, and business communication.
            </p>
            <div className="dm-service-tags">
              <span>Reels &amp; Short-Form</span>
              <span>Event Highlights</span>
              <span>Motion Graphics</span>
            </div>
            <Link to="/Product?category=video" className="dm-service-link" onClick={(e) => e.stopPropagation()}>
              <span>Explore Service</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </Link>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="250"
            onClick={() => navigate("/Product?category=web")}
            style={{ cursor: "pointer" }}
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaCode size={22} />
              </div>
              <span className="dm-service-number">05</span>
            </div>
            <h3>Web Development</h3>
            <p>
              Fast, responsive, and conversion-focused websites and web applications built around your business needs.
            </p>
            <div className="dm-service-tags">
              <span>E-commerce Websites</span>
              <span>Web Applications</span>
              <span>Full-Stack Development</span>
            </div>
            <Link to="/Product?category=web" className="dm-service-link" onClick={(e) => e.stopPropagation()}>
              <span>Explore Service</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </Link>
          </article>

          <article
            className="dm-service-card"
            data-aos="fade-up"
            data-aos-delay="300"
            onClick={() => navigate("/Product?category=marketing")}
            style={{ cursor: "pointer" }}
          >
            <div className="dm-service-card-top">
              <div className="dm-service-icon-box">
                <FaBullhorn size={22} />
              </div>
              <span className="dm-service-number">06</span>
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Content strategy, social media management, SEO, and digital advertising designed to increase visibility, engagement, and customer acquisition.
            </p>
            <div className="dm-service-tags">
              <span>Social Media Mgmt</span>
              <span>Digital Advertising</span>
              <span>SEO &amp; Content</span>
            </div>
            <Link to="/Product?category=marketing" className="dm-service-link" onClick={(e) => e.stopPropagation()}>
              <span>Explore Service</span>
              <FaArrowRight className="dm-service-arrow" size={12} />
            </Link>
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
            Every project reflects our approach to strategy, creativity, and execution. Explore selected work across branding, digital experiences, content, and visual communication.
          </p>
        </div>

        <div className="our-portfolio-banner" data-aos="fade-up" data-aos-delay="100">
          <div className="our-portfolio-content">
            <span className="portfolio-tag">CREATIVE SHOWCASE</span>
            <h3>Explore Our Creative &amp; Digital Work</h3>
            <p>
              Explore selected brand identities, websites, video content, and visual communications created to help businesses build credibility and connect with their audiences.
            </p>

            <div className="portfolio-highlights">
              <div className="portfolio-pill">✦ Brand Identity</div>
              <div className="portfolio-pill">✦ Web Design &amp; Development</div>
              <div className="portfolio-pill">✦ Motion Graphics</div>
              <div className="portfolio-pill">✦ Print &amp; Brand Collateral</div>
            </div>

            <Link to="/Product">
              <button className="portfolio1-btn">
                <span>Explore Our Work</span>
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
              <span>ABOUT DUAL MARK KREATIVE</span>
            </div>

            <h2>Creative Strategy. Strong Brands. Digital Growth.</h2>

            <p className="dm-about-home-lead">
              We blend strategy, creativity, and technology to build stronger brands and digital experiences that inspire confidence, connect with audiences, and support business growth.
            </p>

            <div className="dm-about-features-list">
              <div className="dm-about-feature-item">
                <span className="feature-dot">✓</span>
                <span>Strategic Branding &amp; Visual Identity</span>
              </div>
              <div className="dm-about-feature-item">
                <span className="feature-dot">✓</span>
                <span>Web Design &amp; Development</span>
              </div>
              <div className="dm-about-feature-item">
                <span className="feature-dot">✓</span>
                <span>Content, Media &amp; Digital Marketing</span>
              </div>
            </div>

            <Link to="/About">
              <button className="about-home-btn">
                <span>Discover Our Story →</span>
              </button>
            </Link>
          </div>

          <div className="dm-about-home-stats-card" data-aos="fade-left" data-aos-delay="100">
            <div className="dm-about-stat-box">
              <h3>100+</h3>
              <p>Projects Delivered</p>
            </div>

            <div className="dm-stat-divider-h"></div>

            <div className="dm-about-stat-box">
              <h3>30+</h3>
              <p>Clients Served</p>
            </div>

            <div className="dm-stat-divider-h"></div>

            <div className="dm-about-stat-box">
              <h3>Since 2025</h3>
              <p>Building Brands &amp; Digital Experiences</p>
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
              <span>READY TO START?</span>
            </div>

            <h2>Ready to Build a Stronger Brand?</h2>

            <p className="dm-contact-cta-sub">
              Tell us what you're building, and we'll help you turn your ideas into a stronger brand, digital presence, and creative experience.
            </p>

            <div className="dm-contact-quick-pills">
              <a href="mailto:dualmarkkreative@gmail.com" className="dm-quick-pill">
                <FaEnvelope size={14} className="pill-icon" />
                <span>dualmarkkreative@gmail.com</span>
              </a>
              <div className="dm-quick-pill">
                <FaPhoneAlt size={14} className="pill-icon" />
                <span>+234 704 457 2371</span>
              </div>
              <div className="dm-quick-pill">
                <FaMapMarkerAlt size={14} className="pill-icon" />
                <span>Owerri, Imo State, Nigeria</span>
              </div>
            </div>

            <div className="dm-contact-cta-buttons">
              <Link to="/Contact">
                <button className="contact-cta-primary-btn">
                  <span>Start a Project →</span>
                </button>
              </Link>
              <a
                href="https://wa.me/2347044572371"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cta-whatsapp-btn"
              >
                <FaWhatsapp size={16} />
                <span>Chat with Us on WhatsApp</span>
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
