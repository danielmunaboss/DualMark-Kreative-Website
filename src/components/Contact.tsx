import "./Contact.css";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
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
      <section className="Contactusmain">
        <section>
          <div className="Contactuspage">
            <h1>
              <h6 data-aos="fade-up" data-aos-delay="50">
                CONTACT US TODAY
              </h6>
            </h1>
            <p data-aos="fade-up" data-aos-delay="90">
              Let's Create Something Exceptional Together.
              <div className="contactusuderline"></div>
            </p>
          </div>
        </section>
        <section>
          <div className="contact-form">
            <div
              className="contact-form1"
              data-aos="fade-up"
              data-aos-delay="90"
            >
              <form action="">
                <div className="name-email">
                  <div className="name-email1">
                    <h4 className="formtag">Enter Your Name</h4>
                    <input
                      type="text"
                      placeholder="Enter You Name"
                      className="form1"
                    />
                  </div>

                  <div className="name-email1">
                    <h4 className="formtag">Enter Your Email</h4>
                    <input
                      type="email"
                      placeholder="Enter You Email"
                      className="form1"
                    />
                  </div>
                </div>

                <h4 className="formtag">Message</h4>
                <textarea
                  name=""
                  id=""
                  placeholder="Write Your Message"
                  className="form2"
                />
              </form>
              <div className="Contact-btn">
                <button className="Contact-btn1">Send Message</button>
              </div>
              <div className="Contact-icons">
                <Link to="">
                  <FaWhatsapp size={20} className="Contact-icons1" />
                </Link>
                <Link to="">
                  <FaFacebookF size={20} className="Contact-icons1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
