'use strict';


const {
  pathTo,
  PACKAGE_NAME,
  COMPONENT_NAME,
  plugins,
  loaders,
  resolve,
  stats,
  externals
} = require('./common');


module.exports = {
  mode: 'development',
  devtool: false,
  entry: pathTo(`src`, `index.js`),
  output: {
    filename: `${PACKAGE_NAME}.js`,
    path: pathTo(`build`),
    library: COMPONENT_NAME,
    libraryTarget: `umd`
  },
  module: {
    rules: [
      loaders.babel
    ]
  },
  resolve,
  stats,
  externals
};
