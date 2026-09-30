import { useState, useEffect } from "react";
// Atharva 3D Creator Portfolio Components
import { AtharvaHeroSection } from "./components/atharva3d/AtharvaHeroSection";
import { JackMarqueeSection } from "./components/jack/JackMarqueeSection";
import { AtharvaAboutSection } from "./components/atharva3d/AtharvaAboutSection";
import { AtharvaServicesSection } from "./components/atharva3d/AtharvaServicesSection";
import { AtharvaProjectsSection } from "./components/atharva3d/AtharvaProjectsSection";
import { AtharvaFooter } from "./components/atharva3d/AtharvaFooter";

// Atharva Classic Neon Theme Components (available via toggle)
import { Navbar } from "./components/atharva/Navbar";
import { HeroSection } from "./components/atharva/HeroSection";
import { StatsBar } from "./components/atharva/StatsBar";
import { AboutSection } from "./components/atharva/AboutSection";
import { ExperienceSection } from "./components/atharva/ExperienceSection";
import { ProjectsSection } from "./components/atharva/ProjectsSection";
import { PublicationsSection } from "./components/atharva/PublicationsSection";
import { CertificationsSection } from "./components/atharva/CertificationsSection";
import { ContactSection } from "./components/atharva/ContactSection";
import { Footer } from "./components/atharva/Footer";

// Modals
import { ContactModal } from "./components/common/ContactModal";
import { ResumeModal } from "./components/common/ResumeModal";

import { Sparkles, Terminal } from "lucide-react";

export function App() {
  const [viewMode, setViewMode] = useState<"3d-creator" | "neon-cyber">("3d-creator");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Atharva Khaire -- AI/ML Engineer & CS Undergraduate";
  }, []);

  return (
    <div
      className={
        viewMode === "3d-creator"
          ? "bg-[#0C0C0C] text-[#D7E2EA] font-kanit min-h-screen overflow-x-clip selection:bg-white selection:text-black"
          : "bg-[#0a0f1d] text-slate-100 font-sans min-h-screen overflow-x-hidden selection:bg-cyan-500 selection:text-black"
      }
    >
      {/* Interactive Theme / View Mode Toggle Badge */}
      <aside aria-label="Portfolio Style Switcher" className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#161616]/90 border border-[#D7E2EA]/30 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setViewMode("3d-creator")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium font-kanit uppercase tracking-wider transition-all cursor-pointer ${
              viewMode === "3d-creator"
                ? "bg-[#D7E2EA] text-[#0C0C0C] font-semibold shadow-md"
                : "text-[#D7E2EA]/70 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Creator Style</span>
          </button>
          <button
            onClick={() => setViewMode("neon-cyber")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans transition-all cursor-pointer ${
              viewMode === "neon-cyber"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/30"
                : "text-[#D7E2EA]/70 hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Neon Cyber Theme</span>
          </button>
        </div>
      </aside>

      {/* Floating Resume Quick Button (Available in 3D Creator Mode) */}
      {viewMode === "3d-creator" && (
        <aside aria-label="Resume quick access" className="fixed bottom-6 left-6 z-40 hidden sm:block">
          <button
            onClick={() => setResumeModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60 text-[#D7E2EA] text-xs font-light tracking-widest uppercase backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <span>Curriculum Vitae</span>
          </button>
        </aside>
      )}

      {/* Primary Layout: 3D Creator-Style Portfolio for Atharva Shriram Khaire */}
      {viewMode === "3d-creator" ? (
        <main className="relative overflow-x-clip bg-[#0C0C0C] w-full">
          {/* SECTION 1: HERO SECTION */}
          <AtharvaHeroSection
            onOpenContact={() => setContactModalOpen(true)}
            onResumeClick={() => setResumeModalOpen(true)}
          />

          {/* SECTION 2: MARQUEE SECTION (21 GIFs from motionsites.ai) */}
          <JackMarqueeSection />

          {/* SECTION 3: ABOUT SECTION (4 Figma 3D images + animated scroll text) */}
          <AtharvaAboutSection onOpenContact={() => setContactModalOpen(true)} />

          {/* SECTION 4: SERVICES SECTION (White background + 5 real AI/ML services) */}
          <AtharvaServicesSection />

          {/* SECTION 5: PROJECTS SECTION (Sticky stacking cards + DWOME publication & Certifications) */}
          <AtharvaProjectsSection />

          {/* FOOTER */}
          <AtharvaFooter />
        </main>
      ) : (
        /* Alternate Layout: Neon Cyber Portfolio for Atharva */
        <div className="relative">
          <Navbar
            onResumeClick={() => setResumeModalOpen(true)}
            onToggleMode={() => setViewMode("3d-creator")}
          />
          <HeroSection />
          <StatsBar />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <PublicationsSection />
          <CertificationsSection />
          <ContactSection />
          <Footer />
        </div>
      )}

      {/* Reusable Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Reusable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
