import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../common/FadeIn";
import { LiveProjectButton } from "../common/LiveProjectButton";
import { BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Cloud, Sparkles, Database } from "lucide-react";

interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const projectsData: ProjectData[] = [
  {
    number: "01",
    name: "Research Mind: Multi-Agent AI System",
    category: "Generative AI • Gemini & LangChain",
    description:
      "Engineered an autonomous multi-agent AI research system orchestrating Search, Reader, Writer, and Critic agents to automate web search, content extraction, and report generation in Streamlit.",
    tags: ["Python", "Gemini API", "LangChain", "Streamlit"],
    githubUrl: "https://github.com/sLasherGod10",
    col1Img1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Img2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2Img:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  },
  {
    number: "02",
    name: "Ignitron: AI Car Recommendation System",
    category: "Machine Learning • KNN & Flask",
    description:
      "Built a KNN-based vehicle recommendation engine ranking top vehicles tailored to multifaceted user preferences with an end-to-end Flask interactive web application.",
    tags: ["Python", "Machine Learning", "KNN", "Flask"],
    githubUrl: "https://github.com/sLasherGod10",
    col1Img1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Img2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Img:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  },
  {
    number: "03",
    name: "IT Asset Management System",
    category: "Enterprise Full-Stack Software",
    description:
      "Engineered an enterprise asset tracking platform with role-based authentication, complete CRUD operations, automated depreciation computation, and a real-time analytics dashboard.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/sLasherGod10",
    col1Img1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1Img2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2Img:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center w-full"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
      >
        {/* Top Row: Number, category label, project name, and GitHub ghost button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {project.number}
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 block font-light">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            label="View on GitHub"
            href={project.githubUrl}
            showIcon
          />
        </div>

        {/* Bottom Row: Two-column image grid (Left: 40%, Right: 60%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6 items-stretch">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 bg-slate-900"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 bg-slate-900"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="md:col-span-7 h-full min-h-[250px] md:min-h-full">
            <div className="w-full h-full min-h-[300px] md:min-h-[420px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 bg-slate-900">
              <img
                src={project.col2Img}
                alt={`${project.name} main showcase`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Project Description Pill Footer */}
        <div className="pt-4 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <p className="text-[#D7E2EA]/70 font-light max-w-2xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 shrink-0">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-full bg-white/5 border border-[#D7E2EA]/15 text-[#D7E2EA] text-[11px] uppercase tracking-wider font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const AtharvaProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 pb-32 px-5 sm:px-8 md:px-10 font-kanit"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Projects" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24 leading-none tracking-tight select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards for Atharva's real resume projects */}
        <div className="flex flex-col gap-16 md:gap-24 relative mb-32">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>

        {/* Dedicated Research Publication Spotlight Card */}
        <div className="mt-20 pt-16 border-t border-[#D7E2EA]/15">
          <FadeIn delay={0.1} y={30}>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-2">
                Academic Contributions
              </span>
              <h3 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
                Published Research
              </h3>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <div className="rounded-[40px] sm:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-white/5 border border-[#D7E2EA]/30 text-[#D7E2EA]">
                    <BookOpen className="w-5 h-5 text-[#BBCCD7]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-mono">
                    PICT Research Lab • 2026
                  </span>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-[#D7E2EA]/30 uppercase tracking-wider">
                  90.34% Peak Accuracy
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#D7E2EA] mb-4 leading-snug">
                Dynamic Weight-Optimized Meta-Ensemble Learning for Generalized Cyberattack Detection Across Heterogeneous Datasets
              </h4>

              <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed mb-6">
                Proposed <strong>DWOME</strong> integrating <strong>6 distinct ML classifiers</strong> (XGBoost, Random Forest, LightGBM, Extra Trees, SVM, and Neural Stacker), dynamic sample-level weight optimization, entropy-based confidence scoring, and class-wise F1 reliability, evaluated rigorously using SMOTE across 5-, 10-, and 12-class datasets.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center pt-4 border-t border-[#D7E2EA]/15">
                <div className="p-3 rounded-2xl bg-white/5 border border-[#D7E2EA]/10">
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">90.34%</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 block mt-1">Accuracy</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-[#D7E2EA]/10">
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">6 ML</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 block mt-1">Classifiers</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-[#D7E2EA]/10">
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">12 Class</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 block mt-1">Benchmark</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-[#D7E2EA]/10">
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">SMOTE</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 block mt-1">Balancing</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certifications Showcase Card Grid */}
        <div className="mt-20 pt-16 border-t border-[#D7E2EA]/15">
          <FadeIn delay={0.1} y={30}>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-2">
                Industry Credentials
              </span>
              <h3 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
                Certifications
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cert 1 */}
            <FadeIn delay={0.15} y={30}>
              <div className="h-full rounded-[36px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Cloud className="w-6 h-6 text-[#BBCCD7]" />
                    <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA]/60">Coursera</span>
                  </div>
                  <h4 className="text-lg font-bold uppercase text-[#D7E2EA] mb-2 leading-snug">
                    Cloud Architecture Design Patterns
                  </h4>
                  <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed">
                    Mastery of distributed cloud patterns, resilience topologies, and scalable infrastructure.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D7E2EA]/15 flex items-center gap-1.5 text-xs text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BBCCD7]" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </FadeIn>

            {/* Cert 2 */}
            <FadeIn delay={0.25} y={30}>
              <div className="h-full rounded-[36px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Sparkles className="w-6 h-6 text-[#BBCCD7]" />
                    <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA]/60">Coursera</span>
                  </div>
                  <h4 className="text-lg font-bold uppercase text-[#D7E2EA] mb-2 leading-snug">
                    GenAI for Data Engineers: Scaling with GenAI
                  </h4>
                  <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed">
                    Scaling Large Language Models, vector indexing, context engineering, and enterprise RAG.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D7E2EA]/15 flex items-center gap-1.5 text-xs text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BBCCD7]" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </FadeIn>

            {/* Cert 3 */}
            <FadeIn delay={0.35} y={30}>
              <div className="h-full rounded-[36px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Database className="w-6 h-6 text-[#BBCCD7]" />
                    <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA]/60">Coursera</span>
                  </div>
                  <h4 className="text-lg font-bold uppercase text-[#D7E2EA] mb-2 leading-snug">
                    Building Smarter Data Pipelines: SQL, Spark, Kafka &amp; GenAI
                  </h4>
                  <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed">
                    Distributed stream processing with Kafka, Apache Spark pipelines, and AI query optimization.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D7E2EA]/15 flex items-center gap-1.5 text-xs text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BBCCD7]" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
