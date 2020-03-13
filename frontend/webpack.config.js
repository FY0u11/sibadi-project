const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'public/dist')
const FRONTEND_DIR = path.resolve(__dirname, 'src')

const config = {
  mode: 'development',
  entry: path.resolve(FRONTEND_DIR, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  watch: true,
  watchOptions: {
    poll: true
  }
}

module.exports = config
