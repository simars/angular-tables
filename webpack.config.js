'use strict';

var path  = require('path'),
    _     = require('lodash');

var loaders = {
  js      : 'babel-loader',
  html    : 'file?name=[name].[ext]',
  css     : 'css-loader',
  styl    : 'style-loaders!css-loader!stylust-loader',
  otf     : 'url-loader',
  png     : 'file?name=[path][name].[ext]'
};

function mkLoaders(loaders) {
  return _.map(loaders, function (loader, type) {
    return {
      test    : new RegExp('\\.' + type),
      exclude : /node_modules/,
      loader  : loader
    };
  });
}

module.exports = {
  context : path.join(__dirname, 'src'),
  entry   : {
    'angular-tables'           : './js/angular-tables.js'
  },
  output  : {
    path          : path.join(__dirname, 'dist'),
    publicPath    : '/',
    filename      : '[name].js',
    chunkFilename : '[chunkhash].js'
  },
  externals : {
    "jquery": "jQuery",
    "angular": "angular",
    "lodash": "_"
  },
  resolve: {
    moduleDirectories: [
      'node_modules',
      'src'
    ]
  },
  module: {
    loaders : mkLoaders(loaders)
  }
};
