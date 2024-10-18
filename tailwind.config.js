/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGrey: '#0a0a0a',
        lightGrey: '#f0f1f3',
        darkBlue: '#011f4b',
        darkerBlue: '#011532',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'system-ui'],
        Poppins: ['Poppins', 'system-ui'],
      },
    },
  },
  plugins: [],
};
