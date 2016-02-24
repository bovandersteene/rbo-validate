var loaders = require("./loaders");
var webpack = require('webpack');
var StringReplacePlugin = require('string-replace-webpack-plugin');
module.exports = {
  entry: ['./src/app/ui/index.ts'],
  output: {
    filename: 'build.js',
    path: 'tmp'
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
            replacement: () => 'http://localhost:8081/'
          }]
        })
      }]),
    postLoaders: [
      {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'istanbul-instrumenter'
      }
    ]
  }
};

