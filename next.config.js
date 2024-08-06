// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/your-portfolio/" : "",
  basePath: isProd ? "/your-portfolio" : "",
};
