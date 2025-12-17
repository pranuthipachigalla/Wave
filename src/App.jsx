import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import ScreenOne from "./pages/ScreenOne";
import WaveSignup from "./components/SignUp";
import StepThree from "./components/StepThree";
import AccSecure from "./components/AccSecure";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="/signup" element={<WaveSignup />} />
        <Route path="/step3" element={<StepThree />} />
        <Route path="/accountSecure" element={<AccSecure />} />
      </Routes>
      <Footer />
    </Router>
  );
}
