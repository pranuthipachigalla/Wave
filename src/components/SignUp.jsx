import React, { useState } from "react";

export default function WaveSignup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white font-inter">
      <div className="w-full max-w-[420px] px-6 text-center">

        {/* LOGO */}
        <div className="mb-6 flex justify-center items-center gap-2">
          <span className="text-xl font-semibold text-gray-900">wave</span>
        </div>

        {/* HEADING */}
        <h1 className="text-[26px] font-semibold text-gray-900 mb-2">
          Check out Wave — it’s free!
        </h1>

        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          Wave helps freelancers, consultants, and small businesses around the
          world simplify their finances.
        </p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* PASSWORD */}
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600"
          >
            Show
          </button>
        </div>


       <button
        className="w-full bg-blue-600 text-white py-3 rounded-full text-sm font-semibold mb-5 hover:bg-blue-700 transition"
        >
        Get started
        </button>


        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-5">
          <span className="flex-1 h-px bg-gray-200"></span>
          <span className="text-xs text-gray-400">or</span>
          <span className="flex-1 h-px bg-gray-200"></span>
        </div>

        {/* GOOGLE BUTTON */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>

        {/* FOOTER TEXT */}
        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          By signing up, you are indicating that you have read and agree to the{" "}
          <span className="text-blue-600 cursor-pointer">Terms of Use</span> and{" "}
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
        </p>

        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer font-medium">
            Sign in now.
          </span>
        </p>
      </div>
    </section>
  );
}
