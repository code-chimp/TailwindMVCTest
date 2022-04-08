module.exports = {
  content: ['./Views/**/*.cshtml'],
  theme: {
    extend: {
      debugScreens: { position: ['top', 'left'] }
    },
  },
  plugins: [require('tailwindcss-debug-screens'), require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
