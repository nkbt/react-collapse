

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const path = require('path');


const {NODE_ENV = 'development'} = process.env;


const pathTo = p => path.join(process.cwd(), p);
exports.pathTo = pathTo;


const {
  config: {
    component: COMPONENT_NAME,
    externals: COMPONENT_EXTERNALS = {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    include: INCLUDE_JS = [
      'https://unpkg.com/react/umd/react.production.min.js',
      'https://unpkg.com/react-dom/umd/react-dom.production.min.js'
    ]
  },
  name: PACKAGE_NAME
} = require(pathTo('package.json'));
exports.PACKAGE_NAME = PACKAGE_NAME;
exports.COMPONENT_NAME = COMPONENT_NAME;
exports.INCLUDE_JS = INCLUDE_JS;


if (!COMPONENT_NAME) {
  throw Error('<package.json>.config.component name is required');
}


exports.PACKAGE_NAME = PACKAGE_NAME;


exports.loaders = {
  css: {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    include: [pathTo('src'), pathTo('example')]
  },
  babel: {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [pathTo('src'), pathTo('example')],
    options: {
      babelrc: false,
      presets: ['react', ['env', {modules: false}]],
      plugins: [
        'transform-object-rest-spread',
        'transform-class-properties'
      ]
    }
  },
  babelProd: {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [pathTo('src'), pathTo('example')],
    options: {
      babelrc: false,
      presets: ['react', ['env', {modules: false}]],
      plugins: [
        'transform-object-rest-spread',
        'transform-class-properties',
        ['transform-react-remove-prop-types', {removeImport: true}]
      ]
    }
  }
};


exports.plugins = {
  html: new HtmlWebpackPlugin(),
  include: assets => new HtmlWebpackIncludeAssetsPlugin({
    assets,
    append: false
  }),
  loaderOptions: new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  emptyPropTypes: new webpack.NormalModuleReplacementPlugin(
    /prop-types/,
    resource => {
      if (!resource.context.includes('node_modules')) {
        Object.assign(resource, {request: `${__dirname}/emptyPropTypes`});
      }
    }
  )
};


exports.resolve = {};


exports.stats = {colors: true};


exports.externals = COMPONENT_EXTERNALS;


exports.mode = NODE_ENV;
