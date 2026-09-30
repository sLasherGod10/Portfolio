import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Terminal, Cpu, Bot, ShieldCheck } from "lucide-react";
import { FadeIn } from "../common/FadeIn";
import { Magnet } from "../common/Magnet";
import { GithubIcon, LinkedinIcon } from "../common/Icons";

export const HeroSection: React.FC = () => {
  // Dynamic typing subtitle
  const phrases = [
    "Building Generative AI Systems",
    "Machine Learning Researcher",
    "Full-Stack Developer",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glowing orbs & mesh grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline Badge */}
          <FadeIn delay={0.1} y={20}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 backdrop-blur-md mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-300">
                🚀 AI/ML Engineer & CS Undergraduate
              </span>
            </div>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.2} y={30}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Atharva Khaire
              </span>
            </h1>
          </FadeIn>

          {/* Rotating Typewriter Subtitle */}
          <FadeIn delay={0.3} y={30}>
            <div className="flex items-center h-10 sm:h-12 mb-6">
              <span className="text-lg sm:text-2xl md:text-3xl font-medium text-slate-300">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-cyan-400 animate-pulse" />
            </div>
          </FadeIn>

          {/* Value Proposition */}
          <FadeIn delay={0.4} y={30}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Results-driven Computer Science undergraduate at{" "}
              <strong className="text-cyan-300 font-semibold">
                D. Y. Patil International University, Pune
              </strong>{" "}
              (CGPA: 8.28/10) specializing in{" "}
              <span className="text-white font-medium">Generative AI</span>,{" "}
              <span className="text-white font-medium">Autonomous Multi-Agent Systems</span>, and{" "}
              <span className="text-white font-medium">Meta-Ensemble Machine Learning</span>.
              Architecting dependable solutions from research hypotheses to production deployment.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.5} y={30}>
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all no-underline overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-sm sm:text-base tracking-wide backdrop-blur-md hover:bg-slate-800/80 hover:scale-[1.02] active:scale-[0.98] transition-all no-underline shadow-sm"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>

          {/* Social Links & Quick Connect */}
          <FadeIn delay={0.6} y={30}>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/sLasherGod10"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/atharvakhaire09"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:atharvakhaire.ak10@gmail.com"
                  aria-label="Send email"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Glowing Portrait / Developer Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <FadeIn delay={0.3} y={40} className="w-full flex justify-center">
            <Magnet padding={120} strength={4} className="relative z-10 w-full max-w-md">
              {/* Outer Glowing Neon Border Box */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/20 group">
                <div className="relative rounded-[22px] bg-[#0c1427] p-6 sm:p-8 backdrop-blur-xl border border-white/10 overflow-hidden">
                  {/* Subtle Background Pattern */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Portrait Graphic / Avatar */}
                  <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-inner shadow-cyan-500/30 bg-gradient-to-b from-[#131f3b] to-[#0a0f1d] flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-3xl shadow-lg shadow-cyan-500/50 mb-3">
                      AK
                    </div>
                    <div className="text-center px-4">
                      <p className="text-white font-bold text-base">Atharva Khaire</p>
                      <p className="text-cyan-400 text-xs font-mono">DYPIU Pune • 2022-2026</p>
                    </div>
                    
                    {/* Scanner light effect */}
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-0 animate-pulse" />
                  </div>

                  {/* Highlights under portrait */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Specialization
                      </span>
                      <span className="font-semibold text-white">AI/ML & GenAI Systems</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Research
                      </span>
                      <span className="font-semibold text-cyan-300">DWOME Cyber-Defense</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-purple-400" /> Multi-Agent
                      </span>
                      <span className="font-semibold text-white">LangChain & Gemini API</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 px-3.5 py-1.5 rounded-xl bg-[#0e1933]/95 border border-cyan-400/40 text-cyan-300 text-xs font-bold shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>CGPA 8.28</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 px-3.5 py-1.5 rounded-xl bg-[#0e1933]/95 border border-blue-400/40 text-blue-300 text-xs font-bold shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>PICT Intern &apos;26</span>
              </motion.div>
            </Magnet>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
