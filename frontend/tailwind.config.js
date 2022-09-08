module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    extend: {
      fontFamily: {
        'serif': ['ui-serif', 'Georgia'],
      },
      colors: {
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
