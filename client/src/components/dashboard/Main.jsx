import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Login/ui/button";

function Main() {
  const clickHandler = async () => {
    try {
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:w-44 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col">
      <div className="flex felx-col pt-5">
        <div className="flex flex-col w-50">
          <div className="w-px h-24 bg-gray-400 flex-2"></div>
          <Link to="/">
            <button className="bg-red-500 hover:bg-red-400 py-3 rounded-sm w-full px-3 mb-2 text-white cursor-pointer">
              Home
            </button>
          </Link>
          <Link to="/admin-dashboard">
            <button className="bg-red-500 hover:bg-red-400 py-3 rounded-sm w-full px-3 mb-2 text-white cursor-pointer">
              Add new project
            </button>
          </Link>
          <Link to="projects">
            <button className="bg-red-500 hover:bg-red-400 py-3 rounded-sm w-full px-3 mb-2 text-white cursor-pointer">
              Projects
            </button>
          </Link>
          <button
            onClick={clickHandler}
            className="bg-red-500 hover:bg-red-400 py-3 rounded-sm w-full px-3 mb-2 text-white cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
// md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col
