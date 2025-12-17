import React, { useState } from "react";

export default function StepTwo() {
    const [year, setYear] = useState("");
    const [yearOpen, setYearOpen] = useState(false);
    const [yearSearch, setYearSearch] = useState("");

    const [customers, setCustomers] = useState("");
    const [payments, setPayments] = useState("");

    const years = [
        "2024",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
    ];

    const isEnabled =
        year !== "" &&
        customers !== "" &&
        payments !== "";

    const [paymentMethod, setPaymentMethod] = useState("");
    const [paymentOpen, setPaymentOpen] = useState(false);

    const paymentOptions = [
        "PayPal",
        "Bank transfers/ACH",
        "Cash App",
        "Venmo",
        "Cash or Check",
    ];


    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT SECTION — Illustration placeholder */}
            <div className="hidden lg:flex flex-col items-center justify-center bg-[#FBF7F2] relative px-16">
                <span className="absolute top-16 text-xs font-bold tracking-wide text-violet-500">
                    STEP 2 OF 3
                </span>

                {/* Illustration */}
                <img
                    src="src/assets/illustration.png"   // replace later if needed
                    alt="Illustration"
                    className="w-[360px] mb-10 bg-transparent"
                />

                <h2 className="text-[22px] font-semibold text-gray-900 mb-3">
                    You’re one in two million
                </h2>
                <p className="text-[15px] text-gray-700 text-center leading-relaxed max-w-[360px]">
                    Wave has helped over two million small business owners in the US and
                    Canada take control of their finances.
                </p>
            </div>

            {/* RIGHT SECTION — Form */}
            <div className="flex items-start justify-center bg-white px-6 lg:px-20 py-16 lg:py-24">
                <div className="w-full max-w-[520px]">
                    <h1 className="text-[26px] font-bold text-gray-900 mb-2">
                        Tell us a little about JSMobbin
                    </h1>
                    <p className="text-[15px] font-bold text-gray-600 mb-8">
                        Your answers help us set up your account
                    </p>

                    {/* Year started — CUSTOM DROPDOWN */}
                    <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            What year did you start your business?
                        </label>

                        {/* Trigger */}
                        <button
                            type="button"
                            onClick={() => setYearOpen(!yearOpen)}
                            className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <span className={year ? "text-gray-900" : "text-gray-500"}>
                                {year || "Select a year…"}
                            </span>
                            <svg
                                className="w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Dropdown */}
                        {yearOpen && (
                            <div className="absolute z-20 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                                {/* Search */}
                                <div className="p-2 border-b border-gray-200">
                                    <div className="flex items-center gap-2 h-10 px-3 rounded-md border border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500">
                                        <svg
                                            className="w-4 h-4 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                                            />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            value={yearSearch}
                                            onChange={(e) => setYearSearch(e.target.value)}
                                            className="w-full text-sm focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Options */}
                                <ul className="list-none p-0 m-0 max-h-60 overflow-auto">
                                    {years
                                        .filter((y) =>
                                            y.toLowerCase().includes(yearSearch.toLowerCase())
                                        )
                                        .map((y) => (
                                            <li
                                                key={y}
                                                onClick={() => {
                                                    setYear(y);
                                                    setYearOpen(false);
                                                    setYearSearch("");
                                                }}
                                                className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50"
                                            >
                                                {y}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Customers */}
                    <div className="mt-8">
                        <label className="block text-sm font-medium text-gray-900 mb-3">
                            How many customers do you have?
                        </label>

                        <div className="grid grid-cols-4 gap-3">
                            {["0–1", "2–5", "6–10", "11+"].map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setCustomers(item)}
                                    className={`h-11 rounded-md border text-sm font-medium transition
                      ${customers === item
                                            ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                                            : "border-gray-300 text-gray-900 hover:border-indigo-500 hover:bg-indigo-50"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <p className="mt-3 text-sm text-gray-500">
                            Invoice as many customers as you like for free with Wave
                        </p>
                    </div>

                    {/* Payments */}
                    <div className="mb-8 mt-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Do you accept payments online?
                        </label>
                        <p className="text-xs text-gray-500 mb-3">
                            Examples: PayPal, credit cards
                        </p>

                        <div className="space-y-3">
                            {[
                                "No, I don’t",
                                "Not yet, but I want to start",
                                "Yes, I accept payments online",
                            ].map((opt) => (
                                <label key={opt} className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payments"
                                        checked={payments === opt}
                                        onChange={() => setPayments(opt)}
                                        className="w-4 h-4 focus:ring-blue-500"
                                        style={{ accentColor: '#2563eb' }}
                                    />
                                    <span className="text-sm text-gray-700">{opt}</span>
                                </label>
                            ))}
                        </div>

                        {/* CONDITIONAL DROPDOWN */}
                        {payments === "Not yet, but I want to start" && (
                            <div className="mt-4 relative border-l-2 border-blue-200 pl-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    How do most of your customers pay you?
                                </label>

                                <button
                                    type="button"
                                    onClick={() => setPaymentOpen(!paymentOpen)}
                                    className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <span className={paymentMethod ? "text-gray-900" : "text-gray-500"}>
                                        {paymentMethod || "Select how you most often get paid"}
                                    </span>
                                    <svg
                                        className="w-4 h-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {paymentOpen && (
                                    <div className="absolute z-20 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                                        <ul className="list-none p-0 m-0">
                                            {paymentOptions.map((opt) => (
                                                <li
                                                    key={opt}
                                                    onClick={() => {
                                                        setPaymentMethod(opt);
                                                        setPaymentOpen(false);
                                                    }}
                                                    className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm"
                                                >
                                                    {opt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* CTA */}
                    <button
                        disabled={!isEnabled}
                        className={`w-full h-11 rounded-full text-white text-sm font-medium transition ${isEnabled
                            ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                            : "bg-indigo-300 cursor-not-allowed"
                            }`}
                    >
                        One last step
                    </button>
                </div>
            </div>
        </div>
    );
}
