import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../common/FadeIn";
import { LiveProjectButton } from "../common/LiveProjectButton";

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
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1280&q=85",
    col1Img2:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1280&q=85",
    col2Img:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=85",
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
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1280&q=85",
    col1Img2:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=85",
    col2Img:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
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
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1280&q=85",
    col1Img2:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1280&q=85",
    col2Img:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=85",
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
      </div>
    </section>
  );
};
