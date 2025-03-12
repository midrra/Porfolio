import React, { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      title: "Resturant UI Design",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, culpa.",
      img: "photes/design.png",
      sImg: "photes/man.png",
    },
    {
      id: 2,
      title: "Architecture UI Design",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, culpa.",
      img: "photes/design-2.png",
      sImg: "photes/man.png",
    },
    {
      id: 3,
      title: "Food UI Design",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, culpa.",
      img: "photes/design-3.png",
      sImg: "photes/man.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.sImg} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="photes/assets.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="photes/assets.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("left")}
      />
    </div>
  );
}
