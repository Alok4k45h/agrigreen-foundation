"use client";

import ContactForm from "@/components/pageSection/Contact/ContactForm";
import ContactInfo from "@/components/pageSection/Contact/ContactInfo";
import PageBanner from "@/components/layouts/PageBanner";


export default function ContactPage() {
  return (
    <>
    <PageBanner
      pageHeader={"Contact Us"}
      descOne={"Contact with Nature!"}
      descTwo={"Contact with Us!"}
    />
    <div className="min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mt-2">
            Get in Touch with Nature 🌿
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
            Whether you have a question or just want to say hi, our inbox is always open. We’ll try our best to get back to you within 24 hours.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left - Contact Info */}
          <div className="w-full md:w-1/2">
            <ContactInfo />
          </div>

          {/* Right - Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}
