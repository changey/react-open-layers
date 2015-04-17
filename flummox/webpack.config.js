module.exports = {
  entry: './js/app.jsx',
  output: {
    filename: 'bundle.js', //this is the default name, so you can skip it
    //at this directory our bundle file will be available
    //make sure port 9601 is used when launching webpack-dev-server
    publicPath: 'http://localhost:9601/assets'
  },
  devtool: "#eval-source-map",
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        include: [/js/],
        exclude: [/node-modules/],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
