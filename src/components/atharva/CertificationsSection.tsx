import React from "react";
import { FadeIn } from "../common/FadeIn";
import { CheckCircle, ShieldCheck, Cloud, Sparkles, Database } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Cloud Architecture Design Patterns",
      issuer: "Coursera",
      status: "Verified Credential",
      date: "2025",
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-500",
      skills: ["Cloud Patterns", "Microservices", "Scalability", "High Availability", "Resilience"],
      description:
        "Mastery over cloud architectural topologies, distributed system decoupling, circuit breakers, event-driven designs, and high-availability enterprise infrastructure.",
    },
    {
      title: "GenAI for Data Engineers: Scaling with GenAI",
      issuer: "Coursera",
      status: "Verified Credential",
      date: "2025",
      icon: Sparkles,
      gradient: "from-blue-500 to-indigo-500",
      skills: ["LLM Scaling", "Vector Databases", "RAG Pipelines", "Embeddings", "Model Evaluation"],
      description:
        "Architecting production-ready Generative AI systems for enterprise data stacks, embedding index optimization, context window management, and RAG benchmarking.",
    },
    {
      title: "Building Smarter Data Pipelines: SQL, Spark, Kafka & GenAI",
      issuer: "Coursera",
      status: "Verified Credential",
      date: "2025",
      icon: Database,
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Apache Spark", "Apache Kafka", "SQL Optimization", "Real-Time Streaming", "GenAI Pipelines"],
      description:
        "End-to-end distributed data engineering with real-time stream ingestion through Kafka, distributed transformations in Spark, and AI-augmented analytics.",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 inline-block mb-3">
              Professional Credentials
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Verified <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Recognized competencies in Cloud Architecture, Generative AI scaling, and modern Big Data streaming
            </p>
          </FadeIn>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <FadeIn key={index} delay={index * 0.15} y={30}>
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#0f172a]/75 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-cyan-500/10 group">
                  <div>
                    {/* Top Row: Issuer & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-[11px] font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-cyan-400" />
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {cert.title}
                    </h3>

                    {/* Verification Status */}
                    <div className="flex items-center gap-2 mb-4 text-xs">
                      <span className="text-emerald-400 flex items-center gap-1 font-medium">
                        <CheckCircle className="w-3.5 h-3.5" /> {cert.status}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{cert.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    {/* Skills pills */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-mono"
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
