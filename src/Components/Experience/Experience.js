/** @format */

import React, { useState, useEffect } from "react";
import "./Experience.css";
import Spinner from "../Spinner/Spinner";
function Experience() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div>
          <section id="experience" class="parallax-section">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <div class="background-image experience-img"></div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="color-white experience-thumb">
                    <div
                      class="wow fadeInUp section-title"
                      data-wow-delay="0.8s"
                    >
                      <h1>My Experiences</h1>
                      <p class="color-white">Previous companies and my tasks</p>
                    </div>

                    <div
                      class="wow fadeInUp color-white media"
                      data-wow-delay="1.2s"
                    >
                      <div class="media-object media-left">
                        <i class="fa fa-laptop"></i>
                      </div>
                      <div class="media-body">
                        <h3 class="media-heading">
                          Graphic Designer <small>2014 Jul - 2015 Sep</small>
                        </h3>
                        <p class="color-white">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>

                    <div
                      class="wow fadeInUp color-white media"
                      data-wow-delay="1.6s"
                    >
                      <div class="media-object media-left">
                        <i class="fa fa-laptop"></i>
                      </div>
                      <div class="media-body">
                        <h3 class="media-heading">
                          Web Designer <small>2015 Oct - 2017 Jan</small>
                        </h3>
                        <p class="color-white">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="education" class="parallax-section">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <div class="color-white education-thumb">
                    <div
                      class="wow fadeInUp section-title"
                      data-wow-delay="0.8s"
                    >
                      <h1>My Education</h1>
                      <p class="color-white">
                        In cursus orci non ipsum gravida dignissim
                      </p>
                    </div>

                    <div
                      class="wow fadeInUp color-white media"
                      data-wow-delay="1.2s"
                    >
                      <div class="media-object media-left">
                        <i class="fa fa-laptop"></i>
                      </div>
                      <div class="media-body">
                        <h3 class="media-heading">
                          Master in Design <small>2012 Jan - 2014 May</small>
                        </h3>
                        <p class="color-white">
                          Etiam iaculis elit in mauris ullamcorper auctor. Proin
                          a sapien id orci ullamcorper dignissim eu in neque.{" "}
                        </p>
                      </div>
                    </div>

                    <div
                      class="wow fadeInUp color-white media"
                      data-wow-delay="1.6s"
                    >
                      <div class="media-object media-left">
                        <i class="fa fa-laptop"></i>
                      </div>
                      <div class="media-body">
                        <h3 class="media-heading">
                          Bachelor of Arts <small>2008 May - 2011 Dec</small>
                        </h3>
                        <p class="color-white">
                          Orci varius natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="background-image education-img"></div>
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

export default Experience;
