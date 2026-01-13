import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/" className="footer__logo">
        Hussein Sheu Tijani
      </Link>

      <ul className="permalinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="#about">About</Link>
        </li> */}
        <li>
          <Link to="experience">Experience</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/certifications">Certifications & Awards</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <Link to="https://www.linkedin.com/in/hussein-sheu-tijani-a784791b6/">
          <BsLinkedin />
        </Link>
        <Link to="https://www.instagram.com/olaoye_tijani/">
          <FiInstagram />
        </Link>
        <Link to="https://twitter.com/OlaoyeHussein">
          <IoLogoTwitter />
        </Link>
      </div>

      <div className="footer__copywright">
        <small>&copy; Hussein Tijani. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
