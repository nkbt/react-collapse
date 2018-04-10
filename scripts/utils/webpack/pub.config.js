'use strict';


const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
  mode,
  pathTo,
  plugins,
  loaders,
  resolve,
  stats,
  externals,
  INCLUDE_JS
} = require('./common');


module.exports = {
  mode,
  devtool: false,
  entry: pathTo(`example`, `index.js`),
  output: {
    filename: `bundle.js`,
    path: pathTo(`pub`)
  },
  plugins: [
    plugins.html,
    plugins.include(INCLUDE_JS.concat([`styles.css`])),
    new ExtractTextPlugin(`styles.css`)
  ],
  module: {
    rules: [
      loaders.babelProd,
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: `style-loader`,
          use: `css-loader`
        })
      }
    ]
  },
  resolve,
  stats,
  externals
};
