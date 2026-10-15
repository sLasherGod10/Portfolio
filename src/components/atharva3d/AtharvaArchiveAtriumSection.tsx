import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Cloud,
  Sparkles,
  Database,
  CheckCircle2,
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  ExternalLink,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  X,
  Disc3,
} from "lucide-react";

interface AtharvaArchiveAtriumSectionProps {
  onOpenContact: () => void;
  onResumeClick: () => void;
}

type TabType = "research" | "certifications" | "blog" | "music";

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

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  curator: "Kendrick Lamar" | "Travis Scott" | "Drake";
  bpm: number;
  description: string;
  baseFreq: number;
  spotifyUrl: string;
}

export const AtharvaArchiveAtriumSection: React.FC<AtharvaArchiveAtriumSectionProps> = ({
  onOpenContact,
  onResumeClick,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("research");
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Music Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);

  // Web Audio Context & Synth
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  const playlist: Track[] = [
    {
      id: "kendrick-love",
      title: "LOVE. (feat. Zacari)",
      artist: "Kendrick Lamar",
      album: "DAMN.",
      curator: "Kendrick Lamar",
      bpm: 65,
      description: "Atmospheric, smooth vocal chops and warm emotional chords providing uninterrupted late-night coding flow.",
      baseFreq: 174.61, // F3
      spotifyUrl: "https://open.spotify.com/search/Kendrick%20Lamar%20LOVE.",
    },
    {
      id: "kendrick-all-the-stars",
      title: "All The Stars",
      artist: "Kendrick Lamar, SZA",
      album: "Black Panther: The Album",
      curator: "Kendrick Lamar",
      bpm: 97,
      description: "Cinematic synth strings with driving percussion that sparks algorithmic breakthroughs.",
      baseFreq: 233.08, // A#3
      spotifyUrl: "https://open.spotify.com/search/Kendrick%20Lamar%20All%20The%20Stars",
    },
    {
      id: "travis-sicko-mode",
      title: "SICKO MODE",
      artist: "Travis Scott, Drake",
      album: "ASTROWORLD",
      curator: "Travis Scott",
      bpm: 155,
      description: "Dynamic three-part beat switches engineered for intense debugging and model training sprints.",
      baseFreq: 130.81, // C3
      spotifyUrl: "https://open.spotify.com/search/Travis%20Scott%20SICKO%20MODE",
    },
    {
      id: "travis-fein",
      title: "FE!N (feat. Playboi Carti)",
      artist: "Travis Scott",
      album: "UTOPIA",
      curator: "Travis Scott",
      bpm: 148,
      description: "Relentless synth loops with hypnotic 808s that power high-velocity coding focus.",
      baseFreq: 146.83, // D3
      spotifyUrl: "https://open.spotify.com/search/Travis%20Scott%20FEIN",
    },
    {
      id: "drake-gods-plan",
      title: "God's Plan",
      artist: "Drake",
      album: "Scorpion",
      curator: "Drake",
      bpm: 77,
      description: "Euphoric ambient synth pads and steady 808s creating calm persistence during complex refactoring.",
      baseFreq: 155.56, // D#3
      spotifyUrl: "https://open.spotify.com/search/Drake%20Gods%20Plan",
    },
  ];

  const currentTrack = playlist[currentTrackIndex];

  // Synthesizer Audio Setup
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      const gain = audioCtxRef.current.createGain();
      gain.gain.value = isMuted ? 0 : volume * 0.18;
      gain.connect(audioCtxRef.current.destination);
      gainNodeRef.current = gain;
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const playSyntheticMelody = (freq: number) => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(isMuted ? 0.001 : volume * 0.15, now + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

    osc.connect(noteGain);
    noteGain.connect(gainNodeRef.current);

    osc.start(now);
    osc.stop(now + 1.0);
  };

  const startAudio = () => {
    initAudio();
    setIsPlaying(true);

    if (intervalRef.current) clearInterval(intervalRef.current);

    let step = 0;
    const chordIntervals = [1, 1.25, 1.5, 1.334];
    intervalRef.current = window.setInterval(() => {
      const f = currentTrack.baseFreq * chordIntervals[step % chordIntervals.length];
      playSyntheticMelody(f);
      step++;
    }, (60 / currentTrack.bpm) * 1000);
  };

  const stopAudio = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const skipNext = () => {
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIdx);
    if (isPlaying) {
      stopAudio();
      setTimeout(() => {
        startAudio();
      }, 50);
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        newMuted ? 0 : volume * 0.18,
        audioCtxRef.current.currentTime
      );
    }
  };

  const handleCopyCitation = () => {
    const bibtex = `@article{khaire2026dwome,
  title={Dynamic Weight-Optimized Meta-Ensemble Learning for Generalized Cyberattack Detection Across Heterogeneous Datasets},
  author={Khaire, Atharva Shriram and Research Lab PICT},
  journal={PICT Research Publications},
  year={2026},
  publisher={PICT Academic Press}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const blogPosts: BlogPost[] = [
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
        "Recommender systems frequently rely on heavy matrix factorization or deep embeddings that introduce unnecessary compute latency for multi-attribute physical products like automobiles.",
        "In Ignitron, we developed a weighted K-Nearest Neighbors architecture customized with dynamic feature scaling across budget, fuel economy, horsepower, and safety indices.",
        "By applying custom Minkowski distance weighting and normal distributions, query times dropped below 35 milliseconds on consumer-grade hardware while preserving intuitive user control.",
      ],
    },
  ];

  return (
    <section
      id="archive"
      className="relative w-full min-h-screen bg-[#f5f4ef] text-[#0f0f0e] font-sans overflow-hidden selection:bg-[#0f0f0e] selection:text-[#f5f4ef]"
      style={{
        ["--paper" as string]: "#f5f4ef",
        ["--ink" as string]: "#0f0f0e",
        ["--card-dark" as string]: "#151515",
        ["--card-cream" as string]: "#f9f6f1",
        ["--red" as string]: "#ef5d44",
        ["--yellow" as string]: "#fcdd71",
        ["--blue" as string]: "#9fd5f7",
        ["--col" as string]: "205.33px",
        ["--gap" as string]: "13px",
        ["--pitch" as string]: "282.5px",
        ["--r" as string]: "22px",
      }}
    >
      {/* SVG Grain Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply z-10"
        style={{
          backgroundImage:
            "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/40b7fef3-410d-4ef3-bd67-0a2fc7ee5a1d.svg)",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Embedded CSS for exact 14.6s continuous motion columns */}
      <style>{`
        @keyframes atriumColDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        @keyframes atriumColUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        .atrium-column-down {
          animation: atriumColDown 14.6s linear infinite;
          will-change: transform;
        }
        .atrium-column-up {
          animation: atriumColUp 14.6s linear infinite;
          will-change: transform;
        }
        .atrium-column-down:hover,
        .atrium-column-up:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* FLOATING WHITE HEADER CARD */}
      <div className="sticky top-0 z-40 px-4 sm:px-8 pt-4 pb-2">
        <header className="max-w-7xl mx-auto rounded-[22px] bg-white border border-[#0f0f0e]/[0.08] shadow-[0_12px_36px_rgba(15,15,14,0.06)] px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#0f0f0e] text-white flex items-center justify-center font-bold text-xs tracking-wider font-mono">
              AM
            </span>
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#0f0f0e] uppercase block font-kanit">
                ATRIUM &bull; ATHARVA ARCHIVE
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#62615d] font-mono block -mt-0.5">
                Vol. 2026 &bull; DYPIU Pune
              </span>
            </div>
          </div>

          {/* Interactive Category Selector Pills */}
          <nav className="flex items-center gap-1.5 p-1 rounded-full bg-[#f5f4ef] border border-[#0f0f0e]/10 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("research")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "research"
                  ? "bg-[#0f0f0e] text-white shadow-sm"
                  : "text-[#62615d] hover:text-[#0f0f0e]"
              }`}
            >
              01 Research
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "certifications"
                  ? "bg-[#0f0f0e] text-white shadow-sm"
                  : "text-[#62615d] hover:text-[#0f0f0e]"
              }`}
            >
              02 Credentials
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "blog"
                  ? "bg-[#0f0f0e] text-white shadow-sm"
                  : "text-[#62615d] hover:text-[#0f0f0e]"
              }`}
            >
              03 Essays
            </button>
            <button
              onClick={() => setActiveTab("music")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "music"
                  ? "bg-[#0f0f0e] text-white shadow-sm"
                  : "text-[#62615d] hover:text-[#0f0f0e]"
              }`}
            >
              <Disc3 className={`w-3.5 h-3.5 ${isPlaying ? "animate-spin" : ""}`} />
              <span>04 Soundscapes</span>
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8e7e2]/70 text-[11px] font-mono text-[#0f0f0e] uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CGPA 8.28 &bull; Available</span>
            </div>
            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-full bg-[#0f0f0e] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#252524] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </header>
      </div>

      {/* MAIN TWO-COLUMN VIEWPORT LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-20">
        {/* LEFT COLUMN: Editorial Brutalist Content (Oversized display headline + Active Tab) */}
        <div className="lg:col-span-7 flex flex-col justify-start pr-0 lg:pr-6">
          {/* Super-title Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#62615d] bg-black/5 px-2.5 py-1 rounded-md">
              Monograph Series &bull; 004
            </span>
            <span className="text-xs uppercase font-mono tracking-widest text-[#ef5d44] font-semibold">
              Atharva Shriram Khaire
            </span>
          </div>

          {/* Oversized Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0f0f0e] leading-[0.92] mb-6 font-kanit">
            AN ARCHIVE OF LIGHT CAST IN CODE.
          </h1>

          <p className="text-base sm:text-lg text-[#62615d] font-normal leading-relaxed max-w-xl mb-8">
            An open repository of peer-reviewed ensemble machine learning research, enterprise systems, and audio-reactive soundscapes.
          </p>

          {/* TAB 1: PUBLISHED RESEARCH (PICT DWOME) */}
          {activeTab === "research" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[22px] border border-[#0f0f0e]/10 p-6 sm:p-8 shadow-sm flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-[#0f0f0e]/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#0f0f0e] text-white">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#62615d] block">
                      Peer-Reviewed Publication
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wide text-[#0f0f0e]">
                      PICT Research Lab &bull; 2026
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#ef5d44] text-white text-xs font-bold uppercase tracking-wider font-mono">
                  90.34% Accuracy
                </span>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-[#0f0f0e] leading-snug tracking-tight mb-3">
                  Dynamic Weight-Optimized Meta-Ensemble Learning for Generalized Cyberattack Detection Across Heterogeneous Datasets
                </h2>
                <p className="text-sm text-[#62615d] leading-relaxed">
                  Engineered <strong>DWOME</strong> combining <strong>6 distinct ML classifiers</strong> (XGBoost, Random Forest, LightGBM, Extra Trees, SVM, and Neural Stacker), dynamic sample-level entropy weighting, and class-wise F1 reliability, evaluated rigorously using SMOTE across 5-, 10-, and 12-class benchmark datasets.
                </p>
              </div>

              {/* Stat Grid in Brutalist Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3.5 rounded-[16px] bg-[#f5f4ef] border border-[#0f0f0e]/5">
                  <span className="text-2xl font-black text-[#0f0f0e] font-mono block">90.34%</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#62615d]">Peak Accuracy</span>
                </div>
                <div className="p-3.5 rounded-[16px] bg-[#f5f4ef] border border-[#0f0f0e]/5">
                  <span className="text-2xl font-black text-[#0f0f0e] font-mono block">6 ML</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#62615d]">Classifiers</span>
                </div>
                <div className="p-3.5 rounded-[16px] bg-[#f5f4ef] border border-[#0f0f0e]/5">
                  <span className="text-2xl font-black text-[#0f0f0e] font-mono block">12 Class</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#62615d]">Benchmarks</span>
                </div>
                <div className="p-3.5 rounded-[16px] bg-[#f5f4ef] border border-[#0f0f0e]/5">
                  <span className="text-2xl font-black text-[#0f0f0e] font-mono block">SMOTE</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#62615d]">Balancing</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyCitation}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0f0f0e] text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCitation ? "Citation Copied!" : "Copy BibTeX Citation"}</span>
                </button>
                <button
                  onClick={onResumeClick}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#0f0f0e]/20 text-[#0f0f0e] text-xs font-semibold uppercase tracking-wider hover:bg-black/5 transition-all cursor-pointer"
                >
                  <span>Review in Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 2: CERTIFICATIONS */}
          {activeTab === "certifications" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {/* Cert 1 */}
              <div className="bg-white rounded-[22px] border border-[#0f0f0e]/10 p-5 shadow-sm flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#9fd5f7]/30 text-[#0f0f0e] mt-1">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#62615d] block">Coursera &bull; Cloud Systems</span>
                    <h3 className="text-lg font-black uppercase text-[#0f0f0e] mb-1">
                      Cloud Architecture Design Patterns
                    </h3>
                    <p className="text-xs text-[#62615d] leading-relaxed max-w-md">
                      Distributed fault tolerance, microservice topologies, event-driven architecture, and multi-region resilience.
                    </p>
                  </div>
                </div>
                <span className="shrink-0 p-2 rounded-full bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>

              {/* Cert 2 */}
              <div className="bg-white rounded-[22px] border border-[#0f0f0e]/10 p-5 shadow-sm flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#fcdd71]/40 text-[#0f0f0e] mt-1">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#62615d] block">Coursera &bull; AI Systems</span>
                    <h3 className="text-lg font-black uppercase text-[#0f0f0e] mb-1">
                      GenAI for Data Engineers: Scaling with GenAI
                    </h3>
                    <p className="text-xs text-[#62615d] leading-relaxed max-w-md">
                      Production Large Language Model scaling, vector embeddings, semantic retrieval, and context optimization.
                    </p>
                  </div>
                </div>
                <span className="shrink-0 p-2 rounded-full bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>

              {/* Cert 3 */}
              <div className="bg-white rounded-[22px] border border-[#0f0f0e]/10 p-5 shadow-sm flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#ef5d44]/20 text-[#0f0f0e] mt-1">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#62615d] block">Coursera &bull; Data Pipelines</span>
                    <h3 className="text-lg font-black uppercase text-[#0f0f0e] mb-1">
                      Building Smarter Data Pipelines: SQL, Spark, Kafka &amp; GenAI
                    </h3>
                    <p className="text-xs text-[#62615d] leading-relaxed max-w-md">
                      Distributed stream ingestion with Apache Kafka, PySpark aggregation pipelines, and SQL tuning.
                    </p>
                  </div>
                </div>
                <span className="shrink-0 p-2 rounded-full bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ESSAYS & BLOG */}
          {activeTab === "blog" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white rounded-[22px] border border-[#0f0f0e]/10 p-5 shadow-sm hover:border-[#0f0f0e]/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#ef5d44] font-semibold">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#62615d] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-black uppercase text-[#0f0f0e] group-hover:text-[#ef5d44] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#62615d] line-clamp-2 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0f0f0e]">
                    <span>Read Essay &rarr;</span>
                    <span className="text-[#62615d] font-mono text-[10px]">{post.date}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 4: MUSIC & SOUNDSCAPES */}
          {activeTab === "music" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[22px] border border-[#0f0f0e]/10 p-6 shadow-sm flex flex-col gap-5"
            >
              <div className="flex items-center justify-between border-b border-[#0f0f0e]/10 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#62615d] block">
                    Curated Playlist &bull; Focus Audio
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wide text-[#0f0f0e]">
                    Kendrick Lamar &bull; Travis Scott &bull; Drake
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#fcdd71] text-[#0f0f0e] text-xs font-bold uppercase tracking-wider font-mono">
                  {currentTrack.curator}
                </span>
              </div>

              {/* Now Playing Visualizer Card */}
              <div className="p-4 rounded-[18px] bg-[#f5f4ef] border border-[#0f0f0e]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0f0f0e] text-white flex items-center justify-center font-mono">
                    <Disc3 className={`w-6 h-6 ${isPlaying ? "animate-spin text-[#fcdd71]" : "text-white"}`} />
                  </div>
                  <div>
                    <h4 className="text-base font-black uppercase text-[#0f0f0e]">
                      {currentTrack.title}
                    </h4>
                    <p className="text-xs text-[#62615d] font-mono">
                      {currentTrack.artist} &bull; {currentTrack.bpm} BPM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-[#0f0f0e] text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer shadow-sm"
                    aria-label={isPlaying ? "Pause track" : "Play track"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <button
                    onClick={skipNext}
                    className="w-10 h-10 rounded-full bg-white border border-[#0f0f0e]/15 text-[#0f0f0e] flex items-center justify-center hover:bg-black/5 transition-all cursor-pointer"
                    aria-label="Skip to next track"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-white border border-[#0f0f0e]/15 text-[#0f0f0e] flex items-center justify-center hover:bg-black/5 transition-all cursor-pointer"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setVolume(v);
                      setIsMuted(v === 0);
                      if (gainNodeRef.current && audioCtxRef.current) {
                        gainNodeRef.current.gain.setValueAtTime(
                          v * 0.18,
                          audioCtxRef.current.currentTime
                        );
                      }
                    }}
                    className="w-16 h-1 accent-[#0f0f0e] cursor-pointer"
                    aria-label="Volume slider"
                  />
                </div>
              </div>

              {/* Track Selection List */}
              <div className="flex flex-col gap-2">
                {playlist.map((track, idx) => (
                  <div
                    key={track.id}
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      if (!isPlaying) startAudio();
                    }}
                    className={`p-3 rounded-[14px] flex items-center justify-between transition-all cursor-pointer ${
                      currentTrackIndex === idx
                        ? "bg-[#0f0f0e] text-white"
                        : "bg-white hover:bg-black/5 text-[#0f0f0e]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold w-5 opacity-60">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider block">
                          {track.title}
                        </span>
                        <span className="text-[10px] opacity-70 block">{track.artist}</span>
                      </div>
                    </div>
                    <a
                      href={track.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs opacity-70 hover:opacity-100 p-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* RIGHT COLUMN: 3-COLUMN CONTINUOUS SCROLLING MOSAIC (EXACT ATRIUM MTL ARCHITECTURE) */}
        <div className="lg:col-span-5 h-[620px] sm:h-[720px] rounded-[28px] overflow-hidden relative border border-[#0f0f0e]/10 bg-[#e8e7e2]/30 shadow-inner">
          {/* Subtle Top & Bottom Gradient Fade Mask */}
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#f5f4ef] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#f5f4ef] to-transparent z-10 pointer-events-none" />

          {/* Mosaic Grid with 3 staggered columns */}
          <div className="w-full h-full flex justify-center gap-[13px] px-2 overflow-hidden select-none">
            {/* COLUMN 1: Scrolls DOWN */}
            <div className="w-[120px] sm:w-[150px] md:w-[170px] lg:w-[180px] shrink-0 flex flex-col gap-[13px] atrium-column-down">
              {/* Loop Chunk 1 */}
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc524fc3-03c3-40a1-9954-22eab1322592.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#ef5d44] text-white p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">01 &bull; DWOME</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">90.34% ACCURACY</span>
              </div>
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/1d56967e-0ed5-40f8-812d-9360e5ec1780.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#151515] text-white p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">PICT LAB</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">META ENSEMBLE</span>
              </div>

              {/* Loop Chunk 2 (Exact Duplicate for Seamless Infinite Animation) */}
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc524fc3-03c3-40a1-9954-22eab1322592.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#ef5d44] text-white p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">01 &bull; DWOME</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">90.34% ACCURACY</span>
              </div>
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/1d56967e-0ed5-40f8-812d-9360e5ec1780.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#151515] text-white p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">PICT LAB</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">META ENSEMBLE</span>
              </div>
            </div>

            {/* COLUMN 2: Scrolls UP */}
            <div className="w-[120px] sm:w-[150px] md:w-[170px] lg:w-[180px] shrink-0 flex flex-col gap-[13px] atrium-column-up">
              {/* Loop Chunk 1 */}
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#9fd5f7] text-[#0f0f0e] p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0f0f0e]/70">02 &bull; RESEARCH MIND</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">MULTI-AGENT AI</span>
              </div>
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5f3f6135-26b9-4c48-92ad-105161327cbc.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#fcdd71] text-[#0f0f0e] p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0f0f0e]/70">03 &bull; IGNITRON</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">KNN CAR ENGINE</span>
              </div>
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e7b68ae9-9240-4f52-a0a2-89082df4b8d0.webp)",
                }}
              />

              {/* Loop Chunk 2 */}
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#9fd5f7] text-[#0f0f0e] p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0f0f0e]/70">02 &bull; RESEARCH MIND</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">MULTI-AGENT AI</span>
              </div>
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5f3f6135-26b9-4c48-92ad-105161327cbc.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#fcdd71] text-[#0f0f0e] p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0f0f0e]/70">03 &bull; IGNITRON</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">KNN CAR ENGINE</span>
              </div>
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e7b68ae9-9240-4f52-a0a2-89082df4b8d0.webp)",
                }}
              />
            </div>

            {/* COLUMN 3: Scrolls DOWN */}
            <div className="w-[120px] sm:w-[150px] md:w-[170px] lg:w-[180px] shrink-0 flex flex-col gap-[13px] atrium-column-down">
              {/* Loop Chunk 1 */}
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e7b68ae9-9240-4f52-a0a2-89082df4b8d0.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#f9f6f1] text-[#0f0f0e] border border-[#0f0f0e]/10 p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0f0f0e]/60">SOUNDSCAPES</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">KENDRICK &bull; TRAVIS</span>
              </div>
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc524fc3-03c3-40a1-9954-22eab1322592.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#ef5d44] text-white p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">DYPIU</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">CGPA 8.28</span>
              </div>

              {/* Loop Chunk 2 */}
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e7b68ae9-9240-4f52-a0a2-89082df4b8d0.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#f9f6f1] text-[#0f0f0e] border border-[#0f0f0e]/10 p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0f0f0e]/60">SOUNDSCAPES</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">KENDRICK &bull; TRAVIS</span>
              </div>
              <div
                className="w-full h-[210px] sm:h-[240px] md:h-[269px] rounded-[22px] bg-cover bg-center shrink-0 border border-black/10 shadow-sm"
                style={{
                  backgroundImage:
                    "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc524fc3-03c3-40a1-9954-22eab1322592.webp)",
                }}
              />
              <div className="w-full h-[180px] sm:h-[210px] md:h-[240px] rounded-[22px] bg-[#ef5d44] text-white p-4 flex flex-col justify-between shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">DYPIU</span>
                <span className="font-kanit font-black text-lg uppercase leading-tight">CGPA 8.28</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL ESSAY READER */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white text-[#0f0f0e] rounded-[28px] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#0f0f0e]/10"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#0f0f0e] transition-colors cursor-pointer"
                aria-label="Close Essay"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ef5d44] font-semibold">
                  {selectedPost.category}
                </span>
                <span className="text-xs font-mono text-[#62615d]">&bull; {selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0f0f0e] leading-snug mb-4">
                {selectedPost.title}
              </h2>

              <div className="border-t border-[#0f0f0e]/10 pt-4 flex flex-col gap-4 text-sm sm:text-base text-[#62615d] leading-relaxed">
                {selectedPost.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#0f0f0e]/10 flex flex-wrap gap-1.5">
                {selectedPost.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-[#f5f4ef] text-xs font-mono text-[#0f0f0e]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
