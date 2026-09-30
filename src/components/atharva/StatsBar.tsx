import React from "react";
import { FadeIn } from "../common/FadeIn";
import { Award, Shield, Cpu, Code } from "lucide-react";

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: "8.28",
      label: "B.Tech CGPA / 10",
      detail: "DYPIU Pune (2022-2026)",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Shield,
      value: "90.34%",
      label: "Peak Cyberattack Accuracy",
      detail: "DWOME Meta-Ensemble Research",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Cpu,
      value: "6",
      label: "ML Classifiers Integrated",
      detail: "Heterogeneous Meta-Stacking",
      color: "from-sky-400 to-cyan-500",
    },
    {
      icon: Code,
      value: "3+",
      label: "Flagship Architectures",
      detail: "Multi-Agent AI & Full-Stack",
      color: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 mb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0.2} y={20}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-3xl bg-[#0f172a]/80 border border-cyan-500/20 shadow-xl backdrop-blur-xl">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-slate-900/80 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide text-center sm:text-left">
                    {stat.label}
                  </span>
                  <span className="text-slate-400 text-[11px] text-center sm:text-left mt-0.5">
                    {stat.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
