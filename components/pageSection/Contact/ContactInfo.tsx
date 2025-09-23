// src/components/contact/ContactInfo.tsx
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section
      aria-labelledby="contact-info-title"
      className="text-white bg-green-50 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 border border-green-400"
    >
      <header className="mb-4 text-center">
        <h2 id="contact-info-title" className="text-lg font-bold text-green-900 mb-3">
          Get Started Today
        </h2>
        <p className="text-sm text-gray-600 max-w-prose mx-auto mt-2">
          We’d love to hear from you. Enjoy a 15-minute no-obligation chat to answer your
          questions and discuss next steps. Call or send us a message—we’ll take care of the rest.
        </p>
      </header>

      <address className="not-italic text-center space-y-1 mb-6">
        <p className="font-semibold text-green-900">Email: <a href="mailto:agrigreen@gmail.com" className="hover:underline">agrigreen.agf@gmail.com</a></p>
      </address>

      <div className="flex justify-center gap-4 mb-6" aria-label="Social media links">
        <a href="https://www.facebook.com/share/19ExxsA9Ze/" aria-label="Facebook" className="text-blue-500 hover:scale-110 transition">
          <FaFacebook size={28} />
        </a>
        <a href="#" aria-label="Instagram" className="text-pink-500 hover:scale-110 transition">
          <FaInstagram size={28} />
        </a>
        <a href="https://www.youtube.com/@AGRIGREENFOUNDATION" aria-label="YouTube" className="text-red-600 hover:scale-110 transition">
          <FaYoutube size={28} />
        </a>
        <a href="https://www.linkedin.com/company/agrigreen-foundation" aria-label=" LinkedIn" className="text-blue-600 hover:scale-110 transition">
          <FaLinkedin  size={28} />
        </a>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-green-900 mb-1">Headquarter</h3>
        <p className="text-sm text-gray-600 mb-2">424/A1, Rita Hari Niwas, Indrapuri Colony Near C-3, P.O. BV College, Ashiyana Ramnagari, Near Sita Ram General Store, Patna, Bihar-800014</p>
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.730515636806!2d85.08255267592214!3d25.613869577445048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5700374b8961%3A0xc2d5c258d67a9467!2sRITA%20HARI%20NIWAS!5e0!3m2!1sen!2sus!4v1753384867015!5m2!1sen!2sus"
            width="100%"
            height="200"
            className="w-full h-48 border-0"
            allowFullScreen
            loading="lazy"
            title="Agri Green Office Location"
          />
        </div>
      </div>
    </section>
  );
}
