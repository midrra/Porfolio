import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/Login/ui/button";

function Main() {
  const navigate = useNavigate();

  const clickHandler = async () => {
    try {
      await api.post("/auth/logout");
      localStorage.removeItem("accessToken");
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:w-44 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col">
      <div className="flex felx-col pt-5">
        <div className="flex flex-col w-50">
          <div className="w-px h-24 bg-gray-400 flex-2"></div>
          <a href="/">
            <button className="bg-blue-100 hover:bg-blue-200 py-3 w-full px-3 mb-2 cursor-pointer">
              Home
            </button>
          </a>
          <Link to="/admin-dashboard">
            <button className="bg-blue-100 hover:bg-blue-200 py-3  w-full px-3 mb-2 cursor-pointer">
              Add new project
            </button>
          </Link>
          <Link to="projects">
            <button className="bg-blue-100 hover:bg-blue-200 py-3 w-full px-3 mb-2 cursor-pointer">
              Projects
            </button>
          </Link>
          <button
            onClick={clickHandler}
            className="bg-blue-100 hover:bg-blue-200 py-3 w-full px-3 mb-2 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
