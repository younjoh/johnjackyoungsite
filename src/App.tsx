import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Achievements from "./pages/Achievements";
import FreeTime from "./pages/FreeTime";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/free-time" element={<FreeTime />} />
      </Routes>
    </HashRouter>
  );
}
