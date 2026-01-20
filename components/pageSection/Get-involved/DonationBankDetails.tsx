"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, MessageSquare, Copy, 
  CheckCircle2, HeartHandshake, CloudUpload, Lightbulb 
} from "lucide-react"; // Updated Icons

// --- Validation Schema ---
const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Please enter a valid email"),
  interest: z.enum(["volunteer", "partner", "donate"], {
    errorMap: () => ({ message: "Please select your interest" }),
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honey: z.string().optional(), // Anti-spam field
  file: z.any().optional(),     // Unified file field for Resume or Screenshot
});

type FormData = z.infer<typeof formSchema>;

// --- Data ---
const BANK_DETAILS = [
  { label: "Bank Name", value: "Canara Bank" },
  { label: "Account Number", value: "4569201000036" },
  { label: "IFSC Code", value: "CNRB0004569" },
];

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Watch the interest field to toggle inputs dynamically
  const selectedInterest = watch("interest");

  // --- Actions ---
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast.success(`${label} copied!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.honey) return; // spam detected

    try {
      const formData = new FormData();

      // Attach normal fields
      Object.entries(data).forEach(([key, value]) => {
        if (value && key !== "file" && !(value instanceof FileList)) {
          formData.append(key, value as string);
        }
      });


      // Handle file validations
      if (data.file && data.file[0]) {
        const uploadedFile = data.file[0];

        // Size validation
        if (data.interest === "volunteer" && uploadedFile.size > 1024 * 1024) {
          toast.error("Resume must be less than 1MB.");
          return;
        }

        if (data.interest === "donate" && uploadedFile.size > 500 * 1024) {
          toast.error("Screenshot must be less than 500KB.");
          return;
        }

        // IMPORTANT: backend expects "resume" or "screenshot"
        const fieldName =
          data.interest === "volunteer" ? "resume" : "screenshot";

        formData.append(fieldName, uploadedFile);
      }

      // Send request
      const res = await fetch("/api/getinvolvedForm", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Message sent successfully! We will get back to you shortly.");
        reset();
      } else {
        const { error } = await res.json();
        toast.error(error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background transition-colors duration-300" id="contact">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-150 bg-nature/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-agri/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif"
          >
            Support our <span className="text-transparent bg-clip-text bg-linear-to-r from-nature via-agri to-climate">Mission</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Whether you want to volunteer, donate, or partner with us—we are ready to listen. 
            Together, we grow a sustainable future.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* --- Left Column: Form --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card backdrop-blur-xl border border-border rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top Glow Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-nature via-agri to-nature" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input type="text" {...register("honey")} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-nature" /> Name
                  </label>
                  <input
                    {...register("name")}
                    className={`w-full bg-secondary border ${errors.name ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-nature/50 focus:border-nature outline-none transition-all placeholder:text-muted-foreground/50`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-nature" /> Email
                  </label>
                  <input
                    {...register("email")}
                    className={`w-full bg-secondary border ${errors.email ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-nature/50 focus:border-nature outline-none transition-all placeholder:text-muted-foreground/50`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              {/* Interest Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">I am interested in...</label>
                <div className="grid grid-cols-3 gap-3">
                  {["volunteer", "partner", "donate"].map((val) => (
                    <label key={val} className="cursor-pointer relative group">
                      <input 
                        type="radio" 
                        value={val} 
                        {...register("interest")} 
                        className="peer sr-only" 
                      />
                      <div className="w-full text-center py-3 rounded-xl border border-border bg-secondary text-muted-foreground capitalize transition-all 
                        peer-checked:bg-nature peer-checked:text-white peer-checked:border-nature peer-checked:shadow-lg 
                        group-hover:border-nature/50">
                        {val}
                      </div>
                    </label>
                  ))}
                </div>
                {errors.interest && <p className="text-xs text-red-500">{errors.interest.message}</p>}
              </div>

              {/* Dynamic Upload Fields (Animated) */}
              <AnimatePresence>
                {(selectedInterest === "volunteer" || selectedInterest === "donate") && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border border-dashed border-border bg-secondary/30 rounded-xl p-6 text-center group hover:border-nature/50 transition-colors mt-2">
                      <CloudUpload className="mx-auto text-3xl text-muted-foreground group-hover:text-nature mb-2 transition-colors" />
                      <p className="text-sm text-muted-foreground mb-3">
                        {selectedInterest === "volunteer" ? "Upload your CV / Resume" : "Upload Payment Screenshot"}
                      </p>
                      <input 
                        type="file" 
                        accept={selectedInterest === "volunteer" ? ".pdf,.doc,.docx" : "image/*"}
                        {...register("file")}
                        className="text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-nature/10 file:text-nature hover:file:bg-nature/20 cursor-pointer"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-nature" /> Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={`w-full bg-secondary border ${errors.message ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-nature/50 focus:border-nature outline-none transition-all placeholder:text-muted-foreground/50 resize-none`}
                  placeholder="Tell us a bit more..."
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-nature hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-nature/20 transform active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                   <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
            {/* Simple Info */}
             <div className="text-center p-4 md:text-left mt-2">
                <p className="text-muted-foreground text-xs">
                   We respect your privacy. Your information will be used solely to respond to your inquiry.
                </p>
             </div>
          </motion.div>

          {/* --- Right Column: Bank Details --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
             {/* Info Card */}
             <div className="bg-linear-to-br from-nature/10 to-card border border-nature/20 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-4 right-4 text-nature/10">
                  <HeartHandshake size={80} />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  Directly support <span className="text-nature font-semibold">Agri Green Foundation</span>. Your contribution empowers rural youth and restores ecosystems.
                </p>

                <div className="space-y-3 relative z-10">
                  {BANK_DETAILS.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className="group flex items-center justify-between p-4 bg-secondary/50 border border-border rounded-xl hover:border-nature/30 transition-all"
                    >
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{detail.label}</p>
                        <p className="text-foreground font-mono font-medium">{detail.value}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(detail.value, detail.label)}
                        className="p-2 text-muted-foreground hover:text-nature hover:bg-nature/10 rounded-lg transition-all"
                        aria-label={`Copy ${detail.label}`}
                      >
                         {copiedField === detail.label ? <CheckCircle2 className="w-5 h-5 text-nature" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-3 p-4 bg-agri/10 border border-agri/20 rounded-xl relative z-10">
                   <div className="text-agri mt-1"><Lightbulb className="w-5 h-5" /></div>
                   <p className="text-sm text-foreground/80 leading-relaxed">
                    Tip: After making a donation, please select &quot;Donate&quot; in the form and attach a screenshot for faster confirmation.
                   </p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}