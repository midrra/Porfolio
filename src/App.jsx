import React, { useState,useEffect,useRef } from "react";

import Contact from "./compontents/contact/Contact";
import Intro from "./compontents/intro/Intro";
import Portfolio from "./compontents/Portfolio/Portfolio";
import Testimonials from "./compontents/Testimonials/Testimonials";
import Topbar from "./compontents/topbar/Topbar";
import Works from "./compontents/works/Works";
import Menu from "./compontents/menu/Menu";
// import About from './pages/about/About';
// import Skills from './pages/skills/Skills';
import Footer from './compontents/footer/Footer';
import "./app.scss";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCv,setShowcv] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      const size = window.innerWidth;
      
    if (size < 768){
      setShowcv(true);
    }else{
      setShowcv(false);
    }
    },100);
  },[]);

  return (
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} showCv = {showCv}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} showCv = {showCv}/>
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
          {/* <About/> */}
          {/* <Skills/> */}
          <Footer/>
        </div>
      </div>
    );
};

export default App;
