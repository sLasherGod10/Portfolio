import React, { useEffect, useRef, useState, useCallback } from "react";
import { Sparkles, RefreshCw, Eye, EyeOff } from "lucide-react";

// Helper for generating random vibrant neon hex colors
const randomNeonColors = (count: number) => {
  const neonPalettes = [
    ["#00f2fe", "#4facfe", "#c084fc"],
    ["#f967fb", "#53bc28", "#6958d5"],
    ["#ff007f", "#00f0ff", "#ffe600"],
    ["#38ef7d", "#11998e", "#00f2fe"],
    ["#ff0844", "#ffb199", "#7928ca"],
    ["#00ffff", "#ff00aa", "#7000ff"],
  ];
  const chosenPalette = neonPalettes[Math.floor(Math.random() * neonPalettes.length)];
  if (count <= chosenPalette.length) {
    return chosenPalette.slice(0, count);
  }
  return new Array(count).fill(0).map(() => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 65%)`;
  });
};

interface TubesCursorBackgroundProps {
  enableClickRandomize?: boolean;
  className?: string;
}

export const TubesCursorBackground: React.FC<TubesCursorBackgroundProps> = ({
  enableClickRandomize = true,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesAppRef = useRef<any>(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);

  const randomizeColors = useCallback(() => {
    if (!tubesAppRef.current?.tubes) return;
    try {
      const colors = randomNeonColors(3);
      const lightsColors = randomNeonColors(4);
      tubesAppRef.current.tubes.setColors(colors);
      tubesAppRef.current.tubes.setLightsColors(lightsColors);
      setActivePaletteIndex((prev) => prev + 1);
    } catch (err) {
      console.warn("Could not randomize tube colors:", err);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Try local vendored public script first, fallback to CDN
        const importDynamic = (url: string) =>
          new Function("u", "return import(u)")(url);

        let module: any;
        try {
          module = await importDynamic("/tubes1.min.js");
        } catch {
          module = await importDynamic(
            "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
          );
        }

        const TubesCursor = module?.default || module;
        if (!mounted || !TubesCursor || !canvasRef.current) return;

        // Initialize 3D neon tubes cursor with custom high-tech palette
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#00f2fe", "#4facfe", "#818cf8"],
            lights: {
              intensity: 220,
              colors: ["#00f2fe", "#38bdf8", "#818cf8", "#f43f5e"],
            },
          },
        });

        tubesAppRef.current = app;
        setIsLoaded(true);

        const handleResize = () => {
          if (app && typeof app.resize === "function") {
            app.resize();
          }
        };

        window.addEventListener("resize", handleResize);

        cleanup = () => {
          window.removeEventListener("resize", handleResize);
          if (app && typeof app.destroy === "function") {
            try {
              app.destroy();
            } catch {
              // ignore cleanup error
            }
          }
          tubesAppRef.current = null;
        };
      } catch (err) {
        console.error("Failed to initialize TubesCursor 3D background:", err);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  // Global window click listener to randomize colors on general background clicks
  useEffect(() => {
    if (!enableClickRandomize) return;

    const handleWindowClick = (e: MouseEvent) => {
      // Don't randomize if clicking on interactive buttons, links, or inputs
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest("[role='dialog']")
      ) {
        return;
      }

      randomizeColors();
    };

    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, [enableClickRandomize, randomizeColors]);

  return (
    <>
      {/* 3D Tubes Canvas - Fullscreen Viewport Layer */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`fixed inset-0 w-full h-full pointer-events-none z-30 transition-opacity duration-500 ${
          isEnabled && isLoaded ? "opacity-90" : "opacity-0"
        } ${className}`}
        style={{
          touchAction: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* Floating 3D Tubes Interactive Control Pill */}
      {isLoaded && (
        <aside
          aria-label="3D Neon Tubes Cursor Controls"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
        >
          {isEnabled && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                randomizeColors();
              }}
              className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#141414]/90 hover:bg-[#202020] border border-[#00f2fe]/40 hover:border-[#00f2fe] text-white text-xs font-mono uppercase tracking-wider backdrop-blur-md shadow-[0_4px_20px_rgba(0,242,254,0.25)] transition-all active:scale-95 cursor-pointer"
              title="Click to randomize neon tube colors (or click anywhere on background)"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#00f2fe] group-hover:rotate-180 transition-transform duration-500" />
              <span className="hidden md:inline">Neon Tubes #{activePaletteIndex + 1}</span>
              <Sparkles className="w-3 h-3 text-[#f967fb] animate-pulse" />
            </button>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEnabled(!isEnabled);
            }}
            className="p-2 rounded-full bg-[#141414]/90 hover:bg-[#202020] border border-white/20 text-[#D7E2EA] hover:text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
            title={isEnabled ? "Hide 3D Tubes Cursor" : "Show 3D Tubes Cursor"}
            aria-label={isEnabled ? "Disable 3D cursor effect" : "Enable 3D cursor effect"}
          >
            {isEnabled ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-white/50" />}
          </button>
        </aside>
      )}
    </>
  );
};

export default TubesCursorBackground;
