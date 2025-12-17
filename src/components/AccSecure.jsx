import React from "react";

export default function AccSecure() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER */}
      <header className="py-6 flex justify-center">
        <div className="text-blue-600 font-semibold text-lg">
          PayRollSoftware
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Keep your account secure
        </h1>

        <p className="text-sm text-gray-500 max-w-sm mb-6">
          Enter your phone number and we’ll send a code to secure your account.
          No spam.
        </p>

        <div className="w-full max-w-sm text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter phone number
          </label>

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <span className="text-sm text-gray-600 mr-2">+1</span>
            <input
              type="tel"
              placeholder="Phone number"
              className="flex-1 outline-none text-sm"
            />
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Valid US/Canadian phone numbers only.
            <br />
            Message and data rates may apply.
          </p>
        </div>

        <button className="mt-6 w-full max-w-sm py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">
          Next
        </button>

        <p className="text-xs text-gray-400 mt-8 max-w-sm">
          🔒 Your data is secure and won’t be shared with anyone. Read the{" "}
          <span className="text-blue-600 cursor-pointer">
            Privacy Policy
          </span>.
        </p>
      </main>
    </div>
  );
}
