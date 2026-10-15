import React from "react";
import { FadeIn } from "../common/FadeIn";
import { ShieldCheck, Calendar, MapPin, CheckCircle, GraduationCap } from "lucide-react";
import { ChromeIcon } from "../common/Icons";

export const AtharvaExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: "Research Intern",
      organization: "Pune Institute of Computer Technology (PICT)",
      badge: "Cybersecurity & Meta-Ensemble ML",
      period: "May 2026 – July 2026",
      location: "Pune, India",
      icon: ShieldCheck,
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
      badge: "NLP Chatbots & Browser Automation",
      period: "May 2025 – August 2025",
      location: "Remote / Hybrid",
      icon: ChromeIcon,
      description:
        "Engineered software utilities and conversational automation tools, enhancing developer productivity tracking and enterprise inventory inquiry workflows.",
      achievements: [
        "Built and deployed an automated time tracking Chrome Extension for remote developers, measuring active workflow durations securely.",
        "Engineered an NLP-powered asset management chatbot utilizing Python and backend REST APIs, reducing manual status queries by 40%.",
        "Streamlined database queries and created real-time webhook integrations between backend microservices and client interfaces.",
      ],
      skills: ["Python", "NLP", "Chrome Extensions", "REST APIs", "Flask / FastAPI", "JavaScript", "SQL"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] font-kanit relative z-10 border-t border-[#D7E2EA]/15">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-2">
              Career Trajectory &amp; Research
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
            >
              Experience
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light mt-4 max-w-xl mx-auto">
              Bridging academic research hypotheses with production software engineering.
            </p>
          </FadeIn>
        </div>

        {/* Education Highlight Card */}
        <FadeIn delay={0.2} y={30} className="mb-12">
          <div className="rounded-[36px] border-2 border-[#D7E2EA]/30 bg-[#121212] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-[#D7E2EA]/20 flex items-center justify-center text-[#BBCCD7] shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white">
                  D. Y. Patil International University, Pune
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light mt-0.5">
                  Bachelor of Technology (B.Tech) in Computer Science &bull; 2022 &ndash; 2026
                </p>
              </div>
            </div>

            <div className="px-5 py-2.5 rounded-2xl bg-white/5 border border-[#D7E2EA]/20 text-center shrink-0">
              <span className="text-2xl font-black text-white font-mono">8.28</span>
              <span className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 block">CGPA / 10</span>
            </div>
          </div>
        </FadeIn>

        {/* Timeline List */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <FadeIn key={exp.role} delay={idx * 0.15} y={30}>
                <div className="rounded-[40px] border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA] bg-[#121212] p-6 sm:p-10 transition-all duration-300 shadow-xl">
                  {/* Top row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/15 text-[#BBCCD7]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase text-white">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono uppercase px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#BBCCD7]">
                          {exp.badge}
                        </span>
                      </div>
                      <span className="text-sm sm:text-base text-[#D7E2EA] font-medium block">
                        {exp.organization}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#D7E2EA]/60">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black border border-white/10">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black border border-white/10">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/70 font-light">
                        <CheckCircle className="w-4 h-4 text-[#BBCCD7] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-black text-[#D7E2EA]/80 border border-white/10 text-[11px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
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
