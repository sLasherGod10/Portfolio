import React, { useState, useEffect, useRef } from "react";
import { FadeIn } from "../common/FadeIn";
import {
  BrainCircuit,
  Sparkles,
  Database,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Code2,
  Server,
  Workflow,
  LineChart,
  Binary,
  Box,
  GitBranch
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "aiml" | "genai" | "data" | "languages" | "tools";
  level: "Advanced" | "Expert" | "Specialist";
  icon: React.FC<{ className?: string }>;
  description: string;
  tags: string[];
}

export const AtharvaSkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "aiml" | "genai" | "data" | "languages" | "tools">("all");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Neural Network Animated Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || 800;
    };
    window.addEventListener("resize", handleResize);

    // Node representation
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: number[];
      pulse: number;
      pulseSpeed: number;
    }

    const nodeCount = Math.min(65, Math.floor(width / 22));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1.8,
        connections: [],
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // Mouse tracking over canvas
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulse += node.pulseSpeed;
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;

        // Draw connections / synapses to other nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.strokeStyle = `rgba(187, 204, 215, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            // Occasional firing action potential pulse along synapse
            if (Math.sin(node.pulse * 2) > 0.85) {
              const pulsePos = (Math.sin(node.pulse * 3) + 1) / 2;
              const px = node.x + dx * pulsePos;
              const py = node.y + dy * pulsePos;
              ctx.fillStyle = `rgba(0, 242, 254, ${alpha * 2})`;
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Connection to mouse cursor
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 160) {
          const mAlpha = (1 - mDist / 160) * 0.45;
          ctx.strokeStyle = `rgba(0, 242, 254, ${mAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw neuron node
        ctx.fillStyle = "rgba(187, 204, 215, 0.75)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Glowing outer halo
        ctx.fillStyle = "rgba(0, 242, 254, 0.15)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skills: SkillItem[] = [
    // AI & Machine Learning
    {
      name: "TensorFlow & PyTorch",
      category: "aiml",
      level: "Advanced",
      icon: BrainCircuit,
      description: "Designing, training, and deploying deep convolutional and recurrent neural network architectures.",
      tags: ["Deep Learning", "Neural Nets", "Tensors", "GPU"],
    },
    {
      name: "DWOME Meta-Ensemble",
      category: "aiml",
      level: "Specialist",
      icon: ShieldCheck,
      description: "Heterogeneous multi-model meta-learning combining entropy confidence with class-wise F1 reliability.",
      tags: ["Ensemble ML", "Zero-Day IDS", "SMOTE", "PICT"],
    },
    {
      name: "Scikit-Learn & Classical ML",
      category: "aiml",
      level: "Expert",
      icon: Binary,
      description: "Supervised and unsupervised learning: Random Forests, XGBoost, LightGBM, KNN, and SVM models.",
      tags: ["Classifiers", "Regression", "Clustering", "Cross-Validation"],
    },
    {
      name: "Model Optimization & Tuning",
      category: "aiml",
      level: "Advanced",
      icon: Workflow,
      description: "Hyperparameter grid search, ROC/AUC curve analysis, precision-recall tradeoffs, and feature selection.",
      tags: ["Optuna", "Metrics", "Confusion Matrix", "F1 Score"],
    },

    // Generative AI & LLMs
    {
      name: "Google Gemini & OpenAI APIs",
      category: "genai",
      level: "Expert",
      icon: Sparkles,
      description: "Integrating frontier LLMs for multi-modal reasoning, structured extraction, and complex synthesis.",
      tags: ["Gemini 1.5 Pro", "GPT-4", "Function Calling", "APIs"],
    },
    {
      name: "LangChain & AI Agents",
      category: "genai",
      level: "Specialist",
      icon: Cpu,
      description: "Orchestrating multi-agent state machines (Searcher, Reader, Writer, Critic) with iterative loops.",
      tags: ["Research Mind", "Agentic Workflows", "DAG", "Tools"],
    },
    {
      name: "Retrieval-Augmented Gen (RAG)",
      category: "genai",
      level: "Advanced",
      icon: Layers,
      description: "End-to-end RAG pipelines with vector databases, semantic chunking, and re-ranking mechanisms.",
      tags: ["ChromaDB", "Vector Search", "Embeddings", "Context"],
    },
    {
      name: "Prompt Engineering & NLP",
      category: "genai",
      level: "Expert",
      icon: LineChart,
      description: "Few-shot prompting, chain-of-thought elicitation, token optimization, and zero-shot classification.",
      tags: ["CoT", "System Prompts", "Token Limits", "NLP"],
    },

    // Data Engineering & Databases
    {
      name: "Pandas & NumPy",
      category: "data",
      level: "Expert",
      icon: Database,
      description: "Vectorized data wrangling, cleaning high-dimensional matrices, and exploratory data analysis (EDA).",
      tags: ["DataFrames", "Matrices", "EDA", "Profiling"],
    },
    {
      name: "Power BI & Analytics",
      category: "data",
      level: "Advanced",
      icon: LineChart,
      description: "Building interactive business intelligence dashboards, KPI models, and data visualizations.",
      tags: ["Dashboards", "DAX", "Visual Analytics", "KPIs"],
    },
    {
      name: "MySQL & Relational Modeling",
      category: "data",
      level: "Advanced",
      icon: Server,
      description: "ACID transactional schemas, foreign keys, query index optimization, and RBAC security.",
      tags: ["RDBMS", "Joins", "Transactions", "Asset Mgmt"],
    },
    {
      name: "MongoDB & NoSQL",
      category: "data",
      level: "Advanced",
      icon: Box,
      description: "Document storage, aggregation pipelines, flexible schema designs, and high-throughput read models.",
      tags: ["BSON", "Aggregation", "Indexes", "JSON"],
    },

    // Languages & Frameworks
    {
      name: "Python",
      category: "languages",
      level: "Expert",
      icon: Terminal,
      description: "Primary language for production machine learning, data engineering scripts, and backend microservices.",
      tags: ["Asyncio", "Object-Oriented", "NumPy", "Scripts"],
    },
    {
      name: "C++",
      category: "languages",
      level: "Advanced",
      icon: Code2,
      description: "Object-oriented programming, data structures, algorithm problem-solving, and memory management.",
      tags: ["OOP", "STL", "Pointers", "Algorithms"],
    },
    {
      name: "SQL & Query Tuning",
      category: "languages",
      level: "Expert",
      icon: Database,
      description: "Complex multi-table joins, subqueries, indexing strategies, and database performance profiling.",
      tags: ["Queries", "Aggregation", "Views", "Constraints"],
    },
    {
      name: "JavaScript & Full-Stack",
      category: "languages",
      level: "Advanced",
      icon: Code2,
      description: "Building responsive frontends, interactive web applications, and Chrome developer extensions.",
      tags: ["ES6+", "DOM Manipulation", "REST APIs", "Async"],
    },
    {
      name: "Flask & FastAPI",
      category: "languages",
      level: "Advanced",
      icon: Server,
      description: "Developing lightweight REST APIs for real-time model inference and interactive web tools.",
      tags: ["Ignitron", "Endpoints", "JSON Responses", "CORS"],
    },

    // Tools & DevOps
    {
      name: "Docker & Containerization",
      category: "tools",
      level: "Advanced",
      icon: Box,
      description: "Creating reproducible container environments for machine learning workflows and microservices.",
      tags: ["Dockerfiles", "Containers", "Images", "Isolation"],
    },
    {
      name: "Git & GitHub Version Control",
      category: "tools",
      level: "Expert",
      icon: GitBranch,
      description: "Branching strategies, pull requests, open-source repository maintenance, and collaborative code reviews.",
      tags: ["CI/CD", "Rebase", "Git Flow", "Repos"],
    },
    {
      name: "VS Code & NeoVim Environment",
      category: "tools",
      level: "Expert",
      icon: Terminal,
      description: "Optimized developer workflows, terminal debugging, language servers, and keyboard-driven efficiency.",
      tags: ["LSP", "Debugging", "Extensions", "Productivity"],
    },
  ];

  const filteredSkills =
    activeTab === "all" ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] font-kanit relative z-10 border-t border-[#D7E2EA]/15 overflow-hidden">
      {/* Animated Neural Network Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-35"
      />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-2">
              Neural Network Matrix &bull; Interactive Arsenal
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
            >
              Skills &amp; Technologies
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light mt-4 max-w-xl mx-auto">
              Core competencies spanning Machine Learning architectures, Generative AI agent networks, and scalable engineering systems.
            </p>
          </FadeIn>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Skills" },
            { id: "aiml", label: "AI & Machine Learning" },
            { id: "genai", label: "Generative AI & LLMs" },
            { id: "data", label: "Data Engineering & DBs" },
            { id: "languages", label: "Languages & Frameworks" },
            { id: "tools", label: "DevOps & Tools" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-lg shadow-white/20 scale-105"
                  : "bg-white/5 border border-white/10 text-[#D7E2EA]/70 hover:text-white hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <FadeIn key={skill.name} delay={(idx % 6) * 0.08} y={25}>
                <div className="group h-full rounded-[30px] border-2 border-[#D7E2EA]/20 hover:border-white bg-[#121212]/90 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden">
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-[#BBCCD7] group-hover:scale-110 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#BBCCD7] uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold uppercase text-white group-hover:text-[#BBCCD7] transition-colors mb-2">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mb-5">
                      {skill.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-black text-[#D7E2EA]/70 border border-white/10 text-[10px] font-mono"
                      >
                        {tag}
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
