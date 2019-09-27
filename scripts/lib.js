#!/usr/bin/env node


const {bash, CWD} = require('./utils/bash');


const rimraf = require.resolve('rimraf/bin');
const babel = require.resolve('@babel/cli/bin/babel');

bash(`${rimraf} lib`, {cwd: CWD});
bash(`${babel} src --out-dir lib`, {
  cwd: CWD,
  env: {NODE_ENV: 'production'}
});
