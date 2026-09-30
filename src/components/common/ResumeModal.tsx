import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Award, BookOpen, Briefcase, Code, GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    // Trigger confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00f2fe", "#4facfe", "#38bdf8", "#818cf8"],
    });

    // Create printable window or simulated download
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0d1527] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0a0f1d]/90 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="font-semibold text-white tracking-wide text-lg sm:text-xl">
                Atharva Shriram Khaire — Official Curriculum Vitae
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <Download className="w-3.5 h-3.5" />
                Download / Print CV
              </button>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Resume Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-300 text-sm print:text-black print:bg-white">
            {/* Header info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-slate-800 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Atharva Shriram Khaire</h1>
                <p className="text-cyan-400 font-medium text-base mt-1">
                  AI/ML Engineer & Computer Science Undergraduate
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    atharvakhaire.ak10@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    +91-8010911734
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://linkedin.com/in/atharvakhaire09"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/20 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sLasherGod10"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/20 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Education */}
            <section>
              <h2 className="flex items-center gap-2 text-base font-bold text-white uppercase tracking-wider mb-3 text-cyan-400">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <span className="font-semibold text-white">D. Y. Patil International University, Pune</span>
                  <span className="text-cyan-400 text-xs font-semibold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                    CGPA: 8.28 / 10
                  </span>
                </div>
                <div className="text-slate-400 text-xs mt-1">Bachelor of Technology (B.Tech) in Computer Science & Engineering</div>
                <p className="mt-2 text-xs text-slate-300">
                  Core coursework: Machine Learning, Deep Learning, Generative AI, Data Structures & Algorithms, Database Systems, Computer Networks.
                </p>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="flex items-center gap-2 text-base font-bold text-white uppercase tracking-wider mb-3 text-cyan-400">
                <Briefcase className="w-4 h-4" /> Professional Experience
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                    <span className="font-semibold text-white">Research Intern | Pune Institute of Computer Technology (PICT)</span>
                    <span className="text-slate-400 text-xs">May 2026 – July 2026</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-2">
                    <li>Developed Dynamic Weight-Optimized Meta-Ensemble (DWOME) for generalized cyberattack detection.</li>
                    <li>Integrated 6 heterogeneous ML classifiers, achieving up to 90.34% accuracy across challenging multi-class datasets.</li>
                    <li>Formulated entropy-based confidence weighting, class-wise F1 reliability, and SMOTE balancing to overcome intrusion detection skew.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                    <span className="font-semibold text-white">Python Web Developer Intern | CodTech IT Solutions</span>
                    <span className="text-slate-400 text-xs">May 2025 – August 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-2">
                    <li>Built an automated time tracking Chrome Extension improving internal task tracking precision.</li>
                    <li>Developed an NLP-powered asset management chatbot using Python, FastAPI/Flask, and backend database integrations.</li>
                    <li>Engineered asynchronous job workers for real-time asset analytics and report generation.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h2 className="flex items-center gap-2 text-base font-bold text-white uppercase tracking-wider mb-3 text-cyan-400">
                <Code className="w-4 h-4" /> Key Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="font-bold text-white text-sm">Research Mind</h4>
                  <p className="text-cyan-400 text-[11px] font-mono mb-2">Python, Gemini API, LangChain, Streamlit</p>
                  <p className="text-xs text-slate-400">
                    Engineered a multi-agent AI research system orchestrating Search, Reader, Writer, and Critic agents for automated research workflows.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="font-bold text-white text-sm">Ignitron</h4>
                  <p className="text-cyan-400 text-[11px] font-mono mb-2">Python, ML, KNN, Flask</p>
                  <p className="text-xs text-slate-400">
                    KNN-based car recommendation engine ranking top vehicles tailored to multifaceted user preferences with an end-to-end Flask web app.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="font-bold text-white text-sm">IT Asset Management</h4>
                  <p className="text-cyan-400 text-[11px] font-mono mb-2">PHP, MySQL, JavaScript, Bootstrap</p>
                  <p className="text-xs text-slate-400">
                    Enterprise asset tracking platform with role-based authentication, CRUD operations, and a real-time analytics dashboard.
                  </p>
                </div>
              </div>
            </section>

            {/* Publications */}
            <section>
              <h2 className="flex items-center gap-2 text-base font-bold text-white uppercase tracking-wider mb-3 text-cyan-400">
                <BookOpen className="w-4 h-4" /> Publications
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="font-bold text-white text-sm">
                  Dynamic Weight-Optimized Meta-Ensemble Learning for Generalized Cyberattack Detection Across Heterogeneous Datasets
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Proposed DWOME integrating 6 ML classifiers, dynamic weight optimization, entropy-based confidence, and class-wise F1 reliability, evaluated using SMOTE across 5-, 10-, and 12-class datasets.
                </p>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="flex items-center gap-2 text-base font-bold text-white uppercase tracking-wider mb-3 text-cyan-400">
                <Award className="w-4 h-4" /> Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="font-semibold text-white block">Cloud Architecture Design Patterns</span>
                  <span className="text-cyan-400 text-[11px]">Coursera</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="font-semibold text-white block">GenAI for Data Engineers: Scaling with GenAI</span>
                  <span className="text-cyan-400 text-[11px]">Coursera</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="font-semibold text-white block">Building Smarter Data Pipelines: SQL, Spark, Kafka & GenAI</span>
                  <span className="text-cyan-400 text-[11px]">Coursera</span>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-[#0a0f1d] border-t border-slate-800 flex justify-between items-center sm:hidden">
            <button
              onClick={handleDownload}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print / Save as PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
