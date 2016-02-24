var loaders = require("./loaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var StringReplacePlugin = require('string-replace-webpack-plugin');
module.exports = {
  entry: ['./src/app/ui/index.ts'],
  output: {
    filename: 'build.js',
    path: 'dist'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: "source-map-inline",
  plugins: [
    new StringReplacePlugin(),
    new HtmlWebpackPlugin({
      template: './src/app/ui/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
  module: {
    loaders: loaders.concat([
      {
        test: /\environmentVariables.ts$/,
        loader: StringReplacePlugin.replace({
          replacements: [{
            pattern: /%backend_url%/ig,
            replacement: () => '/'
          }]
        })
      }])
  }
};

