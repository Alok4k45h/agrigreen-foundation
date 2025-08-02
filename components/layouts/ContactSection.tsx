"use client";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      className="py-16 px-4 flex justify-center items-center bg-fixed bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/FooterBg_vgbflq.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-serif drop-shadow-md">
            Get in Touch with <span className="text-green-400">Nature</span>
          </h2>
          <p className="text-white text-lg leading-relaxed font-sans">
            Have questions or want to collaborate? We’re here to help! Let’s build a greener future together.
          </p>
          <Link
            href="/contact"
            aria-label="Go to Contact Page"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 rounded-lg transition-transform hover:scale-105 font-semibold"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h6.293L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/ContactIcon_rputka.jpg"
            alt="Illustration of Contacting AgriGreen Team"
            width={420}
            height={300}
            priority
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
