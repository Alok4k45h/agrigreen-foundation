"use client";
import Typewriter from "typewriter-effect";

interface PageBannerProps {
  pageHeader: string;
  descOne: string;
  descTwo: string;
}

export default function PageBanner({ pageHeader, descOne, descTwo }: PageBannerProps) {
  return (
    <section
      className="relative h-[50vh] md:h-[40vh] w-full flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758550944/PageBanner_ewdgyi.gif')",
      }}
      role="banner"
      aria-label="Page banner section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl w-full mx-auto">
        <div className="inline-block bg-white text-gray-800 px-5 py-2 rounded-md shadow-md mb-5 text-sm font-semibold uppercase tracking-wide">
          {pageHeader}
        </div>

        <h1 className="text-3xl md:text-4xl  font-bold text-white leading-tight">
          <Typewriter
            options={{
              strings: [descOne, descTwo],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
            }}
          />
        </h1>
      </div>
    </section>
  );
}
