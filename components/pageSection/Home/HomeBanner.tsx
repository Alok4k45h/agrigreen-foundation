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
    
    "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1756060473/HomeBanner_p2vmfk.jpg",
    "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1756060905/HomeBanner1_wedumx.jpg",
    "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1756387278/HomeBanner6_hdua27.jpg",
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
      <div className="absolute top-1/2 left-1/2 md:left-1/3 z-30 transform -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[45%] text-white">
        <div className="space-y-4">
          <h3 className="text-md md:text-xl font-semibold flex items-center font-poppins">
            <FaGlobe className="text-green-300 mr-2" />
            Uniting Nature, Climate & Agriculture
          </h3>

          <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg text-white ml-4">
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

          <h3 className="text-md md:text-xl font-semibold flex items-center font-poppins">
            <FaSeedling className="text-green-400 mr-2" />
            Introducing the world of 
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg text-white ml-4">
            <span className="text-yellow-400 text-5xl md:text-6xl">a</span>gri🌾
            {" "}
            <span className="text-green-500 text-5xl md:text-6xl">G</span>reen
            <FaSeedling className="text-green-400 ml-2 inline-block" />
          </h2>

          <p className="italic text-sm md:text-base text-white/90">
            The future of farming lies in sustainability.<br /> Join the revolution 🌾
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
