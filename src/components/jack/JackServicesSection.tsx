import React from "react";
import { FadeIn } from "../common/FadeIn";

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export const JackServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      number: "01",
      name: "3D Modeling",
      description:
        "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
    },
    {
      number: "02",
      name: "Rendering",
      description:
        "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
    },
    {
      number: "03",
      name: "Motion Design",
      description:
        "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
    },
    {
      number: "04",
      name: "Branding",
      description:
        "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
    },
    {
      number: "05",
      name: "Web Design",
      description:
        "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
    },
  ];

  return (
    <section
      id="price"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 font-kanit relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={30}>
              <div
                className={`flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 py-8 sm:py-10 md:py-12 ${
                  index !== 0 ? "border-t border-[#0C0C0C]/15" : ""
                }`}
              >
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none shrink-0"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {item.number}
                </div>

                {/* Name & Description stacked vertically on right */}
                <div className="flex flex-col justify-center flex-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] mb-2 sm:mb-3 leading-tight"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
