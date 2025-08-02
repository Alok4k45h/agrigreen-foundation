"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import {
  FaLeaf,
  FaWater,
  FaRecycle,
  FaSolarPanel,
  FaSeedling,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaTree,
  FaCloudSun,
} from "react-icons/fa";

const data = [
  {
    icon: FaTree,
    title: "Agroforestry Integration",
    practice:
      "Integrate trees with crops and livestock to enhance biodiversity, improve soil health, and sequester carbon.",
    impact:
      "Mitigates climate change, restores degraded lands, and boosts farmers' resilience.",
  },
  {
    icon: FaSeedling,
    title: "Soil Conservation",
    practice:
      "Use cover crops, rotation, and composting to maintain fertility and prevent erosion.",
    impact:
      "Improves soil health, reduces chemical inputs, and ensures long-term productivity.",
  },
  {
    icon: FaWater,
    title: "Water Conservation",
    practice:
      "Promote rainwater harvesting, drip irrigation, and watershed management.",
    impact:
      "Conserves water, improves yield, and secures water availability in dry periods.",
  },
  {
    icon: FaCloudSun,
    title: "Climate-Smart Agriculture",
    practice:
      "Introduce resilient crop varieties and agroecological practices for climate adaptation.",
    impact:
      "Enhances food security and minimizes climate risks in agriculture.",
  },
  {
    icon: FaRecycle,
    title: "Waste Management & Recycling",
    practice:
      "Implement composting, recycling of by-products, and waste-to-energy systems.",
    impact:
      "Reduces pollution, cuts emissions, and fosters circular farming economies.",
  },
  {
    icon: FaSolarPanel,
    title: "Sustainable Energy",
    practice:
      "Promote solar irrigation, biogas, and wind energy solutions for farms.",
    impact:
      "Cuts carbon footprint, lowers costs, and supports energy independence.",
  },
  {
    icon: FaChartLine,
    title: "Precision Agriculture",
    practice:
      "Use drones, sensors, and satellite data to optimize crop management.",
    impact:
      "Maximizes yield, reduces waste, and improves resource efficiency.",
  },
  {
    icon: FaUsers,
    title: "Community Empowerment",
    practice:
      "Mobilize rural youth, women groups, and farmer collectives for shared knowledge.",
    impact:
      "Drives local development, improves market access, and promotes gender equity.",
  },
  {
    icon: FaGraduationCap,
    title: "Farmer Education",
    practice:
      "Offer training in agroforestry, sustainable practices, and new technologies.",
    impact:
      "Empowers farmers with knowledge for greener livelihoods and better decisions.",
  },
  {
    icon: FaLeaf,
    title: "Monitoring & Evaluation",
    practice:
      "Track environmental and socio-economic impacts of sustainable farming initiatives.",
    impact:
      "Enables data-driven decisions and scalable, successful models.",
  },
];



export default function WhatWeAreDoing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);


  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const Icon = data[activeIndex].icon;

  return (
    <section
      className="relative py-20 bg-fixed bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://miro.medium.com/v2/resize:fit:1400/1*8N-A6T0wpTZPVsOqTAhDKg.jpeg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
           🌱 What We Are Doing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Large Card */}
          <motion.div
            className="col-span-1 md:col-span-2 bg-white backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/20 h-[220px] w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl"><Icon /></div>
              <h3 className="text-2xl font-bold text-green-500 font-[Playfair]">
                {data[activeIndex].title}
              </h3>
            </div>
            <p className="text-black mb-4 font-[Roboto] leading-relaxed">
              <strong className="text-green-500">Issue:</strong> {data[activeIndex].practice}
            </p>
            
            <p className="text-black font-[Roboto] leading-relaxed">
              <strong className="text-green-500">Impact:</strong> {data[activeIndex].impact}
            </p>
          </motion.div>

          {/* Carousel with Arrows Below */}
          <div className="col-span-1 flex flex-col items-center justify-between">
            <Swiper
              direction="vertical"
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 3000 }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="h-[520px] w-full"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`transition-all duration-300 p-4 rounded-xl shadow-md border border-white/10 bg-white hover:bg-white/20 ${
                      index === activeIndex
                        ? "scale-105 ring-2 ring-green-500"
                        : "opacity-80"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-xl"><item.icon /></div>
                      <h4 className="text-md font-semibold text-green-500">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-black line-clamp-3">
                      {item.practice}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows Below Carousel */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handlePrev}
                className="text-black bg-white hover:bg-white/60 rounded-full p-2 transition"
              >
                <FaArrowCircleLeft className="text-4xl" />
              </button>
              <button
                onClick={handleNext} className="text-black bg-white hover:bg-white/60 rounded-full p-2 transition"
                
              >
                <FaArrowCircleRight className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
