/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0f1d',
          card: '#0f172a',
          surface: '#131e35',
          border: 'rgba(255, 255, 255, 0.08)',
          jack: '#0C0C0C',
        },
        cyan: {
          neon: '#00f2fe',
        },
        blue: {
          neon: '#4facfe',
        },
        jackText: '#D7E2EA',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyan-blue-glow': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
        'purple-orange-btn': 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.35)',
        'neon-blue': '0 0 25px -5px rgba(79, 172, 254, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'contact-btn': '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
