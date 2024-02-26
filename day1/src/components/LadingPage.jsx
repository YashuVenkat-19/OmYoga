import "../assets/LandingPage.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import gif from "../assets/Celebration.gif";
import Footer from "./Footer";
import Slideshow from "./SlideShow";
import Typewriter from "typewriter-effect";
import Activities from "./Activities";
import CTA from "./CTA";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleContent = () => {
    navigate("/form");
  };

  return (
    <>
      <div className="landing-page">
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
                <Link to="/food">Food</Link>
              </li>
            </ul>
            {/* <p className="para">“Cake, Candles and a lot of SMILES”</p> */}
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info" style={{ float: "left" }}>
              <h1>oM✴️!</h1>
              <p>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("“Everyday Peace and Serenity!”")
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </p>
              <button onClick={handleContent}>Your Way</button>
            </div>
            <div className="image">
              <img
                src={gif}
                alt="Landing Page"
                // style={{ height: "600px", width: "730px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="act">
        <Activities />
      </div>
      <div id="carousel">
        <Slideshow />
      </div>
      <div id="cstyle">
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
