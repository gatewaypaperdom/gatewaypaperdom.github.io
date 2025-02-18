/** @type {import('tailwindcss').Config} */
export default {
  content: 
  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      keyframes: {
        scaleIn: {
          '10%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        scaleIn: 'scaleIn 1s ease-out forwards',
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
      },
      colors:
      {
        'gateway-logo': '#5c6bc0',
        'gateway-logo-complement' : '#fffffe',
        'gateway-logo-dark': '#1a237e',
        'gateway-logo-light': '#a5b6f5',
      },
      fontFamily: {
        bodoni: ['Bodoni Moda', 'serif'], 
        lora: ['Lora', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

