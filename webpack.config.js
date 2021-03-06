const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['babel-polyfill',
      './src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
}