import React, { useState } from "react";
import { FadeIn } from "../common/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Car, Server, ArrowUpRight, Check, X, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "../common/Icons";

interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tech: string[];
  description: string;
  highlights: string[];
  githubUrl: string;
  icon: typeof Bot;
  gradient: string;
  architectureDetails: {
    overview: string;
    flow: string[];
    metrics: string;
  };
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const projects: ProjectDetails[] = [
    {
      id: "research-mind",
      title: "Research Mind: Multi-Agent AI Research System",
      subtitle: "Autonomous Agent Collaboration Platform",
      category: "Generative AI & Agentic Systems",
      tech: ["Python", "Gemini API", "LangChain", "Streamlit", "ChromaDB"],
      icon: Bot,
      gradient: "from-cyan-500 via-sky-500 to-blue-600",
      description:
        "Engineered a multi-agent AI research system orchestrating Search, Reader, Writer, and Critic agents to automate web search, content extraction, fact-checking, and cohesive research report generation.",
      highlights: [
        "Orchestrates four autonomous specialized agents (Searcher, Reader, Writer, Critic) with iterative consensus loops.",
        "Integrates Google Gemini Pro for semantic synthesis and high-speed multi-source web ingestion.",
        "Reduces comprehensive topic research time from 2 hours to under 90 seconds with automated Markdown & PDF exports.",
      ],
      githubUrl: "https://github.com/sLasherGod10",
      architectureDetails: {
        overview:
          "Research Mind employs a Directed Acyclic Graph (DAG) state machine where the Search Agent fetches verified web data, the Reader Agent digests and filters key citations, the Writer drafts the paper structure, and the Critic checks citations and requests revisions before final rendering in Streamlit.",
        flow: [
          "Query Parsing & Semantic Decomposition",
          "Search Agent: Concurrent Google Search & arXiv Querying",
          "Reader Agent: HTML/PDF Parsing & Vector Chunking",
          "Critic & Writer Agent: Iterative Drafting & Fact Verification",
          "Streamlit UI: Real-time Thought Stream & Markdown Synthesis",
        ],
        metrics: "95% citation accuracy, sub-90s execution for 5,000-word reports",
      },
    },
    {
      id: "ignitron",
      title: "Ignitron: AI-Powered Car Recommendation System",
      subtitle: "Machine Learning Multi-Criteria Decision Engine",
      category: "Machine Learning & Full-Stack",
      tech: ["Python", "Scikit-Learn", "KNN Algorithm", "Flask", "Pandas"],
      icon: Car,
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      description:
        "Built a K-Nearest Neighbors (KNN) vehicle recommendation engine ranking top vehicles tailored to multifaceted user preferences with an end-to-end Flask interactive web interface.",
      highlights: [
        "Multi-dimensional feature vectorization across fuel efficiency, price point, horsepower, safety score, and chassis type.",
        "Custom Minkowski distance weighting to adaptively prioritize user-weighted vehicle priorities.",
        "Responsive Flask web application with real-time similarity radar charts and vehicle comparison matrix.",
      ],
      githubUrl: "https://github.com/sLasherGod10",
      architectureDetails: {
        overview:
          "Ignitron utilizes normalized continuous attributes and one-hot encoded categorical parameters in Scikit-Learn. The KNN model computes optimal cosine and Minkowski neighbor clusters, serving ranked recommendations via lightweight REST endpoints in Flask.",
        flow: [
          "User Preference Questionnaire (Budget, Fuel Type, Power)",
          "StandardScaler & MinMax Feature Normalization",
          "KNN Distance Evaluation & Cluster Querying",
          "Similarity Ranking & Comparison Table Generation",
          "Flask Dynamic Template Rendering",
        ],
        metrics: "Sub-50ms inference latency across 1,000+ vehicle catalog entries",
      },
    },
    {
      id: "it-asset-mgmt",
      title: "IT Asset Management System",
      subtitle: "Enterprise Hardware & Software Lifecycle Platform",
      category: "Enterprise Full-Stack Software",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Chart.js"],
      icon: Server,
      gradient: "from-teal-500 via-emerald-500 to-cyan-600",
      description:
        "Engineered an enterprise asset tracking platform with role-based authentication, complete CRUD operations, automated depreciation computation, and a real-time analytics dashboard.",
      highlights: [
        "Role-Based Access Control (RBAC) supporting Admin, Manager, and Auditor clearance tiers.",
        "Live asset checkout, return scheduling, and automated straight-line hardware depreciation tracking.",
        "Interactive Chart.js analytics dashboard providing real-time inventory valuations and maintenance schedules.",
      ],
      githubUrl: "https://github.com/sLasherGod10",
      architectureDetails: {
        overview:
          "Constructed with a normalized relational schema in MySQL to prevent race conditions during asset assignment. Features modular PHP controllers, CSRF token validation, and asynchronous JavaScript DOM updates for instant search and barcode tagging.",
        flow: [
          "Secure Session Authentication & RBAC Verification",
          "Asset Provisioning, Tagging & Location Assignment",
          "Automated Depreciation Schedule Calculation Engine",
          "Maintenance Audit Logging & Maintenance Alerts",
          "MySQL Transactional Logging & Reporting",
        ],
        metrics: "Zero race condition state in multi-department asset reservations",
      },
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 inline-block mb-3">
              Portfolio
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI & Engineering Systems</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Production architectures showcasing Generative AI, Machine Learning algorithms, and scalable web solutions
            </p>
          </FadeIn>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.id} delay={index * 0.15} y={30}>
                <div className="h-full flex flex-col justify-between p-7 rounded-3xl bg-[#0f172a]/75 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-1.5 group">
                  <div>
                    {/* Category & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-slate-900 text-cyan-400/90 border border-slate-800 text-[11px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all no-underline shadow-sm"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Code & Repo</span>
                      </a>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-medium text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Deep Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Deep Dive Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0e1628] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    System Architecture Breakdown
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Architecture Overview */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" /> Engineering Overview
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.architectureDetails.overview}
                </p>
              </div>

              {/* Data Flow Steps */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-400" /> Execution Pipeline
                </h4>
                <div className="space-y-2">
                  {selectedProject.architectureDetails.flow.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-300 flex items-center justify-center font-bold text-[10px]">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs">
                <span className="font-semibold text-cyan-300 block mb-0.5">Benchmark Metric:</span>
                <span className="text-slate-300 font-mono">{selectedProject.architectureDetails.metrics}</span>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 pt-2">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 no-underline"
                >
                  <GithubIcon className="w-4 h-4" /> View GitHub Repository
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
