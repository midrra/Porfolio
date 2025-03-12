import React from "react";
import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Sam Adam",
      title: "Senior Developer",
      img: "/photes/style.jpg",
      icon: "photes/twitter.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero!",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "C0-Founder of DELKA",
      img: "photes/test-man.jpg",
      icon: "photes/youtube.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero!",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "photes/woman.jpg",
      icon: "photes/instagram.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero!",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src={"photes/forword.png"} className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name} </h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
