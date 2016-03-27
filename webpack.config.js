'use strict';

var path = require('path'),
  CLIENT_PATH = path.join(__dirname, 'app', 'js');

module.exports = {
  entry: CLIENT_PATH,

  output: {
    path: 'app/js',
    filename: 'bundle.js'
  },

  resolve: {
    root: CLIENT_PATH,
    extensions: ['', '.js', '.jsx'],
    alias: {
      dispatcher: path.resolve(CLIENT_PATH + '/dispatcher'),
      stores: path.resolve(CLIENT_PATH + '/stores'),
      actions: path.resolve(CLIENT_PATH + '/actions'),
      components: path.resolve(CLIENT_PATH + '/components'),
      pages: path.resolve(CLIENT_PATH + '/pages'),
      constants: path.resolve(CLIENT_PATH + '/constants'),
      utils: path.resolve(CLIENT_PATH + '/utils')
    }
  },

  module: {
    loaders: [{
      loader: 'babel'
    }]
  },

  devtool: 'eval-source-map'
};