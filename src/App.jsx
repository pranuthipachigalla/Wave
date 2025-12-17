import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenOne from "./pages/ScreenOne";
import WaveSignup from "./components/SignUp";
import WelcomePage from "./components/Welcome";

export default function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="/signup" element={<WaveSignup />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}
