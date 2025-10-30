"use client";

import { motion } from "framer-motion";
import { Rocket, Compass, Target, Layers, LineChart, Settings } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

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
      <section className="px-10 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
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

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex justify-center">
          <img
            src="/images/about-illustration.png"
            alt="Sathsalaha Philosophy"
            className="w-full max-w-md"
          />
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

      {/* TWO FEATURE CARDS */}
      <section className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-6 pb-20">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Rocket className="text-black" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">The Art of Scaling</h3>
          </div>
          <p className="text-gray-600">
            Scaling is not about speed; it’s about precision. We help organizations grow through frameworks that connect
            ambition to capability, ensuring that growth remains intentional and coherent.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="text-black" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Conviction & Vision</h3>
          </div>
          <p className="text-gray-600">
            With a focus on leadership conviction, we align sustainable organizations around values that inspire
            progress, foster trust, and empower consistent decision-making.
          </p>
        </motion.div>
      </section>

      {/* PROCESS / APPROACH SECTION */}
      <section className="bg-gray-100 py-16 px-10">
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

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-sm py-6 text-center mt-auto">
        <p>© 2025 Sathsalaha. All rights reserved.</p>
        <p className="text-xs mt-1">
          Empowering businesses through strategic clarity and innovative solutions.
        </p>
      </footer>
    </div>
  );
}
