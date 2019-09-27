#!/usr/bin/env node


const path = require('path');
const glob = require('glob');
const {CWD} = require('./utils/bash');


require('@babel/register')({
  babelrc: false,
  plugins: [
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-proposal-class-properties')
  ],
  presets: [
    require.resolve('@babel/preset-react'),
    [require.resolve('@babel/preset-env'), {
      targets: {
        node: '10'
      },
      modules: 'commonjs',
      loose: true,
      uglify: false
    }]
  ],
  retainLines: true,
  comments: false
});


glob
  .sync('**/*-test.js', {
    realpath: true,
    cwd: path.resolve(CWD, 'test')
  })
  .forEach(require);
