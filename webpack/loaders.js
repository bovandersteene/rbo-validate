module.exports = [
  {test: /\.ts(x?)$/, loader: 'ts-loader'},
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader?name=resources/[name]-[hash].[ext]'
  },
  {
    test: /\.scss$/,
    loader: 'style!css!sass?name=resources/[name]-[hash].[ext]'
  }, {
    test: /\.html$/,
    exclude: /node_modules/,
    loader: 'raw?name=resources/[name]-[hash].[ext]'
  }, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&minetype=application/font-woff&name=resources/[name]-[hash].[ext]'
  }, {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file?name=resources/[name]-[hash].[ext]'
  }, {
    test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?name=resources/[name]-[hash].[ext]'
  }
];
