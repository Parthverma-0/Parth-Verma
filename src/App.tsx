/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  Link as LinkIcon,
  School,
  Megaphone,
  Code,
  Palette,
  Linkedin,
  Github,
} from "lucide-react";
import { HeroGeometric } from "@/src/components/ui/shape-landing-hero";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary bg-[#030303]">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full bg-[#030303]/10 backdrop-blur-xl border-b border-white/5 z-50">
        <nav className="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="text-2xl font-bold text-primary tracking-tight"></div>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Ventures", "Stats", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-primary transition-colors"
                id={`nav-${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="bg-white/5 border border-white/10 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
            download
          >
            Resume
          </a>
        </nav>
      </header>

      <main>
        {/* Dynamic Hero Section */}
        <section id="hero">
          <HeroGeometric
            badge="Portfolio"
            title1="Building Products"
            title2="That Matter"
          />
        </section>

        {/* About Me Section */}
        <section
          className="py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10"
          id="about"
        >
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mx-auto border-2 border-primary/30 p-2 rounded-full violet-glow overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dfdspjswg/image/upload/v1778419712/Untitled_ugts5v.jpg"
                  alt="Founder Portrait"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-on-background">
                Hey, I'm Parth
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                I'm a multifaceted entrepreneur and technical leader focused on
                redefining how we interact with education and digital services.
                I am the Founder of OpenDrill and Co-founder of Webpeaker. With
                a background spanning AI engineering and strategic branding, I
                bridge the gap between complex technology and human-centric
                design.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["Edtech Founder", "Agency Owner", "AI Enthusiast"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 glass-card border-primary/30 text-primary text-[10px] uppercase font-bold tracking-widest"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ventures Section */}
        <section
          className="py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto"
          id="ventures"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-on-background">
              My Ventures
            </h2>
            <p className="text-base text-on-surface-variant mt-4">
              Scalable solutions built for the next era of the web.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* OpenDrill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 violet-glow flex flex-col justify-between"
              id="opendrill"
            >
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <School size={24} />
                </div>
                <h3 className="text-2xl font-bold text-on-background mb-4">
                  OpenDrill
                </h3>
                <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                  A revolutionary EdTech platform democratizing access to
                  high-quality technical skills through structured, affordable
                  learning paths.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Adaptive Learning", "Career Tracks", "Community Hub"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <a
                href="#"
                className="text-primary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
              >
                Visit OpenDrill <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Webpeaker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 cyan-glow flex flex-col justify-between"
              id="webpeaker"
            >
              <div>
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 text-secondary">
                  <Megaphone size={24} />
                </div>
                <h3 className="text-2xl font-bold text-on-background mb-4">
                  Webpeaker
                </h3>
                <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                  A high-end creative agency specializing in narrative-driven
                  brand identities and performance-focused digital ecosystems.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Brand Strategy", "Web Design", "Marketing AI"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] font-bold uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <a
                href="#"
                className="text-secondary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
              >
                Visit Webpeaker <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section
          className="bg-surface-container-lowest/50 py-16 border-y border-white/5"
          id="stats"
        >
          <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Ventures", val: "2" },
              { label: "Per Course", val: "₹500" },
              { label: "Core Pillars", val: "5" },
              { label: "Service Verticals", val: "4" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${i !== 0 ? "md:border-l border-white/5" : ""}`}
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.val}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto"
          id="skills"
        >
          <h2 className="text-3xl font-bold text-on-background mb-12">
            What I Work With
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <Code size={16} /> Tech & Product
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "JavaScript",
                  "React.js",
                  "AI / LLMs",
                  "Product Roadmap",
                  "System Architecture",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-6 flex items-center gap-2">
                <Palette size={16} /> Business & Creative
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "SEO Strategy",
                  "Brand Narrative",
                  "Growth Marketing",
                  "UVP Definition",
                  "Creative Direction",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto mb-20"
          id="contact"
        >
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-on-background mb-4 leading-tight">
                Let's Build <br />
                Something
              </h2>
              <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
                Open for strategic consultations, venture partnerships, or key
                speaking engagements. Reach out and let's explore what's
                possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                      Email Me
                    </div>
                    <div className="text-base text-on-background">
                      parthverma368@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <LinkIcon size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                      LinkedIn
                    </div>
                    <div className="text-base text-on-background line-clamp-1">
                      linkedin.com/in/parth-verma-576719371/
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 space-y-6 violet-glow"
            >
              <div className="space-y-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                  Name
                </label>
                <input
                  className="w-full bg-background border border-white/10 rounded-lg focus:ring-primary focus:border-primary text-on-background px-4 py-3 outline-none transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                  Email Address
                </label>
                <input
                  className="w-full bg-background border border-white/10 rounded-lg focus:ring-primary focus:border-primary text-on-background px-4 py-3 outline-none transition-all"
                  placeholder="john@company.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                  Message
                </label>
                <textarea
                  className="w-full bg-background border border-white/10 rounded-lg focus:ring-primary focus:border-primary text-on-background px-4 py-3 outline-none transition-all resize-none"
                  placeholder="How can we collaborate?"
                  rows={4}
                />
              </div>
              <button className="w-full bg-primary text-on-primary py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-16 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-margin-desktop max-w-container-max mx-auto gap-12">
          <div>
            <p className="text-base text-secondary font-medium">
              Built with intention.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["About", "Ventures", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:parthverma368@gmail.com"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://linkedin.com/in/parth-verma-576719371/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <Github size={22} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
