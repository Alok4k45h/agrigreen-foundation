"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const stories = [
  {
    id: 1,
    name: "Name, Designation if any",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Empowering communities to reconnect with nature for a better future.",
    image: "https://cdn-icons-png.flaticon.com/256/3001/3001758.png",
  },
  {
    id: 2,
    name: "Name & Designation if any",
    description:
      "Sustainability starts with awareness. We are inspiring change through real action and stories of impact.",
    image: "https://cdn-icons-png.flaticon.com/256/3001/3001758.png",
  },
  {
    id: 3,
    name: "Name & Designation if any",
    description:
      "From the fields to the forests, our mission is rooted in protecting the planet through every small effort.",
    image: "https://cdn-icons-png.flaticon.com/256/3001/3001758.png",
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
                    width={100}
                    height={100}
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
