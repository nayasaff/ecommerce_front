/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        gridTemplateColumns: {
          'my-columns': 'auto 1fr'
        },
        gridTemplateRows: {
          'my-rows': 'auto 1fr'
        },
        colors:{
          'card' : '#c3c3c3',
          "indigo" : '#1a374f',
          'whitesmoke' : "#FAFAFA",
          "lightblue" : "#D9DFFF",
          "primary" : "#EE4943",
        }
      },
    },
    plugins: [],
  }