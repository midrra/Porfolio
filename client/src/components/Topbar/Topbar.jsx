import React from "react";
import "./Topbar.scss";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router";

export default function Topbar({ menuOpen, setMenuOpen, showCv }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="logo">
            ROM.
          </Link>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+20 1024889637</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>el.mga.su@gmail.com</span>
          </div>
        </div>
        <div className="right">
          {!showCv && (
            <div className="skills-top">
              <Link to="/skills">Skills</Link>
            </div>
          )}
          {!showCv && (
            <div className="about-top">
              <Link to="/about">About</Link>
            </div>
          )}
          {!showCv && (
               <a
                href="/files/MOHAMED-AWAD-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-cont ${menuOpen && "active"}`}
                download
              >
                Download CV
              </a>
          )}
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
