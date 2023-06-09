/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        averia: ['Averia Serif Libre', 'cursive'],
        caveat: ['Caveat', 'cursive'],
      },
      colors: {
        themeOrange: ['#EE816B'],
        themeYellow: ['#F9EE80'],
        themeOrange: ['#EF8FB2'],
        themePink: ['#5DA6EE'],
      },
    },
  },
  plugins: [],
}
