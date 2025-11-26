import React from "react";
import { Outlet } from "react-router-dom";
import Main from "../../components/dashboard/Main";

function Dashboard() {
  return (
    <div className="flex !fixed top-0 h-full w-full z-100 bg-white">
      <Main />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
