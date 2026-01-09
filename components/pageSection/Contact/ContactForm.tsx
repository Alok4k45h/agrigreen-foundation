"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

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

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    }
  };

  const inputStyles = "w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-nature/50 focus:border-nature transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-card backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl"
    >
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-linear-to-b from-nature to-agri rounded-full"/>
        Send a Message
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input {...register("name")} placeholder="Your Name" className={inputStyles} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input {...register("position")} placeholder="Position / Title" className={inputStyles} />
            {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input {...register("email")} type="email" placeholder="Email Address" className={inputStyles} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input {...register("phone")} type="tel" placeholder="Phone Number" className={inputStyles} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Address */}
        <div>
          <input {...register("address")} placeholder="Your Address / Location" className={inputStyles} />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
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
          {errors.query && <p className="text-red-500 text-xs mt-1">{errors.query.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-nature hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-nature/20 transform active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Send Message <Send size={16} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}