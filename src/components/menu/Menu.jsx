import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import CallIcon from "@mui/icons-material/Call";
import PsychologyIcon from "@mui/icons-material/Psychology";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router";

import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen, showCv }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <HomeIcon className="icon" />
            <Link to="/">Home</Link>
          </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <WorkIcon className="icon" />
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <SpeakerNotesIcon className="icon" />
            <Link to="/testimonials">Tesitmonials</Link>
          </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <div className="sec-icon">
            <CallIcon className="icon" />
            <Link to="contact">Contact</Link>
          </div>
        </li>
        {showCv && (
          <li onClick={() => setMenuOpen(false)}>
            <div className="sec-icon">
              <PsychologyIcon className="icon" />
              <Link to="skills">Skills</Link>
            </div>
          </li>
        )}
        {showCv && (
          <li onClick={() => setMenuOpen(false)}>
            <div className="sec-icon">
              <InfoIcon className="icon" />
              <Link to="about">About</Link>
            </div>
          </li>
        )}
        {showCv && (
          <li className="sp-btn" onClick={() => setMenuOpen(false)}>
            <a
              href="https://drive.google.com/file/d/1lxrpYDtNzJVrWid1qRbKsbX7HmSEpW7Y/view?usp=sharing"
              target="_blank"
            >
              <button className={menuOpen && "active"}>Download CV</button>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
