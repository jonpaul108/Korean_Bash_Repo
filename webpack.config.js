const path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'client/src/index.jsx'),
    client: path.join(__dirname, 'client/src/bundle.jsx')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    }
    ]
  }
}
