import React from "react";
import { Fragment, useState } from "react";
import Skill from "../../pages/skills/skill/Skill";
import "./Rank.scss";

const Skills = () => {
  const [items] = useState([
      {
      id: 1,
      title: "Html",
      rate: "85%",
    },
    {
      id: 2,
      title: "CSS",
      rate: "90%",
    },
    {
      id: 3,
      title: "Sass",
      rate: "92%",
    },
    {
      id: 4,
      title: "Bootstrap",
      rate: "85%",
    },{
       id: 5,
      title: "Tailwind CSS",
      rate: "85%",
    },
    {
      id: 6,
      title: "Javascript",
      rate: "80%",
    },
      {
      id: 7,
      title: "Typescript",
      rate: "70%",
    },
    {
      id: 8,
      title: "React js",
      rate: "75%",
    },
       {
      id: 9,
      title: "Git & github",
      rate: "85%",
    },
       {
      id: 10,
      title: "Node & Express js",
      rate: "85%",
    },
       {
      id: 11,
      title: "Mongo DB",
      rate: "80%",
    },
  ]);

  return (
    <Fragment>
      <div className="skills-container">
        <h1>Skill Expertise</h1>

        <div className="skills">
          <div className="left">
            {items.map((item) => (
              <Skill key={item.id} name={item.title} rate={item.rate} />
            ))}
          </div>
          <div className="right">
            <div className="image">
              <img src={"/photes/skills.png"} alt="skills" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;
