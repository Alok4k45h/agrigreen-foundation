"use client";

import PersonCard from "@/components/common/PersonCard";
import { motion } from "framer-motion";
import { useState } from "react";
import PersonModal from "@/components/common/PersonModal";

const AgriTeamData = [
  {
    id: 1,
    imgLink:
      "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758638863/Kamal-web_zkqpih.jpg",
    name: "Kamal Krishna Singh",
    position: "Founder & Secretary",
    linkedInLink: "https://www.linkedin.com/in/dr-kamal-krishna-singh-942071109",
    description: `A seasoned professional with hands-on experience of building agri-tech start-ups, innovative farming solutions and market linkages for rural communities
    Holds a Doctorate in Biotechnology, GATE IIT Kharagpur and further from IIM, Indore`,
  },
  {
    id: 2,
    imgLink:
      "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758639094/Nitish_kkschi.jpg",
    name: "Nitish Shankar",
    position:
      "Member - President",
    linkedInLink:
      "https://www.linkedin.com/in/nitish-shankar-36454819",
    description: `An NRLM Fellow - Govt. of India and expert in promoting livelihood enhancement programs for rural youth, farm-based plantations & digitization of agriculture. Holds Post Graduate Diploma in Forestry Management from IIFM, Bhopal`,
  },
  {
    id: 3,
    imgLink:
"",
    name: "Dhananjay Kumar",
    position: "Member - Treasurer",
    linkedInLink: "",
    description: `An expert in rural development and management of information system. Hands-on experience in project management & stakeholders’ engagement.Holds a Doctorate in Biotechnology, BIT- Mesra`,
  },
];

export default function AgriTeam() {
  const [selectedPerson, setSelectedPerson] = useState<typeof AgriTeamData[0] | null>(null);

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
            Team Agri Green
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-2">
            People Who Dreamt the Vision
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {AgriTeamData.map((person) => (
            <PersonCard
              key={person.id}
              {...person}
              onViewBio={() => setSelectedPerson(person)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedPerson && (
          <PersonModal
            person={selectedPerson}
            onClose={() => setSelectedPerson(null)}
          />
        )}
      </div>
    </section>
  );
}
