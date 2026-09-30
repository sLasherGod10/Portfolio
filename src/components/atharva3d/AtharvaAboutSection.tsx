import React from "react";
import { FadeIn } from "../common/FadeIn";
import { AnimatedText } from "../common/AnimatedText";
import { ContactButton } from "../common/ContactButton";
import { GraduationCap, Award, ShieldCheck } from "lucide-react";

interface AtharvaAboutSectionProps {
  onOpenContact: () => void;
}

export const AtharvaAboutSection: React.FC<AtharvaAboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center font-kanit overflow-hidden"
    >
      {/* Four decorative 3D images positioned absolutely in corners */}

      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Geometric Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Abstract Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Center Content Container */}
      <div className="flex flex-col items-center text-center relative z-20 max-w-4xl mx-auto w-full">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center">
          {/* Animated paragraph: Character-by-character scroll-driven opacity animation */}
          <div className="max-w-[560px] mx-auto text-center px-4">
            <AnimatedText
              text="Results-driven Computer Science undergraduate with practical experience in Python, Machine Learning, Data Science, and software engineering. I focus on building intelligent multi-agent AI systems, robust cyberattack detectors, and modern web architectures. Let's build something incredible together!"
              className="text-[#D7E2EA] font-medium text-center leading-relaxed"
              offset={["start 0.8", "end 0.2"]}
            />
          </div>

          {/* Quick Credential Highlights */}
          <FadeIn delay={0.25} y={20} className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] text-xs font-light tracking-wide uppercase">
                <GraduationCap className="w-3.5 h-3.5 text-[#BBCCD7]" />
                DYPIU Pune • CGPA 8.28/10
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] text-xs font-light tracking-wide uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BBCCD7]" />
                PICT Research Fellow
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] text-xs font-light tracking-wide uppercase">
                <Award className="w-3.5 h-3.5 text-[#BBCCD7]" />
                DWOME 90.34% Acc
              </span>
            </div>
          </FadeIn>

          {/* Spacing to Contact Button: gap-16 sm:gap-20 md:gap-24 */}
          <div className="mt-16 sm:mt-20 md:mt-24">
            <FadeIn delay={0.3} y={20}>
              <ContactButton label="Get in Touch" onClick={onOpenContact} />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
