import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar">
          <div className="navbar-section">
            <div className="logo-section">
              <div className="logo">HST</div>
              <div className="brand-text">
                <h1 className="brand-title">Hussein Sheu Tijani</h1>
              </div>
            </div>

            <div className="desktop-nav">
              <Link to="/" className="">
                Home
              </Link>
              {/* <Link to="/about" className="">
                About
              </Link> */}
              <Link to="/experience" className="">
                Experiences
              </Link>
              <Link to="/services" className="">
                Services
              </Link>
              <Link to="/portfolio" className="">
                Portfolio
              </Link>
              <Link to="/certifications" className="">
                Certifications & Awards
              </Link>
              <Link to="/contact" className="">
                Contact
              </Link>
            </div>

            <div className="mobile-menu-button">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-toggle"
              >
                <svg
                  className="menu-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className={`mobile-nav ${isOpen ? "open" : "closed"}`}>
            <div className="mobile-nav-links">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              {/* <Link onClick={() => setIsOpen(false)}>About</Link> */}
              <Link to="/experience" onClick={() => setIsOpen(false)}>
                Experiences
              </Link>
              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
              <Link to="/certifications" onClick={() => setIsOpen(false)}>
                Certifications & Awards
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
