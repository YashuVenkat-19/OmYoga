import { footerLinks, socialMedia } from "./index.js";
import "../assets/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => (
  <section className="footer-section">
    <div className="footer-content">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" /> {/* Logo */}
        <p className="footer-description">Your Day! Your Way!</p>
      </div>

      <div className="footer-links-container">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="footer-link-group">
            <h4 className="footer-link-title">{footerlink.title}</h4>
            <ul className="footer-link-list">
              {footerlink.links.map((link) => (
                <li key={link.name} className="footer-link-item">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="footer-bottom">
      <p className="footer-copyright">
        Copyright Ⓒ 2024 Sloth's Day. All Rights Reserved.
      </p>

      <div className="social-media-icons">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="social-media-icon"
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
