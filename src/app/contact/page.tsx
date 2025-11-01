'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Link from "next/link";
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

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle"|"success"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMsg(null);
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mrbooazp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => ({} as any));
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg((json as any)?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100 grid gap-4">
          <input type="hidden" name="_subject" value="New contact from Sathsalaha website" />
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name*</label>
              <input name="name" required type="text" placeholder="Enter your full name" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address*</label>
              <input name="email" required type="email" placeholder="Enter your email address" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Company Name</label>
              <input name="company" type="text" placeholder="Enter your company name" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input name="phone" type="text" placeholder="Enter your phone number" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Service of Interest</label>
            <select name="service" className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm">
              <option>Select a service</option>
              <option>Operational Excellence</option>
              <option>Leadership Advisory</option>
              <option>Organizational Strategy</option>
              <option>Transformation Planning</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" placeholder="Tell us about your business challenges and goals..." className="mt-1 w-full border border-gray-200 rounded-md p-2 text-sm h-28" />
          </div>

          <div className="flex flex-col items-center mt-4">
            <Button type="submit" disabled={submitting} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 text-sm">
              {submitting ? "Sending..." : "Send Message"}
            </Button>
            {status === "success" && (
              <p className="text-green-600 text-sm mt-3" role="status" aria-live="polite">
                Thanks—your message has been sent. We’ll get back within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm mt-3" role="alert">{errorMsg}</p>
            )}
          </div>
        </form>
      </section>

      {/* Footer (same as Home) */}
      <footer id="contact" className="border-t bg-white mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-xl text-primary">Connect with Sathsalaha</h4>
            <p className="mt-4 text-slate-700 leading-relaxed">If your organization is approaching a turning point or seeking its next phase of growth, let's talk. <strong>Sridhar Chitturu</strong>, Management Consultant for Strategy & Execution and Founder of <strong>Sathsalaha Private Limited</strong>, would be glad to explore your enterprise story—whether it’s scaling to the next orbit, resolving performance challenges, or ensuring leadership continuity.</p>
            <p className="mt-3 text-slate-700 leading-relaxed">Based in <strong>Hyderabad, India</strong>, Sathsalaha partners with clients across sectors and geographies to build alignment between vision, strategy, execution, and leadership—creating organizations that are <strong>Digitally Intelligent Inside</strong> and <strong>Deeply Human Outside</strong>.</p>
            <p className="mt-3 text-slate-700 leading-relaxed">Reach out for a conversation—because clarity often begins with a single discussion.</p>
          </div>
          <div className="flex flex-col gap-3 text-slate-700">
            <h4 className="font-semibold text-xl text-primary">Get in Touch</h4>
            <p>Phone: <a href="tel:+919676764433" className="underline">+91 9676764433</a></p>
            <p>Email: <a href="mailto:sri@sathsalaha.com" className="underline">sri@sathsalaha.com</a></p>
            <Link href="/contact"><Button className="mt-4 shadow-md w-full sm:w-auto">Speak to Sridhar</Button></Link>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Sathsalaha Private Limited · All rights reserved.</div>
      </footer>
    </div>
  );
}

