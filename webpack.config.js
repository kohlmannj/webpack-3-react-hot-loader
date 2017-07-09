const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const removeEmpty = x => x.filter(y => !!y);

module.exports = options => ({
  context: path.join(__dirname, 'src'),

  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: removeEmpty([
    'babel-polyfill',
    // Only load these entry points for non-production mode
    process.env.NODE_ENV !== 'production'
      ? 'react-hot-loader/patch'
      : undefined,
    /* Note: webpack-dev-server automatically adds an entry like:
     * 'webpack-dev-server/client?http://localhost:8080/'
     * If you end up using webpack-dev-middleware and webpack-hot-middleware,
     * you should manually add:
     */
    // process.env.NODE_ENV !== 'production'
    //   ? 'webpack-hot-middleware/client'
    //   : undefined,
    process.env.NODE_ENV !== 'production'
      ? 'webpack/hot/only-dev-server'
      : undefined,
    // Switch between a production and non-production entry point
    process.env.NODE_ENV === 'production'
      ? './index.prod.jsx'
      : './index.dev.jsx',
  ]),

  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: path.join(__dirname, '.babelrc')
          }
        }
      }
    ]
  },

  plugins: removeEmpty([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    process.env.NODE_ENV !== 'production' ? new HtmlWebpackPlugin({
      title: 'My App',
      template: path.join(__dirname, 'src', 'index.html'),
    }) : undefined,
    process.env.NODE_ENV !== 'production' ? new webpack.NamedModulesPlugin() : undefined,
    process.env.NODE_ENV !== 'production' ? new webpack.NoEmitOnErrorsPlugin() : undefined,
  ])
})