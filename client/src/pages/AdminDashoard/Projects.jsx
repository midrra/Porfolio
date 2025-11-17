import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import UserContext from "../../store/data";

function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [isEmpyt, setisEmpty] = useState(false);
  const { data } = useContext(UserContext);

  useEffect(()=>{
    console.log(data, "from context projects");
  },[data])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/dashboard/projects");
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
      await axios.delete(`http://localhost:5000/dashboard/remove/${id}`);
      const filterData = allProjects.filter((p) => p._id !== id);
      setisEmpty(filterData.length === 0);
      setAllProjects(filterData);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {allProjects.map((ele) => (
        <div
          key={ele._id}
          style={{ display: "flex", alignItems: "center", gap: "20px" ,justifyContent:"space-around",padding:'20px',backgroundColor:"gray",color:"#fff"}}
        >
          <span>{ele.name}</span>
          <img src={ele.image} alt={ele.name} width={300} />
          <FaTimes
            style={{ cursor: "pointer", color: "#fff" }}
            onClick={() => handleDelete(ele._id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
