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
} = require(`./common`);


module.exports = {
  devtool: false,
  entry: pathTo(`src`, `index.d.ts`),
  output: {
    filename: `${PACKAGE_NAME}.d.ts`,
    path: pathTo(`build`),
    library: COMPONENT_NAME,
    libraryTarget: `umd`
  },
  plugins: [
    plugins.define
  ],
  module: {
    rules: [
      loaders.babel
    ]
  },
  resolve,
  stats,
  externals
};
