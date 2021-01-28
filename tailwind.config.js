module.exports = {
  purge: {
    enabled: true,
    // content: ['./src/**/*.html'],
    content: ['./index.html'],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['Roboto Mono', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
