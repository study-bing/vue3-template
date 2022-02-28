#! /usr/bin/env node
const { program } = require('commander')
const version = require('./package.json').version
const helpOption = require('./commands/core/help')
const createCommands = require('./commands/core/create')
// 查看版本号
program.version(version)
// 给help增加其他选项
helpOption()
// 创建命令
createCommands()

program.parse(process.argv)
