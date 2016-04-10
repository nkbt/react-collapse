import glob from 'glob';

// Side-effect of scroll-example; Hooks.js
global.window = {};
global.navigator = {};
global.document = {};

glob.sync('**/*-test.js', {realpath: true, cwd: __dirname}).forEach(require);
