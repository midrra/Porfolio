import React, { useState } from "react";
import "./Main.scss";
import axios from "axios";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [file, setFile] = useState("");


  const submitHandler = async (e) => {
    e.preventDefault();
  
      if ((!file|| !inputValue)) {
        alert("Please enter a project name and choose an image!");
        return;
      }
  const formData = new FormData();
  formData.append("image", file);
  formData.append("name", inputValue);

        try {
      const res = await axios.post(
        "http://localhost:5000/dashboard/newproject",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("working!", res.data);
    setInputValue("");
      setFile(null);
      
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
