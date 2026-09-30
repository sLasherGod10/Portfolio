import React from "react";
import { FadeIn } from "../common/FadeIn";
import { Magnet } from "../common/Magnet";
import { ContactButton } from "../common/ContactButton";
import heroImg from "../../assets/hero.png";

interface AtharvaHeroSectionProps {
  onOpenContact: () => void;
  onResumeClick: () => void;
}

export const AtharvaHeroSection: React.FC<AtharvaHeroSectionProps> = ({
  onOpenContact,
  onResumeClick,
}) => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] font-kanit">
      {/* Top Navbar: Horizontal nav bar with 4 links -- "About", "Services", "Projects", "Contact" */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full z-30">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 w-full">
          <a
            href="#about"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
          >
            About
          </a>
          <a
            href="#services"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
          >
            Projects
          </a>
          <button
            onClick={onOpenContact}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none p-0 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </FadeIn>

      {/* Hero Heading: Massive h1 with text "Hi, i'm atharva" */}
      <div className="overflow-hidden w-full text-center relative z-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[14vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
            Hi, i&apos;m atharva
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait: Centered absolutely with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            <div className="relative">
              <img
                src={heroImg}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";
                }}
                alt="Atharva Shriram Khaire Portrait in Suit"
                className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain drop-shadow-2xl select-none"
                loading="eager"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar: Flexbox justify-between items-end with pb-7 sm:pb-8 md:pb-10 */}
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

        {/* Right: ContactButton component (Label: "Get in Touch") */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton
            label="Get in Touch"
            onClick={onOpenContact}
          />
        </FadeIn>
      </div>
    </section>
  );
};
