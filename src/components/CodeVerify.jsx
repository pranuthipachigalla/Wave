import React, { useRef, useState } from "react";

export default function VerifyCode() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <span className="text-2xl font-bold">PayRollSoftware</span>
        </div>

        {/* enter */}
        <h1 className="text-2xl font-semibold mb-2">
          Enter verification code
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          We sent a six-digit code to{" "}
          <span className="font-medium text-gray-700">
            +1 (628) 267-9041
          </span>{" "}
          <button className="text-blue-600 hover:underline ml-1">
            Change
          </button>
        </p>

        {/* OTP input */}
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-14 text-xl text-center border 
              rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {/* Resend */}
        <p className="text-sm text-gray-500">
          Don’t see it?{" "}
          <span className="text-gray-700">
            Send a new code in <span className="font-medium">00:29</span>
          </span>
        </p>

      </div>
    </div>
  );
}
