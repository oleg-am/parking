var express = require('express');
// var proxy = require('http-proxy-middleware');
var appConfig = require('./config.json')

var path = require('path');

var PORT = 9000;
var HOST = '0.0.0.0';
var STATIC_PATH = 'dist';
var PUBLIC_PATH = 'public';

var staticPath = path.join(__dirname, STATIC_PATH);
var publicPath = path.join(__dirname, PUBLIC_PATH);

var app = express();

app.use(express.static(staticPath));
app.use('/public', express.static(publicPath));

// app.use('/api', proxy({target: appConfig.apiPrefix, changeOrigin: true}));

app.use((req, res) => {
  res.sendFile('index.html', { root: staticPath });
});

app.listen(PORT, HOST, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Static server listening at %s:%s', HOST, PORT);
});
