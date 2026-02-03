import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [isEmpyt, setisEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/dashboard/projects");
        setAllProjects(res.data.fullProjects);
        console.log(res.data.fullProjects)

        setisEmpty(res.data.fullProjects.length === 0);
      } catch (err) {
        console.error(err.response.data.message || err.message);
      }
    };
    fetchData();
  }, []);

  const editingFun = async (edit) => {
    try {
      const res = await api.get(`/dashboard/edit/${edit}`);
      navigate(`/admin-dashboard/add-project/${edit}`);
    } catch (err) {
      console.error(err.response.data.message || err.message);
    }
  };

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
      console.error(err.response.data.message || err.message);
    }
  };

  return (
    <div className="w-full">
      {allProjects.map((ele) => (
        <div
          key={ele._id}
          style={{
            backgroundColor: "#e6e0e1",
          }}
          className="flex flex-wrap items-center justify-around gap-5 p-5"
        >
          <img
            src={ele.image}
            alt={ele.name}
            className="w-[300px] lg:w-[400px]"
          />
          <span className="font-bold">{ele.name}</span>
          <Button
            sx={{
              backgroundColor: "#15023a",
              "&:hover": {
                backgroundColor: "#2a0468",
              },
              color: "white",
            }}
            onClick={() => editingFun(ele._id)}
          >
            Edit
          </Button>
          <FaTimes
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(ele._id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
