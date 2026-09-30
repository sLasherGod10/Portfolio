import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  offset?: [string, string];
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  offset = ["start 0.8", "end 0.2"],
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as any,
  });

  const characters = text.split("");
  const total = characters.length;

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {characters.map((char, index) => {
        const start = index / total;
        const end = Math.min(start + 1 / total, 1);
        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
