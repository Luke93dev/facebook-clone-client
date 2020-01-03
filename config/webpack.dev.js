const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    quiet: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
});

// https://developerhandbook.com/webpack/webpack-4-from-absolute-scratch/
