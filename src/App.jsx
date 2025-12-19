import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import ScreenOne from "./pages/ScreenOne";
import WaveSignup from "./components/SignUp";
import StepThree from "./components/StepThree";
import AccSecure from "./components/AccSecure";
import Welcome from "./components/Welcome";
import Welcome2Page from "./components/Welcome-Step2";
import VerifyCode from './components/CodeVerify'
import ProfessionalInvoicing from "./components/Invoice";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="/signup" element={<WaveSignup />} />
        <Route path="/step3" element={<StepThree />} />
        <Route path="/accountSecure" element={<AccSecure />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/welcome2" element={<Welcome2Page />} />
        <Route path="/invoice" element={<ProfessionalInvoicing />} />

        <Route path="/Verify" element={<VerifyCode />} />
      </Routes>
      <Footer />
    </Router>
  );
}
