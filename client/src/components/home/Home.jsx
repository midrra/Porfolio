import React, { Fragment } from "react";

import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Works from "../works/Works";
import Footer from "../footer/Footer";
import About from "../../pages/about/About";
import Skills from "../../pages/skills/Skills";
import Me from '../Me/Me';
import Rank from '../Rank/Rank'

function Home() {
  return (
    <Fragment>
      <Intro />
      <Portfolio />
      {/* <Works /> */}
      {/* <Testimonials /> */}
      <Rank/>
      <Me/>
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default Home;
