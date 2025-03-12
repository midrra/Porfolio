import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPorfolio, webPortfolio, allApps } from "../../data";
import Skeleton from "../Skeleton/Skeleton";
import axios from "axios";

export default function Portfolio() {
  const [selected, setSelected] = useState("All");
  const [data, setData] = useState([]);
  const [ projects, setProjects ]= useState([]);
  const [loading,setLoading] = useState(false);

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
    const getProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard/projects");
        setLoading(true)

        console.log(res.data.fullProjects)
        setProjects(res.data.fullProjects);
      } catch (err) {
        setLoading(false)
        console.log(err);
      }
    };
    getProjects();
  }, []);

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
        {/* {data.map((d) => (
          <div className="item" key={d.id}>
            <a href={d.ip} target="_blank">
              <img src={d.img} alt="" />
            </a>
            <h3>{d.title}</h3>
          </div>
        ))} */}
        {projects.map((d) => (
          <div className="item" key={d?._id}>
            <a href={d?.url} target="_blank">
              <img src={d?.image} alt="" />
            </a>
            <h3>{d?.name}</h3>
          </div>
        ))}
      </div>
      {!loading&&<div className="skeleton-cu">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>}
    </div>
  );
}
