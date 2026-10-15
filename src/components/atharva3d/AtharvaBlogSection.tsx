import React, { useState } from "react";
import { FadeIn } from "../common/FadeIn";
import { ArrowUpRight, Clock, Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export const AtharvaBlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "dwome-meta-ensemble",
      title: "Designing DWOME: Dynamic Weight-Optimized Meta-Ensembles for Cyberattack Detection",
      category: "Machine Learning Research",
      date: "September 2026",
      readTime: "6 min read",
      excerpt:
        "Traditional Intrusion Detection Systems (IDS) suffer severe accuracy drops when facing unseen attack topologies. Here is how our DWOME architecture leverages entropy confidence and F1 reliability to achieve 90.34% accuracy.",
      tags: ["Ensemble ML", "DWOME", "Cybersecurity", "SMOTE", "Scikit-Learn"],
      content: [
        "Network intrusion detection systems (IDS) operating in production environments constantly grapple with two fundamental challenges: extreme class imbalance and catastrophic concept drift across heterogeneous topologies.",
        "To solve this, we formulated the Dynamic Weight-Optimized Meta-Ensemble (DWOME). Rather than relying on static majority voting, DWOME dynamically computes an entropy-based confidence score for each sample. If a base classifier exhibits high prediction entropy on a rare packet sequence, its weight is dynamically discounted in the meta-stack.",
        "Furthermore, we incorporated class-wise F1 reliability weighting. By penalizing classifiers that historically underperformed on specific intrusion classes, DWOME prevents dominant majority normal traffic from overwhelming minority zero-day threats.",
        "Evaluated with Synthetic Minority Over-sampling Technique (SMOTE) across 5-, 10-, and 12-class benchmark datasets, DWOME established a peak accuracy of 90.34%, proving that adaptive meta-heuristics can provide production-level cybersecurity resilience.",
      ],
    },
    {
      id: "multi-agent-research-mind",
      title: "Orchestrating Autonomous AI Agents: Searcher, Reader, Writer, and Critic",
      category: "Generative AI & Agentic Systems",
      date: "August 2026",
      readTime: "5 min read",
      excerpt:
        "Single-prompt LLMs struggle with multi-stage technical research. By decomposing synthesis into four specialized agents with iterative verification, Research Mind cuts research time from 2 hours to 90 seconds.",
      tags: ["LangChain", "Gemini API", "AI Agents", "Python", "RAG"],
      content: [
        "While Large Language Models (LLMs) excel at natural language synthesis, asking a single prompt to search, verify, summarize, and critique technical literature produces hallucinations and shallow reasoning.",
        "In Research Mind, we engineered a Directed Acyclic Graph (DAG) state machine orchestrating four autonomous specialized agents: the Searcher Agent (executing concurrent targeted queries), the Reader Agent (parsing structured web & PDF tokens into semantic vectors), the Writer Agent (drafting coherent technical outlines), and the Critic Agent (evaluating claims against primary sources).",
        "If the Critic Agent detects an unsubstantiated claim, the system rejects the draft and triggers a targeted secondary search pass. Using Google's Gemini Pro and LangChain, this agentic pipeline produces comprehensive 5,000-word literature reviews in under 90 seconds with over 95% citation veracity.",
      ],
    },
    {
      id: "ignitron-knn-optimization",
      title: "From K-Nearest Neighbors to Real-Time Recommendation Engines",
      category: "Data Science & Full-Stack",
      date: "July 2026",
      readTime: "4 min read",
      excerpt:
        "How custom Minkowski distance weighting and multi-dimensional normalization transformed a basic KNN algorithm into a responsive, highly personalized automotive decision engine.",
      tags: ["Machine Learning", "KNN", "Flask", "Pandas", "Feature Engineering"],
      content: [
        "Recommendation engines often default to heavy collaborative filtering or deep autoencoders. However, when user preferences involve strict continuous metrics (budget, fuel efficiency, power-to-weight ratio), geometric distance models offer unmatched interpretability.",
        "For Ignitron, we built a hybrid KNN architecture in Python. We developed adaptive feature weighting based on user priority sliders: if fuel economy is paramount, that dimension's Minkowski exponent scales proportionally, pulling matching vehicles closer in Euclidean vector space.",
        "Coupled with an end-to-end Flask interface delivering sub-50ms inference latency, Ignitron demonstrates that well-engineered classical ML remains faster, cheaper, and more explainable than opaque neural recommenders for structured decision spaces.",
      ],
    },
    {
      id: "data-pipelines-kafka-spark",
      title: "Scaling Smarter Data Pipelines: Real-Time Streaming with Kafka, Spark & GenAI",
      category: "Data Engineering",
      date: "June 2026",
      readTime: "5 min read",
      excerpt:
        "Distributed data engineering patterns for ingesting high-velocity event streams with Apache Kafka, executing scalable transformations in Spark, and enriching logs with Generative AI.",
      tags: ["Apache Kafka", "Apache Spark", "SQL", "Cloud Architecture", "GenAI"],
      content: [
        "Modern enterprise systems generate millions of transactional and sensor events per minute. Processing these streams in isolation leads to data drift and delayed operational insights.",
        "Throughout my Coursera professional certifications in Cloud Architecture and Data Engineering, I designed decoupled architectures where Apache Kafka decouples event producers from distributed consumer groups.",
        "Apache Spark processes micro-batches with resilient distributed datasets (RDDs), filtering anomalies in real time. Finally, we attach an asynchronous Generative AI summarization sink that translates complex telemetry logs into natural-language executive briefings.",
      ],
    },
  ];

  return (
    <section id="blog" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] font-kanit relative z-10 border-t border-[#D7E2EA]/15">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-2">
              Articles &amp; Thought Leadership
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
            >
              Blog &amp; Insights
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light mt-4 max-w-xl mx-auto">
              Deep dives into meta-ensemble architectures, autonomous multi-agent systems, and production machine learning engineering.
            </p>
          </FadeIn>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.1} y={30}>
              <div
                onClick={() => setSelectedPost(post)}
                className="group h-full rounded-[36px] border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA] bg-[#121212] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl"
              >
                <div>
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs text-[#D7E2EA]/60 font-light">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white uppercase tracking-wider text-[11px]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#BBCCD7] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-5">
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-black text-[#D7E2EA]/80 border border-white/10 text-[11px] font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read button */}
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] group-hover:text-white">
                    <span>Read Full Article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[36px] p-6 sm:p-10 shadow-2xl z-10 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#D7E2EA]/60 uppercase tracking-widest mb-1.5">
                    <span className="text-white font-medium">{selectedPost.category}</span>
                    <span>&bull;</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <h3 className="hero-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    {selectedPost.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 text-[#D7E2EA]/60 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto space-y-5 text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed pr-2">
                {selectedPost.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D7E2EA]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#D7E2EA]/60">
                <span>Published by Atharva Shriram Khaire</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 rounded-full border border-white/20 hover:border-white text-white uppercase tracking-wider text-xs font-medium cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
