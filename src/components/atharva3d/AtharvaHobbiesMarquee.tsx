import React, { useRef, useState, useEffect } from "react";
import { Headphones, Gamepad2, Coffee, Cpu, Dumbbell, BookOpen, Car, Terminal, Sparkles, Camera, Shield } from "lucide-react";

interface HobbyItem {
  title: string;
  category: string;
  image: string;
  icon: React.FC<{ className?: string }>;
}

export const AtharvaHobbiesMarquee: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const row1Hobbies: HobbyItem[] = [
    {
      title: "Synthesizers & Lo-Fi Beats",
      category: "Audiophile & Music",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      icon: Headphones,
    },
    {
      title: "Competitive Gaming & Custom Rigs",
      category: "Hardware & Esports",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
      icon: Gamepad2,
    },
    {
      title: "Artisan Coffee & V60 Chemex",
      category: "Cafe Fuel",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
      icon: Coffee,
    },
    {
      title: "Autonomous Agent Architectures",
      category: "Generative AI",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      icon: Cpu,
    },
    {
      title: "Powerlifting & Calisthenics",
      category: "Fitness & Discipline",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
      icon: Dumbbell,
    },
    {
      title: "Sci-Fi & Cyberpunk Novels",
      category: "Speculative Fiction",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      icon: BookOpen,
    },
  ];

  const row2Hobbies: HobbyItem[] = [
    {
      title: "Supercars & Automotive Tuning",
      category: "Engineering & Speed",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
      icon: Car,
    },
    {
      title: "Custom Keyboards & NeoVim Hacking",
      category: "Developer Craft",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
      icon: Terminal,
    },
    {
      title: "Astrophotography & Cosmology",
      category: "Cosmos & Deep Space",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      icon: Sparkles,
    },
    {
      title: "City Night Photography",
      category: "Visual Arts",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop",
      icon: Camera,
    },
    {
      title: "Meta-Ensemble Cyber-Defense",
      category: "Zero-Day Research",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      icon: Shield,
    },
    {
      title: "Vinyl Records & Lo-Fi Lounge",
      category: "Analog Sound",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop",
      icon: Headphones,
    },
  ];

  // Triple items for seamless horizontal scroll
  const tripledRow1 = [...row1Hobbies, ...row1Hobbies, ...row1Hobbies];
  const tripledRow2 = [...row2Hobbies, ...row2Hobbies, ...row2Hobbies];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollVal = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollVal);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="slideshow"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-12 overflow-hidden font-kanit"
    >
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-1">
            Visual Stream &amp; Creative Life
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#D7E2EA] tracking-wide">
            Passions, Hobbies &amp; What I Love
          </h2>
        </div>
        <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-light">
          Scroll to explore &bull; Life beyond terminal screens
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 flex-nowrap"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {tripledRow1.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`row1-${idx}`}
                className="group relative flex-shrink-0 w-[380px] sm:w-[420px] h-[250px] sm:h-[270px] rounded-2xl overflow-hidden bg-[#161616] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#D7E2EA] text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#BBCCD7]" />
                      <span>{item.category}</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold uppercase tracking-wide drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 flex-nowrap"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {tripledRow2.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`row2-${idx}`}
                className="group relative flex-shrink-0 w-[380px] sm:w-[420px] h-[250px] sm:h-[270px] rounded-2xl overflow-hidden bg-[#161616] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#D7E2EA] text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#BBCCD7]" />
                      <span>{item.category}</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold uppercase tracking-wide drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
