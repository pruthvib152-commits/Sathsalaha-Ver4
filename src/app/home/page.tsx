"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import {
  Landmark,
  Target,
  Workflow,
  Users,
  Activity,
  Settings,
  Gauge,
  Rocket,
  Layers,
  LineChart,
  Compass,
  Menu,
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
  RefreshCcw,
  X,
  ChevronDown,
} from "lucide-react";

const MOBILE_SHEET_TITLE = "Navigation Menu";

/* ---------------------------------------------
   HeroCarousel
   - Autoplay 2000ms, pause on hover
---------------------------------------------- */
function HeroCarousel() {
  const slides = [
    { id: "s1", title: "Revenues are increasing, but so are customer concerns.", ip: "Inflection Point: Growth is up, but service is slipping.", rr: "Renewal Response: Re-enable operational excellence — deliver promised quality and restore trust." },
    { id: "s2", title: "Competition is strong — differentiation is fading.", ip: "Inflection Point: Market pressure rising.", rr: "Renewal Response: Sharpen strategy, reinforce value proposition." },
    { id: "s3", title: "Revenues are growing, but margins are shrinking.", ip: "Inflection Point: Profitability thinning.", rr: "Renewal Response: Restore cost discipline, simplify complexity." },
    { id: "s4", title: "Employees are busy, but productivity isn’t rising.", ip: "Inflection Point: High effort, low output.", rr: "Renewal Response: Strengthen execution focus, clarify accountability." },
    { id: "s5", title: "Digital investments are made, but value isn’t realized.", ip: "Inflection Point: Low adoption, fragmented data.", rr: "Renewal Response: Drive integration and usage, unlock insight-driven action." },
    { id: "s6", title: "Customers like the brand, but loyalty is declining.", ip: "Inflection Point: Experience is lagging expectations.", rr: "Renewal Response: Elevate service discipline, protect trust and retention." },
    { id: "s7", title: "Governance exists, but leadership bandwidth is limited.", ip: "Inflection Point: Scaling outpaces leadership capacity.", rr: "Renewal Response: Empower leaders, strengthen succession for continuity." },
    { id: "s8", title: "Processes are defined, but execution varies.", ip: "Inflection Point: Quality inconsistent across teams.", rr: "Renewal Response: Standardize workflows, build execution reliability." },
    { id: "s9", title: "Expansion succeeded, but culture is strained.", ip: "Inflection Point: Alignment drifting as organization grows.", rr: "Renewal Response: Reconnect purpose, reinforce leadership cohesion." },
    { id: "s10", title: "We have a plan — but momentum is slipping.", ip: "Inflection Point: Strategy stalling in execution.", rr: "Renewal Response: Realign vision → strategy → execution with discipline." },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const next = useCallback(() => { setDirection(1); setIndex((i) => (i + 1) % slides.length); }, [slides.length]);
  const prev = useCallback(() => { setDirection(-1); setIndex((i) => (i - 1 + slides.length) % slides.length); }, [slides.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 2000);
    return () => clearInterval(t);
  }, [paused, next]);

  const slideVariants = {
    initial: (dir: number) => ({ opacity: 0, x: dir > 0 ? 200 : -200 }),
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -200 : 200, transition: { duration: 0.4 } }),
  };

  const slide = slides[index];

  return (
    <div className="relative rounded-2xl p-2 md:p-4" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-live="polite">
      <div className="relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur">
        <div className="relative p-4 md:p-5">
          <AnimatePresence mode="wait">
            <motion.div key={slide.id} custom={direction} initial="initial" animate="animate" exit="exit" variants={slideVariants}>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{slide.title}</h1>
              <p className="mt-3 text-slate-700 max-w-3xl">{slide.ip}</p>
              <p className="mt-1 text-slate-700 max-w-3xl">{slide.rr}</p>
              <div className="mt-4 flex items-center gap-3">
                <Link href="/contact"><Button>Speak to Sridhar <ChevronRight className="ml-2 h-4 w-4"/></Button></Link>
                <a href="#approach" className="text-slate-700 hover:underline">3A Approach</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => { setPaused(true); setDirection(-1); prev(); }} aria-label="Previous slide"><ChevronLeft className="h-4 w-4"/></Button>
          <Button variant="outline" size="icon" onClick={() => { setPaused(true); setDirection(1); next(); }} aria-label="Next slide"><ChevronRight className="h-4 w-4"/></Button>
          <Button variant="ghost" size="icon" onClick={() => setPaused((p) => !p)} aria-label={paused ? "Resume autoplay" : "Pause autoplay"}>
            {paused ? <Play className="h-4 w-4"/> : <Pause className="h-4 w-4"/>}
          </Button>
        </div>
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => { setIndex(i); setPaused(true); }} className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-slate-900" : "w-2 bg-slate-300"}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const [mobileHomeOpen, setMobileHomeOpen] = useState(true);
  const section = (id: string) => ({ id, className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-12 scroll-mt-24" });

  return (
    <div ref={topRef} className="min-h-screen scroll-smooth bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-inter">
      {/* Header */}

      <Header centerNavOnDesktop />

      {(() => { const s = section("top"); return (
        <section {...{ ...s, className: s.className + " pt-6 md:pt-8" }}>
          <HeroCarousel />
        </section>
      );})()}

      {/* ABOUT + PHILOSOPHY */}
      <div className="bg-white">
        <section {...section("about")}>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <h2 className="text-4xl font-bold text-primary">About Sathsalaha</h2>
          <div id="philosophy" className="mt-6 p-6 md:p-8 rounded-3xl border bg-white shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-slate-900">Our Philosophy</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">At the heart of the SMC Framework is the belief that organizations thrive when technology and humanity advance together. <strong>Vision</strong> serves as the north star, <strong>Strategy</strong> shapes deliberate choices, <strong>Execution</strong> ensures disciplined delivery, and <strong>Leadership</strong> integrates them all with purpose.</p>
            <p className="mt-3 text-slate-700 leading-relaxed">In modern times, this harmony takes form as <strong>Human-Centered Digitalization™</strong> — being <strong>Digitally Intelligent Inside</strong> to enable efficiency and insight, while remaining <strong>Deeply Human Outside</strong> to foster trust, loyalty, and stakeholder well-being.</p>
            <p className="mt-3 text-slate-700 leading-relaxed">This balance between automation and empathy not only strengthens relationships with customers and employees but also drives sustained profitability, investor confidence, and brand continuity. <strong>True enterprise renewal begins where operational intelligence meets human intent.</strong></p>
          </div>
        </motion.div>
        </section>
      </div>

      {/* FOUR PILLARS */}
      <div className="bg-slate-50">
        <section {...section("pillars")}>
        <h2 className="text-4xl font-bold text-primary">The Four Pillars of Transformation</h2>
        <div className="mt-8 md:mt-6 grid md:grid-cols-4 gap-5 md:gap-4">
          {[
            { icon: Landmark, title: "Corporate Vision & Goals", text: "Defines the north star and measurable milestones guiding direction and priorities." },
            { icon: Target, title: "Strategy", text: "Deliberate choices about where to play and how to win with differentiation and viability." },
            { icon: Workflow, title: "Execution", text: "Translates strategy into outcomes through structure, process, and accountability." },
            { icon: Users, title: "Leadership", text: "Integrates and sustains alignment through clarity, integrity, and adaptability." },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card key={idx} className="border bg-white shadow-sm hover:shadow-md transition-shadow rounded-2xl p-4 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg text-slate-900 leading-tight">{pillar.title}</h3>
                </div>
                <p className="text-slate-700 mt-3 leading-relaxed">{pillar.text}</p>
              </Card>
            );
          })}
        </div>
        </section>
      </div>

      {/* BUSINESS INFLECTION POINTS */}
      <div className="bg-white">
        <section {...section("inflection")}>
        <h2 className="text-4xl font-bold text-primary">Business Inflection Points</h2>
        <div className="mt-8 md:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 auto-rows-fr items-stretch gap-5 md:gap-4">
          {[
            { icon: Activity, title: "Contextual (External)", text: "Market saturation, tech disruption, regulation, macro cycles." },
            { icon: Settings, title: "Organizational (Internal)", text: "Process inefficiency, leadership transitions, culture drift." },
            { icon: Landmark, title: "Strategic (Decisions)", text: "New markets, M&A, major directional shifts." },
            { icon: Gauge, title: "Growth Plateaus", text: "Recognize and address early to sustain evolution." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="h-full border bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl p-4 flex flex-col">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg text-slate-900 leading-tight">{item.title}</h3>
                </div>
                <p className="text-slate-700 mt-3 leading-relaxed">{item.text}</p>
              </Card>
            );
          })}
        </div>
        </section>
      </div>

      {/* RENEWAL PROCESS (Tabs) */}
      <div className="bg-slate-50">
        <section {...section("renewal")}>
        <h2 className="text-4xl font-bold text-primary">The Renewal Process</h2>
        <Tabs defaultValue="postures" className="mt-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="postures">Leadership Postures</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="outcome">Outcome</TabsTrigger>
          </TabsList>

          <TabsContent value="postures" className="mt-4">
            <div className="grid md:grid-cols-3 gap-6">
              {[{ title: "Prudent", text: "Anticipates next inflection and acts early." }, { title: "Reactive", text: "Responds when plateau emerges." }, { title: "Proactive", text: "Detects early signals, intervenes swiftly." }].map((item, i) => (
                <Card key={i} className="border bg-white shadow-sm rounded-xl p-4">
                  <h3 className="font-semibold text-lg text-slate-900 leading-tight">{item.title}</h3>
                  <p className="text-slate-700 mt-3 leading-relaxed">{item.text}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="mt-4">
            <div className="grid md:grid-cols-3 gap-6">
              {[{ title: "Clarify Vision", text: "Reaffirm the north star." }, { title: "SMART Goals", text: "Translate vision into measurable milestones." }, { title: "Re-evaluate Strategy", text: "Refine choices and staging." }, { title: "Drive Execution", text: "Ensure operational excellence." }, { title: "Steer Leadership", text: "Adopt style fit for maturity." }].map((item, i) => (
                <Card key={i} className="border bg-white shadow-sm rounded-xl p-4">
                  <h3 className="font-semibold text-lg text-slate-900 leading-tight">{item.title}</h3>
                  <p className="text-slate-700 mt-3 leading-relaxed">{item.text}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="outcome" className="mt-4">
            <Card className="border bg-white shadow-sm p-6 rounded-xl">
              <div className="flex items-center gap-3"><RefreshCcw className="h-6 w-6 text-primary" /><h3 className="font-semibold text-lg text-slate-900 leading-tight">Renewed Momentum</h3></div>
              <p className="text-slate-700 mt-3 leading-relaxed">Lift from plateau to sustained growth.</p>
            </Card>
          </TabsContent>
        </Tabs>
        </section>
      </div>

      {/* ENGAGEMENT SCENARIOS */}
      <div className="bg-white">
        <section {...section("engagement")}>
        <h2 className="text-4xl font-bold text-primary">Engagement Scenarios</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">We support organizations across Strategic Ascent, Targeted Transformation, and Enterprise Evolution to ensure clarity, focus, and continuity.</p>
        <div className="mt-8 md:mt-6 grid md:grid-cols-3 gap-5 md:gap-4">
          {[
            { label: "Strategic Ascent", icon: Rocket, title: "The Next Orbit™", text: "Align vision, strategy, and execution for scale and sustainability." },
            { label: "Targeted Transformation", icon: Layers, title: "Focused Excellence™", text: "Resolve high-impact problems and reinforce execution discipline." },
            { label: "Enterprise Evolution", icon: Compass, title: "The Continuity Program™", text: "Professionalize governance and secure succession for continuity." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="border bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl p-4">
                <div className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 inline-block mb-3">{item.label}</div>
                <div className="flex items-center gap-3"><Icon className="h-6 w-6 text-primary" /><h3 className="font-semibold text-lg text-slate-900 leading-tight">{item.title}</h3></div>
                <p className="text-slate-700 mt-3 leading-relaxed">{item.text}</p>
              </Card>
            );
          })}
        </div>
        </section>
      </div>

      {/* 3A APPROACH — FULL ANIMATED */}
      <div className="bg-slate-50">
        <section {...section("approach")}>
        <h2 className="text-4xl font-bold text-primary">3A Approach — Assessment → Architecture → Application</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.55 } } }}
          className="mt-6 grid md:grid-cols-3 gap-5 md:gap-4"
        >
          {[
            { icon: LineChart, title: "Assessment", text: "Evaluate alignment and maturity to create an evidence base for change." },
            { icon: Workflow, title: "Architecture", text: "Design the renewed strategy, structure, and leadership model for minimal disruption." },
            { icon: Rocket, title: "Application", text: "Implement transformation in phases, embedding systems and behaviors for sustained growth." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>
                <Card className="border bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl p-4 h-full">
                  <div className="flex items-center gap-3 mb-2"><Icon className="h-6 w-6 text-primary" /><h3 className="font-semibold text-lg text-slate-900 leading-tight">{item.title}</h3></div>
                  <p className="text-slate-700 leading-relaxed">{item.text}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        </section>
      </div>

      {/* Footer */}
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
