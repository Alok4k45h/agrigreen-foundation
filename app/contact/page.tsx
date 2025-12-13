"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {  
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPaperPlane, 
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";// Ensure this path is correct based on previous steps
import PageBanner from "@/components/layouts/PageBanner";

// --- Validation Schema ---
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  position: z.string().min(2, "Position/Title is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  address: z.string().min(5, "Address is too short"),
  bestTime: z.string().optional(),
  query: z.string().min(10, "Please provide more details in your query"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  return (
    <main className="bg-gray-950 min-h-screen">
      {/* 1. Page Banner (Reusing your existing component logic) */}
      <PageBanner 
        pageHeader="Contact Us" 
        descOne="Connect with Nature" 
        descTwo="Connect with Us" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get in Touch with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
              Natural India
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you have a question, want to partner with us, or just want to say hi, 
            our inbox is always open. We strive to respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <ContactInfo />
          
          {/* Right Column */}
          <ContactForm />
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px]" />
      </div>
      
      <Toaster position="bottom-right" />
    </main>
  );
}

// --- Sub-Component: Contact Info (Left) ---
function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Intro Card */}
      <div className="bg-gray-900/80 border border-gray-800 p-8 rounded-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
        
        <h3 className="text-2xl font-bold text-white mb-4">Lets Start a Conversation</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Enjoy a 15-minute no-obligation chat to discuss your sustainable farming goals. 
          Send us a message and well take care of the rest.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-gray-300">
            <div className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400">
              <FaEnvelope />
            </div>
            <a href="mailto:agrigreen.agf@gmail.com" className="hover:text-white transition-colors">
              agrigreen.agf@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="bg-gray-900/80 border border-gray-800 p-2 rounded-3xl">
        <div className="bg-gray-950 rounded-2xl overflow-hidden relative h-64 w-full">
          {/* Dark Mode Map Filter */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.730515636806!2d85.08255267592214!3d25.613869577445048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5700374b8961%3A0xc2d5c258d67a9467!2sRITA%20HARI%20NIWAS!5e0!3m2!1sen!2sus!4v1753384867015!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "contrast(83%)" }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Agri Green Headquarters"
          />
          <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-md p-3 rounded-xl border border-gray-700 max-w-[200px]">
            <p className="text-xs text-gray-400 flex items-start gap-2">
              <FaMapMarkerAlt className="text-emerald-500 mt-0.5 shrink-0" />
              424/A1, Rita Hari Niwas, Indrapuri Colony, Patna, Bihar-800014
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        {[
          { icon: FaFacebookF, href: "https://www.facebook.com/share/19ExxsA9Ze/", color: "hover:bg-[#1877f2]" },
          { icon: FaInstagram, href: "#", color: "hover:bg-[#e1306c]" },
          { icon: FaYoutube, href: "https://www.youtube.com/@AGRIGREENFOUNDATION", color: "hover:bg-[#ff0000]" },
          { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/agrigreen-foundation", color: "hover:bg-[#0077b5]" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 ${social.color}`}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

// --- Sub-Component: Contact Form (Right) ---
function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API Call
    try {
          const res = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          const result = await res.json();
          if (res.ok) {
            toast.success("Your message has been sent!");
            reset();
          } else {
            toast.error(result.message || "Something went wrong");
          }
        } catch (err) {
          toast.error("Server error. Try again later.");
        } finally {
        }
  };

  const inputStyles = "w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl"
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-amber-500 rounded-full"/>
        Send a Message
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input {...register("name")} placeholder="Your Name" className={inputStyles} />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input {...register("position")} placeholder="Position / Title" className={inputStyles} />
            {errors.position && <p className="text-red-400 text-xs mt-1">{errors.position.message}</p>}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input {...register("email")} type="email" placeholder="Email Address" className={inputStyles} />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input {...register("phone")} type="tel" placeholder="Phone Number" className={inputStyles} />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Address */}
        <div>
          <input {...register("address")} placeholder="Your Address / Location" className={inputStyles} />
          {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address.message}</p>}
        </div>

        {/* Best Time */}
        <div>
           <input {...register("bestTime")} placeholder="Best time to call (Optional)" className={inputStyles} />
        </div>

        {/* Query */}
        <div>
          <textarea 
            {...register("query")} 
            placeholder="Tell us about your query..." 
            rows={4} 
            className={`${inputStyles} resize-none`} 
          />
          {errors.query && <p className="text-red-400 text-xs mt-1">{errors.query.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 transform active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Send Message <FaPaperPlane className="text-sm" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}