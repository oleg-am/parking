var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var appConfig = require('./config.json')

var PORT = 5555;
var HOST = 'localhost';

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    proxy: {
      '/api': {
        target: appConfig.apiPrefix,
        changeOrigin: true,
      },
    },
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
}).listen(PORT, HOST, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Webpack Dev Server listening at http://%s:%s', HOST, PORT);
});
