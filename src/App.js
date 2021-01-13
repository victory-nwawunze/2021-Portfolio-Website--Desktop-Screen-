/** @format */

import React, { useState, useEffect } from "react";
import "./App.css";

import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Experience from "./Components/Experience/Experience";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Spinner from "./Components/Spinner/Spinner";
import Form from "./Components/Form/form";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return (
    <>
      {loading === false ? (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/testimonial">
              <Testimonial />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
          <Footer />
        </Router>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
