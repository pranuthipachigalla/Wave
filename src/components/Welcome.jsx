import React, { useState } from "react";
import illustrationStep1 from "../assets/illustration-step1.png";



export default function Welcome() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");

    const [legalOpen, setLegalOpen] = useState(false);
    const [legalSelected, setLegalSelected] = useState("");

    const [subLegalOpen, setSubLegalOpen] = useState(false);
    const [subLegalSelected, setSubLegalSelected] = useState("");

    const [countryOpen, setCountryOpen] = useState(false);
    const [countrySelected, setCountrySelected] = useState("United States");

    const [currencyOpen, setCurrencyOpen] = useState(false);
    const [currencySelected, setCurrencySelected] = useState("USD ($) - U.S. dollar");



    const options = [
        "Accounting, Bookkeeping",
        "Administration Services",
        "Advertising, Marketing, Media",
        "Agriculture, Ranching, Farming",
        "Association, Club, Charity",
        "Graphic Design, Development",
        "Construction, Trades"
    ];

    const legalOptions = [
        "Sole proprietorship",
        "Limited liability company (LLC)",
        "Corporation",
        "Other",
    ];

    const subLegalOptions = [
        "Non-profit",
        "Partnership",
        "I'm not sure",
    ];

    const countryOptions = ["United States"];

    const currencyOptions = ["USD ($) - U.S. dollar"];





    function highlightMatch(text, query) {
        if (!query) return text;

        const regex = new RegExp(`(${query})`, "ig");
        const parts = text.split(regex);

        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <span key={index} className="font-semibold underline">
                    {part}
                </span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    }

    const isNextEnabled = legalSelected !== "" || subLegalSelected !== "";


    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 ">
            {/* LEFT SECTION */}
            <div className="flex items-center justify-center bg-white px-6 lg:px-20 py-16 pb-24">
                <div className="w-full max-w-[520px]">
                    {/* Heading */}
                    <h1 className="text-[28px] font-bold text-gray-900 mb-2">
                        Welcome to Wave!
                    </h1>
                    <p className="text-[15px] text-gray-600 mb-8">
                        Tell us about you and your business
                    </p>

                    {/* Name */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            What’s your name?
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="h-11 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="h-11 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Business name */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            What’s your business name?
                        </label>
                        <input
                            type="text"
                            placeholder="Your business name goes here"
                            className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Business type */}
                    <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            What does your business do?
                        </label>

                        {/* Dropdown trigger */}
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <span className={selected ? "text-gray-900" : "text-gray-500"}>
                                {selected || "Select what best describes your business"}
                            </span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown */}
                        {open && (
                            <div className="absolute z-20 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                                {/* Search */}
                                <div className="p-2 border-b border-gray-200">
                                    <div className="
                                        flex items-center gap-2 rounded-md px-3 h-10
                                        border border-gray-300
                                        hover:border-indigo-500
                                        focus-within:border-indigo-500
                                        focus-within:ring-2
                                        focus-within:ring-indigo-500
                                        transition
                                        ">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-full text-sm focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Options */}
                                <ul className="list-none p-0 m-0">
                                    {options
                                        .filter((opt) =>
                                            opt.toLowerCase().includes(search.toLowerCase())
                                        )
                                        .map((opt) => (
                                            <li
                                                key={opt}
                                                onClick={() => {
                                                    setSelected(opt);
                                                    setOpen(false);
                                                    setSearch("");
                                                }}
                                                className="px-4 py-2 cursor-pointer hover:bg-blue-50 transition-colors"
                                            >
                                                {highlightMatch(opt, search)}
                                            </li>
                                        ))}
                                </ul>


                            </div>
                        )}
                    </div>

                    {/* Legal structure */}
                    <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            What is the legal structure of your business?
                        </label>

                        <button
                            type="button"
                            onClick={() => setLegalOpen(!legalOpen)}
                            className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <span className={legalSelected ? "text-gray-900" : "text-gray-500"}>
                                {legalSelected || "Select your business type"}
                            </span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {legalOpen && (
                            <div className="absolute z-20 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                                <ul className="list-none p-0 m-0">
                                    {legalOptions.map((opt) => (
                                        <li
                                            key={opt}
                                            onClick={() => {
                                                setLegalSelected(opt);
                                                setLegalOpen(false);
                                                setSubLegalSelected("");
                                            }}
                                            className="px-4 py-2 cursor-pointer hover:bg-blue-50"
                                        >
                                            {opt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {legalSelected === "Other" && (
                        <div className="mb-6 relative border-l-2 border-blue-200 pl-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Is it one of these business types?
                            </label>

                            {/* Sublegal dropdown */}
                            <button
                                type="button"
                                onClick={() => setSubLegalOpen(!subLegalOpen)}
                                className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <span className={subLegalSelected ? "text-gray-900" : "text-gray-500"}>
                                    {subLegalSelected || "Select your business type"}
                                </span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {subLegalOpen && (
                                <div className="absolute z-20 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                                    <ul className="list-none p-0 m-0">
                                        {subLegalOptions.map((opt) => (
                                            <li
                                                key={opt}
                                                onClick={() => {
                                                    setSubLegalSelected(opt);
                                                    setSubLegalOpen(false);
                                                }}
                                                className="px-4 py-2 cursor-pointer hover:bg-blue-50"
                                            >
                                                {opt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* after Partnership */}
                            {subLegalSelected === "Partnership" && (
                                <>
                                    {/* Business country */}
                                    <div className="mt-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Business country
                                        </label>

                                        <button
                                            type="button"
                                            onClick={() => setCountryOpen(!countryOpen)}
                                            className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <span className="text-gray-900">{countrySelected}</span>
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {countryOpen && (
                                            <div className="absolute z-20 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                                                <ul className="list-none p-0 m-0">
                                                    {countryOptions.map((opt) => (
                                                        <li
                                                            key={opt}
                                                            onClick={() => {
                                                                setCountrySelected(opt);
                                                                setCountryOpen(false);
                                                            }}
                                                            className="px-4 py-2 cursor-pointer hover:bg-blue-50"
                                                        >
                                                            {opt}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Business currency */}
                                    <div className="mt-6">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                            Business currency
                                            <span className="text-gray-400 cursor-pointer">?</span>
                                        </label>

                                        <button
                                            type="button"
                                            onClick={() => setCurrencyOpen(!currencyOpen)}
                                            className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <span className="text-gray-900">{currencySelected}</span>
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {currencyOpen && (
                                            <div className="absolute z-20 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                                                <ul className="list-none p-0 m-0">
                                                    {currencyOptions.map((opt) => (
                                                        <li
                                                            key={opt}
                                                            onClick={() => {
                                                                setCurrencySelected(opt);
                                                                setCurrencyOpen(false);
                                                            }}
                                                            className="px-4 py-2 cursor-pointer hover:bg-blue-50"
                                                        >
                                                            {opt}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    )}


                    {/* Country note */}
                    <p className="text-xs text-gray-600 mb-6">
                        Looks like your business is in the <span className="font-bold">United States</span> and you do business in <span className="font-bold">U.S. dollars</span>.<br />
                        <span className="text-indigo-600 cursor-pointer hover:underline font-bold">Change this</span>.
                    </p>

                    {/* Button */}
                    <button
                        className={`w-full h-11 rounded-full text-white text-sm font-medium transition
                       ${isNextEnabled
                                ? "bg-blue-700 hover:bg-blue-800 cursor-pointer"
                                : "bg-indigo-300 cursor-not-allowed"
                            }`}
                        disabled={!isNextEnabled}
                        onClick={() => {
                            if (isNextEnabled) {
                                window.location.href = '/Welcome2';
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="relative hidden lg:flex items-center justify-center bg-[#FBF7F2] w-full min-h-screen">
                <div className="absolute top-8 text-xs font-semibold tracking-wide text-indigo-500 z-10">
                    STEP 1 OF 3
                </div>

                {/* CARD */}
                <div className="relative w-[420px] h-[520px] bg-white rounded-2xl shadow-xl flex items-center justify-center">
                    <img
                        src={illustrationStep1}
                        alt="illustration-step 1"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
            );
        }
