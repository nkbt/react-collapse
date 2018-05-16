#!/usr/bin/env node


const {npm, CWD} = require('./utils/bash');

npm(`eslint . ${process.argv.slice(2).join(' ')}`, {cwd: CWD});
