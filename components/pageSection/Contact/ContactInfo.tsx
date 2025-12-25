"use client";

import { motion } from "framer-motion";
import { 
  Facebook, Instagram, Linkedin, Youtube, 
  Mail, MapPin 
} from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Intro Card */}
      <div className="bg-card border border-border p-8 rounded-3xl relative overflow-hidden group shadow-lg">
        <div className="absolute top-0 right-0 w-32 h-32 bg-nature/10 rounded-full blur-2xl group-hover:bg-nature/20 transition-all" />
        
        <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s Start a Conversation</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Enjoy a 15-minute no-obligation chat to discuss your sustainable farming goals. 
          Send us a message and we&apos;ll take care of the rest.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-muted-foreground group-hover:text-foreground transition-colors">
            <div className="w-10 h-10 rounded-full bg-nature/10 flex items-center justify-center text-nature">
              <Mail size={18} />
            </div>
            <a href="mailto:agrigreen.agf@gmail.com" className="hover:text-nature transition-colors">
              agrigreen.agf@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="bg-card border border-border p-2 rounded-3xl shadow-md">
        <div className="bg-secondary rounded-2xl overflow-hidden relative h-64 w-full">
          {/* Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.056073740876!2d85.086392!3d25.604678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzE2LjgiTiA4NcKwMDUnMTEuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Agri Green Headquarters"
            className="dark:opacity-80 dark:invert-[.9] dark:grayscale" 
          />
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-md p-3 rounded-xl border border-border max-w-[240px] shadow-lg">
            <p className="text-xs text-muted-foreground flex items-start gap-2">
              <MapPin className="text-nature mt-0.5 shrink-0 w-4 h-4" />
              <span>424/A1, Rita Hari Niwas, Indrapuri Colony, Patna, Bihar-800014</span>
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        {[
          { icon: Facebook, href: "https://www.facebook.com/share/19ExxsA9Ze/", color: "hover:text-[#1877f2] hover:bg-[#1877f2]/10 hover:border-[#1877f2]/20" },
          { icon: Instagram, href: "https://www.instagram.com/agrigreenfoundation", color: "hover:text-[#e1306c] hover:bg-[#e1306c]/10 hover:border-[#e1306c]/20" },
          { icon: Youtube, href: "https://www.youtube.com/@AGRIGREENFOUNDATION", color: "hover:text-[#ff0000] hover:bg-[#ff0000]/10 hover:border-[#ff0000]/20" },
          { icon: Linkedin, href: "https://www.linkedin.com/company/agrigreen-foundation", color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/20" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm ${social.color}`}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </motion.div>
  );
}