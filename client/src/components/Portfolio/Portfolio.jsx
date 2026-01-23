import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import Skeleton from "../Skeleton/Skeleton";
import api from "../../api/axios"

export default function Portfolio() {
  const [selected, setSelected] = useState("All");
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const getAll = async () => {
    setLoading(false);
    try {
      let url = "/dashboard/projects";
      if (selected === "React") url += "?section=react";
      if (selected === "vanilla") url += "?section=vanilla";

      const res = await api.get(url);
      setProjects(res.data.fullProjects);
      setLoading(true)
    } catch (err) {
      setLoading(false)
      console.log(err);
    } 
  };
  getAll();
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
           {projects.map((d) => (
          <div className="item" key={d?._id}>
            <a href={d?.url} target="_blank">
              <img src={d?.image} alt="" />
            </a>
            <h3>{d?.name}</h3>
          </div>
        ))}
      </div>
      {!loading && (
        <div className="skeleton-cu">
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
        </div>
      )}
    </div>
  );
}
