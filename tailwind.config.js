/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#00FFCC',
        secondary: '#0066FF',
        accent: '#FF4500',
        highlight: '#FFEB3B',
        dark: {
          DEFAULT: '#121212',
          secondary: '#1E2A47',
          card: '#2C2C2C',
        },
      },
    },
  },
  plugins: [],
};