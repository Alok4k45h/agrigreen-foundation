import FaqItem from "@/components/common/FaqItem";
import Image from "next/image";

const faqs = [
  {
    question: "What is Agroforestry?",
    answer:
      "Agroforestry integrates trees with crops and livestock to promote biodiversity, improve soil health, and support sustainable farming.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "Join our volunteer programs for agroforestry initiatives, youth mentorship, and green tech projects by signing up on our website.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your donations support sapling plantations, farmer training, community development, and technology-driven sustainability projects.",
  },
  {
    question: "What are the benefits of joining as a partner?",
    answer:
      "Partners gain access to collaborative research, sustainable supply chains, CSR programs, and enhanced environmental impact opportunities.",
  },
  {
    question: "Is this program available internationally?",
    answer:
      "Currently, we operate primarily in India, but we are expanding our initiatives globally through strategic partnerships.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="py-12 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center" data-aos="zoom-in-up">
          <Image
            src="/Images/FaqIcon.png"
            alt="FAQ Image"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right FAQs */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center md:text-left font-[Protest Revolution]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
