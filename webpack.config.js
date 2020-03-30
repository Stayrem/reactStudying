const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`); // Require html-webpack-plugin plugin


module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
  plugins: [ // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(__dirname, "/src/index.html"),
    }),
]
};
