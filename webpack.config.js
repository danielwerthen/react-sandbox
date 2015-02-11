module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      //{ test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' } // loaders can take parameters as a querystring
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'] 
  }
};
