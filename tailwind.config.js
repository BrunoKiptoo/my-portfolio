// // tailwind.config.js

// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary:'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm:'640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#1b0b54', // set primary color
        accent: '#00fffc', // set accent color
      },
      backgroundImage: {
        site: "url('./src/Assets/image2.jpg')", // set site background image URL
        // about: "url('./src/Assets/image3.jpeg')", // set about background image URL
        services: "url('./src/Assets/image4.jpg')", // set services background image URL
      },
    },
  },
  plugins: [],
}
