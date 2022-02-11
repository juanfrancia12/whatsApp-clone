const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/juanfrancia12/juanfrancia12.github.io/gh-pages/"
    : "",
};
