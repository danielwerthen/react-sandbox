var webpack = require('webpack');
module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/app"
  ],
  output: {
    path: __dirname + "/src",
    filename: 'bundle.js',
    publicPath: "/src/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.js$/, loader: 'react-hot!jsx-loader?harmony', exclude: /node_modules/ } 
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee', '.less'] 
  }
};
