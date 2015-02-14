var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: 'http://localhost:3000',
  noInfo: true,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  hot: true
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3001');
});
