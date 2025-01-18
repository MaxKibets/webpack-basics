const path = require("path");

module.exports = {
  entry: "./src/index.js", // entry point to start bundling
  output: {
    filename: "bundle.js", // output file name
    path: path.resolve(__dirname, "./dist"), // output directory. Should be absolute path!
  },
  mode: "none", // mode of bundling
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/, // file types to be handled
        type: 'asset/resource', // type of handling
      },
    ],
  },
};
