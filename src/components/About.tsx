import "./About.css";

import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
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
    <div>
      <div className="aboutuspage">
        <div className="aboutus">
          <h1 data-aos="fade-out" data-aos-delay="800">
            About Us
          </h1>
          <p data-aos="fade-out" data-aos-delay="1300">
            Bringing Your Vision To Life
          </p>
        </div>
      </div>
      <section className="aboutus1">
        <div
          className="aboutus1img"
          data-aos="fade-up"
          data-aos-delay="50"
        ></div>
        <div className="aboutus2" data-aos="fade-up" data-aos-delay="200">
          <h4>Transforming Ideas Into Exceptional Brand Experiences</h4>
          <p>
            At Dual Mark Kreative,
            <br /> We believe every successful brand begins with a powerful
            idea. Our passion is turning those ideas into creative solutions
            that inspire, engage, and leave a lasting impression. As a
            full-service creative agency, we specialize in graphic design,
            website development, branding, video editing, and premium printing
            services, helping businesses of every size establish a strong and
            memorable presence both online and offline. With creativity,
            innovation, and attention to detail at the heart of everything we
            do, we craft solutions that not only look exceptional but also
            deliver meaningful results. Whether you're launching a new business,
            building your brand identity, promoting your products, or expanding
            your digital presence, our team is dedicated to bringing your vision
            to life with professionalism and excellence.
          </p>
        </div>
      </section>
      <p className="aboutus4" data-aos="fade-up" data-aos-delay="50">
        We understand that every business has a unique story, and that's why we
        take the time to understand your goals, audience, and vision before
        creating solutions tailored specifically to your needs. From
        eye-catching graphic designs and responsive websites to engaging video
        content and high-quality printed materials, we ensure every project
        reflects the quality and personality of your brand. At Dwamar's Realty,
        we don't simply provide creative services—we build long-term
        relationships based on trust, reliability, and outstanding customer
        satisfaction. Our mission is to help businesses grow with confidence by
        delivering creative work that captures attention, builds credibility,
        and drives success. Your vision is our inspiration, and your success is
        our greatest achievement. Together, let's create designs, experiences,
        and brands that stand out, make an impact, and leave a lasting
        impression.
      </p>
    </div>
  );
};

export default About;
