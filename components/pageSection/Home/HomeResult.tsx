"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { motion } from "framer-motion";
import { Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const results = [
  {
    id: 1,
    heading: "Enhanced Climate Resilience in Farming Communities",
    result:
      "By promoting agroforestry and climate-smart agriculture, we aim to enhance the resilience of farming communities to climate change. This includes increased crop yields, improved soil health, and reduced vulnerability to extreme weather events such as droughts and floods.",
    impact:
      "Communities will experience greater food security and sustainable farming practices that can thrive in changing environmental conditions.",
  },
  {
    id: 2,
    heading: "Restoration of Degraded Lands and Improved Biodiversity",
    result:
      "Through agroforestry and tree-based farming systems, we aim to restore degraded lands, increase forest cover, and promote biodiversity. This will help reduce deforestation, combat soil erosion, and improve local ecosystems.",
    impact:
      "A positive environmental transformation that benefits both wildlife and farmers, enhancing ecosystem services such as pollination, water retention, and soil fertility.",
  },
  {
    id: 3,
    heading: "Reduction in Pollution and Greenhouse Gas Emissions",
    result:
      "By advocating for sustainable farming practices, waste recycling, and renewable energy solutions, we aim to significantly reduce pollution, including plastic waste, chemical runoff, and carbon emissions.",
    impact:
      "Cleaner environments, healthier communities, and a reduction in agriculture-related greenhouse gas emissions, contributing to global climate change mitigation efforts.",
  },
  {
    id: 4,
    heading: "Increased Adoption of Renewable Energy Solutions",
    result:
      "Promote the use of renewable energy sources such as solar, wind, and biogas to replace traditional, polluting energy sources in farming and rural communities.",
    impact:
      "A shift towards clean, affordable energy that reduces dependence on fossil fuels, mitigates environmental damage, and improves the livelihoods of rural families by lowering energy costs.",
  },
  {
    id: 5,
    heading: "Empowered Communities and Improved Livelihoods",
    result:
      "We aim to strengthen rural communities by empowering local leaders, particularly through Agri Green community leaders and organizing rural youth into self-help groups and farmer producer companies.",
    impact:
      "Increased access to resources, markets, and education, leading to improved economic opportunities, better quality of life, and enhanced community cohesion.",
  },
  {
    id: 6,
    heading: "Gender Equality in Agriculture",
    result:
      "Through targeted support for women’s self-help groups and ensuring equal access to training, resources, and leadership opportunities, we aim to promote gender equality in agriculture and empower women in rural areas.",
    impact:
      "Women will play an integral role in decision-making, resource management, and the adoption of sustainable farming practices, contributing to stronger, more inclusive communities.",
  },
  {
    id: 7,
    heading: "Sustainable Waste Management and Circular Economy",
    result:
      "By introducing waste recycling initiatives and promoting composting, biogas production, and organic farming, we aim to create a circular economy that reduces waste and supports sustainable agricultural practices.",
    impact:
      "Decreased environmental pollution, reduced waste generation, and a more sustainable, closed-loop agricultural system.",
  },
  {
    id: 8,
    heading: "Improved Access to Sustainable Technologies",
    result:
      "We aim to increase the adoption of modern technologies in farming, including precision agriculture, digital tools, and smart irrigation systems, to optimize resource use and improve productivity.",
    impact:
      "Farmers will gain access to the latest technologies that boost efficiency, reduce costs, and increase agricultural productivity in an environmentally sustainable way.",
  },
  {
    id: 9,
    heading: "Stronger, More Resilient Farmer Networks",
    result:
      "By organizing farmers into cooperatives, producer companies, and community-based organizations, we aim to enhance collaboration, resource sharing, and market access among smallholder farmers.",
    impact:
      "Strengthened farmer networks will provide better access to financial resources, training, and collective bargaining power, improving the economic resilience of farming communities.",
  },
  {
    id: 10,
    heading: "Scalable Impact and Replication of Best Practices",
    result:
      "By 2035, we aim to create a replicable model of sustainable agriculture and natural resource management that can be scaled to reach larger populations and regions.",
    impact:
      "A widespread impact on rural communities across regions, promoting global best practices in agroforestry, waste management, and sustainable farming for a greener future.",
  },
];

export default function HomeResult() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section
      id="RESULTS-IMPACT"
      className="relative py-20 overflow-hidden bg-background"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-125 h-125 bg-nature/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-agri/5 rounded-full blur-[100px]" />

        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="text-agri font-semibold tracking-wider uppercase text-sm">
            Results & Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Our Results will Create a <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-nature via-agri to-climate">
              Real Impact
            </span>
          </h2>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16!"
          >
            {results.map((item, index) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <motion.div
                    initial={{ opacity: 0.7, scale: 0.9 }}
                    animate={{
                      opacity: isActive ? 1 : 0.7,
                      scale: isActive ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <div
                      className={`bg-linear-to-br ${
                        index % 3 === 0
                          ? "from-emerald-600/90 to-emerald-700/90"
                          : index % 3 === 1
                            ? "from-amber-600/90 to-amber-700/90"
                            : "from-blue-600/90 to-blue-700/90"
                      } backdrop-blur-xl rounded-3xl border-2 ${
                        isActive ? "border-white/50" : "border-white/20"
                      } shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 md:p-10 flex flex-col min-h-125 group`}
                    >
                      {/* Icon Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-14 h-14 rounded-2xl ${
                            index % 3 === 0
                              ? "bg-blue-500"
                              : index % 3 === 1
                                ? "bg-indigo-500"
                                : "bg-cyan-500"
                          } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          <Leaf className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-white/70 text-sm font-mono">
                          0{item.id}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                        {item.heading}
                      </h3>

                      {/* Content */}
                      <div className="space-y-4 grow">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <p className="text-sm font-semibold text-white uppercase tracking-wide">
                              Result
                            </p>
                          </div>
                          <p className="text-blue-50 text-justify text-sm md:text-base leading-relaxed pl-4">
                            {item.result}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <p className="text-sm font-semibold text-white uppercase tracking-wide">
                              Impact
                            </p>
                          </div>
                          <p className="text-blue-50 text-justify text-sm md:text-base leading-relaxed pl-4">
                            {item.impact}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Accent Line */}
                      <div
                        className={`mt-6 h-1 w-20 rounded-full ${
                          index % 3 === 0
                            ? "bg-blue-300"
                            : index % 3 === 1
                              ? "bg-indigo-300"
                              : "bg-cyan-300"
                        } group-hover:w-full transition-all duration-500`}
                      ></div>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group w-12 h-12 bg-secondary hover:bg-secondary/80 border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </button>

            <div className="text-muted-foreground text-sm font-medium">
              {activeIndex + 1} / {results.length}
            </div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group w-12 h-12 bg-secondary hover:bg-secondary/80 border border-border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
