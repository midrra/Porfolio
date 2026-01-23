import { Fragment, useState } from "react";
import Skill from "./skill/Skill";
import Footer from "../../components/footer/Footer";
import "./Skills.scss";

const Skills = () => {
  const [items] = useState([
    {
      id: 1,
      title: "Html",
      rate: "85%",
    },
    {
      id: 2,
      title: "css",
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
    },
    {
      id: 5,
      title: "Javascript",
      rate: "80%",
    },
    {
      id: 6,
      title: "React",
      rate: "75%",
    },
  ]);

  return (
    <Fragment>
      <div className="skills">
        <div className="left">
          <div className="det">
            <h1>Skill</h1>
            <h1>Expertise</h1>
          </div>
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
      <Footer />
    </Fragment>
  );
};
export default Skills;
