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
        navy: {
          950: '#040B15',
          900: '#07111F', // Primary background
          850: '#0B1728',
          800: '#0B1B2E', // Secondary background / cards
          750: '#0E213A',
          700: '#142948',
          600: '#1B355A',
          border: '#1C3150',
          borderLight: '#2A4368',
        },
        electric: {
          400: '#5299F7',
          500: '#2F80ED', // Accent 1
          600: '#1A67D2',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE', // Accent 2
          500: '#06B6D4',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6', // Accent 3
          600: '#7C3AED',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B', // Highlight warm amber
          600: '#D97706',
          orange: '#FF8A3D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(24px)' },
          '100%': { opacity: '0.8', filter: 'blur(36px)' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(47, 128, 237, 0.35)',
        'glow-cyan': '0 0 30px -5px rgba(34, 211, 238, 0.3)',
        'glow-amber': '0 0 30px -5px rgba(245, 158, 11, 0.3)',
        'glow-dual': '0 0 40px -10px rgba(47, 128, 237, 0.4), 0 0 50px -15px rgba(245, 158, 11, 0.25)',
      }
    },
  },
  plugins: [],
}
