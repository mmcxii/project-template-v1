const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNesting = require("postcss-nesting");
const tailwind = require("@tailwindcss/postcss");

module.exports = {
  plugins: [autoprefixer, cssnano, postcssNesting, tailwind],
};
