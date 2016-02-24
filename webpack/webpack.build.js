var loaders = require("./loaders");
var webpack = require('webpack');
var StringReplacePlugin = require('string-replace-webpack-plugin');
module.exports = {
  entry: ['./src/rbo-validate/index.ts'],
  output: {
    filename: 'rbo-validate.js',
    path: 'dist'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: "source-map",
  plugins: [
    new StringReplacePlugin(),
  ]
};
