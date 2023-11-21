/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Sriracha: ['Sriracha', 'Inner'],
        Jost: ['Jost', 'Inner'],
        Kaus: ['Kaus', 'Inner'],
        Fugg: ['Fugg', 'Inner'],
      },
    },
  },
  plugins: [],
}
