/** @format */
import React, { useState, useEffect } from "react";
import "./About.css";
import Spinner from "../Spinner/Spinner";
function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading === false ? (
        <section id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="home-thumb">
                  <h1 className="display-1 text-uppercase">
                    Welcome To About Section / Blog Section
                  </h1>
                  <p>
                    Donec auctor arcu at efficitur lacinia. Praesent bibendum
                    efficitur ipsum, et mattis tellus interdum in. Ut a dictum
                    purus. Vestibulum non pellentesque felis, sed dignissim
                    urna. Vestibulum id accumsan quam.
                  </p>
                  <button className="btn btn-danger text-uppercase">
                    Blogs
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="home-thumb">
                  <div className="svg-1"></div>
                </div>
              </div>
              {/*More Content */}
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default About;
