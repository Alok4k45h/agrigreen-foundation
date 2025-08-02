"use client";
import { useMemo } from "react";
import {
  LinkedInEmbed,
  FacebookEmbed,
  InstagramEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";

const socialConfigs = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/agrigreen-foundation",
    posts: [
      "https://www.linkedin.com/posts/chouhanshivrajsingh_integratedfarming-sustainableagriculture-ugcPost-7356626601423364096-8jyT?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAABs9UwIBJlXgBYupqm2VE4a3zdOxKZZHYio&utm_campaign=whatsapp",
      "https://www.linkedin.com/posts/indianchamber_lets-shape-the-future-of-ricesmarter-greener-activity-7353098224531816448-tOgT?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAABs9UwIBJlXgBYupqm2VE4a3zdOxKZZHYio&utm_campaign=whatsapp",
      // up to 5 URLs
    ],
    Embed: LinkedInEmbed,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/19ExxsA9Ze/",
    posts: [
      "https://www.facebook.com/share/p/17CcoQJLf6/",
      // ...
    ],
    Embed: FacebookEmbed,
  },
  {
    name: "Instagram",
    href: "#",
    posts: [
      "https://www.instagram.com/p/ABC123",
      // ...
    ],
    Embed: InstagramEmbed,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AGRIGREENFOUNDATION",
    posts: [
      "https://m.youtube.com/watch?v=_hEYuC51L6k",
      // ...
    ],
    Embed: YouTubeEmbed,
  },
];

export default function SocialMediaCorner() {
  const sections = useMemo(() => socialConfigs, []);
  return (
    <section className="py-12 px-4" style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/FooterBg_vgbflq.jpg')",
        backgroundSize: "cover",
      }}>
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8 font-playfair" >
        Social Media Corner
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((sec) => (
          <div key={sec.name} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">{sec.name}</h3>
            <div className="space-y-4">
              {sec.posts.map((url, idx) => (
                <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <sec.Embed url={url} width={"100%"} />
                </div>
              ))}
            </div>
            <a
              href={sec.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 text-sm font-medium bg-white text-green-800 rounded hover:bg-green-100 transition"
            >
              More on {sec.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
