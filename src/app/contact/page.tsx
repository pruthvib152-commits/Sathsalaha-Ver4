'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const highlights = [
    { title: "Free Consultation", description: "Get expert insights at no cost to identify your key growth levers." },
    { title: "Quick Response", description: "We respond within 24 hours to every inquiry — your time matters." },
    { title: "Tailored Solutions", description: "Every business is unique, and our recommendations reflect that." },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Header centerNavOnDesktop />

      {/* HERO SECTION */}
      <section className="px-10 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to build a business that scales reliably?
          </h1>
          <p className="text-gray-600 mb-8">
            If these executive challenges sound familiar, you’re not alone. Every successful business hits scaling walls — but they don’t have to define your future. Let’s discuss how our 3A Approach can help you break through to your next performance level.
          </p>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-black w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex justify-center">
          <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100 text-center">
            <p className="text-sm text-gray-600 mb-2">Let's Start a Conversation</p>
            <img src="/contact.png" alt="Conversation Illustration" className="w-72 md:w-96 h-auto mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Let's Discuss Your Challenge!</h2>
          <p className="text-gray-600 text-sm">
            Fill out the form below and we’ll get back to you.
          </p>
        </div>

        <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name*</label>
              <input type="text" placeholder="Enter your full name" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address*</label>
              <input type="email" placeholder="Enter your email address" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" placeholder="Enter your company name" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input type="text" placeholder="Enter your phone number" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Service of Interest</label>
            <select className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm">
              <option>Select a service</option>
              <option>Operational Excellence</option>
              <option>Leadership Advisory</option>
              <option>Organizational Strategy</option>
              <option>Transformation Planning</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea placeholder="Tell us about your business challenges and goals..." className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm h-28" />
          </div>

          <div className="flex justify-center mt-4">
            <Button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 text-sm">
              Send Message
            </Button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-sm py-10 px-10 grid md:grid-cols-3 gap-6 mt-auto">
        <div>
          <h3 className="text-white font-semibold mb-3">SATHSALAHA</h3>
          <p className="text-xs leading-relaxed">
            Helping executives transform scaling challenges into breakthrough moments using our proven 3A Approach.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-xs">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/strategy" className="hover:text-white">Strategy</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Get in Touch</h4>
          <ul className="text-xs space-y-1">
            <li><Mail size={14} className="inline mr-1" /> sridhar@sathsalaha.com</li>
            <li><Phone size={14} className="inline mr-1" /> +91 9987964453</li>
            <li><MapPin size={14} className="inline mr-1" /> Global Consulting Services</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

