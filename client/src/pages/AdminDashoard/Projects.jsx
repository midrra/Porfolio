import React, { useEffect, useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import UserContext from "../../store/data";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [isEmpyt, setisEmpty] = useState(false);
  const { data } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/dashboard/projects");
        setAllProjects(res.data.fullProjects);

        setisEmpty(res.data.fullProjects.length === 0);
      } catch (errr) {
        console.log(errr);
      }
    };
    fetchData();
  }, [data]);

  if (isEmpyt) {
    return <div>No data to fetch</div>;
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/dashboard/remove/${id}`);
      const filterData = allProjects.filter((p) => p._id !== id);
      setisEmpty(filterData.length === 0);
      setAllProjects(filterData);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="w-full">
       {allProjects.map((ele) => (
        <div
          key={ele._id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            justifyContent: "space-around",
            padding: "20px",
            backgroundColor: "#e6e0e1",
          }}
        >
          <span>{ele.name}</span>
          <img src={ele.image} alt={ele.name} width={300} />
          <FaTimes
            style={{ cursor: "pointer"}}
            onClick={() => handleDelete(ele._id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
