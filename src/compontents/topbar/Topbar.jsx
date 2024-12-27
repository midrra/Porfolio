import React from "react";
import "./topbar.scss";
import MailIcon from "@mui/icons-material/Mail";
// import { Person, Mail } from "@material-ui/icons";
import PersonIcon from "@mui/icons-material/Person";

export default function Topbar({ menuOpen, setMenuOpen,showCv }) {  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            ROM.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+249 904 140 471</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>el.mga.su@gmail.com</span>
          </div>
        </div>
        <div className="right">
          {!showCv&&<div className="skills-top"><a href="google.com" target="_blank">Skills</a></div>}
          {!showCv&&<div className="about-top"><a href="facebook.com" target="_blank">About</a></div>}
          {!showCv&&<button className={menuOpen&&"active"}><a href="www.google.com" target="_blank">Download CV</a></button>}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
