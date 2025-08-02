"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const data = [
    {
      icon: "🌍",
      title: "Climate Change and Its Impact on Agriculture",
      issue:
        "Climate change poses significant challenges to agriculture, including altered rainfall patterns, extreme weather events, and rising temperatures that negatively affect crop yields and food security.",
      approach:
        "We promote climate-smart agriculture and agroforestry practices that enhance resilience to climate change by improving soil health, increasing biodiversity, and diversifying crop production systems.",
    },
    {
      icon: "🌱",
      title: "Soil Degradation and Erosion",
      issue:
        "Unsustainable farming practices, such as excessive tilling and monoculture, lead to soil degradation and erosion, reducing agricultural productivity.",
      approach:
        "We advocate for soil conservation techniques such as cover cropping, crop rotation, and agroforestry to restore soil health and prevent erosion.",
    },
    {
      icon: "🌳",
      title: "Deforestation and Loss of Biodiversity",
      issue:
        "Deforestation and the loss of biodiversity due to agricultural expansion and unsustainable land-use practices are major contributors to environmental degradation.",
      approach:
        "Through agroforestry and tree-based farming systems, we encourage the restoration of degraded lands and the promotion of biodiversity, supporting ecosystems while improving agricultural productivity.",
    },
    {
      icon: "💧",
      title: "Pollution from Agricultural Practices",
      issue:
        "The use of synthetic fertilizers, pesticides, and improper waste disposal contributes to soil and water pollution, adversely affecting the environment and human health.",
      approach:
        "We promote organic farming, integrated pest management, and waste recycling practices to reduce pollution and minimize the use of harmful chemicals in agriculture.",
    },
    {
      icon: "♻️",
      title: "Waste Management and Pollution",
      issue:
        "Improper waste disposal in rural and agricultural areas leads to environmental pollution, including plastic waste and the burning of crop residues, which contribute to air pollution.",
      approach:
        "We advocate for sustainable waste management solutions, including recycling, composting, and using agricultural waste for energy production, reducing both pollution and waste in farming communities.",
    },
    {
      icon: "⚡",
      title: "Energy Inefficiency and Dependence on Fossil Fuels",
      issue:
        "Rural communities often rely on traditional, inefficient energy sources, such as wood and fossil fuels, leading to deforestation, health problems, and greenhouse gas emissions.",
      approach:
        "We promote the adoption of clean, renewable energy solutions, such as solar energy for irrigation and biogas plants for cooking and lighting, reducing reliance on polluting energy sources.",
    },
    {
      icon: "🚜",
      title: "Lack of Access to Sustainable Agricultural Technologies",
      issue:
        "Many farmers, particularly in rural areas, lack access to modern technologies and knowledge that could help improve productivity and sustainability.",
      approach:
        "We work to provide farmers with access to the latest agricultural technologies, such as precision farming tools, soil sensors, and climate-resilient crop varieties, enabling them to make informed decisions and improve their yields sustainably.",
    },
    {
      icon: "💰",
      title: "Rural Poverty and Limited Economic Opportunities",
      issue:
        "Many rural communities face economic hardship, with limited access to markets, financial resources, and business opportunities, especially for women and youth.",
      approach:
        "By organizing farmers into self-help groups and producer companies, we help create opportunities for economic growth, access to markets, and financial support, empowering rural youth and women to become leaders in sustainable farming.",
    },
    {
      icon: "♀️",
      title: "Gender Inequality in Agriculture",
      issue:
        "Women, particularly in rural communities, often face barriers to land ownership, access to resources, and decision-making power in agriculture.",
      approach:
        "We focus on gender inclusion by supporting women’s self-help groups, ensuring women have access to resources, training, and opportunities to take leadership roles in sustainable agricultural practices.",
    },
    {
      icon: "🤝",
      title: "Fragmented Farming Communities and Lack of Collective Action",
      issue:
        "Fragmented farming communities often lack the ability to collaborate and share resources, limiting their impact and access to larger markets or technological advancements.",
      approach:
        "We facilitate the formation of community organizations such as farmer producer companies and cooperatives, enabling farmers to work together, share knowledge, and access better resources, services, and markets.",
    },
  ]

export default function HomeIssues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section
      id="issueSection"
      className="relative py-20 bg-fixed bg-cover bg-center text-white backdrop-blur-xl"
      style={{
        backgroundImage:
          "url('https://miro.medium.com/v2/resize:fit:1400/1*8N-A6T0wpTZPVsOqTAhDKg.jpeg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 ">
          Issues We Address
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Large Card */}
          <motion.div
            className="col-span-1 md:col-span-2 bg-white backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/20 h-[320px] w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">{data[activeIndex].icon}</div>
              <h3 className="text-2xl font-bold text-green-500 font-[Playfair]">
                {data[activeIndex].title}
              </h3>
            </div>
            <p className="text-black mb-4 font-[Roboto] leading-relaxed">
              <strong className="text-green-500">Issue:</strong> {data[activeIndex].issue}
            </p>
            <p className="text-black mb-4 font-[Roboto] leading-relaxed">
              <strong className="text-green-500">Our Approach:</strong> {data[activeIndex].approach}
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
                      <div className="text-xl">{item.icon}</div>
                      <h4 className="text-md font-semibold text-green-500">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-black line-clamp-3">
                      {item.issue}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows Below Carousel */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handlePrev}
                className="text-green-800 bg-white hover:bg-white/60 rounded-full p-2 transition"
              >
                <FaArrowCircleLeft className="text-4xl" />
              </button>
              <button
                onClick={handleNext} className="text-green-800 bg-white hover:bg-white/60 rounded-full p-2 transition"
                
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

