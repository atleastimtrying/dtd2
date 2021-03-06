var path = require('path');
module.exports = {
  entry: './es6/main.js',
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js'
  },
  resolve:{
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { 
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react']
        }
      }
    ]
  }
};
