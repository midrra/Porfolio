import React from "react";
import HomeIcon from '@mui/icons-material/Home';

import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen,showCv }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <HomeIcon className="icon"/>
            <a href="#intro">Home</a>
          </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <HomeIcon className="icon"/>
            <a href="#portfolio">Portfolio</a>
          </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <HomeIcon className="icon"/>
            <a href="#testimonials">Tesitmonials</a>
          </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <HomeIcon className="icon"/>
            <a href="#contact">Contact</a>
          </div>
        </li>
        {showCv&&<li onClick={() => setMenuOpen(false)}>
          <div  className="sec-icon">
            <HomeIcon className="icon"/>
            < a href="#works">Skills</a>
          </div>
        </li>}
       {showCv&&<li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <HomeIcon className="icon"/>
            <a href="#works">About</a>
          </div>
        </li>}
       {showCv&&<li className="sp-btn"onClick={() => setMenuOpen(false)}>
          <button className={menuOpen&&"active"}><a href="www.google.com" target="_blank">Download CV</a></button>
        </li>}
      </ul>
    </div>
  );
}

