import React from "react";
import { FadeIn } from "../common/FadeIn";

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export const AtharvaServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      number: "01",
      name: "AI & Machine Learning",
      description:
        "Developing production-grade machine learning pipelines, multi-agent AI research systems, and advanced neural architectures like DWOME for cyberattack detection.",
    },
    {
      number: "02",
      name: "Generative AI & LLMs",
      description:
        "Building intelligent applications powered by Google Gemini API, LangChain, RAG frameworks, prompt engineering, and automated workflow agents.",
    },
    {
      number: "03",
      name: "Full-Stack Web Development",
      description:
        "Creating robust web platforms, Chrome extensions, and interactive dashboards utilizing Python, JavaScript, PHP, MySQL, and modern responsive design systems.",
    },
    {
      number: "04",
      name: "Data Analytics & Engineering",
      description:
        "Extracting actionable business insights using Power BI, Pandas, NumPy, SQL, exploratory data analysis, and advanced data cleaning pipelines.",
    },
    {
      number: "05",
      name: "Software Architecture",
      description:
        "Designing scalable cloud architecture patterns, role-based authentication systems, secure database schemas, and modular software applications.",
    },
  ];

  return (
    <section
      id="services"
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
