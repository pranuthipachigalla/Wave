import React from "react";
import { Link } from "react-router-dom";

export default function ScreenOne() {
  return (
    <>
      {/* Header */}
      <header className="w-full bg-[#fbf6ef] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between  h-[72px]">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-gray-900">
                PayRollSoftware
              </span>
            </div>

            {/* nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                Features <span className="text-xs">▾</span>
              </div>

              <Link to="/pricing" className="hover:text-gray-900">
                Pricing
              </Link>

              <Link to="/blog" className="hover:text-gray-900">
                Blog
              </Link>

              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                Resources <span className="text-xs">▾</span>
              </div>
            </nav>

          <div className="flex items-center gap-4">
              <Link
                to="/signin"
                className="hidden sm:inline-flex px-4 py-2 
                rounded-full border border-blue-600 text-blue-600 
                text-sm font-medium hover:bg-blue-50 transition"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                className="px-5 py-2 rounded-full bg-blue-600 
                text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                Sign up for free
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <section className="bg-[#fbf6ef] min-h-[calc(100vh-72px)]">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div className="max-w-md">
              <h1 className="text-[42px] leading-tight font-semibold text-[#1b2b6f] mb-4">
                Manage your money like a boss
              </h1>

              <p className="text-[#4a4a4a] mb-6 text-[15px]">
                Create beautiful invoices, accept online payments, and make
                accounting easy—all in one place—with Wave’s suite of money tools.
              </p>

              {/* FORM */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-[#4a4a4a] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-md border 
                    border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

              <div>
                  <label className="block text-sm text-[#4a4a4a] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                      placeholder="Create a password"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d9b3ff] text-[#2b165f] py-3 
                  rounded-full font-medium hover:bg-[#cfa2ff] transition"
                >
                  Create your free account
                </button>

                <div className="flex items-center gap-4">
                  <span className="flex-1 h-px bg-gray-300"></span>
                  <span className="text-sm text-gray-400">or</span>
                  <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* Google */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center 
                  gap-3 border border-gray-300 py-3 rounded-full hover:bg-gray-50 transition"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">
                    Sign up with Google
                  </span>
                </button>

                {/* Microsoft */}
                <button
                  type="button"
                  className="w-full flex items-center 
                  justify-center gap-3 border border-gray-300 
                  py-3 rounded-full hover:bg-gray-50 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">
                    Sign up with Microsoft
                  </span>
                </button>

              </form>

              <p className="text-xs text-gray-500 mt-4">
                By signing up, you are indicating that you have read and agree to
                the{" "}
                <span className="text-blue-600 cursor-pointer">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="text-blue-600 cursor-pointer">
                  Privacy Policy
                </span>.
              </p>
            </div>

           {/* Right img */}
            <div className="hidden lg:flex justify-center items-center">
              <img
                src="/assets/images/Screenone.png"
                alt="Wave illustration"
                className="mt-[50px] max-w-[520px] w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
