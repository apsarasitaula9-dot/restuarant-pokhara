/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#100b08',
          900: '#1a1410',
          800: '#241c16',
          700: '#33271e',
          600: '#42332a',
          500: '#5c4a3d',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f9f4ea',
          200: '#f0e6d2',
          300: '#e5d5b8',
        },
        earth: {
          400: '#b89a7a',
          500: '#a07d5c',
          600: '#8a6948',
          700: '#6f5439',
        },
        copper: {
          300: '#d9a86c',
          400: '#c8904f',
          500: '#b07a3e',
          600: '#936332',
        },
        clay: {
          400: '#c97b5a',
          500: '#b25e3e',
          600: '#974a2e',
        },
        sage: {
          400: '#8a9a7b',
          500: '#6f8160',
        },
        rust: {
          500: '#a44a36',
          600: '#8a3a28',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        deva: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      letterSpacing: {
        'label': '0.22em',
        'wide-label': '0.3em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'zoom-ken': {
          '0%': { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'fade-down': 'fade-down 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-in': 'scale-in 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'zoom-ken': 'zoom-ken 9s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
