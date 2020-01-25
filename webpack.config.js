/* eslint-env node */

const fs = require("fs");
const webpack = require("webpack");

module.exports = {
  entry: fs.readdirSync("./src").map(s => `./src/${s}`),
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // load chai.js like a normal <script> tag
        test: require.resolve("chai/chai.js"),
        use: "script-loader"
      }
    ],
    
  },
  resolve: {
    alias: {
      // map remote chai.js url to locally installed in node_modules
      "https://unpkg.com/chai@4.1.2/chai.js": "chai/chai.js"
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    port: 4444
  }
};
