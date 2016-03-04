var webpack = require('webpack');
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  entry: {
    app: ['./public/index.html', './src/app.jsx']
  },
  output: {
    filename: 'public/[name].js',
    publicPath: 'public/compiled'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?includePaths[]=./node_modules/foundation-sites/scss/"]
      },
      { test: /.html$/, loader: 'file-loader' },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
