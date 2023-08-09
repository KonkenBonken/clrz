const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log(__dirname, path.resolve(__dirname, 'dist'))

module.exports = {
  entry: './src/ts/index.ts',
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }, {
        test: /\.html$/,
        loader: 'html',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.html'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ['./src/public']
    }),
  ]
};