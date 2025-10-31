'use client';

import { motion } from "framer-motion";
import { Rocket, Compass, Target, Layers, LineChart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Header centerNavOnDesktop />

      {/* OUR PHILOSOPHY */}
      <section className="px-10 py-16 max-w-4xl mx-auto text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Sathsalaha, we believe businesses evolve through structured reflection and purposeful scaling.
            Growth challenges often stem from imbalances between vision, structure, and execution. Our approach
            bridges this gap, enabling organizations to align leadership intent with operational coherence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every organization’s rhythm is unique — our mission is to help leaders find that rhythm by balancing
            innovation with discipline, creativity with clarity, and ambition with alignment.
          </p>
        </motion.div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="max-w-6xl mx-auto px-10 grid md:grid-cols-3 gap-6 pb-16">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <Target className="text-black" size={26} />
            <h3 className="text-lg font-semibold text-gray-800">Clarity of Purpose</h3>
          </div>
          <p className="text-gray-600">
            Organizations thrive when every action is guided by a clear sense of purpose. We help define and reinforce
            that clarity, ensuring that teams move in harmony with strategic intent.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <Layers className="text-black" size={26} />
            <h3 className="text-lg font-semibold text-gray-800">Structural Integrity</h3>
          </div>
          <p className="text-gray-600">
            Sustainable growth demands a strong foundation. We help businesses design and implement structures
            that scale effectively while maintaining agility and consistency.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <LineChart className="text-black" size={26} />
            <h3 className="text-lg font-semibold text-gray-800">Measured Progress</h3>
          </div>
          <p className="text-gray-600">
            Scaling isn’t just about expansion — it’s about maintaining measurable progress through defined metrics,
            feedback loops, and leadership accountability.
          </p>
        </motion.div>
      </section>

      {/* BOARD SECTION */}
      <section className="bg-gray-100 py-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Meet our Board</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            The visionary leadership behind Sathsalaha’s proven 3A Approach, bringing decades of experience in
            transforming business challenges into breakthrough opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Sridhar Chitturu */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <img src="/images/sridhar.jpeg" alt="Sridhar Chitturu" className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Sridhar Chitturu</h3>
              <p className="text-sm font-medium text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                A seasoned business transformation expert with over two decades of experience helping organizations break
                through growth plateaus. With deep expertise in process improvement, risk management, and organizational
                transformation across banking, insurance, telecom, and manufacturing sectors.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {['Business Transformation', 'Organizational Architecture', 'Leadership Development', 'Strategic Scaling', 'Performance Optimization'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700 border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="https://www.linkedin.com/in/sridharchitturu/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black text-white text-sm rounded-md px-4 py-2 hover:bg-gray-900">Know More</Button>
              </a>
            </motion.div>

            {/* Kamakshi Sikha */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <img src="/images/kamakshi.jpeg" alt="Kamakshi Sikha" className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Kamakshi Sikha</h3>
              <p className="text-sm font-medium text-gray-600 mb-4">Leadership & Executive Coach | Advisor</p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                A certified Executive & Leadership Coach (ICF-PCC) with over two decades of experience. Kamakshi specializes
                in guiding leaders and organizations through transitions, resilience building, and leadership development.
                She has coached professionals from Fortune 500 companies, high-growth businesses, and family-owned enterprises.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {['Leadership Development', 'Life & Career Transitions', 'Team Coaching & Facilitation', 'Positive Psychology & Resilience', 'Organizational Alignment'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700 border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="https://www.linkedin.com/in/kamakshi-sikha-84082713/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black text-white text-sm rounded-md px-4 py-2 hover:bg-gray-900">Know More</Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS / APPROACH SECTION */}
      <section className="bg-gray-50 py-16 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={fadeUp} initial="hidden" animate="show" className="text-2xl font-bold text-gray-900 mb-4">
            Our Approach
          </motion.h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Sathsalaha’s methodology combines structured analysis with creative problem-solving.
            We work hand-in-hand with leaders to analyze current systems, architect scalable frameworks,
            and apply actionable strategies — ensuring clarity and continuity through every transformation phase.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white rounded-xl p-6 shadow-sm">
              <Settings className="text-black mb-3 mx-auto" size={28} />
              <h3 className="font-semibold text-gray-800 mb-2">Analyze</h3>
              <p className="text-gray-600 text-sm">
                We begin with context — understanding what defines success for your organization and identifying where gaps exist.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white rounded-xl p-6 shadow-sm">
              <Layers className="text-black mb-3 mx-auto" size={28} />
              <h3 className="font-semibold text-gray-800 mb-2">Architect</h3>
              <p className="text-gray-600 text-sm">
                Together, we design systems, strategies, and structures that align your operations with your vision for the future.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white rounded-xl p-6 shadow-sm">
              <Rocket className="text-black mb-3 mx-auto" size={28} />
              <h3 className="font-semibold text-gray-800 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">
                Through guided implementation and continuous improvement, we help your teams embed change sustainably.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 text-center">
        <motion.h2 variants={fadeUp} initial="hidden" animate="show" className="text-2xl font-bold text-gray-900">
          From Insight to Action
        </motion.h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Discover how Sathsalaha helps organizations transform strategic reflection into measurable growth.
        </p>
        <Button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900">
          Explore Our Services
        </Button>
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
            <Button className="mt-4 shadow-md w-full sm:w-auto">Speak to Sridhar</Button>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Sathsalaha Private Limited · All rights reserved.</div>
      </footer>
    </div>
  );
}
