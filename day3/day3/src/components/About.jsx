import "../assets/About.css";
import Image1 from "../assets/f67396fc3cfce63a28e07ebb35d974ac.jpg";
import Image2 from "../assets/make-it-personal.jpg";
import Image3 from "../assets/Synthwave-Postmodern.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <>
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
      <div className="about-us">
        <h1>About Us</h1>
        <div className="about-content">
          <div className="about-paragraph">
            <img src={Image1} alt="Image 1" />
            <div className="paragraph-content">
              <p>
                You are working manda!bha!Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nulla vitae hendrerit eros. Sed
                venenatis, ligula sit amet blandit semper, mi mi gravida dolor,
                non dignissim lacus metus nec risus. Vivamus blandit efficitur
                eros, sed lacinia mi posuere id.
              </p>
            </div>
          </div>
          <hr className="separator" />
          <div className="about-paragraph">
            <img src={Image2} alt="Image 2" />
            <div className="paragraph-content">
              <p>
                Integer ut volutpat urna, at consequat ante. Nam mattis turpis
                ut nunc commodo, id ultrices nunc tincidunt. Nullam non luctus
                neque. Mauris interdum purus vitae elit faucibus fermentum.
                Etiam at massa ullamcorper, aliquam sapien vitae, faucibus
                lacus.
              </p>
            </div>
          </div>
          <hr className="separator" />
          <div className="about-paragraph">
            <img src={Image3} alt="Image 3" />
            <div className="paragraph-content">
              <p>
                Vestibulum eu commodo dolor. Sed venenatis tincidunt ante, eget
                ullamcorper quam. Fusce condimentum arcu ac nunc dapibus, at
                dictum dui auctor. Suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
