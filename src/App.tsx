import { useState, useEffect } from "react";
// Atharva 3D Creator Portfolio Components
import { AtharvaHeroSection } from "./components/atharva3d/AtharvaHeroSection";
import { AtharvaHobbiesMarquee } from "./components/atharva3d/AtharvaHobbiesMarquee";
import { AtharvaAboutSection } from "./components/atharva3d/AtharvaAboutSection";
import { AtharvaServicesSection } from "./components/atharva3d/AtharvaServicesSection";
import { AtharvaSkillsSection } from "./components/atharva3d/AtharvaSkillsSection";
import { AtharvaExperienceSection } from "./components/atharva3d/AtharvaExperienceSection";
import { AtharvaProjectsSection } from "./components/atharva3d/AtharvaProjectsSection";
import { AtharvaArchiveAtriumSection } from "./components/atharva3d/AtharvaArchiveAtriumSection";
import { AtharvaFooter } from "./components/atharva3d/AtharvaFooter";

// Interactive 3D Cursor Background
import { TubesCursorBackground } from "./components/common/TubesCursorBackground";

// Modals
import { ContactModal } from "./components/common/ContactModal";
import { ResumeModal } from "./components/common/ResumeModal";

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Atharva Khaire -- AI/ML Engineer & CS Undergraduate";
  }, []);

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-kanit min-h-screen overflow-x-clip selection:bg-white selection:text-black">
      {/* Interactive 3D Neon Tubes Cursor Effect across entire website */}
      <TubesCursorBackground enableClickRandomize={true} />

      {/* Floating Quick Resume Pill */}
      <aside aria-label="Resume quick access" className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={() => setResumeModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181818]/90 border border-[#D7E2EA]/30 hover:border-white text-[#D7E2EA] text-xs font-medium tracking-widest uppercase backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-2xl"
        >
          <span>Curriculum Vitae</span>
        </button>
      </aside>

      {/* Main 3D Creator Landing Page */}
      <main className="relative overflow-x-clip bg-[#0C0C0C] w-full">
        {/* 1. HERO SECTION ("Hi, i'm Atharva Khaire" + 3D Minifigure Head Tracking Cursor) */}
        <AtharvaHeroSection
          onOpenContact={() => setContactModalOpen(true)}
          onResumeClick={() => setResumeModalOpen(true)}
        />

        {/* 2. SLIDESHOW / MARQUEE SECTION (Random images & hobbies) */}
        <AtharvaHobbiesMarquee />

        {/* 3. ABOUT SECTION (4 Figma 3D images + animated scroll text) */}
        <AtharvaAboutSection onOpenContact={() => setContactModalOpen(true)} />

        {/* 4. SERVICES SECTION (White background + 5 real AI/ML services) */}
        <AtharvaServicesSection />

        {/* 5. SKILLS SECTION (Interactive Animated Neural Network background + Tech matrix) */}
        <AtharvaSkillsSection />

        {/* 6. EXPERIENCE & MILESTONES (PICT research & CodTech internships) */}
        <AtharvaExperienceSection />

        {/* 7. PROJECTS SECTION (Sticky stacking cards) */}
        <AtharvaProjectsSection />

        {/* 8. ATRIUM ARCHIVE SECTION (ATRIUM MTL Brutalist Mosaic Archive - Research, Credentials, Blog Essays, Soundscapes) */}
        <AtharvaArchiveAtriumSection
          onOpenContact={() => setContactModalOpen(true)}
          onResumeClick={() => setResumeModalOpen(true)}
        />

        {/* 10. FOOTER */}
        <AtharvaFooter />
      </main>

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
