import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPorfolio, webPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("vanilla");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "vanilla",
      title: "Vanilla js",
    },
    {
      id: "React",
      title: "React js",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "vanilla":
        setData(featuredPorfolio);
        break;
      case "React":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPorfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
            id = {item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <a href={d.ip} target="_blank">
              <img src={d.img} alt="" />
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}