import React, { useState, useContext, useEffect } from "react";
import api from "../../api/axios";
import { Button } from "@/components/Login/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "@/components/Login/ui/spinner";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState("");
  const [editData, setEditData] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const formData = new FormData();
  formData.append("image", file);
  formData.append("name", inputValue);
  formData.append("url", urlValue);
  formData.append("section", section);

  useEffect(() => {
    if (editData) {
      setButtonText("Edit");
      setInputValue(editData?.name || "");
      setUrlValue(editData?.url || "");
      setSection(editData?.section || "");
    } else {
      setButtonText("Submit");
    }
  }, [editData]);

  useEffect(() => {
    if (!id) {
      setEditData(null);
      setInputValue("");
      setUrlValue("");
      setSection("");
      setFile(null);
    }
  }, [id]);

  useEffect(() => {
    const getEditData = async () => {
      try {
        if (!id) return;

        const res = await api.get(`dashboard/edit/${id}`);
        setEditData(res.data.data);
      } catch (err) {
        console.error(err.response.data.message || err.message);
      }
    };
    getEditData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!file || !inputValue) {
      alert("Please enter a project name and choose an image!");
      return;
    }

    try {
      if (id) {
        setLoading(true);

        const data = await api.put(`dashboard/editing/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setLoading(false);

        setEditData(null);
        setInputValue("");
        setUrlValue("");
        setSection("");
        setFile(null);

        return navigate("/admin-dashboard/projects");
      }

      setLoading(true)
      const res = await api.post("/dashboard/newproject", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false)

      setInputValue("");
      setUrlValue("");
      setSection("");
      setFile(null);
      e.target.reset();

      navigate("/admin-dashboard/projects");
    } catch (err) {
      console.error(err.response.data.message || err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="md:w-[60%] w-[80%]">
        <form onSubmit={submitHandler} className="space-y-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Your New Project Name"
            className="text-gray-800 w-full h-10 border-1 border-blue-500 pl-2 rounded-lg outline-0  focus:border-2"
          />
          <input
            type="text"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            placeholder="Enter Your URL"
            className="text-gray-800 w-full h-10 border-1 border-blue-500 pl-2 rounded-lg outline-0  focus:border-2"
          />
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="Enter Your Section"
            className="text-gray-800 w-full h-10 border-1 border-blue-500 pl-2 rounded-lg outline-0  focus:border-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="text-gray-800 w-1/2 border-1 border-blue-500 pl-2 rounded-lg outline-0  focus:border-2 md:py-10 py-5"
          />
          {loading ? (
            <div className="h-10 mb-4 bg-blue-500 text-white w-15 rounded flex justify-center items-center">
            <Spinner />
            </div>
           ) : ( 
            <Button className="cursor-pointer h-10 mb-4 bg-blue-500 text-white block">
              {buttonText}
            </Button> 
          )} 
        </form>
      </div>
    </div>
  );
}

export default MainPage;
