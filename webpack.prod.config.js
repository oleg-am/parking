'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css', {allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      exclude: /styles/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]_[hash:base64:5]!postcss'),
    }, {
      test: /\.scss$/,
      include: /styles/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url',
    }]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'public',
      'node_modules',
    ],
    extensions: ['', '.json', '.js'],
  },
  postcss: [
    require('postcss-import')(),
    require('precss')(),
    require('autoprefixer')(),
  ]
};
