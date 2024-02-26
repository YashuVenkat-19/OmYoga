import "../assets/Testimonials.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Testimonials = () => {
  return (
    <div style={{ backgroundColor: "#cccccc" }}>
      <header>
        <div className="container">
          <Link to="/landing">
            <img
              src={logo}
              alt="LOGO"
              style={{ height: "80px", width: "80px" }}
            />
            <h2>OM_YOGA</h2>
          </Link>
          <ul className="links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Testimonial</Link>
            </li>
            <li>
              <Link to="/themes">Themes</Link>
            </li>
            <li>
              <Link to="/food">Courses</Link>
            </li>
          </ul>
          {/* <p className="para">“Cake, Candles and a lot of SMILES”</p> */}
        </div>
      </header>
      <div
        style={{
          width: "960px",
          margin: "0 auto",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <h1>Amazing Work</h1>
        <div className="testimonial-quote group">
          <img src="http://placehold.it/120x120" alt="Placeholder" />
          <div className="quote-container">
            <blockquote>
              <p>
                Overall, fantastic! I'd recommend them to anyone looking for a
                creative, thoughtful, and professional team.”
              </p>
            </blockquote>
            <cite>
              <span>Niranjanee</span>
              <br />
              Software Engineer
              <br />
              American College of Chest Physicians
            </cite>
          </div>
        </div>

        <hr style={{ margin: "60px auto", opacity: ".5" }} />

        <h1>Great Work</h1>
        <div className="testimonial-quote group right">
          <img src="http://placehold.it/120x120" alt="Placeholder" />
          <div className="quote-container">
            <div>
              <blockquote>
                <p>
                  Overall, fantastic! I'd recommend them to anyone looking for a
                  creative, thoughtful, and professional team.”
                </p>
              </blockquote>
              <cite>
                <span>Rahul</span>
                <br />
                Software Developer
                <br />
                American College of Chest Physicians
              </cite>
            </div>
          </div>
        </div>

        <hr style={{ margin: "60px auto", opacity: ".5" }} />

        <h1>Funtastic</h1>
        <div className="testimonial-quote group">
          <img src="http://placehold.it/120x120" alt="Placeholder" />
          <div className="quote-container">
            <blockquote>
              <p>
                Overall, fantastic! I'd recommend them to anyone looking for a
                creative, thoughtful, and professional team.”
              </p>
            </blockquote>
            <cite>
              <span>Aditi Rao</span>
              <br />
              Actoress
              <br />
              American College of Chest Physicians
            </cite>
          </div>
        </div>

        <hr style={{ margin: "60px auto", opacity: ".5" }} />

        <h1>Lovely</h1>
        <div className="testimonial-quote group right">
          <img src="http://placehold.it/120x120" alt="Placeholder" />
          <div className="quote-container">
            <div>
              <blockquote>
                <p>
                  Overall, fantastic! I'd recommend them to anyone looking for a
                  creative, thoughtful, and professional team.”
                </p>
              </blockquote>
              <cite>
                <span>Prajakta</span>
                <br />
                Social Influencer
                <br />
                American College of Chest Physicians
              </cite>
            </div>
          </div>
        </div>

        <hr style={{ margin: "60px auto", opacity: ".5" }} />
      </div>
    </div>
  );
};

export default Testimonials;
