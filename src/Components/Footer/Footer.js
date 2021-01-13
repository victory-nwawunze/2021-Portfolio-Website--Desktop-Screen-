/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <ul className="wow fadeInUp social-icon" data-wow-delay="2s">
              <li>
                <Link to="#" className="fa fa-facebook"></Link>
              </li>
              <li>
                <Link to="#" className="fa fa-twitter"></Link>
              </li>
              <li>
                <Link to="#" className="fa fa-google-plus"></Link>
              </li>
              <li>
                <Link to="#" className="fa fa-dribbble"></Link>
              </li>
              <li>
                <Link to="#" className="fa fa-linkedin"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
