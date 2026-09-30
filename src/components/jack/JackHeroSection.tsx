import React from "react";
import { FadeIn } from "../common/FadeIn";
import { Magnet } from "../common/Magnet";
import { ContactButton } from "../common/ContactButton";
import { JackNavbar } from "./JackNavbar";

interface JackHeroSectionProps {
  onToggleMode?: () => void;
}

export const JackHeroSection: React.FC<JackHeroSectionProps> = ({ onToggleMode }) => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] font-kanit">
      {/* Top Navbar */}
      <JackNavbar onToggleMode={onToggleMode} />

      {/* Hero Heading */}
      <div className="overflow-hidden w-full text-center relative z-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
            Hi, i&apos;m jack
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack - 3D Creator Portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain drop-shadow-2xl select-none"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 w-full">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
