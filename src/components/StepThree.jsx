import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { id: "invoices", title: "Send good-looking invoices", icon: "💵" },
  { id: "payroll", title: "Run easy payroll", icon: "💼" },
  { id: "books", title: "Organize your books", icon: "🧾" },
  { id: "notSure", title: "Not sure yet", icon: "❓" },
];

export default function StepThree() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const toggleOption = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      navigate("/accountSecure");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="w-1/2 bg-white flex flex-col justify-center px-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Thanks!
        </h2>
        <p className="text-gray-500">
          Next up, how can we help?
        </p>
      </div>

      {/* Right */}
      <div className="w-1/2 bg-[#fbf6ef] flex flex-col justify-center px-16">
        <p className="text-xs font-semibold text-blue-600 mb-3">
          STEP 3 OF 3
        </p>

        <h2 className="text-2xl font-semibold text-[#1b2b6f] mb-1">
          What would you like to do in Wave?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Select all that apply
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {options.map((option) => {
            const isActive = selected.includes(option.id);

            return (
              <button
                key={option.id}
                onClick={() => toggleOption(option.id)}
                className={`border rounded-xl p-6 text-center transition ${
                  isActive
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <div className="text-2xl mb-2">{option.icon}</div>
                <p className="text-sm font-medium text-gray-800">
                  {option.title}
                </p>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleContinue}
          disabled={selected.length === 0}
          className={`w-full py-3 rounded-full text-sm font-semibold transition ${
            selected.length > 0
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-200 text-white cursor-not-allowed"
          }`}
        >
          Continue to Wave
        </button>
      </div>
    </div>
  );
}
