"use client";

import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export default function HomeIntro() {
  return (
    <section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 flex justify-center items-center gap-3">
          <FaLeaf className="text-green-700 animate-bounce" />
          Who We Are?
        </h1>

        <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed text-justify md:text-center font-[Roboto]">
          We are a passionate team on a mission to create a sustainable future through
          youth-driven agroforestry. By blending traditional wisdom with modern technology,
          we restore ecosystems, combat climate change, and promote sustainable farming.
        </p>

        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-700 text-green-700 hover:bg-yellow-400 hover:text-green-900 rounded-lg transition-transform hover:scale-105 font-semibold"
          >
             Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h6.293L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
