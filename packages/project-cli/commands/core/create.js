/*
 * @Author: linbin
 * @Date: 2021-10-08 15:19:40
 * @LastEditTime: 2022-03-02 09:52:58
 * @LastEditors: linbin
 * @Description:
 * @FilePath: /vue3-template-vite/packages/project-cli/commands/core/create.js
 */
const { program } = require('commander')
const { addComponent, addPage, addStore } = require('./actions')
const { firstToLower } = require('../utils/file')
const options = program.opts()
const createCommands = () => {
	// 创建组件.
	program
		.command('addCom <name>')
		.description('add vue component, 例如: coderwhy addcpn NavBar [-d src/components]')
		.action(name => addComponent(name, program.dest || 'src/components'))
	// 创建页面
	program
		.command('addPage <name>')
		.description('add vue page, 例如: coderwhy addpage Home [-d dest]')
		.action(name => {
			addPage(name, program.dest || `src/pages/${firstToLower(name)}`)
		})
	// 创建store
	program
		.command('addStore <name>')
		.description('add vue store, 例如: coderwhy addstore favor [-d dest]')
		.action(name => {
			addStore(name, program.dest || `src/store/modules/${firstToLower(name)}`)
		})
}
module.exports = createCommands
