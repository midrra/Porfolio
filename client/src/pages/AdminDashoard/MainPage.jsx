import React, { useState, useContext } from "react";
import UserContext from "../../store/data";
import api from "../../api/axios";
import { Button } from "@/components/Login/ui/button";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState("");
  const { projects } = useContext(UserContext);
  const navigate = useNavigate();

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
      const res = await api.post("/dashboard/newproject", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      projects(res.data);

      setInputValue("");
      setUrlValue("");
      setSection("");
      setFile(null);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[40%] mb-30">
          <form onSubmit={submitHandler} className="space-y-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your new project name"
              className="text-gray-800 w-full h-10 border-1 border-blue-500 pl-2 rounded-lg outline-0  focus:border-2"
            />
            <input
              type="text"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              placeholder="Enter your URL"
              className="text-gray-800 w-full h-10 border-1 border-blue-500 pl-2 rounded-lg outline-0  focus:border-2"
            />
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              placeholder="Enter your Section"
              className="text-gray-800 w-full h-10 border-1 border-blue-500 pl-2 rounded-lg outline-0  focus:border-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="text-gray-800 w-1/2 border-1 border-blue-500 pl-2 rounded-lg outline-0  focus:border-2 py-10"
            />
            <Button className="cursor-pointer h-10 mb-4 bg-blue-500 text-white block">
              Submit
            </Button>
          </form>
        </div>
      </div>
  );
}

export default MainPage;
