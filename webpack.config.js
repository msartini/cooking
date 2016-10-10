console.log(__dirname + "/wp-content/themes/cooking/css");
module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "/wp-content/themes/cooking/css")]
  },
  output: {
        filename: 'style.css'
  }
};