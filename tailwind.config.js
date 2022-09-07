module.exports = {
  content: ['./src/**/*.{html,js,astro,mdx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light']
  }
};
