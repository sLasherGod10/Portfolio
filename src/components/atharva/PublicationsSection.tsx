import React from "react";
import { FadeIn } from "../common/FadeIn";
import { BookOpen, Shield, Zap, Cpu, Network } from "lucide-react";

export const PublicationsSection: React.FC = () => {
  const classifiers = [
    "XGBoost",
    "Random Forest",
    "LightGBM",
    "Extra Trees",
    "Support Vector Machine (SVM)",
    "Deep Neural Stacker",
  ];

  const innovations = [
    {
      title: "Dynamic Weight Optimization",
      desc: "Assigns adaptive probability weights to each of the 6 ML base classifiers based on sample-level confidence rather than static uniform voting.",
      icon: Zap,
    },
    {
      title: "Entropy-Based Confidence Metric",
      desc: "Measures decision entropy of predictions to dynamically discount uncertain predictions on novel attack vectors.",
      icon: Cpu,
    },
    {
      title: "Class-Wise F1 Reliability Weighting",
      desc: "Weights classifiers based on per-class historical precision and recall, safeguarding against minority-class intrusion misclassifications.",
      icon: Shield,
    },
    {
      title: "SMOTE Multi-Class Balancing",
      desc: "Rigorous synthetic oversampling applied across 5-, 10-, and 12-class intrusion datasets to ensure generalized detection across rare zero-day threats.",
      icon: Network,
    },
  ];

  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 inline-block mb-3">
              Research & Scientific Contributions
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Published <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Academic Research</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Advancing generalized intrusion detection through novel meta-ensemble learning architectures
            </p>
          </FadeIn>
        </div>

        {/* Featured Publication Spotlight Box */}
        <FadeIn delay={0.3} y={30}>
          <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-blue-500/30 to-indigo-600/30 shadow-2xl">
            <div className="rounded-[22px] bg-[#0c1427]/95 p-6 sm:p-10 backdrop-blur-xl border border-white/5 space-y-8">
              {/* Paper Title & Tag */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-lg bg-cyan-950 border border-cyan-700/60 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Research Paper
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                    PICT Research Lab • 2026
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-blue-950 border border-blue-700/60 text-blue-300 text-xs font-semibold">
                    Peer-Reviewed Methodology
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  Dynamic Weight-Optimized Meta-Ensemble Learning for Generalized Cyberattack Detection Across Heterogeneous Datasets
                </h3>
                <p className="text-cyan-400 text-xs sm:text-sm font-medium mt-2">
                  Atharva Shriram Khaire (Lead Researcher & Model Architect)
                </p>
              </div>

              {/* Research Abstract & Summary */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  <strong>Abstract:</strong> Intrusion detection systems (IDS) regularly face extreme class imbalance, concept drift, and degradation when tested across heterogeneous enterprise network topologies. In this work, we propose the <strong>Dynamic Weight-Optimized Meta-Ensemble (DWOME)</strong> architecture.
                </p>
                <p>
                  DWOME integrates <strong>6 distinct machine learning classifiers</strong>, leveraging dynamically calculated entropy confidence metrics alongside per-class historical F1 reliability to fuse soft predictions into an optimized meta-classification decision. Rigorously evaluated with Synthetic Minority Over-sampling Technique (SMOTE) across <strong>5-class, 10-class, and 12-class</strong> benchmark datasets, DWOME demonstrated generalized resilience, establishing up to <strong>90.34% peak detection accuracy</strong> while drastically reducing false alarms.
                </p>
              </div>

              {/* Performance Metrics Banner */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">90.34%</span>
                  <span className="text-[11px] text-slate-400 block mt-1 uppercase tracking-wider font-semibold">
                    Peak Multiclass Accuracy
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/20 text-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">6 Models</span>
                  <span className="text-[11px] text-slate-400 block mt-1 uppercase tracking-wider font-semibold">
                    Heterogeneous Classifiers
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-indigo-500/20 text-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">12 Classes</span>
                  <span className="text-[11px] text-slate-400 block mt-1 uppercase tracking-wider font-semibold">
                    Max Evaluated Classes
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-sky-500/20 text-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">SMOTE</span>
                  <span className="text-[11px] text-slate-400 block mt-1 uppercase tracking-wider font-semibold">
                    Minority Class Balancing
                  </span>
                </div>
              </div>

              {/* Core Innovations Grid */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">
                  Key Algorithmic Innovations in DWOME
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {innovations.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-start gap-3"
                      >
                        <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-sm mb-1">{item.title}</h5>
                          <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Ensembled Classifiers Pills */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-2">Ensemble Stack:</span>
                {classifiers.map((c, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800 text-xs font-mono"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
