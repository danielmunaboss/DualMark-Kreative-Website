import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
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
          <div>
            <p
              className="dm-eyebrow dm-eyebrow-dark"
              style={{ color: "#707070" }}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              ABOUT DUALMARK KREATIVE
            </p>

            <h1 data-aos="fade-up" data-aos-delay="50">
              Building <em>Brands</em> That Inspire, Connect & Grow.
            </h1>

            <p
              className="dm-about-hero-copy"
              data-aos="fade-up"
              data-aos-delay="50"
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
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <span></span>
          </div>
        </section>

        {/* ===========================
          OUR STORY
      ============================ */}

        <section className="dm-story">
          <div className="dm-story-text">
            <p
              className="dm-eyebrow dm-eyebrow-dark"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              OUR STORY
            </p>

            <h2 data-aos="fade-up" data-aos-delay="50">
              Creativity with Purpose, Excellence in Every Detail.
            </h2>

            <p data-aos="fade-up" data-aos-delay="50">
              DUALMARK KREATIVE was founded with one clear vision—to help
              businesses communicate their value through purposeful design and
              innovative digital experiences. We believe every successful brand
              begins with a compelling story, and our mission is to transform
              that story into visuals and experiences that people remember.
            </p>

            <p data-aos="fade-up" data-aos-delay="50">
              Over the years, we have grown into a multidisciplinary creative
              studio providing graphic design, professional branding, website
              development, video editing, and premium printing solutions. Every
              project is approached with creativity, precision, and a commitment
              to delivering work that exceeds expectations.
            </p>

            <p data-aos="fade-up" data-aos-delay="50">
              Whether we're designing a memorable brand identity, building a
              responsive website, creating engaging marketing materials, or
              producing impactful visual content, our focus remains the same:
              helping businesses grow through thoughtful design and lasting
              impressions.
            </p>

            <p data-aos="fade-up" data-aos-delay="50">
              We value long-term relationships built on trust, transparency, and
              quality. Every client becomes a creative partner, and every
              project is an opportunity to create something remarkable that
              delivers measurable value.
            </p>
          </div>

          <div className="dm-story-visual">
            <div
              className="dm-img-slot1 dm-img-slot--layer-back"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <span></span>
            </div>

            <div
              className="dm-img-slot2 dm-img-slot--layer-front"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <span></span>
            </div>
          </div>
        </section>
      </section>

      {/* ===========================
          WHAT WE BELIEVE
      ============================ */}

      <section className="dm-pillars">
        <div className="dm-section-head">
          <p
            className="dm-eyebrow dm-eyebrow-dark"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            WHAT WE BELIEVE
          </p>

          <h2 data-aos="fade-up" data-aos-delay="50">
            The Principles That Shape Every Project
          </h2>

          <p className="dm-section-sub" data-aos="fade-up" data-aos-delay="50">
            Every successful project is built on a strong foundation. These
            values guide our creativity, strengthen our partnerships, and
            inspire us to deliver meaningful results for every client we serve.
          </p>
        </div>

        <div className="dm-pillars-grid">
          <article className="dm-pillar-card">
            <span
              className="dm-pillar-index"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              01
            </span>

            <h3 data-aos="fade-up" data-aos-delay="50">
              Craft
            </h3>

            <p data-aos="fade-up" data-aos-delay="50">
              We believe exceptional design comes from careful planning,
              attention to detail, and a commitment to excellence. Every
              website, brand identity, graphic, print project, and video is
              thoughtfully crafted to reflect quality and professionalism.
            </p>
          </article>

          <article className="dm-pillar-card">
            <span
              className="dm-pillar-index"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              02
            </span>

            <h3 data-aos="fade-up" data-aos-delay="50">
              Partnership
            </h3>

            <p data-aos="fade-up" data-aos-delay="50">
              Great work begins with collaboration. We listen carefully,
              communicate openly, and work closely with every client to create
              solutions that truly represent their vision and business goals.
            </p>
          </article>

          <article className="dm-pillar-card">
            <span
              className="dm-pillar-index"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              03
            </span>

            <h3 data-aos="fade-up" data-aos-delay="50">
              Curiosity
            </h3>

            <p data-aos="fade-up" data-aos-delay="50">
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
        <div className="dm-section-head">
          <p
            className="dm-eyebrow dm-eyebrow-light"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            HOW WE WORK
          </p>

          <h2 style={{ color: "black" }} data-aos="fade-up" data-aos-delay="50">
            A Creative Process Built Around Your Success
          </h2>

          <p
            className="dm-section-sub dm-section-sub-light"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Every project follows a clear and collaborative process—from
            understanding your vision to delivering polished creative solutions
            that help your business grow with confidence.
          </p>
        </div>

        <div className="dm-approach-visual">
          <div
            className="dm-img-slot dm-img-slot--approach-a"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <span></span>
          </div>

          <div
            className="dm-img-slot dm-img-slot--approach-b"
            data-aos="fade-up"
            data-aos-delay="50"
          >
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
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <span></span>
        </div>

        <div className="dm-closing-text">
          <p
            className="dm-eyebrow dm-eyebrow-light"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            LET'S BUILD SOMETHING REMARKABLE
          </p>

          <h2 data-aos="fade-up" data-aos-delay="50">
            Your Vision Deserves a<em> Creative Partner</em>
          </h2>

          <p data-aos="fade-up" data-aos-delay="50">
            Whether you're launching a new business, refreshing your brand,
            building a professional website, producing engaging video content,
            or creating high-quality print materials, DUALMARK KREATIVE is ready
            to help you transform your ideas into meaningful experiences that
            inspire, connect, and grow your business.
          </p>

          <Link
            to="/Contact"
            className="dm-btn dm-btn-primary"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
