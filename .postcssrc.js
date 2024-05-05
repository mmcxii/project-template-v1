const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNesting = require("postcss-nesting");

module.exports = {
  plugins: [autoprefixer, cssnano, postcssNesting],
};
