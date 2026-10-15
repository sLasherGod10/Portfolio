import React from "react";
import { FadeIn } from "../common/FadeIn";
import { Headphones, Gamepad2, Coffee, Dumbbell, BookOpen, Car } from "lucide-react";

interface HobbyCard {
  title: string;
  subtitle: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  details: string[];
  image: string;
}

export const AtharvaHobbiesSection: React.FC = () => {
  const hobbies: HobbyCard[] = [
    {
      title: "Audio & Music Synthesis",
      subtitle: "Analog Gear & Lo-Fi Frequencies",
      icon: Headphones,
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      description:
        "Fascinated by sound architecture and sound waves. I love experimenting with analog synthesizer presets, exploring chillhop beatmaking, and listening to lossless soundtracks while coding.",
      details: ["Synthesizer patch design", "Audiophile open-back headphones", "Daft Punk & Hans Zimmer enthusiast"],
    },
    {
      title: "Custom PC Building & Gaming",
      subtitle: "Silicon Hardware & High Framerates",
      icon: Gamepad2,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
      description:
        "Building custom water-cooled rigs, tuning memory timings, and competing in high-framerate competitive esports. Hardware benchmarking feeds directly into my GPU optimization work for deep learning.",
      details: ["Custom thermal profiling", "Mechanical keyboard modding", "Competitive tactical gaming"],
    },
    {
      title: "Specialty Coffee Alchemy",
      subtitle: "V60 Chemex & Roast Profiling",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
      description:
        "Coffee brewing is algorithmic: water temperature, grind micrometry, extraction ratios, and brew times. Perfecting single-origin pour-overs is my morning ritual before tackling complex papers.",
      details: ["V60 Pour-over extraction", "Single-origin roast exploration", "Zero sugar, clean brew"],
    },
    {
      title: "Strength & Calisthenics",
      subtitle: "Physical Discipline & Mental Grit",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
      description:
        "Balancing sedentary engineering hours with heavy compound lifts and calisthenics. Physical grit and progressive overload mirror the patient discipline required to train difficult neural models.",
      details: ["Deadlifts & Barbell squats", "Weighted pull-ups & Dips", "Consistency over intensity"],
    },
    {
      title: "Sci-Fi & Speculative Fiction",
      subtitle: "Future Cognition & AI Worldbuilding",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      description:
        "Reading foundational cyberpunk and hard science fiction. Works by Isaac Asimov, Ted Chiang, and William Gibson inspire my long-term curiosity about artificial general intelligence and human-AI collaboration.",
      details: ["Hard science fiction", "Philosophy of consciousness", "Post-scarcity economics"],
    },
    {
      title: "Automotive Dynamics & Sim",
      subtitle: "Mechanical Performance & Speed",
      icon: Car,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
      description:
        "Drawn to precision vehicle dynamics, aerodynamics, and telemetry analysis. This passion inspired my Ignitron AI car recommendation system, fusing mechanical appreciation with mathematical ranking.",
      details: ["Chassis geometry & aerodynamics", "Sim racing racing lines", "Automotive telemetry analytics"],
    },
  ];

  return (
    <section id="hobbies" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] font-kanit relative z-10 border-t border-[#D7E2EA]/15">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-2">
              Beyond The Terminal
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
            >
              Hobbies &amp; What I Love
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light mt-4 max-w-xl mx-auto">
              The creative obsessions, rituals, and physical disciplines that keep me sharp and inspired.
            </p>
          </FadeIn>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, idx) => {
            const Icon = hobby.icon;
            return (
              <FadeIn key={hobby.title} delay={idx * 0.1} y={30}>
                <div className="group h-full rounded-[36px] border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA] bg-[#121212] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden">
                  <div>
                    {/* Header Image Thumbnail */}
                    <div className="w-full h-44 rounded-[26px] overflow-hidden mb-5 border border-white/10 relative">
                      <img
                        src={hobby.image}
                        alt={hobby.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#BBCCD7]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 block font-light mb-1">
                      {hobby.subtitle}
                    </span>
                    <h3 className="text-xl font-bold uppercase text-white mb-3">
                      {hobby.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mb-4">
                      {hobby.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 border-t border-white/10 space-y-1.5">
                    {hobby.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#D7E2EA]/80 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BBCCD7]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
