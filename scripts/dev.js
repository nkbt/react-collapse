#!/usr/bin/env node


const {bash, CWD} = require('./utils/bash');


const devServer = require.resolve('webpack-dev-server/bin/webpack-dev-server');
bash(`${devServer} --config ${require.resolve('./utils/webpack/dev.config.js')}`, {
  cwd: CWD,
  env: {NODE_ENV: 'development'}
});
