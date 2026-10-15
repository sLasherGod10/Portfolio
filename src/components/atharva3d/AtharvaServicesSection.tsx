import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../common/FadeIn";
import {
  Brain,
  Sparkles,
  Code2,
  BarChart3,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceItem {
  number: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

export const AtharvaServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      number: "01",
      name: "AI & Machine Learning",
      tagline: "Autonomous Models & Ensembles",
      description:
        "Developing production-grade machine learning pipelines, multi-agent AI research systems, and advanced neural architectures like DWOME for high-accuracy detection across complex datasets.",
      tags: ["TensorFlow", "PyTorch", "Scikit-Learn", "DWOME Meta-Ensemble", "XGBoost"],
      icon: Brain,
      accentColor: "#38bdf8",
    },
    {
      number: "02",
      name: "Generative AI & LLMs",
      tagline: "Agents, RAG & Reasoning",
      description:
        "Building intelligent applications powered by Google Gemini API, LangChain, RAG frameworks, prompt engineering, and automated autonomous workflow agents.",
      tags: ["Google Gemini", "LangChain", "Vector RAG", "Autonomous Agents", "Prompt Design"],
      icon: Sparkles,
      accentColor: "#818cf8",
    },
    {
      number: "03",
      name: "Full-Stack Web Engineering",
      tagline: "High-Performance Digital Products",
      description:
        "Creating robust web platforms, Chrome extensions, and interactive dashboards utilizing Python, JavaScript, PHP, MySQL, and modern responsive design systems.",
      tags: ["React & TypeScript", "Tailwind CSS", "Python Flask/FastAPI", "MySQL", "REST APIs"],
      icon: Code2,
      accentColor: "#34d399",
    },
    {
      number: "04",
      name: "Data Analytics & Engineering",
      tagline: "Actionable Insights & Pipelines",
      description:
        "Extracting actionable business insights using Power BI, Pandas, NumPy, SQL, exploratory data analysis, and advanced data cleaning pipelines.",
      tags: ["Power BI", "Pandas & NumPy", "SQL Query Tuning", "EDA Pipelines", "Data Modeling"],
      icon: BarChart3,
      accentColor: "#fbbf24",
    },
    {
      number: "05",
      name: "Software & Cloud Architecture",
      tagline: "Scalable Enterprise Foundations",
      description:
        "Designing scalable cloud architecture patterns, role-based authentication systems, secure database schemas, and modular software applications.",
      tags: ["Cloud Patterns", "System Design", "Role-Based Auth", "Docker", "Database Norm"],
      icon: Layers,
      accentColor: "#f43f5e",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 font-kanit relative z-0 overflow-hidden"
    >
      {/* Dynamic ambient background subtle floating blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header with dynamic tag */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-xs uppercase tracking-widest text-[#0C0C0C]/70 font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              What I Specialize In
            </span>
          </div>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-24 leading-none tracking-tight select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Animated Services List with Interactive Accordion & Glow */}
        <div className="flex flex-col">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <FadeIn key={item.number} delay={index * 0.08} y={30}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`group relative flex flex-col py-8 sm:py-10 md:py-12 cursor-pointer transition-colors duration-300 ${
                    index !== 0 ? "border-t border-[#0C0C0C]/15" : ""
                  }`}
                >
                  {/* Subtle active background highlight */}
                  <motion.div
                    className="absolute inset-0 -mx-4 px-4 rounded-3xl -z-10 bg-slate-50/80 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 w-full">
                    {/* Left: Number & Animated Icon */}
                    <div className="flex items-center md:items-start gap-4 shrink-0">
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.08 : 1,
                          color: isHovered ? "#000000" : "#0C0C0C",
                        }}
                        transition={{ duration: 0.2 }}
                        className="font-black text-[#0C0C0C] leading-none select-none"
                        style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
                      >
                        {item.number}
                      </motion.div>

                      <motion.div
                        animate={{
                          rotate: isHovered ? 360 : 0,
                          scale: isHovered ? 1.15 : 1,
                          backgroundColor: isHovered ? "#0C0C0C" : "rgba(12,12,12,0.06)",
                          color: isHovered ? "#FFFFFF" : "#0C0C0C",
                        }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="p-3 rounded-2xl flex items-center justify-center mt-2 shadow-sm"
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                    </div>

                    {/* Middle: Name, Tagline & Description */}
                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs uppercase font-mono tracking-widest text-[#0C0C0C]/50 font-medium">
                          {item.tagline}
                        </span>
                      </div>

                      <h3
                        className="font-bold uppercase text-[#0C0C0C] mb-3 leading-tight tracking-tight flex items-center justify-between"
                        style={{ fontSize: "clamp(1.2rem, 2.5vw, 2.2rem)" }}
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{
                            rotate: isHovered ? 45 : 0,
                            scale: isHovered ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                          className="hidden sm:flex w-10 h-10 rounded-full border border-black/15 items-center justify-center bg-white shadow-sm group-hover:bg-black group-hover:text-white transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      </h3>

                      <p
                        className="font-light leading-relaxed text-[#0C0C0C]/75 mb-4"
                        style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
                      >
                        {item.description}
                      </p>

                      {/* Interactive Tags with Animated Stagger */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map((tag, tIdx) => (
                          <motion.span
                            key={tIdx}
                            animate={{
                              y: isHovered ? -2 : 0,
                            }}
                            transition={{ delay: tIdx * 0.04 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-medium bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-[#0C0C0C]/80 group-hover:border-[#0C0C0C]/25 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
