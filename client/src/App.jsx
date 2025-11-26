import React, { useState, useEffect, useRef, useContext } from "react";

import Menu from "./components/menu/Menu";
import Topbar from "./components/Topbar/Topbar";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Porto from "./pages/Porto";
import Testo from "./pages/Testo";
import Cont from "./pages/Cont";
import ErrorMessage from "./pages/ErrorMessage";
import "./app.scss";
import MainPage from "./pages/AdminDashoard/MainPage";
import Projects from "./pages/AdminDashoard/Projects";
import UserContext from "./store/data";

import Login from "./pages/Login/login";
import Signup from "./pages/Login/signup";
import Terms from "./pages/Login/Terms";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import VerifyOtp from "./pages/Login/VerifyOtp";
import Main from "./components/dashboard/Main";
import Dashboard from "./pages/AdminDashoard/Dashboard";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCv, setShowcv] = useState(false);
  const { data } = useContext(UserContext);
  console.log(data, "from app js");

  useEffect(() => {
    setInterval(() => {
      const size = window.innerWidth;

      if (size < 768) {
        setShowcv(true);
      } else {
        setShowcv(false);
      }
    }, 100);
  }, []);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} showCv={showCv} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} showCv={showCv} />
      <div className="sections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Porto />} />
          <Route path="/testimonials" element={<Testo />} />
          <Route path="/contact" element={<Cont />} />
          <Route path="/admin-dashboard" element={<Dashboard/>}>
            <Route
              index
              element={
                <ProtectedRoute requiredRole="admin">
                  <MainPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="projects"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Projects />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/signup/verify-otp" element={<VerifyOtp />} />
          <Route path="/*" element={<ErrorMessage />} />
        
        </Routes>
      </div>
    </div>
  );
};

export default App;
