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
    posts: [
      "https://www.linkedin.com/posts/yourcompany_post1",
      "https://www.linkedin.com/posts/yourcompany_post2",
      // up to 5 URLs
    ],
    Embed: LinkedInEmbed,
  },
  {
    name: "Facebook",
    posts: [
      "https://www.facebook.com/yourpage/posts/12345",
      // ...
    ],
    Embed: FacebookEmbed,
  },
  {
    name: "Instagram",
    posts: [
      "https://www.instagram.com/p/ABC123",
      // ...
    ],
    Embed: InstagramEmbed,
  },
  {
    name: "YouTube",
    posts: [
      "https://www.youtube.com/watch?v=P6FORpg0KVo",
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
          "url('https://img.freepik.com/premium-photo/natural-green-gradient-background-with-grainy-texture_476363-11448.jpg')",
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
              href={`https://${
                sec.name.toLowerCase() === "youtube" ? "youtube.com" : sec.name.toLowerCase() + ".com"
              }/yourprofile`}
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
