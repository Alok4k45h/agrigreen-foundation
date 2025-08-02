"use client";

import { FaUniversity, FaCopy} from "react-icons/fa";
import { useState } from "react";

const bankDetails = [
  { label: "Account Name", value: "" },
  { label: "Bank Name", value: "Canara Bank" },
  { label: "Account Number", value: "4569201000036" },
  { label: "IFSC Code", value: "CNRB0004569" },
  { label: "Branch", value: "" },
  { label: "UPI ID", value: "" },
];

export default function DonationBankDetails() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="DonationBankDetails" className="bg-green-50 py-12 px-6 md:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Support Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700">
            You can support <strong>AgriGreen Foundation</strong> by making a donation to our verified bank account.
            Your contribution helps us in our sustainable and climate-resilient agricultural mission.
          </p>
        </div>

        <div className="bg-white border border-green-200 shadow-md rounded-xl p-6 md:p-10 space-y-6 text-left">
          <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
            <FaUniversity className="text-green-600" /> Bank Account Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {bankDetails.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-green-100 rounded-lg p-4 group">
                <div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="font-semibold text-green-900">{item.value}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(item.value, item.label)}
                  className="text-green-700 hover:text-green-900 transition"
                  title={`Copy ${item.label}`}
                >
                  <FaCopy />
                </button>
              </div>
            ))}
          </div>

          {copied && (
            <p className="text-sm text-green-600 font-medium mt-2">
              ✅ <strong>{copied}</strong> copied to clipboard!
            </p>
          )}
        </div>

        <div className="text-sm text-gray-600">
          For any queries or confirmation, contact us at{" "}
          <a href="mailto:contact@agrigreen.org" className="text-green-700 font-medium underline">
            agrigreen.agf@gmail.com
          </a>
          {" "} or fill out our below contact form. we will get back to you as soon as possible.
        </div>
      </div>
    </section>
  );
}
