import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#646973", "#BBCCD7", "#00f2fe", "#a855f7"],
      });
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        onClose();
      }, 3000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-kanit">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#D7E2EA]/20 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block">
                Initiate Collaboration
              </span>
              <h3 className="hero-heading text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1">
                Get in Touch
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#D7E2EA]/60 hover:text-[#D7E2EA] rounded-full hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <a
              href="mailto:atharvakhaire.ak10@gmail.com"
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-[#D7E2EA]/15 text-[#D7E2EA] hover:border-[#D7E2EA]/40 transition-colors no-underline"
            >
              <Mail className="w-4 h-4 text-[#BBCCD7]" />
              <span className="truncate">atharvakhaire.ak10@gmail.com</span>
            </a>
            <a
              href="tel:+918010911734"
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-[#D7E2EA]/15 text-[#D7E2EA] hover:border-[#D7E2EA]/40 transition-colors no-underline"
            >
              <Phone className="w-4 h-4 text-[#BBCCD7]" />
              <span>+91-8010911734</span>
            </a>
          </div>

          {/* Submission Feedback or Form */}
          {isSubmitted ? (
            <div className="py-10 px-4 text-center space-y-3 bg-white/5 rounded-2xl border border-[#D7E2EA]/20">
              <CheckCircle2 className="w-12 h-12 text-[#BBCCD7] mx-auto animate-bounce" />
              <h4 className="text-xl font-bold uppercase text-white">Message Transmitted!</h4>
              <p className="text-xs text-[#D7E2EA]/70 max-w-sm mx-auto">
                Thank you, {formData.name}. Atharva has received your inquiry and will follow up shortly at {formData.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-[#D7E2EA]/25 text-[#D7E2EA] placeholder-white/20 text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-[#D7E2EA]/25 text-[#D7E2EA] placeholder-white/20 text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI/ML Project / Research / Full-Time Role"
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-[#D7E2EA]/25 text-[#D7E2EA] placeholder-white/20 text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Atharva, I loved your DWOME cyberattack detection research and Multi-Agent system..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-[#D7E2EA]/25 text-[#D7E2EA] placeholder-white/20 text-sm focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/atharvakhaire09"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:border-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/sLasherGod10"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:border-white transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-[#D7E2EA]/50 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Pune, India
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#BE4C00] text-white font-medium uppercase tracking-widest text-xs shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
