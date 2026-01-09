"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Briefcase,
  ChevronRight,
} from "lucide-react";

// --- Data Configuration ---
const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/share/19ExxsA9Ze/",
    icon: Facebook,
    label: "Facebook",
    hoverColor: "hover:bg-[#1877f2] hover:border-[#1877f2]",
  },
  {
    href: "https://www.instagram.com/agrigreenfoundation",
    icon: Instagram,
    label: "Instagram",
    hoverColor: "hover:bg-[#e1306c] hover:border-[#e1306c]",
  },
  {
    href: "https://www.linkedin.com/company/agrigreen-foundation",
    icon: Linkedin,
    label: "LinkedIn",
    hoverColor: "hover:bg-[#0077b5] hover:border-[#0077b5]",
  },
  {
    href: "https://www.youtube.com/@AGRIGREENFOUNDATION",
    icon: Youtube,
    label: "YouTube",
    hoverColor: "hover:bg-[#ff0000] hover:border-[#ff0000]",
  },
];

const QUICK_LINKS = [
  { href: "#", label: "Partner With Us" },
  { href: "#", label: "Our Impact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden bg-gray-950 pb-10 pt-20 text-gray-100"
      aria-label="Footer"
    >
      {/* --- Background Layer --- */}
     <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-125 h-125 bg-emerald-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-amber-900/10 rounded-full blur-[100px]" />

        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* --- Top Grid Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, staggerChildren: 0.12 },
            },
          }}
          className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8"
        >
          {/* Column 1: Brand & Bio */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="space-y-3 lg:col-span-4"
          >
            <Link href="/" className="inline-block" aria-label="Go to homepage">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/alokkumar07/image/upload/c_crop,ar_16:9/v1767951109/Agrigreen/agfFullLogo_kmqmdu.png"
                  alt="Agri Green Logo"
                  width={200}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <p className="max-w-sm text-md text-justify text-gray-400">
              Empowering communities and restoring ecosystems through regenerative
              agriculture, youth education, and sustainable innovation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-1">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-gray-400 transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${hoverColor}`}
                >
                  <Icon className="w-5 h-5" /> {/* Adjusted size class */}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Contact Info */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="space-y-6 lg:col-span-4"
          >
            <h3 className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="h-1 w-8 rounded-full bg-linear-to-r from-emerald-500 to-amber-500" />
              Contact Us
            </h3>

            <ul className="space-y-4 text-md">
              <li className="group flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-emerald-500 transition-colors group-hover:border-emerald-500/60">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email Us
                  </span>
                  <a
                    href="mailto:agrigreen.agf@gmail.com"
                    className="block text-gray-300 transition-colors hover:text-white"
                  >
                    agrigreen.agf@gmail.com
                  </a>
                </div>
              </li>

              <li className="group flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-amber-500 transition-colors group-hover:border-amber-500/60">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Headquarters
                  </span>
                  <p className="max-w-xs leading-relaxed text-gray-400">
                    424/A1, Rita Hari Niwas, Indrapuri Colony Near C-3, P.O. BV College, Ashiyana Ramnagari, Near Sita Ram General Store, Patna, Bihar-800014
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-emerald-400 transition-colors group-hover:border-emerald-400/60">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Registered Office
                  </span>
                  <p className="max-w-xs leading-relaxed text-gray-400">
                    Vill.: Katari, P.O.: Goraur, P.S.: Chhabilapur, Anchal: Rajgir, Dist.: Nalanda-803116
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Links & Careers */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4 lg:block lg:space-y-8"
          >
            {/* Quick Links */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                <span className="h-1 w-8 rounded-full bg-linear-to-r from-amber-500 to-emerald-500" />
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                {QUICK_LINKS.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-emerald-400"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-600 transition-colors group-hover:text-emerald-500" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Careers Box */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-gray-700/60 bg-linear-to-br from-gray-900 to-gray-800 p-5"
            >
              <div className="pointer-events-none absolute right-0 top-0 p-3 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-white">
                <Briefcase className="w-5 h-5 text-amber-500" />
                Join Our Team
              </h4>
              <p className="mb-3 text-xs leading-relaxed text-gray-400">
                Passionate about sustainability? Opportunities will be announced soon.
              </p>
              <span className="inline-block rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Stay Tuned
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- Bottom Footer Bar --- */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row">
          <div className="text-center md:text-left">
            <p>
              &copy; {currentYear}{" "}
              <span className="font-medium text-emerald-400">Agri Green Foundation</span>. All
              rights reserved.
            </p>
            <p className="mt-1 opacity-70">
              A non-profit organization dedicated to a greener future.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-gray-300">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-gray-300">
              Cookies
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gray-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}