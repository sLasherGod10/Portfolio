import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import avatarImg from "../../assets/avatar.png";

interface Avatar3DTrackerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Avatar3DTracker: React.FC<Avatar3DTrackerProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for normalized cursor coordinates (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for fluid 3D head/body rotation
  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotations based on mouse position
  // When cursor is to the right, head turns right (positive rotateY)
  // When cursor is above, head tilts up (negative rotateX)
  const rotateY = useTransform(smoothX, [-1, 1], [-22, 22]);
  const rotateX = useTransform(smoothY, [-1, 1], [18, -18]);

  // Dynamic light glare position
  const glareX = useTransform(smoothX, [-1, 1], ["20%", "80%"]);
  const glareY = useTransform(smoothY, [-1, 1], ["20%", "80%"]);

  // Subtle translation for depth perception
  const translateX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const translateY = useTransform(smoothY, [-1, 1], [-8, 8]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Calculate normalized position relative to window center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)));

      mouseX.set(normX);
      mouseY.set(normY);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block select-none perspective-[1200px] ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* Outer Floating 3D Wrapper */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative cursor-grab active:cursor-grabbing flex flex-col items-center justify-end"
      >
        {/* Ambient atmospheric glow behind minifigure */}
        <div className="absolute top-1/4 inset-x-0 h-3/4 bg-gradient-to-t from-blue-500/20 via-cyan-400/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Freestanding 3D Minifigure Container with Depth */}
        <div className="relative flex flex-col items-center">
          {/* Dynamic Light Glare Overlay across the 3D model */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20 opacity-35 mix-blend-screen"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) =>
                  `radial-gradient(circle 240px at ${gx} ${gy}, rgba(255,255,255,0.7) 0%, rgba(187,204,215,0.2) 40%, rgba(0,0,0,0) 80%)`
              ),
            }}
          />

          {/* High-res Freestanding Minifigure Portrait - Enlarged */}
          <div className="relative">
            <img
              src={avatarImg}
              alt="Atharva Shriram Khaire 3D Minifigure"
              className="w-[340px] sm:w-[460px] md:w-[560px] lg:w-[650px] xl:w-[720px] max-w-none h-auto object-contain block drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] select-none pointer-events-auto"
              loading="eager"
            />
          </div>

          {/* Interactive Floating 3D Pill Badge */}
          <motion.div
            style={{
              transform: "translateZ(30px)",
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full bg-[#0C0C0C]/85 border border-[#D7E2EA]/40 backdrop-blur-md text-[#D7E2EA] text-[11px] sm:text-xs font-mono tracking-widest uppercase whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Atharva Khaire</span>
            <span className="text-white/40">|</span>
            <span className="text-[#BBCCD7]">AI/ML</span>
          </motion.div>
        </div>

        {/* 3D Contact Shadow & Holographic Pedestal */}
        <motion.div
          style={{
            scaleX: useTransform(smoothY, [-1, 1], [0.85, 1.2]),
            scaleY: useTransform(smoothX, [-1, 1], [0.9, 1.1]),
            opacity: useTransform(smoothY, [-1, 1], [0.4, 0.85]),
          }}
          className="w-[70%] h-8 bg-black/90 rounded-full blur-xl -mt-4 -z-10 shadow-[0_0_30px_rgba(0,242,254,0.15)]"
        />
      </motion.div>
    </div>
  );
};
