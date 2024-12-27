import { useEffect, useRef} from "react";
import { init } from "ityped";
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Content manager']
    });
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="photes/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohamed Awad</h1>
          <h4>Front End Developer</h4>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="photes/assets.png" alt="" />
        </a>
      </div>
    </div>
  );
}
