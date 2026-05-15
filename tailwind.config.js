/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E4C97E',
          dark: '#A8883C',
        },
        cream: {
          DEFAULT: '#FFF8EE',
          dark: '#F5EDD8',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '1', height: '50px' },
          '50%': { opacity: '0.4', height: '28px' },
        },
        glowLine: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        waPulse: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(37,211,102,0.5)' },
          '50%': { boxShadow: '0 4px 30px rgba(37,211,102,0.8), 0 0 0 8px rgba(37,211,102,0.1)' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
        scrollPulse: 'scrollPulse 2s ease-in-out infinite',
        glowLine: 'glowLine 3s ease-in-out infinite',
        waPulse: 'waPulse 2.5s ease-in-out infinite',
        shine: 'shine 3s ease infinite',
      },
    },
  },
  plugins: [],
}
