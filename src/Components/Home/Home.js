/** @format */

import React, { useState, useEffect } from "react";
import "./Home.css";
import Spinner from "../Spinner/Spinner";
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div>
          <section id="home">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="home-img"></div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="home-thumb">
                    <div className="section-title">
                      <h4 className="wow fadeInUp" data-wow-delay="0.3s">
                        welcome to my website
                      </h4>
                      <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                        Hello, I am <strong>Victory Nwawunze</strong> currently
                        based in Lagos state, Nigeria.
                      </h1>
                      <p className="wow fadeInUp" data-wow-delay="0.9s">
                        Donec auctor arcu at efficitur lacinia. Praesent
                        bibendum efficitur ipsum, et mattis tellus interdum in.
                        Ut a dictum purus. Vestibulum non pellentesque felis,
                        sed dignissim urna. Vestibulum id accumsan quam.
                      </p>

                      <a
                        href="#about"
                        className="wow fadeInUp smoothScroll section-btn btn btn-success"
                        data-wow-delay="1.4s"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Home;
