const path = require("path");
// const TersetPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { min } = require("lodash");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    salad: "./src/salad.js",
  }, // entry point to start bundling
  output: {
    filename: "[name].[contenthash].js", // output file name
    path: path.resolve(__dirname, "./dist"), // output directory. Should be absolute path!
    // Path to the output directory.
    // It can be usefull for CDN (example: publicPath: "https://cdn.example.com/")
    publicPath: "",
    // clean output directory before each build,
    // like an clean-webpack-plugin (much more configurable), but this feature is built-in!
    clean: true,
    // clean: {
    //   dry: true, // dry run, no files will be removed
    //   keep: /index\.html/, // keep index.html file
    // },
  },
  mode: "production", // mode of bundling
  optimization: {
    // minimize: false, // minify js code
    splitChunks: {
      chunks: "all", // split all chunks
    },
  },
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
          MiniCssExtractPlugin.loader, // injects css into the DOM
          "css-loader", // reads css files and returns css code
        ],
      },
      // rule for handling scss files
      {
        test: /\.scss$/,
        // order of loaders is from right to left is important! first scss loader covert scss to css, then css loader reads css and returns css code, then style loader injects css into the DOM
        use: [
          MiniCssExtractPlugin.loader, // injects css into the DOM
          "css-loader", // reads css files and returns css code
          "sass-loader", // compiles scss to css
        ],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  // plugins for additional functionality
  plugins: [
    // new TersetPlugin(), // minify js code. In production mode it's enabled by default
    // extract css code to separate file
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // output css file name
    }),
    // clean dist directory before each build
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [
    //     "**/*",
    //     path.join(process.cwd(), "dist/**/*"), // removes all files in dist directory before each build
    //   ],
    // }),
    // template plugin
    new HtmlWebpackPlugin({
      filename: "hello-world.html", // output file name and folder
      chunks: ["hello-world"], // chunks to be included in the output
      template: "src/page-template.hbs", // template file
      title: "Hello title",
      description: "Hello world description",
      // minify: false, // minify html code
    }),
    new HtmlWebpackPlugin({
      filename: "salad.html",
      chunks: ["salad"], // chunks to be included in the output
      template: "src/page-template.hbs",
      title: "Salad",
      description: "Mmmm, salad",
      // minify: false, // minify html code
    }),
  ],
};
