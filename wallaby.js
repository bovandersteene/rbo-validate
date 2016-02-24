var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');
var webpack = require('webpack');
var loaders = require('./webpack/loaders');
module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    module: {
      loaders: loaders
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.jquery': 'jquery'
      }),
      new webpack.NormalModuleReplacementPlugin(/\.scss$/, result => {
        var fs = require('fs');
        var path = require('path');
        var stylesMock = path.join(wallaby.projectCacheDir, 'stylesMock.js');
        fs.writeFileSync(stylesMock, 'module.exports={infoBar: ""}');
        result.request = stylesMock;
      })
    ]
  });
  return {
    files: [
      {pattern: 'src/**/*.html', load: false},
      {pattern: 'src/**/*.scss', load: false},
      {pattern: 'src/**/*.css', load: false},
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'src/**/*.spec.ts', ignore: true},
      {pattern: 'node_modules/**/*.js', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*.spec.ts', load: false},
      {pattern: 'node_modules/**/*.js', ignore: true}
    ],
    env: {
      runner: require('phantomjs2-ext').path
    },
    preprocessors: {
      '**/*.js': file => babel.transform(file.content, {sourceMap: true})
    },
    "testFramework": "jasmine",
    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};