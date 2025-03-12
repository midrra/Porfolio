import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPorfolio, webPortfolio, allApps } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("All");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "All",
      title: "All",
    },
    {
      id: "React",
      title: "React js",
    },
    {
      id: "vanilla",
      title: "Vanilla js",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "All":
        setData(allApps);
        break;
      case "React":
        setData(webPortfolio);
        break;
      case "vanilla":
        setData(featuredPorfolio);
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
            id={item.id}
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
