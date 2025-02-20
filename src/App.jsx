import React, { useState, useEffect, useRef } from "react";

import Menu from "./compontents/menu/Menu";
import Topbar from "./compontents/topbar/Topbar";
import Home from "./compontents/home/Home";
import { Routes, Route } from "react-router";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Porto from "./pages/Porto";
import Testo from "./pages/Testo";
import Cont from "./pages/Cont";
import ErrorMessage from "./pages/ErrorMessage";
import "./app.scss";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCv, setShowcv] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const size = window.innerWidth;

      if (size < 768) {
        setShowcv(true);
      } else {
        setShowcv(false);
      }
    }, 100);
  }, []);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} showCv={showCv} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} showCv={showCv} />
      <div className="sections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Porto />} />
          <Route path="/testimonials" element={<Testo />} />
          <Route path="/contact" element={<Cont />} />
          <Route path="/*" element={<ErrorMessage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
