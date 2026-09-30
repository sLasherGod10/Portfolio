import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X, Terminal, Layers } from "lucide-react";

interface NavbarProps {
  onResumeClick: () => void;
  onToggleMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onResumeClick,
  onToggleMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "experience", "projects", "publications", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1d]/85 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-2 group text-white font-bold text-xl tracking-tight no-underline"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-black text-sm shadow-md group-hover:shadow-cyan-500/50 transition-shadow">
              <Terminal className="w-4 h-4 text-slate-950" />
            </div>
            <span className="font-extrabold text-lg sm:text-xl">
              Atharva<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#10192e]/60 px-4 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? "text-cyan-300 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Mode Switcher + Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* 3D Creator Mode Switcher */}
            <button
              onClick={onToggleMode}
              title="Toggle to Jack's 3D Creator Portfolio demo"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-purple-500/60 text-slate-300 hover:text-purple-300 text-xs font-medium transition-all group shadow-sm cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition-transform" />
              <span>3D Creator View</span>
            </button>

            {/* Glowing Resume Button */}
            <button
              onClick={onResumeClick}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0f1d] text-cyan-300 text-xs font-semibold tracking-wider uppercase group-hover:bg-[#0c162b] transition-colors">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                Resume
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleMode}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-purple-300 text-xs font-medium"
              title="Switch view"
            >
              <Layers className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0c1427]/95 border-b border-cyan-500/20 backdrop-blur-xl px-6 py-5 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 font-medium text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" /> View / Download Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleMode();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-purple-500/40 text-purple-300 font-medium text-xs flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4" /> Switch to 3D Creator Portfolio View
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
