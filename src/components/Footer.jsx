import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2b2b2b] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-2 flex items-center">

        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#1f6cff] rounded-md flex items-center justify-center text-xl font-bold leading-none">
            w
          </div>
          <span className="text-xl font-semibold tracking-wide leading-none">
            Wave
          </span>
        </div>

        {/* Right: Credit */}
        <div className="flex items-center gap-10 text-xl text-gray-200 ml-auto leading-none">
          <span className="font-medium">
            curated by
          </span>
          <span className="font-extrabold text-white tracking-wide">
            Mobbin
          </span>
        </div>

      </div>
    </footer>
  );
}
