import React from "react";
import { FadeIn } from "../common/FadeIn";
import { Layers } from "lucide-react";

interface JackNavbarProps {
  onToggleMode?: () => void;
}

export const JackNavbar: React.FC<JackNavbarProps> = ({ onToggleMode }) => {
  return (
    <FadeIn delay={0} y={-20} as="nav" className="w-full z-30">
      <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 w-full">
        <a
          href="#about"
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
        >
          About
        </a>
        <a
          href="#price"
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
        >
          Price
        </a>

        {/* View Switcher button in middle if available */}
        {onToggleMode && (
          <button
            onClick={onToggleMode}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/50 text-cyan-300 text-xs font-sans font-semibold hover:bg-cyan-500/10 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI/ML View (Atharva)</span>
          </button>
        )}

        <a
          href="#projects"
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
        >
          Contact
        </a>
      </div>
    </FadeIn>
  );
};
