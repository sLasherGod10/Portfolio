import React, { useState } from "react";
import { FadeIn } from "../common/FadeIn";
import { Magnet } from "../common/Magnet";
import { ContactButton } from "../common/ContactButton";
import { Avatar3DTracker } from "../common/Avatar3DTracker";
import { FileText, Menu, X } from "lucide-react";

interface AtharvaHeroSectionProps {
  onOpenContact: () => void;
  onResumeClick: () => void;
}

export const AtharvaHeroSection: React.FC<AtharvaHeroSectionProps> = ({
  onOpenContact,
  onResumeClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Archive", href: "#archive" },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] font-kanit">
      {/* Top Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full z-30">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 w-full">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="text-[#D7E2EA] font-black uppercase tracking-wider text-lg md:text-xl hover:opacity-80 transition-opacity no-underline flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-white/10 border border-[#D7E2EA]/30 flex items-center justify-center text-xs font-mono">
              AK
            </span>
            <span className="hidden sm:inline">Atharva.dev</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm xl:text-base hover:opacity-70 transition-opacity duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenContact}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm xl:text-base hover:opacity-70 transition-opacity duration-200 bg-transparent border-none p-0 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Action Button: Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onResumeClick}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] text-xs font-medium uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#D7E2EA] bg-white/5 border border-white/15 rounded-lg cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mx-6 mt-3 p-4 rounded-2xl bg-[#141414] border border-[#D7E2EA]/20 flex flex-col gap-3 shadow-2xl relative z-50">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm py-1.5 hover:text-white no-underline border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left text-[#D7E2EA] font-medium uppercase tracking-wider text-sm py-1.5 hover:text-white bg-transparent border-none p-0 cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 mt-1 rounded-xl bg-white/10 border border-[#D7E2EA]/30 text-[#D7E2EA] text-xs uppercase tracking-widest font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        )}
      </FadeIn>

      {/* Hero Heading: Full Name "Hi, i'm Atharva Khaire" */}
      <div className="overflow-hidden w-full text-center relative z-0 px-2 sm:px-4">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-4 sm:mt-2 md:-mt-3 select-none"
            style={{ fontSize: "clamp(2rem, 7.4vw, 9.5rem)" }}
          >
            Hi, i&apos;m Atharva Khaire
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait: Centered absolutely with 3D Head Tracking the Mouse Cursor */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={120}
            strength={3.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            <Avatar3DTracker />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 w-full">
        {/* Left: paragraph text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            an AI/ML engineer &amp; developer driven by crafting striking and intelligent applications
          </p>
        </FadeIn>

        {/* Right: ContactButton component */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Get in Touch" onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};
