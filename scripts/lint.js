#!/usr/bin/env node


const {bash, CWD} = require('./utils/bash');


const eslint = require.resolve('eslint/bin/eslint');

bash(`${eslint} . ${process.argv.slice(2).join(' ')}`, {cwd: CWD});
