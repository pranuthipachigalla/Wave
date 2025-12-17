import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScreenOne from "./pages/ScreenOne";
import WaveSignup from "./components/SignUp";
import Welcome from "./components/Welcome";
import Welcome2Page from "./components/Welcome-Step2";

export default function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="/signup" element={<WaveSignup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/welcome2" element={<Welcome2Page />} />
      </Routes>
      <Footer />
    </Router>
  );
}
