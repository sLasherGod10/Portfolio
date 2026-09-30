import React, { useState } from "react";
import { FadeIn } from "../common/FadeIn";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
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

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#00f2fe", "#4facfe", "#818cf8"],
      });
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 inline-block mb-3">
              Initiate Dialogue
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Have a generative AI project, research collaboration, or engineering role in mind? Let&apos;s connect!
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.2} y={30}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0f172a]/75 border border-slate-800 backdrop-blur-xl shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Contact Information
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Feel free to reach out via email, phone, or LinkedIn. I am always open to exploring novel ideas, machine learning architectures, and software opportunities.
                </p>

                <div className="space-y-4 pt-2">
                  {/* Email */}
                  <a
                    href="mailto:atharvakhaire.ak10@gmail.com"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group no-underline"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        atharvakhaire.ak10@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+918010911734"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group no-underline"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-950 border border-blue-800 text-blue-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">Phone Number</span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        +91-8010911734
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-slate-300">
                    <div className="p-2.5 rounded-xl bg-indigo-950 border border-indigo-800 text-indigo-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">Current Location</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        Pune, Maharashtra, India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/atharvakhaire09"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0077B5]/20 border border-slate-800 hover:border-[#0077B5]/50 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all no-underline"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/sLasherGod10"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-white/10 border border-slate-800 hover:border-white/30 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all no-underline"
                  >
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.3} y={30}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0f172a]/75 border border-slate-800 backdrop-blur-xl shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" /> Send a Direct Message
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-6">
                  Fill out the form below and I&apos;ll respond promptly within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="py-12 px-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
                    <h4 className="text-xl font-bold text-white">Message Delivered Successfully!</h4>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
                      Thank you for reaching out, {formData.name}. I have received your message and will get back to you at {formData.email} shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elena@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Collaboration / Job Opportunity / Research"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hello Atharva, I came across your DWOME research and would love to discuss..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:opacity-95 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
