const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:5555',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: false
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        exclude: /styles/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[path]_[local]_[hash:base64:5]!postcss',
      },
      {
        test: /\.scss$/,
        include: /styles/,
        loader: 'style!css!sass',
      },
      {
      test: /\.module.less$/,
      loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!less-loader'
      },
      {
      test: /^((?!\.module).)*less$/,
      loader: 'style!css!less'
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url',
      },
    ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'public',
      'node_modules',
    ],
    extensions: ['', '.json', '.js'],
  },
  postcss: function plugins(bundler) {
    return [
      require('postcss-import')(),
      require('precss')(),
      require('autoprefixer')(),
    ];
  },

};
