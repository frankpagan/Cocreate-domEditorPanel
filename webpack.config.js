// Webpack uses this to work with directories
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

let isProduction = process.env.NODE_ENV === "production";

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: {
    "CoCreate-attributes": "./src/CoCreate-attributes.js",
  },

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProduction ? "[name].min.js" : "[name].js",
    libraryTarget: "umd",
    libraryExport: "default",
    library: ["CoCreate", "attributes"],
    globalObject: "this",
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          },
        },
      },
    ],
  },

  // add source map
  ...(isProduction ? {} : { devtool: "eval-source-map" }),

  // add uglifyJs

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        // cache: true,
        parallel: true,
        // sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          // extractComments: 'all',
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
};
