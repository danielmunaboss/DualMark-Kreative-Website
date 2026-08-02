import "./Contact.css";
import { useLocation } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import contactimg from "../assets/images/contactus.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    setTimeout(() => {
      emailjs
        .sendForm(
          "service_5woqrx9",
          "template_nge34bf",
          form.current!,
          "C9s5TsnSNsIH_EaWs",
        )
        .then(() => {
          toast.success("✅ Message sent successfully!");
          form.current?.reset();
        })
        .catch((error) => {
          console.log(error);
          toast.error("❌ Failed to send message.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  };
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
      <div className="launch-date">
        {" "}
        🎊🎁OFFICIALLY LAUNCHING • OCTOBER 15, 2026
      </div>
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
          </div>

          {/* <!-- Contact Form --> */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="dm-contact-form"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <input type="text" name="name" placeholder="Full Name" required />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input type="text" name="title" placeholder="Subject" required />
            <input
              type="tel"
              name="whatsapp"
              placeholder="Whatsapp Number"
              required
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              name="message"
              required
            ></textarea>

            <button
              type="submit"
              className="dm-btn-dm-btn-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <div className="or">
              <p>Or Chat Us Directly On</p>
            </div>
            <div className="icon-conta">
              <a
                href="https://wa.me/2347044572371"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaWhatsapp size={25} className="whatsapp" />{" "}
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaInstagram size={25} className="facebook" />
              </a>
            </div>
          </form>
        </div>
        <div className="contactimg">
          <img src={contactimg} />
        </div>
      </section>
    </div>
  );
};

export default Contact;
