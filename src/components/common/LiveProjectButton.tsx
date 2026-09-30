import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  onClick,
  className = "",
  label = "Live Project",
  showIcon = false,
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${className}`}
    >
      <span>{label}</span>
      {showIcon && <ArrowUpRight className="w-4 h-4 ml-1 opacity-80" />}
    </motion.button>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block no-underline"
      >
        {content}
      </a>
    );
  }

  return content;
};
