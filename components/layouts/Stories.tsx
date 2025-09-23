"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const stories = [
  {
    id: 1,
    name: "Dr. Vandana Shiva (Environmental activist and author)",
    description:
      "Harmony with nature should not be considered a luxury but a necessity.",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/c_crop,ar_1:1,e_improve,e_sharpen/v1756994866/VandanaShiva_dffjwj.webp",
  },
  {
    id: 2,
    name: "Mahatma Gandhi",
    description:
      "The earth provides enough to satisfy every man's needs, but not every man's greed.",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/c_crop,ar_1:1,e_improve,e_sharpen/v1756995360/Mahatma_mhhxna.jpg",
  },
  {
    id: 3,
    name: "Wangari Maathai (Nobel Peace Prize Laureate & Environmentalist)",
    description:
      "When we plant trees, we plant the seeds of peace and hope.",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/c_crop,ar_1:1,e_improve,e_sharpen/v1756996433/Wangar%C4%A9_Maathai_glzzcp.png",
  },
  {
    id: 4,
    name: "Chinese Proverb",
    description:
      "The best time to plant a tree was 20 years ago. The second-best time is now.",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/c_crop,ar_1:1,e_improve,e_sharpen/v1758551457/Proverbs_1_1200_800_80_dqiwk7.jpg",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h3 className="text-green-600 text-lg md:text-xl font-medium tracking-wide font-serif">
            Latest Stories
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-2 leading-snug">
            People & Ideas Making a Difference
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] group">
                {/* Background with overlay */}
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146023/StoriesBG_myznym.jpg')] bg-cover bg-center z-0" />
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Content */}
                <div className="relative z-20 p-6 flex flex-col items-center justify-between min-h-[380px] text-white text-center">
                  <Image
                    src={story.image}
                    alt={`Photo of ${story.name}`}
                    width={120}
                    height={120}
                    className="rounded-full object-cover mb-4 border-4 border-green-300 shadow-md bg-white"
                  />
                  <p className="text-base md:text-lg leading-relaxed font-sans mb-4">
                    {story.description}
                  </p>
                  <p className="text-yellow-400 font-semibold font-serif text-lg">
                    - {story.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
