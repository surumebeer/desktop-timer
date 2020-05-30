const path = require('path');

module.exports = {
  mode: 'development',
  target: 'electron-main',
  cache: true,
  devtool: 'source-map',
  entry: path.join(__dirname, './../src/main/index.ts'),
  output: {
    path: path.join(__dirname, './../dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};
