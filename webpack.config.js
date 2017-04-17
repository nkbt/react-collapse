'use strict';


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const loaders = [
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    include: [path.resolve('src/example')]
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.resolve('src')]
  }
];


const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
});


const resolve = {};
const stats = {colors: true};


const development = {
  devtool: '#source-map',

  entry: [
    './src/example/reset.css',
    './src/example/app.css',
    './src/example/Example.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {filename: 'bundle.js', path: path.resolve('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    definePlugin
  ],
  module: {
    loaders
  },
  resolve,
  stats,
  devServer: {
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};


const ghPages = {
  devtool: '#source-map',
  entry: './src/example/Example.js',
  output: {filename: 'bundle.js', path: path.resolve('example')},
  plugins: [new HtmlWebpackPlugin(), definePlugin],
  module: {loaders},
  resolve,
  stats
};


const externals = {
  react: {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'},
  'react-motion': {
    root: 'ReactMotion',
    commonjs2: 'react-motion',
    commonjs: 'react-motion',
    amd: 'react-motion'
  }
};


const dist = {
  devtool: '#source-map',
  entry: './src/index.js',
  output: {
    filename: `${require('./package.json').name}.js`,
    path: path.resolve('build'),
    library: 'ReactCollapse',
    libraryTarget: 'umd'
  },
  plugins: [definePlugin],
  module: {loaders},
  resolve,
  stats,
  externals
};


const min = {
  devtool: '#source-map',
  entry: './src/index.js',
  output: {
    filename: `${require('./package.json').name}.min.js`,
    path: path.resolve('build'),
    library: 'ReactCollapse',
    libraryTarget: 'umd'
  },
  plugins: [
    definePlugin,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {loaders},
  resolve,
  stats,
  externals
};


const test = {
  output: {libraryTarget: 'commonjs2'},
  module: {loaders}
};


const configs = {development, ghPages, dist, min, test};
const build = process.env.BUILD || process.env.NODE_ENV || 'development';


module.exports = configs[build];
