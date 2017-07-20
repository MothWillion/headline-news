var path = require('path');
var webpack = require('webpack');

module.exports = {
  context:__dirname + '/src',
  entry: './js/index.js',
  output: {
    path:__dirname + '/src',
    filename:'./bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js?$/,
        exclude:/(node_modules)/,
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  }
}