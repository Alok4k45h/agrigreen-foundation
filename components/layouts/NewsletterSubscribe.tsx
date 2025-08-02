"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { motion, useAnimation } from "framer-motion";

// Schema
const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});

// Infer form data type from Zod schema
type FormData = z.infer<typeof schema>;

export default function NewsletterSubscribe() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const toastId = toast.loading("Subscribing...");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.success) {
        toast.success("🎉 Subscribed successfully!", { id: toastId });
        reset();
      } else {
        toast.error("❌ Subscription failed. Try again later.", { id: toastId });
      }
    } catch (error) {
      toast.error("⚠️ Error while subscribing. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-100">
          Join Our Green Newsletter 🌿
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Stay updated with our sustainable efforts and climate-smart farming.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Your email address"
            className={`w-full sm:w-72 px-4 py-3 text-sm rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-800 dark:text-white`}
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {errors.email?.message && (
          <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
        )}
      </div>
    </motion.section>
  );
}
