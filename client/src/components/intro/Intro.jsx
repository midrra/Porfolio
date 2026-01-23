import React from "react";
import Typewriter from "typewriter-effect";

import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="bg-indigo-200 imgContainer ">
          <img
            src="/photes/mohamed.png"
            alt=""
            loading="lazy"
           
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohamed Awad</h1>
          <h4>Front End Developer</h4>
          <h3>
            Freelance {""}
            <div style={{ display: "inline-flex" }}>
              <Typewriter
                options={{
                  strings: ["Developer", "Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="/photes/assets.png" alt="" />
        </a>
      </div>
    </div>
  );
}
