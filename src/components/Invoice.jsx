import React from "react";

export default function ProfessionalInvoicing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HEADER  */}
      <header className="h-14 bg-[#f7fbff] border-b border-gray-200 flex items-center justify-between px-6">
        {/* Left logo */}
        <div className="flex items-center gap-3 ml-2">
          {/* <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">
            P
          </div> */}
          <span className="text-lg font-semibold text-gray-900">
            PayRollSoftware
          </span>
        </div>

        {/* Right dropdown */}
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-3 py-1.5 rounded-md border border-gray-200">
          JSMobbin
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </header>

      {/* BODY */}
      <div className="flex flex-1">
        {/* SIDEBAR  */}
        <aside className="w-[240px] border-r border-gray-200 px-4 py-6 relative">
          {/* Create new */}
          <button className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-6">
            <span className="text-lg">＋</span> Create new
          </button>

          {/* Nav */}
          <nav className="space-y-1 text-sm">
            {[
              "Launchpad",
              "Dashboard",
              "Sales & Payments",
              "Purchases",
              "Receipts",
              "Accounting",
              "Banking",
              "Payroll",
              "Reports",
              "Wave Advisors",
              "Tax Filing",
            ].map((item) => (
              <div
                key={item}
                className={`px-3 py-2 rounded-md cursor-pointer flex items-center justify-between
                ${
                  item === "Launchpad"
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>{item}</span>

                {item === "Receipts" && (
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                    New
                  </span>
                )}
                {item === "Payroll" && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    Trial
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="absolute bottom-6 left-4 right-4 text-sm">
            <p className="text-gray-700 font-medium mb-1">
              Accept credit cards & bank payments
            </p>
            <button className="text-blue-600 font-medium">
              Set up now →
            </button>
          </div>
        </aside>

        {/*  MAIN CONTENT  */}
        <main className="flex-1 flex flex-col items-center justify-center px-6">
          <h1 className="text-[28px] font-semibold text-gray-900 mb-2">
            Professional invoicing
          </h1>

          <p className="text-gray-600 text-center max-w-[620px] leading-relaxed mb-10">
            It’s more than just a way to say “pay me”
            <br />
            <span className="text-sm text-gray-500">
              The care and detail you put into invoicing can do wonders for your
              brand and future business. Take stock actions to show customers
              the best you have to offer.
            </span>
          </p>

          {/* Action cards */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            {[
              { label: "Create invoices", icon: "💲" },
              { label: "Add customers", icon: "👤" },
              { label: "Accept payments", icon: "💳" },
              { label: "Create estimates", icon: "📄" },
            ].map((card) => (
              <div
                key={card.label}
                className="w-[170px] h-[140px] border border-gray-200 rounded-xl
                flex flex-col items-center justify-center gap-3
                hover:shadow-md transition cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-lg">
                  {card.icon}
                </div>
                <p className="text-sm font-medium text-gray-900 text-center">
                  {card.label}
                </p>
              </div>
            ))}
          </div>

          <button className="text-sm text-blue-600 font-medium">
            Choose a different starting point
          </button>
        </main>
      </div>

      {/* Help button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white text-xl shadow-lg">
        ?
      </button>
    </div>
  );
}
