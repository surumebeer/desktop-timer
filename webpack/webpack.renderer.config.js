const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: 'development',
  target: 'electron-renderer',
  cache: true,
  devtool: 'source-map',
  entry: path.join(__dirname, './../src/renderer/index.tsx'),
  output: {
    path: path.join(__dirname, './../dist/'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: path.join(__dirname, './../dist/index.html'),
      template: path.join(__dirname, './../src/renderer/index.html'),
    }),
  ],
};
