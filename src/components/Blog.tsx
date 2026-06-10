import "./Blog.css";
import { Link } from "react-router-dom";
import logopng from "../assets/images/logo.png";
import homecard from "../assets/images/Screenshot_20260607-075117.jpg";
import homecard2 from "../assets/images/f2ea85c969aa9e1c7322d8e265c2674b.jpg";
import homecard3 from "../assets/images/Screenshot_20260607-075120.jpg";
const Blog = () => {
  return (
    <div>
      <section className="blog-header">
        <nav>
          <Link to="">
            <img src={logopng} />
          </Link>
          <div className="nav-links" id="navLinks">
            <ul>
              <li>
                <Link to="">HOME</Link>
              </li>
              <li>
                <Link to="">ABOUT</Link>
              </li>
              <li>
                <Link to="">COURSE</Link>
              </li>
              <li>
                <Link to="">BLOG</Link>
              </li>
              <li>
                <Link to="">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
        <h3 className="best-uni">Explore The Best University In The World</h3>

        <p className="best-uni-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          obcaecati saepe, <br />
          illo quas nihil placeat consequuntur sapiente alias quos dolore natus
          dolorum
        </p>
      </section>
      <section className="blog">
        <h1>Blog</h1>
        <p className="blog-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ex,
          quam dolor, amet porro ut cum ad ipsam accusamus ratione nobis
        </p>
      </section>
      <section className="blog-hero">
        <h1>Your Journey To Excellence Begins Here!</h1>
        <h4>Shaping Minds. Transforming Future.</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          molestiae laudantium iste nesciunt quaerat incidunt
        </p>
        <button className="btn">ENROLL NOW</button>
      </section>

      <section className="home-cards">
        <div className="img-size">
          <img src={homecard} />
          <h3>GLOBAL LEARNING</h3>
          <p>
            Lorem, ipsum dolor si adipisicing elit. Architecto molestiae
            officia, repellendus dolore aliquid
          </p>
        </div>
        <div className="img-size">
          <img src={homecard2} />
          <h3>COMPUTER TRANING</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae officia, repellendu
          </p>
        </div>
        <div className="img-size">
          <img src={homecard3} />
          <h3>SPECIAL classNameES</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae officia, repellendus dolore aliquid
          </p>
        </div>
      </section>
      <div className="f">
        <section className="blog-foot">
          <div className="foot-margin">
            <div className="foot">
              <h4>DANIEL</h4>
              <p>Lorem, ipsum dolor sit amet consectet</p>
            </div>
            <div className="foot2">
              <p>Lorem, ipsum dolor sit amet consectetur adipi</p>
            </div>
          </div>

          <section>
            <div className="foot3">
              <p>Lorem, ipsum dolor sit amet consect</p>
            </div>
          </section>
        </section>
        <div className="foot4">
          <p>Lorem, ipsum dolor sit amet consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
