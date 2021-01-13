/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar navbar-fixed-top custom-navbar" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">
            Nwawunze
          </Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/#home" className="smoothScroll">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="smoothScroll">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/experience" className="smoothScroll">
                Experiences
              </Link>
            </li>
            <li>
              <Link to="/testimonial" className="smoothScroll">
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/contact" className="smoothScroll">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
