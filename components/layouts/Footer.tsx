"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/share/19ExxsA9Ze/",
    icon: FaFacebook,
    label: "Facebook",
    color: "text-[#1877f2]",
  },
  {
    href: "#",
    icon: FaInstagram,
    label: "Instagram",
    color: "text-[#e1306c]",
  },
  {
    href: "https://www.linkedin.com/company/agrigreen-foundation",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "text-[#0077b5]",
  },
  {
    href: "https://www.youtube.com/@AGRIGREENFOUNDATION",
    icon: FaYoutube,
    label: "YouTube",
    color: "text-[#ff0000]",
  },
];

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-12 font-roboto text-base md:text-lg text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/FooterBg_vgbflq.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand & Social */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/agriLogoFull_xa4u0r.png"
            alt="Agrigreen Logo"
            width={160}
            height={160}
            className="bg-white rounded-full hover:scale-105 transition-transform duration-300"
            priority
          />
          <p className="mt-4 max-w-sm leading-relaxed">
            Agrigreen Foundation empowers communities and ecosystems through regenerative agriculture and education.
          </p>
          <div className="flex gap-4 mt-5">
            {socialLinks.map(({ href, icon: Icon, label, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-2xl md:text-3xl ${color} hover:scale-110 transition-transform`}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mb-4 font-Playfair_Display">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMailBulk className="mt-1" />
              <span>agrigreen.agf@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1" />
              <span>+91-7424927160, +91-7903758833</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkedAlt className="mt-1 text-xl" />
              <span>
                <strong>HQ:</strong> 4424/A1, Rita Hari Niwas, Indrapuri Colony Near C-3, P.O. BV College, Ashiyana Ramnagari, Near Sita Ram General Store, Patna, Bihar-800014
                <br />
                <strong>Registered:</strong> Vill.: Katari, P.O.: Goraur, P.S.: Chhabilapur, Anchal: Rajgir, Dist.: Nalanda-803116
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mb-4 font-Playfair_Display">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-green-300 transition-colors">
                External Website Link
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-green-300 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-green-300 transition-colors">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-yellow-400 text-center text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} Agrigreen. All rights reserved.</p>
        <p className="mt-1">Agrigreen is a nonprofit organization.</p>
      </div>
    </footer>
  );
}
