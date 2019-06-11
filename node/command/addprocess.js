#!/usr/bin/env node
/**
 * 新建进程demo
 * 脚本可以通过 child_process 模块新建子进程，从而执行 Unix 系统命令。
 * 用法：node ./filename args
 */
let name = process.argv[2];
let exec = require('child_process').exec;


let child = exec('echo hello ' + name, function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
})