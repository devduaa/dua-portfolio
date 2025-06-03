/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f0f7',
          100: '#ead6ef',
          200: '#d6b3e0',
          300: '#c084cc',
          400: '#aa5ab4',
          500: '#953a9e',
          600: '#7e2989', // plum
          700: '#652173',
          800: '#4e1c5b',
          900: '#301934', // dark plum
        },
        background: {
          dark: '#050505',
          light: '#121212',
        },
        accent: {
          blue: '#61dafb',
          purple: '#c026d3',
          pink: '#ec4899',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};