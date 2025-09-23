"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className="max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-8 text-center">
            In the World of Agri Green
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10 text-justify font-light">
            We are a passionate and diverse team of professionals dedicated to
            creating a sustainable future through youth participation in
            agroforestry promotion. Our mission is to combat climate change,
            restore ecosystems, and address pressing environmental challenges
            by integrating innovative agricultural practices with cutting-edge
            technology.
            <br />
            <br />
            Our team consists of experts from a wide range of fields, including
            agriculture, environment, forestry, and technology, all working
            collaboratively to implement best practices in crop production and
            land management. By combining traditional knowledge with modern
            advancements, we empower communities to adopt sustainable solutions
            that nurture both the land and its people.
            <br />
            <br />
            We are committed to driving positive change, ensuring agroforestry
            becomes a key strategy in building a resilient, greener world for
            future generations.
          </p>

          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Agri Green Mission Video"
              allowFullScreen
              className="w-full h-75 rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
