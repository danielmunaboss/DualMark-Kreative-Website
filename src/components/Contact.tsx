import "./Contact.css";
import { useLocation } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
          "wbeou1-X3BZwxO6IS",
        )
        .then(() => {
          emailjs.sendForm(
            "service_5woqrx9",
            "template_9wn1o5p",
            form.current!,
            "wbeou1-X3BZwxO6IS",
          );
        })
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
    <div className="contact-page-wrapper">
      <div className="launch-date">
        {" "}
        🎊🎁OFFICIALLY LAUNCHING • OCTOBER 15, 2026
      </div>

      <section className="dm-contact-section">
        <div className="dm-contact-container">
          
          {/* Left Column - Contact Information */}
          <div className="dm-contact-info-panel" data-aos="fade-right" data-aos-delay="50">
            <div className="dm-contact-badge">
              <span className="dm-badge-dot"></span>
              <span>GET IN TOUCH</span>
            </div>
            
            <h2>Let's build something remarkable together.</h2>
            <p className="dm-contact-intro-text">
              Have a project in mind or want to explore creative solutions? Fill out the form or chat with us directly. We are ready to bring your vision to life.
            </p>

            <div className="dm-contact-details">
              <div className="dm-contact-item">
                <div className="dm-contact-icon">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+234 704 457 2371</p>
                </div>
              </div>

              <div className="dm-contact-item">
                <div className="dm-contact-icon">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>abrahamdanielmunachi@gmail.com</p>
                </div>
              </div>

              <div className="dm-contact-item">
                <div className="dm-contact-icon">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Nigeria</p>
                </div>
              </div>
            </div>

            <div className="dm-contact-socials-box">
              <h4>Direct Channels</h4>
              <div className="dm-contact-socials-row">
                <a
                  href="https://wa.me/2347044572371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dm-social-btn whatsapp-btn"
                >
                  <FaWhatsapp size={20} />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dm-social-btn instagram-btn"
                >
                  <FaInstagram size={20} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="dm-contact-form-panel" data-aos="fade-left" data-aos-delay="150">
            <h3>Send Us a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="dm-contact-form">
              <div className="dm-form-group">
                <label className="dm-form-label">Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>

              <div className="dm-form-group">
                <label className="dm-form-label">Email Address</label>
                <input type="email" name="email" placeholder="johndoe@example.com" required />
              </div>

              <div className="dm-form-group">
                <label className="dm-form-label">Subject</label>
                <input type="text" name="title" placeholder="How can we help?" required />
              </div>

              <div className="dm-form-group">
                <label className="dm-form-label">WhatsApp Number</label>
                <input type="tel" name="whatsapp" placeholder="+234..." required />
              </div>

              <div className="dm-form-group">
                <label className="dm-form-label">Message Details</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  name="message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="dm-contact-submit-btn"
                disabled={loading}
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
