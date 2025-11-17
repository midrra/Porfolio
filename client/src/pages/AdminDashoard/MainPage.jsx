import React, { useState,useContext } from "react";
import "./Main.scss";
import axios from "axios";
import UserContext from "../../store/data";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [section,setSection] = useState("")
  const [file, setFile] = useState("");
  const {projects} = useContext(UserContext)
  alert("naem")

     const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    // Very simple check
    if (email === "admin@example.com" && password === "123456") {
      alert("Login successful!");
      // navigate("/admin");
    } else {
      alert("Wrong email or password!");
    }


  const submitHandler = async (e) => {
    e.preventDefault();

   
    if (!file || !inputValue) {
      alert("Please enter a project name and choose an image!");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", inputValue);
    formData.append("url", urlValue);
    formData.append("section", section);
    try {
      const res = await axios.post(
        "http://localhost:3000/dashboard/newproject",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      projects(res.data);
     
      setInputValue("");
      setUrlValue("");
      setSection("")
      setFile(null);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="admin-container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your new project name"
        />
          <input
          type="text"
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          placeholder="Enter your URL"
        />
             <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          placeholder="Enter your Section"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button>Submit</button>
      </form>

    </div>
  );
}

export default MainPage;
