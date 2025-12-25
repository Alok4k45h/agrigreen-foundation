import React from "react";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute top-4 left-4 z-[100] -translate-y-[150%] rounded-md bg-nature px-4 py-2 text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>
  );
}