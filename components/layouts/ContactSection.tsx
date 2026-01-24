"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, AtSign, ArrowRight } from "lucide-react";
import { toast } from "sonner";

// --- Utility: Email Validation ---
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Subscribing...");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Subscription failed");
      }

      toast.success("🎉 Successfully subscribed!", { id: toastId });
      setEmail("");
    } catch {
      toast.error("❌ Subscription failed. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center border-t border-white/5"
      aria-labelledby="contact-section-heading"
    >
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-125 h-125 bg-emerald-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-amber-900/10 rounded-full blur-[100px]" />

        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* --- Main Container --- */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-white/5 bg-emerald-900/20 shadow-2xl backdrop-blur-xl">
          <div className="grid items-center gap-12 p-8 md:p-12 lg:p-16 lg:grid-cols-2 lg:gap-16">
            {/* --- Left: Text and Form Section --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2
                  id="contact-section-heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl font-serif"
                >
                  Get in Touch with <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-nature via-agri to-climate">
                    Natural India
                  </span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-lg font-semibold text-[#1dcc5b] md:text-xl">
                    <div className="rounded-lg bg-[#1dcc5b]/10 p-2 border border-[#1dcc5b]/20">
                      <Mail size={20} />
                    </div>
                    <h3 className="font-outfit">
                      Join Our Agri Green Newsletter
                    </h3>
                  </div>

                  <p className="text-base leading-relaxed text-gray-400 md:text-lg">
                    Receive the latest updates on sustainable farming, climate
                    action initiatives, and community impact stories directly to
                    your inbox.
                  </p>
                </motion.div>
              </div>

              {/* Newsletter Form */}
              <motion.form
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="group relative flex-1">
                    <AtSign className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-[#1dcc5b] w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="your.email@example.com"
                      className={`w-full rounded-xl border bg-[#070e0b]/50 pl-12 pr-4 py-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 md:text-base ${
                        error
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-white/10 focus:border-[#1dcc5b] focus:ring-1 focus:ring-[#1dcc5b]"
                      }`}
                      disabled={loading}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#1dcc5b] px-8 py-4 text-sm font-bold text-[#070e0b] shadow-lg shadow-[#1dcc5b]/20 transition-all duration-300 hover:bg-white hover:text-[#1dcc5b] disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="flex items-center gap-2 pl-1 text-sm text-red-400"
                  >
                    <span>⚠️</span> {error}
                  </motion.p>
                )}
              </motion.form>

              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="flex items-center gap-4 pt-4 border-t border-white/5"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 font-semibold text-[#f5b70a]  hover:text-white rounded-mdborder border-yellow-400/30 p-2 transition-colors group-hover:bg-yellow-400/10"
                >
                  <span>Contact Us Directly</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* --- Right: Image Visual --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-4/3 w-full max-w-md group"
              >
                {/* Image Card */}
                <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#070e0b]">
                  <Image
                    src="https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/ContactIcon_rputka.jpg"
                    alt="Agri Green community"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#070e0b] via-transparent to-transparent opacity-90" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="mb-2 inline-block rounded-full bg-[#1dcc5b]/20 border border-[#1dcc5b]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1dcc5b] backdrop-blur-md">
                      Community
                    </span>
                    <p className="text-lg font-medium leading-tight text-white mt-2">
                      Join to build a greener future together.
                    </p>
                  </div>
                </div>

                {/* Decorative Elements Behind */}
                <div className="absolute -top-4 -right-4 z-0 h-full w-full rounded-2xl border border-[#1dcc5b]/20 bg-[#1dcc5b]/5" />
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#f5b70a]/20 blur-2xl opacity-60" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
