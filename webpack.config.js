const path = require("path")
const { join } = path

module.exports = {
  entry: "./client/index.js",

  output: {
    path: join(__dirname, "server/public"),
    filename: "bundle.js"
  },

  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        exclude: /node_modules/,

        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", "json", ".css"]
  }
}