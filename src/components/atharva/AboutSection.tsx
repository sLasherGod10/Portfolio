import React, { useState } from "react";
import { FadeIn } from "../common/FadeIn";
import { AnimatedText } from "../common/AnimatedText";
import { 
  GraduationCap, 
  BrainCircuit, 
  Sparkles, 
  Database, 
  Wrench, 
  CheckCircle2, 
  MapPin, 
  Cpu
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "aiml" | "genai" | "data" | "tools">("all");

  const skillCategories = [
    {
      id: "aiml",
      title: "AI & Machine Learning",
      icon: BrainCircuit,
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "TensorFlow", level: "Advanced" },
        { name: "PyTorch", level: "Advanced" },
        { name: "Scikit-learn", level: "Expert" },
        { name: "Supervised Learning", level: "Expert" },
        { name: "Unsupervised Learning", level: "Advanced" },
        { name: "Deep Neural Networks", level: "Advanced" },
        { name: "Ensemble Learning (Stacking)", level: "Specialist" },
      ],
    },
    {
      id: "genai",
      title: "Generative AI & LLMs",
      icon: Sparkles,
      color: "from-sky-400 to-indigo-500",
      borderColor: "border-sky-500/30",
      skills: [
        { name: "Large Language Models (LLMs)", level: "Advanced" },
        { name: "Retrieval-Augmented Gen (RAG)", level: "Advanced" },
        { name: "Autonomous AI Agents", level: "Specialist" },
        { name: "LangChain", level: "Advanced" },
        { name: "Prompt Engineering", level: "Expert" },
        { name: "Natural Language Processing (NLP)", level: "Advanced" },
        { name: "Gemini API & OpenAI API", level: "Advanced" },
      ],
    },
    {
      id: "data",
      title: "Data Analysis & Databases",
      icon: Database,
      color: "from-blue-400 to-teal-500",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Pandas", level: "Expert" },
        { name: "NumPy", level: "Expert" },
        { name: "Power BI", level: "Proficient" },
        { name: "MySQL", level: "Advanced" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Data Wrangling & Cleaning", level: "Expert" },
        { name: "SMOTE & Imbalanced Learning", level: "Specialist" },
      ],
    },
    {
      id: "tools",
      title: "Languages & DevOps Tools",
      icon: Wrench,
      color: "from-indigo-400 to-purple-500",
      borderColor: "border-indigo-500/30",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "C++", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
        { name: "JavaScript", level: "Proficient" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "VS Code", level: "Expert" },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 inline-block mb-3">
              Background & Competencies
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Engineering with <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Intelligence & Purpose</span>
            </h2>
          </FadeIn>
        </div>

        {/* Two-Column About Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left card: University & Focus */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.2} y={30} className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[#0f172a]/70 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-xl transition-all flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl">
                        D. Y. Patil International University, Pune
                      </h3>
                      <p className="text-cyan-400 text-xs font-mono flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" /> Pune, Maharashtra • 2022 – 2026
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base mt-4">
                    I am a results-driven Computer Science undergraduate maintaining an academic record of{" "}
                    <strong className="text-white font-semibold">8.28 / 10 CGPA</strong>. My focus spans
                    algorithmic problem-solving, scalable system design, and applied machine learning.
                  </p>

                  <p className="text-slate-400 leading-relaxed text-sm mt-3">
                    Equipped with rigorous foundations in Python, Machine Learning, Data Science, and modern software engineering, I combine algorithmic precision with generative AI workflows to solve high-impact industrial and research challenges.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" /> B.Tech Computer Science
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Research Fellow at PICT
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Multi-Agent Architect
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right card: Mission & Animated Scroll-Reveal Text */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.3} y={30} className="h-full">
              <div className="h-full p-8 rounded-3xl bg-[#0f172a]/70 border border-slate-800 hover:border-blue-500/30 backdrop-blur-xl transition-all flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-950 border border-blue-500/40 text-blue-400">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl">
                        Technical Philosophy
                      </h3>
                      <p className="text-blue-400 text-xs font-mono mt-0.5">
                        Research-Backed • Production-Ready
                      </p>
                    </div>
                  </div>

                  <div className="my-6">
                    <AnimatedText
                      text="I thrive at the intersection of machine learning theory and applied software engineering. From orchestrating multi-agent LLM reasoning workflows to training resilient ensemble classifiers for cybersecurity, I build systems that are robust, explainable, and production-tested."
                      className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium text-left justify-start"
                    />
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Specialties: Generative AI, RAG, ML Stacking</span>
                  <span className="text-cyan-400 font-mono">Status: Open to AI/ML Roles</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Skills Section Grid */}
        <div id="skills" className="pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Technical Expertise & Tooling
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Classified across AI/ML algorithms, Generative frameworks, and engineering toolsets
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-2xl border border-slate-800">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "all"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                All Skills
              </button>
              <button
                onClick={() => setActiveTab("aiml")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "aiml"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI / ML
              </button>
              <button
                onClick={() => setActiveTab("genai")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "genai"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Gen AI
              </button>
              <button
                onClick={() => setActiveTab("data")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "data"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Data & DBs
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "tools"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Tools
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <FadeIn key={category.id} delay={idx * 0.1} y={30}>
                  <div
                    className={`p-6 sm:p-7 rounded-3xl bg-[#0f172a]/70 border ${category.borderColor} shadow-lg backdrop-blur-xl hover:shadow-cyan-500/5 transition-all group`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-white font-bold text-lg">{category.title}</h4>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between group/skill"
                        >
                          <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/skill:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-cyan-400/80 mt-1">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
