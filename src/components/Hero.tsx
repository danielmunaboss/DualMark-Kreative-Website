import "./Hero.css";
import {
  FaPalette,
  FaLaptopCode,
  FaVideo,
  FaPrint,
  FaArrowRight,
  FaStar,
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import dmklogo from "../assets/images/DMK LOGO DUAL MARK KREATIVE2.png";
import heroimg from "../assets/images/heroimg.png";
import { useState } from "react";
import menuicon from "../assets/images/menu.png";

import heroicons from "../assets/images/heroicons.png";

import trust from "../assets/images/TRUST.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import aboutlogoimg from "../assets/images/aboutlogoimg.png";
import tt from "../assets/images/2ea96109b8c1ec1f795f2a05dce14faf.jpg";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const manutoggole = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="body">
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
                <Link to="./About">ABOUT</Link>
              </li>
              <li>
                <Link to="">PRODUCTS</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT US</Link>
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
                  READY! TO CREATE SOMETHING AMAZING AND TAKE YOUR BRAND TO THE
                  NEXT LEVEL?
                </h3>
                <p>
                  From Concept To Completion, We Provide Creative Services That
                  Help Your Brand Stand Out And Grow.
                </p>
              </div>
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
          <div className="hero-img">
            <img src={heroimg} />
          </div>
        </section>

        <section>
          {/* <!-- header nav section --> */}

          <section className="heroicons">
            <div className="heroicons-img">
              <img src={heroicons} />
            </div>
          </section>

          {/* the body section */}
          <section className="main-body">
            <div className="main-body1">
              <p></p>{" "}
            </div>
            <div className="main-body2">
              <h2 data-aos="fade-up" data-aos-delay="100">
                {" "}
                OUR CREATIVE <br /> SERVICES <div className="underline "></div>
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                We position your brands where intent meets action dual mark
                kreative is ready when you are!. We are always active for you!!
              </p>
            </div>
          </section>
          <div className="main2-body">
            <div className="main2-body2">
              <h3 data-aos="fade-up" data-aos-delay="300">
                WE OFFER YOU
              </h3>
              <p data-aos="fade-up" data-aos-delay="400">
                Everything You Need To Build, Grow, And Elevate Your Brand All
                Under One Roof. We Combine Creativity, Innovation, And Quality
                To Deliver Solutions That Help Your Business Stand Out.
              </p>
            </div>
            <div className="main2-body3">
              <img src={trust} />
            </div>
          </div>
          {/* card-section */}
          <section className="card-col">
            <div className="card-col1" data-aos="fade-up" data-aos-delay="50">
              <FaPalette size={50} className="icon" />
              <h1>GRAPHIC DESIGN</h1>
              <p>
                Professional Branding, Logos, Flyers, Posters, And Social Media
                Designs.
              </p>
              <button className="feature-btn">
                Explore More <FaArrowRight />
              </button>
            </div>
            <div className="card-col1" data-aos="fade-up" data-aos-delay="50">
              <FaPrint size={50} className="icon" />

              <h1>PRINTING SERVICES</h1>
              <p>
                Premium-Quality Flyers, Business Cards, Banners, Brochures,
                Stickers, And More.
              </p>
              <button className="feature-btn">
                Explore More <FaArrowRight />
              </button>
            </div>

            <div className="card-col1" data-aos="fade-up" data-aos-delay="50">
              <FaVideo size={50} className="icon" />

              <h1>VIDEO EDITING</h1>
              <p>
                Creative And Engaging Video Edits For Businesses And Content
                Creators.
              </p>
              <button className="feature-btn">
                Explore More <FaArrowRight />
              </button>
            </div>
            <div className="card-col1" data-aos="fade-up" data-aos-delay="50">
              <FaLaptopCode size={50} className="icon" />
              <h1>WEBSITE DEVELOPMENT</h1>
              <p>
                Responsive, Fast, And Modern Websites Tailored To Your Business.
              </p>
              <button className="feature-btn">
                Explore More <FaArrowRight />
              </button>
            </div>
          </section>
          {/* about-us-section */}
          <section className="about-us">
            <div className="about-us1">
              {" "}
              <h1 data-aos="fade-up" data-aos-delay="50">
                ABOUT US
              </h1>
              <p data-aos="fade-up" data-aos-delay="50">
                Bringing Your Vision To Life
                <div
                  className="about-us-underline"
                  data-aos="fade-up"
                  data-aos-delay="50"
                ></div>
              </p>
              <div className="about-us2" data-aos="fade-up" data-aos-delay="50">
                <p>
                  <small>AT DUAL MARK KREATIVE,</small>
                  <br />
                  We Are Passionate About Helping Businesses And Individuals
                  Create A Powerful And Lasting Impression. We Specialize In
                  Graphic Design, Website Development, Video Editing, Branding,
                  And Premium Printing Services, Delivering Creative Solutions
                  That Combine Innovation, Quality, And Professionalism.
                </p>
                <Link to="/About" style={{ textDecoration: "none" }}>
                  <button className="about-btn">
                    Learn More <FaArrowRight />
                  </button>
                </Link>
              </div>{" "}
            </div>
            <div className="about-us3" data-aos="fade-up" data-aos-delay="50">
              <img src={aboutlogoimg} />
            </div>
          </section>
          {/* our-portfolio */}
          <section className="our-portfolio">
            <div
              className="our-portfolio1"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h1>OUR PORTFOLIO</h1>
              <h5>Our Work Speaks for Itself</h5>
              <p>
                Every project tells a story of creativity, passion, and
                excellence. Explore our portfolio to discover beautifully
                crafted designs, modern websites, engaging videos, and premium
                print materials created for businesses and individuals across
                various industries.
              </p>
              <button className="portfolio1-btn">
                Explore Now <FaArrowRight />
              </button>
            </div>
          </section>
          {/* testimonial */}
          <section className="testimonial">
            <h1 data-aos="fade-up" data-aos-delay="50">
              TESTIMONIALS
            </h1>
            <p data-aos="fade-up" data-aos-delay="50">
              What Our Clients Say <div className="underline "></div>
            </p>
          </section>
          <section className="testimonial-col">
            <div
              className="testimonial-col1"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="testimonial-avatar">
                <img src={tt} />
              </div>
              <h1>MIXLINE Enterpries</h1>
              <p>
                "Our experience with Dual Mark Kreative was exceptional. Their
                professionalism, creativity, and attention to detail exceeded
                our expectations."
              </p>
              <div>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} color="rgb(12, 12, 82)" />
                ))}
              </div>
            </div>
            <div
              className="testimonial-col1"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="testimonial-avatar">
                <img src={tt} />
              </div>
              <h1>AMD_LUXURY</h1>
              <p>
                "From our website to our branding materials, every aspect was
                handled with excellence. Highly recommended!"
              </p>
              <div>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} color="rgb(12, 12, 82)" />
                ))}
              </div>
            </div>
            <div
              className="testimonial-col1"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="testimonial-avatar">
                <img src={tt} />
              </div>
              <h1>IND Connect</h1>
              <p>
                "Fast delivery, outstanding quality, and excellent customer
                services. We'll definitely work with them again."
              </p>
              <div>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} color="rgb(12, 12, 82)" />
                ))}
              </div>
            </div>
          </section>
          {/* calltoaction2 */}
          <section
            className="contact-us"
            data-aos="fade-up"
            data-aos-delay="10"
          >
            <div className="contact1">
              <h1>CONTACT US</h1>
              <h5>LETS TALK ABOUT YOUR NEXT PROJECT</h5>
              <p className="contactp1">
                Have a question or a project in mind? We'd love to hear from
                you. Reach out today, and let's create something amazing
                together
              </p>
              <p className="contactp">
                <FaPhoneAlt size={12} /> PHONE: <small>+234-704-457-2371</small>
              </p>
              <p className="contactp">
                <FaEnvelope size={12} /> EMAIL:{" "}
                <small>abrahamdanielmunachi@gmail.com</small>
              </p>
              <p className="contactp">
                <FaMapMarkedAlt size={12} /> LOCATION:{" "}
                <small>OWERR, IMO STATE</small>
              </p>
              <p className="contactp">
                <FaClock size={12} /> BUSNESS HOURS:{" "}
                <small>Monday-Friday | 8:00AM - 6PM</small>
              </p>
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                {" "}
                <button className="feature-btn">
                  Send A Message <FaArrowRight />
                </button>
              </Link>
            </div>
            <div className="contact2">
              <img src={contactimg} />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Hero;
