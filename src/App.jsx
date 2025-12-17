import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScreenOne from "./pages/ScreenOne";
import WaveSignup from "./components/SignUp";

export default function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="/signup" element={<WaveSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}
