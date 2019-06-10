#!/usr/bin/env node
/**
 * shelljs module
 * shelljs模块重新包装了child_process,调用系统命令更加方便。
 */
// var name = process.argv[2];
// var shell = require("shelljs");

// shell.exec("echo hello " + name);
require('shelljs/global');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

mkdir('-p', 'out/Release');
cp('-R', 'stuff/*', 'out/Release');

cd('lib');
ls('*.js').forEach(function(file) {
  sed('-i', 'v0.1.2', 'v0.1.2', file);
  sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file);
  sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
});
cd('..');

if (exec('git commit -am "Auto-commit"').code !== 0) {
  echo('Error: Git commit failed');
  exit(1);
}