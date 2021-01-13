/** @format */

import React, { useState, useEffect } from "react";
import "./Contact.css";
import Spinner from "../Spinner/Spinner";
function Contact() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div>
          <section id="home" className="parallax-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="svg-3"></div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="home-thumb">
                    <div className="section-title">
                      <h4 className="wow fadeInUp" data-wow-delay="0.3s">
                        Kindly Send a message ?
                      </h4>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter name"
                        />
                        <br />
                        <br />
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Example@gmail.com"
                        />
                        <br />
                        <br />
                        <input type="date" className="form-control" />
                        <br />
                        <br />
                        {/* <textarea type="text" className="form-control">
                    Message
                  </textarea>*/}
                        <button className="btn btn-primary" type="button">
                          Send
                        </button>
                      </div>
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

export default Contact;
