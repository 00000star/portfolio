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
        obsidian: {
          950: '#06070A',
          900: '#0A0C12',
          850: '#0E1119',
          800: '#121520',
          750: '#161A28',
          700: '#1C2132',
          600: '#272E44',
          500: '#384260',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FEF9E7',
          200: '#FDF0C5',
          300: '#FCE49E',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(245, 158, 11, 0.25)',
        'gold-md': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'gold-lg': '0 0 45px -8px rgba(245, 158, 11, 0.45)',
        'gold-inner': 'inset 0 0 20px 0 rgba(245, 158, 11, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
