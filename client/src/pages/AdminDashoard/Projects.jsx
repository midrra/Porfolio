import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [isEmpyt, setisEmpty] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard/projects");
        console.log("all projects", res.data.fullProjects);
        setAllProjects(res.data.fullProjects);
        setisEmpty(res.data.fullProjects.length===0)
      } catch (errr) {
        console.log(errr);
      }
    };
    fetchData()
  }, []);

  if (isEmpyt){
    return <div>No data to fetch</div>
  }

  const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/dashboard/remove/${id}`);
    // Remove it from local state
    console.log("delete is work")
    // if (filterData===0) return <div>No data to fetch</div>
    const filterData = allProjects.filter((p) => p._id !== id)
    setAllProjects(filterData);
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div>
      {allProjects.map((ele) => (
    <div key={ele._id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span>{ele.name}</span>
      <img src={ele.image} alt={ele.name} width={100} />
      <FaTimes
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => handleDelete(ele._id)}
      />
    </div>
  ))}
    </div>
  );
}

export default Projects;
