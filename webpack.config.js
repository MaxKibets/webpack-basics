const path = require("path");

module.exports = {
  entry: "./src/index.js", // entry point to start bundling
  output: {
    filename: "bundle.js", // output file name
    path: path.resolve(__dirname, "./dist"), // output directory. Should be absolute path!
    // Path to the output directory.
    // It can be usefull for CDN (example: publicPath: "https://cdn.example.com/")
    publicPath: "dist/",
  },
  mode: "none", // mode of bundling
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/, // file types to be handled
        // type: "asset/resource", // type of handling
        // type: "asset/inline", // image will be inlined as base64
        // webpack will automatically choose between inline (less 8kB) and resource (more 8kB)
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kB (8kB by default)
          },
        },
      },
    ],
  },
};
