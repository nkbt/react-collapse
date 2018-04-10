'use strict';


const {
  mode,
  pathTo,
  PACKAGE_NAME,
  COMPONENT_NAME,
  loaders,
  resolve,
  stats,
  externals
} = require('./common');


module.exports = {
  mode,
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
