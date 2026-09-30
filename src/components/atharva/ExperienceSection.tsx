import React from "react";
import { FadeIn } from "../common/FadeIn";
import { Calendar, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { ChromeIcon } from "../common/Icons";

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: "Research Intern",
      organization: "Pune Institute of Computer Technology (PICT)",
      type: "Research & Development",
      period: "May 2026 – July 2026",
      location: "Pune, India",
      icon: ShieldCheck,
      badge: "Cybersecurity & Meta-Ensemble ML",
      accent: "from-cyan-500 to-blue-600",
      borderGlow: "border-cyan-500/30",
      description:
        "Led research and implementation of the Dynamic Weight-Optimized Meta-Ensemble (DWOME) framework designed for generalized intrusion detection and zero-day threat discovery across complex heterogeneous network traffic datasets.",
      achievements: [
        "Architected DWOME integrating 6 distinct ML classifiers (XGBoost, Random Forest, LightGBM, Extra Trees, SVM, and Neural Stacking).",
        "Achieved up to 90.34% multiclass detection accuracy on benchmark intrusion datasets.",
        "Formulated entropy-based confidence scoring and class-wise F1 reliability weighting to drastically suppress false alarms in imbalanced data distributions.",
        "Co-authored research paper documenting experimental rigor across 5-, 10-, and 12-class cyberattack benchmarks.",
      ],
      skills: ["Python", "Ensemble ML", "DWOME", "SMOTE", "Scikit-Learn", "Cybersecurity", "Data Analysis"],
    },
    {
      role: "Python Web Developer Intern",
      organization: "CodTech IT Solutions",
      type: "Software Engineering & NLP",
      period: "May 2025 – August 2025",
      location: "Remote / Hybrid",
      icon: ChromeIcon,
      badge: "NLP Chatbots & Browser Automation",
      accent: "from-blue-500 to-indigo-600",
      borderGlow: "border-blue-500/30",
      description:
        "Engineered software utilities and conversational automation tools, enhancing developer productivity tracking and enterprise inventory inquiry workflows.",
      achievements: [
        "Built and deployed an automated time tracking Chrome Extension for remote developers, measuring active workflow durations and logging data securely.",
        "Engineered an NLP-powered asset management chatbot utilizing Python and backend REST APIs, reducing manual asset status inquiries by 40%.",
        "Streamlined database queries and created real-time webhook integrations between backend microservices and client interfaces.",
      ],
      skills: ["Python", "NLP", "Chrome Extensions", "REST APIs", "Flask / FastAPI", "JavaScript", "SQL"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 inline-block mb-3">
              Career Trajectory
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Work & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Research Experience</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Combining hands-on engineering internships with cutting-edge academic research
            </p>
          </FadeIn>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-purple-600">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <FadeIn key={index} delay={index * 0.2} y={30}>
                <div className="relative group">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#0a0f1d] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-400/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`p-6 sm:p-8 rounded-3xl bg-[#0f172a]/80 border ${exp.borderGlow} backdrop-blur-xl shadow-xl hover:border-cyan-400/50 transition-all`}
                  >
                    {/* Top Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {exp.role}
                          </h3>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono">
                            {exp.badge}
                          </span>
                        </div>
                        <div className="text-cyan-400 font-semibold text-base sm:text-lg">
                          {exp.organization}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-6">
                      {exp.achievements.map((item, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
