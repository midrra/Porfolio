import React, { Fragment } from "react";

import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Works from "../works/Works";
import Footer from "../footer/Footer";

function Home() {
  return (
    <Fragment>
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default Home;
