const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: { path: path.resolve(__dirname, 'dist/'), filename: 'bundle.js' },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
      favicon: path.resolve(__dirname, 'static/img/icon.png'),
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: { enabled: true, files: './src/**/*.{tsx,ts}' },
    }),
  ],
}
