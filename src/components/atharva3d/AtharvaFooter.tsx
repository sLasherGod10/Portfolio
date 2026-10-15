import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";

export const AtharvaFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/15 py-12 px-6 md:px-10 font-kanit relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="hero-heading font-black text-xl uppercase tracking-wider">
            Atharva Khaire
          </span>
          <span className="hidden sm:inline text-[#D7E2EA]/40">|</span>
          <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
            Designed &amp; Built by Atharva Khaire &copy; 2026
          </p>
        </div>

        {/* Right: Direct social links + Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/sLasherGod10"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:border-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/atharvakhaire09"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:border-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:atharvakhaire.ak10@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-full bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:border-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+918010911734"
              aria-label="Phone"
              className="p-2.5 rounded-full bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:border-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-full bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
