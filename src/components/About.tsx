import "./About.css";
import { Link } from "react-router-dom";
import { FaFeatherAlt, FaHandshake, FaLightbulb, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="dm-page">
      {/* ===========================
          ABOUT HERO
      ============================ */}
      <section className="all">
        <div className="launch-date">
          {" "}
          🎊🎁OFFICIALLY LAUNCHING • OCTOBER 15, 2026
        </div>
        <section className="dm-about-hero">
          <div className="dm-about-hero-content">
            <div className="dm-about-badge" data-aos="fade-down" data-aos-delay="50">
              <span className="dm-badge-dot"></span>
              <span>ABOUT DUALMARK KREATIVE</span>
            </div>

            <h1 data-aos="fade-up" data-aos-delay="100">
              Building <span className="about-accent">Brands</span> That Inspire, Connect & Grow.
            </h1>

            <p
              className="dm-about-hero-copy"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              At DUALMARK KREATIVE, creativity is more than design—it's the
              foundation of every meaningful brand experience. We combine
              strategy, innovation, and craftsmanship to help businesses
              communicate with confidence through exceptional graphic design,
              website development, branding, premium printing, and engaging
              video production.
            </p>
          </div>

          <div
            className="dm-img-slot dm-img-slot--hero"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span></span>
          </div>
        </section>

        {/* ===========================
          OUR STORY
      ============================ */}

        <section className="dm-story">
          <div className="dm-story-text" data-aos="fade-right" data-aos-delay="100">
            <div className="dm-about-badge">
              <span className="dm-badge-dot"></span>
              <span>OUR STORY</span>
            </div>

            <h2>Creativity with Purpose, Excellence in Every Detail.</h2>

            <p>
              DUALMARK KREATIVE was founded with one clear vision—to help
              businesses communicate their value through purposeful design and
              innovative digital experiences. We believe every successful brand
              begins with a compelling story, and our mission is to transform
              that story into visuals and experiences that people remember.
            </p>

            <p>
              Over the years, we have grown into a multidisciplinary creative
              studio providing graphic design, professional branding, website
              development, video editing, and premium printing solutions. Every
              project is approached with creativity, precision, and a commitment
              to delivering work that exceeds expectations.
            </p>

            <p>
              Whether we're designing a memorable brand identity, building a
              responsive website, creating engaging marketing materials, or
              producing impactful visual content, our focus remains the same:
              helping businesses grow through thoughtful design and lasting
              impressions.
            </p>

            <p>
              We value long-term relationships built on trust, transparency, and
              quality. Every client becomes a creative partner, and every
              project is an opportunity to create something remarkable that
              delivers measurable value.
            </p>
          </div>

          <div className="dm-story-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="dm-img-slot1 dm-img-slot--layer-back">
              <span></span>
            </div>

            <div className="dm-img-slot2 dm-img-slot--layer-front">
              <span></span>
            </div>
          </div>
        </section>
      </section>

      {/* ===========================
          WHAT WE BELIEVE
      ============================ */}

      <section className="dm-pillars">
        <div className="dm-section-head" data-aos="fade-up">
          <div className="dm-about-badge dm-about-badge--centered">
            <span className="dm-badge-dot"></span>
            <span>WHAT WE BELIEVE</span>
          </div>

          <h2>The Principles That Shape Every Project</h2>

          <p className="dm-section-sub">
            Every successful project is built on a strong foundation. These
            values guide our creativity, strengthen our partnerships, and
            inspire us to deliver meaningful results for every client we serve.
          </p>
        </div>

        <div className="dm-pillars-grid">
          <article className="dm-pillar-card" data-aos="fade-up" data-aos-delay="50">
            <div className="dm-pillar-card-header">
              <div className="dm-pillar-icon-wrapper">
                <FaFeatherAlt size={20} />
              </div>
              <span className="dm-pillar-index">01</span>
            </div>

            <h3>Craft</h3>

            <p>
              We believe exceptional design comes from careful planning,
              attention to detail, and a commitment to excellence. Every
              website, brand identity, graphic, print project, and video is
              thoughtfully crafted to reflect quality and professionalism.
            </p>
          </article>

          <article className="dm-pillar-card" data-aos="fade-up" data-aos-delay="150">
            <div className="dm-pillar-card-header">
              <div className="dm-pillar-icon-wrapper">
                <FaHandshake size={20} />
              </div>
              <span className="dm-pillar-index">02</span>
            </div>

            <h3>Partnership</h3>

            <p>
              Great work begins with collaboration. We listen carefully,
              communicate openly, and work closely with every client to create
              solutions that truly represent their vision and business goals.
            </p>
          </article>

          <article className="dm-pillar-card" data-aos="fade-up" data-aos-delay="250">
            <div className="dm-pillar-card-header">
              <div className="dm-pillar-icon-wrapper">
                <FaLightbulb size={20} />
              </div>
              <span className="dm-pillar-index">03</span>
            </div>

            <h3>Curiosity</h3>

            <p>
              Creativity never stands still. We continually explore fresh ideas,
              modern technologies, and innovative design approaches to ensure
              every project remains unique, impactful, and future-ready.
            </p>
          </article>
        </div>
      </section>

      {/* ===========================
          HOW WE WORK
      ============================ */}

      <section className="dm-approach">
        <div className="dm-section-head" data-aos="fade-up">
          <div className="dm-about-badge dm-about-badge--centered">
            <span className="dm-badge-dot"></span>
            <span>HOW WE WORK</span>
          </div>

          <h2>A Creative Process Built Around Your Success</h2>

          <p className="dm-section-sub dm-section-sub-light">
            Every project follows a clear and collaborative process—from
            understanding your vision to delivering polished creative solutions
            that help your business grow with confidence.
          </p>
        </div>

        <div className="dm-approach-visual" data-aos="zoom-in" data-aos-delay="100">
          <div className="dm-img-slot dm-img-slot--approach-a">
            <span></span>
          </div>

          <div className="dm-img-slot dm-img-slot--approach-b">
            <span></span>
          </div>
        </div>
      </section>

      {/* ===========================
          CLOSING
      ============================ */}

      <section className="dm-closing">
        <div
          className="dm-img-slot dm-img-slot--closing"
          data-aos="fade-in"
          data-aos-delay="50"
        >
          <span></span>
        </div>

        <div className="dm-closing-text" data-aos="fade-up" data-aos-delay="100">
          <div className="dm-about-badge dm-about-badge--centered">
            <span className="dm-badge-dot"></span>
            <span>LET'S BUILD SOMETHING REMARKABLE</span>
          </div>

          <h2>
            Your Vision Deserves a <span className="about-accent-gold">Creative Partner</span>
          </h2>

          <p>
            Whether you're launching a new business, refreshing your brand,
            building a professional website, producing engaging video content,
            or creating high-quality print materials, DUALMARK KREATIVE is ready
            to help you transform your ideas into meaningful experiences that
            inspire, connect, and grow your business.
          </p>

          <Link to="/Contact" className="dm-btn dm-btn-primary">
            Start Your Project <FaArrowRight size={13} style={{ marginLeft: "8px" }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
