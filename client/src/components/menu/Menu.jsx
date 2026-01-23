import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import CallIcon from "@mui/icons-material/Call";
import PsychologyIcon from "@mui/icons-material/Psychology";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router";
import api from "../../api/axios";

import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen, showCv }) {
  const [role, setRole] = useState();

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const res = await api.get("/home/em");
        setRole(res.data.user.role);
      } catch (err) {
        console.log(err);
      }
    };
    getAdmin();
  }, []);

  return (
    <div className={"menu " + (menuOpen ? "active":"")}>
      <ul>
        <Link to="/">
          <li onClick={() => setMenuOpen(false)}>
            <div className="sec-icon">
              <HomeIcon className="icon" />
              <h1 className="icon-name">Home</h1>
            </div>
          </li>
        </Link>
        <Link to="/portfolio">
          <li onClick={() => setMenuOpen(false)}>
            <div className="sec-icon">
              <WorkIcon className="icon" />
              <h1 className="icon-name">Portfolio</h1>
            </div>
          </li>
        </Link>
        {/* <Link to="/testimonials">
          <li onClick={() => setMenuOpen(false)}>
            <div className="sec-icon">
              <SpeakerNotesIcon className="icon" />
              <h1 className="icon-name">Tesitmonials</h1>
            </div>
          </li>
        </Link> */}
        <Link to="contact">
          <li onClick={() => setMenuOpen(false)}>
            <div className="sec-icon">
              <CallIcon className="icon" />
              <h1 className="icon-name">Contact</h1>
            </div>
          </li>
        </Link>
        {showCv && (
          <Link to="skills">
            <li onClick={() => setMenuOpen(false)}>
              <div className="sec-icon">
                <PsychologyIcon className="icon" />
                <h1 className="icon-name">Skills</h1>
              </div>
            </li>
          </Link>
        )}
        {showCv && (
          <Link to="about">
            <li onClick={() => setMenuOpen(false)}>
              <div className="sec-icon">
                <InfoIcon className="icon" />
                <h1 className="icon-name">About</h1>
              </div>
            </li>
          </Link>
        )}
        {showCv && role === "admin" ? (
              <Link to="/admin-dashboard">
          <li onClick={() => setMenuOpen(false)}>
            <div className="bg-indigo-500 w-10 h-10 rounded-full overflow-hidden mr-7">
                <img src="photes/mohamed.png" alt="" className="ml-0.5 mt-1" />
              
            </div>
          </li>
          </Link>
        ) : (
          ""
        )}
        {showCv && (
          <a href="/files/MOHAMED-AWAD-CV.pdf" target="_blank" download>
            <li className="sp-btn" onClick={() => setMenuOpen(false)}>
              <button className={menuOpen ? "active":""}>
                <h1>Download CV</h1>
              </button>
            </li>
          </a>
        )}
      </ul>
    </div>
  );
}
