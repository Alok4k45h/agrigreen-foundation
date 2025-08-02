"use client";


import PersonCard from "@/components/common/PersonCard";
import { motion } from "framer-motion";

const AgriTeamData = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdzADmH92YPCinCQ29lmLq_DDe4KPEjnbjg&s",
    name: "Sundar Pichai",
    position: "CEO, Google",
    linkedInLink: "https://www.linkedin.com/in/sundar-pichai/",
  },
  {
    id: 2,
    image:
      "https://media.glamour.com/photos/5696d35bfbaa9ddf58554452/master/w_1600%2Cc_limit/weddings-blogs-save-the-date-0515mark-zuckerberg-hoodiegate_fa.jpg",
    name: "Mark Zuckerberg",
    position: "CEO, Meta",
    linkedInLink: "https://www.linkedin.com/in/markzuckerberg/",
  },
  {
    id: 3,
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/1680813141-GettyImages-850154658copy.jpg?format=pjeg&auto=webp&crop=1:1",
    name: "Bill Gates",
    position: "Founder, Microsoft",
    linkedInLink: "https://www.linkedin.com/in/williamhgates/",
  },
];


export default function AgriTeam() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-green-600 text-lg md:text-xl font-medium tracking-wide font-serif">
            Team Agrigreen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-2">
            People Who Dreamt the Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {AgriTeamData.map((person) => (
            <PersonCard
              key={person.id}
              imgLink={person.image}
              name={person.name}
              position={person.position}
              linkedInLink={person.linkedInLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
