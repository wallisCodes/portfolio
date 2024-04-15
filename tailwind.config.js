/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#026773",
        "primary-light": "#3CA6A6",
        "primary-dark": "#012E40",
        "alt-primary": "#024959",
        "alt-light": "#F2E3D5", 
      },
    },
  },
  plugins: [],
}

