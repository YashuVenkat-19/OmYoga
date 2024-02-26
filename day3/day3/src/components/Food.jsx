import "../assets/Food.css";
import img2 from "../assets/indian.jpg";
import img3 from "../assets/amarican.jpg";
import img4 from "../assets/chinese.jpg";
import img5 from "../assets/italian.jpg";
import img6 from "../assets/russian.jpg";
import img7 from "../assets/turkish.jpg";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Food = () => {
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
              <Link to="/food">Food</Link>
            </li>
          </ul>
          {/* <p className="para">“Cake, Candles and a lot of SMILES”</p> */}
        </div>
      </header>
      <div className="theme-container">
        <div className="theme" style={{ background: "black" }}>
          <img src={img5} alt="Theme 1" className="theme-image" />
          <div className="theme-details">
            <h2 className="theme-title">Italian Yoga</h2>
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
            <h2 className="theme-title">Indian Yoga</h2>
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
            <h2 className="theme-title">American Yoga</h2>
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
            <h2 className="theme-title">Chinese Yoga</h2>
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
            <h2 className="theme-title">Russian Yoga</h2>
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
            <h2 className="theme-title">Turkish Yoga</h2>
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

export default Food;
