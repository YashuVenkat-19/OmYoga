import "../assets/BirthdayTheme.css";
import img2 from "../assets/vector1.jpg";
import img3 from "../assets/theme.png";
import img4 from "../assets/theme2.jpg";
import img5 from "../assets/theme3.jpg";
import img6 from "../assets/theme4.jpg";
import img7 from "../assets/theme5.jpg";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const BirthdayTheme = () => {
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
            <h2>OM-YOGA</h2>
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
      <div className="theme-container">
        <div className="theme" style={{ background: "black" }}>
          <img src={img5} alt="Theme 1" className="theme-image" />
          <div className="theme-details">
            <h2 className="theme-title">Aathma Yoga</h2>
            <p className="theme-description">
              Transform your party into a magical realm with enchanting unicorn
              decorations and accessories.
            </p>
            <p className="theme-amount">$99.99</p>
          </div>
        </div>
        <div className="theme" style={{ background: "black" }}>
          <img src={img2} alt="Theme 1" className="theme-image" />
          <div className="theme-details">
            <h2 className="theme-title">Paranayama</h2>
            <p className="theme-description">
              Transform your party into a magical realm with enchanting unicorn
              decorations and accessories.
            </p>
            <p className="theme-amount">$99.99</p>
          </div>
        </div>
        <div className="theme" style={{ background: "black" }}>
          <img src={img3} alt="Theme 2" className="theme-image" />
          <div className="theme-details">
            <h2 className="theme-title">Maleeviyam</h2>
            <p className="theme-description">
              Join the superheroes and save the day with action-packed
              decorations and party favors.
            </p>
            <p className="theme-amount">$79.99</p>
          </div>
        </div>
        <div className="theme" style={{ background: "black" }}>
          <img src={img4} alt="Theme 2" className="theme-image" />
          <div className="theme-details">
            <h2 className="theme-title">Sena yamudha</h2>
            <p className="theme-description">
              Join the superheroes and save the day with action-packed
              decorations and party favors.
            </p>
            <p className="theme-amount">$79.99</p>
          </div>
        </div>
        <div className="theme" style={{ background: "black" }}>
          <img src={img6} alt="Theme 2" className="theme-image" />
          <div className="theme-details">
            <h2 className="theme-title">Kaviya</h2>
            <p className="theme-description">
              Join the superheroes and save the day with action-packed
              decorations and party favors.
            </p>
            <p className="theme-amount">$79.99</p>
          </div>
        </div>
        <div className="theme" style={{ background: "black" }}>
          <img src={img7} alt="Theme 2" className="theme-image" />
          <div className="theme-details">
            <h2 className="theme-title">Thaaimai</h2>
            <p className="theme-description">
              Join the superheroes and save the day with action-packed
              decorations and party favors.
            </p>
            <p className="theme-amount">$79.99</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirthdayTheme;
