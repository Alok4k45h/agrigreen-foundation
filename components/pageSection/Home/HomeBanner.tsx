"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Typewriter from "typewriter-effect";
import { FaGlobe, FaSeedling } from "react-icons/fa";
import { useRef } from "react";

export default function HomeBanner() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      renderMode: "performance",
      created() {
        clearInterval(timerRef.current!);
        timerRef.current = setInterval(() => {
          instanceRef.current?.next();
        }, 5000);
      },
    },
    []
  );

  const images = [
    "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146023/HomeBanner1_gwvgm6.webp",
    "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146025/HomeBanner2_megxac.png",
    "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146025/HomeBanner3_dgzila.png",
  ];

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Homepage Banner Carousel"
    >
      {/* Slider Background */}
      <div ref={sliderRef} className="keen-slider absolute inset-0 z-0">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide relative">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-screen object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div
              className="absolute inset-0 bg-black/50 z-10"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[45%] text-white">
        <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/30 transition-all animate-fade-in space-y-4">
          <h3 className="text-lg md:text-xl font-semibold flex items-center font-poppins">
            <FaGlobe className="text-green-300 mr-2" />
            Uniting Nature, Climate & Agriculture
          </h3>

          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg text-white font-[Protest]">
            <Typewriter
              options={{
                strings: [
                  "Cultivating a Greener Future",
                  "Empowering Sustainable Growth",
                  "Revolutionizing Agriculture",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </h1>

          <h3 className="text-lg md:text-xl font-semibold flex items-center font-poppins">
            <FaSeedling className="text-green-400 mr-2" />
            Introducing
          </h3>

          <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl font-[Playfair_Display]">
            <span className="text-yellow-400 text-6xl">a</span>gri
            <span className="text-green-500 text-6xl">G</span>reen
            <span className="block md:inline text-white text-xl font-normal ml-2">
              Foundation
            </span>
          </h2>

          <p className="italic text-sm md:text-base text-white/90">
            The future of farming lies in sustainability. Join the revolution 🌾
          </p>

          <a
            href="#issueSection"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Explore More 🌎
          </a>
        </div>
      </div>
    </section>
  );
}
