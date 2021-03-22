const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

const { resolve } = path

module.exports = {
  context: __dirname,
  entry: "./src/client/index.js",

  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  mode: "development",

  devServer: {
    historyApiFallback: true,
  
    inline: true,

    hot: true
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { 
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: "url-loader"
      }
    ]
  },

  resolve: {
    alias: {
      Utilities: resolve(__dirname, "public/")
    },

    extensions: [ "*", ".js", ".jsx", "json", ".scss" ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: resolve(__dirname, "public/index.html"),
      favicon: resolve(__dirname, "public/assets/example.png"),
      filename: "index.html"
    })
  ]
}