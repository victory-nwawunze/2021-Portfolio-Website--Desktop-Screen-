/** @format */

import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import Spinner from "../Spinner/Spinner";
function Testimonial() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div>
          <section className="background">
            <div className="background-text">
              <i class="wow fadeInUp fa fa-star" data-wow-delay="0.6s"></i>

              <h2 class="wow fadeInUp" data-wow-delay="0.8s">
                Proin lobortis eu diam et facilisis. Fusce nisi nibh, molestie
                in vestibulum quis, auctor et orci.
              </h2>
            </div>
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Testimonial;
