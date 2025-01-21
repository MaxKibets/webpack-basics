const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    salad: "./src/salad.js",
  }, // entry point to start bundling
  output: {
    filename: "[name].js", // output file name
    path: path.resolve(__dirname, "./dist"), // output directory. Should be absolute path!
    // Path to the output directory.
    // It can be usefull for CDN (example: publicPath: "https://cdn.example.com/")
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  module: {
    // rules for handling different file types
    rules: [
      // rule for handling images
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kB (8kB by default)
          },
        },
      },
      // rule for handling text files
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      // rule for handling css files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // rule for handling scss files
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  // plugins for additional functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/page-tamplate.hbs",
      title: "Hello title",
      description: "Webpack description setted by HtmlWebpackPlugin",
    }),
  ],
};
