'use client';

import { motion } from "framer-motion";
import { Compass, Ruler, Hammer, Target, Layers, LineChart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function StrategyPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const phases = [
    {
      icon: Compass,
      title: "Assess",
      subtitle: "Understanding Vision, Goals, and Alignment",
      desc: "Every journey toward excellence begins with clarity. Sathsalaha engages deeply with leadership to assess goals, alignment, and readiness to scale.",
    },
    {
      icon: Ruler,
      title: "Architect",
      subtitle: "Sharpening Vision and Structuring Strategy",
      desc: "We convert strategic intent into an actionable blueprint — aligning structure, processes, and leadership to deliver measurable impact.",
    },
    {
      icon: Hammer,
      title: "Apply",
      subtitle: "Embedding Strategy and Sustaining Change",
      desc: "We work with your teams to translate plans into disciplined execution — reinforcing accountability, ownership, and learning.",
    },
  ];

  const architectDetails = [
    {
      icon: Layers,
      title: "Arenas",
      text: "Where will we play? Define target markets, products, and customer segments.",
    },
    {
      icon: Target,
      title: "Differentiation",
      text: "Build unique capabilities that sustain competitive advantage.",
    },
    {
      icon: LineChart,
      title: "Economic Logic",
      text: "Ensure financial viability and scalability across operations.",
    },
    {
      icon: Settings,
      title: "Organizational Structure",
      text: "Define accountability, workflows, and leadership cadence.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Header centerNavOnDesktop />

      {/* HERO SECTION */}
      <section className="px-10 py-16 max-w-6xl mx-auto text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Translating Vision into Sustainable Execution
        </motion.h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
          Growth that is sustainable and aligned with your goals needs a clear link between strategy, structure, systems, and leadership. Our 3A framework — Assess, Architect, Apply — turns ideas into measurable results.
        </p>
      </section>

      {/* REFINED 3A FRAMEWORK */}
      <section className="max-w-6xl mx-auto px-10 py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-2xl font-bold text-center text-gray-900 mb-12"
        >
          The 3A Framework — From Insight to Impact
        </motion.h2>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="flex-1 bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-black text-white rounded-full p-3 mb-4 shadow-md">
                  <phase.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{phase.title}</h3>
                <p className="text-gray-700 font-medium mb-3 text-sm uppercase tracking-wide">
                  {phase.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {phase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex justify-between items-center mt-8 px-12">
          <div className="w-1/3 border-t-2 border-dotted border-gray-300"></div>
          <div className="w-1/3 border-t-2 border-dotted border-gray-300"></div>
        </div>
      </section>

      {/* IMPROVED ARCHITECT DETAILS */}
      <section className="bg-gray-100 py-20 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={fadeUp} initial="hidden" animate="show" className="text-2xl font-bold text-gray-900 mb-4">
            Architect: From Intent to Sharp Strategy
          </motion.h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            The Architecture Phase refines vision into SMART goals, builds actionable strategy, and aligns organizational systems for execution. Each dimension strengthens the foundation for sustainable growth.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectDetails.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex flex-col items-center gap-3 mb-4">
                  <item.icon className="text-black" size={28} />
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY SECTION */}
      <section className="max-w-6xl mx-auto px-10 py-16">
        <motion.h2 variants={fadeUp} initial="hidden" animate="show" className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Apply: Where Vision Gains Traction
        </motion.h2>
        <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Strategy creates impact only when embedded into everyday decisions and actions. Our 3A Cycle ensures structured execution,
          leadership enablement, and continuous improvement.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: "Execution & Accountability",
            points: ["Translate goals into measurable KPIs.", "Cascade scorecards across all levels.", "Conduct regular strategic reviews."]
          }, {
            title: "Leadership Enablement & Culture",
            points: ["Coach leaders for clarity and delegation.", "Promote ownership and proactive behaviors.", "Align culture with performance."]
          }, {
            title: "Continuous Learning",
            points: ["Capture insights from execution.", "Refine processes and systems dynamically.", "Sustain improvements long-term."]
          }].map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{s.title}</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {s.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 text-center">
        <motion.h2 variants={fadeUp} initial="hidden" animate="show" className="text-2xl font-bold text-gray-900">
          The 3A Cycle — Strategy That Breathes
        </motion.h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Each Application feeds the next Assessment, creating a continuous loop of learning, alignment, and refinement.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900">Discuss Your Goals</Button>
          <Button variant="outline" className="border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100">Request a Deck</Button>
        </div>
      </section>

      <footer className="bg-black text-gray-400 text-sm py-6 text-center mt-auto">
        <p>© 2025 Sathsalaha. Strategy for Operational Excellence.</p>
      </footer>
    </div>
  );
}
