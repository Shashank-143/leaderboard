/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          50: '#1a1a1a',
          100: '#171717',
          200: '#141414',
          300: '#111111',
          400: '#0e0e0e',
          500: '#0b0b0b',
          600: '#080808',
          700: '#050505',
          800: '#030303',
          900: '#000000',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6', 
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0a0a0a',
        },
        primary: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        easy: '#00ff88',
        medium: '#ffaa00', 
        hard: '#ff4444',
        accent: '#00d9ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'black-gradient': 'linear-gradient(135deg, #000000 0%, #111111 100%)',
        'card-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      boxShadow: {
        'black': '0 4px 20px rgba(0, 0, 0, 0.8)',
        'black-lg': '0 10px 40px rgba(0, 0, 0, 0.9)',
        'neon': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow': '0 0 30px rgba(255, 255, 255, 0.1)',
      },
      borderColor: {
        'black-light': '#1a1a1a',
        'black-medium': '#0f0f0f',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}