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
    // rules for handling different file types
    rules: [
      // rule for handling images
      {
        test: /\.(png|jpg)$/, // file types to be handled
        // type: "asset/resource", // image will be copied to the output directory
        // type: "asset/inline", // image will be inlined as base64
        // webpack will automatically choose between inline (less 8kB) and resource (more 8kB)
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kB (8kB by default)
          },
        },
      },
      // rule for handling text files
      {
        test: /\.txt$/, // file types to be handled
        type: "asset/source", // file content will be inlined
      },
      // rule for handling css files
      {
        test: /\.css$/,
        use: [
          "style-loader", // injects css into the DOM
          "css-loader", // reads css files and returns css code
        ],
      },
      // rule for handling scss files
      {
        test: /\.scss$/,
        // order of loaders is from right to left is important! first scss loader covert scss to css, then css loader reads css and returns css code, then style loader injects css into the DOM
        use: [
          "style-loader", // injects css into the DOM
          "css-loader", // reads css files and returns css code
          "scss-loader", // compiles scss to css
        ],
      },
    ],
  },
};
