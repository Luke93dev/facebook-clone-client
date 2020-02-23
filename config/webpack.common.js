const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash:20].[ext]',
              context: './src',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      defaults: true,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, '../src/modules'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
