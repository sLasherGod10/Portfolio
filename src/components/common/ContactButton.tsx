import React from "react";
import { motion } from "framer-motion";

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  href = "#contact",
  className = "",
  label = "Contact Me",
}) => {
  const buttonStyle: React.CSSProperties = {
    background:
      "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
    boxShadow:
      "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
    outline: "2px solid #ffffff",
    outlineOffset: "-3px",
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      style={buttonStyle}
      onClick={onClick}
      className={`rounded-full uppercase tracking-widest text-white font-medium cursor-pointer transition-all duration-300 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base whitespace-nowrap shadow-lg flex items-center justify-center gap-2 ${className}`}
    >
      <span>{label}</span>
    </motion.button>
  );

  if (href && !onClick) {
    return (
      <a href={href} className="inline-block no-underline">
        {content}
      </a>
    );
  }

  return content;
};
