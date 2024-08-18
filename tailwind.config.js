/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight:{
        '600': '600px'
      },
      height:{
        '300': '300px'
      },
      maxWidth:{
        '260': '260px'
      },
      width:{
        '90v': '90vw',
        '80v': '80vw',
      },
      boxShadow:{
        'shadow-card': '0px 0px 60px 0px rgba(0,0,0,0.30)',
        'shadow-button': '0px 0px 30px 0px rgba(0,0,0,0.10)',
      },
      colors: {
        'button-color': '#9198e5',
      },
    },
  },
  plugins: [],
};
