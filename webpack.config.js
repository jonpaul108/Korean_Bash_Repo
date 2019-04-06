const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    bundle: path.join(__dirname, 'client/src/index.jsx'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader','eslint-loader']
    }
    ]
  }
}
