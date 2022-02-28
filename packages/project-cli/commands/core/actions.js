/*
 * @Author: linbin
 * @Date: 2021-10-08 15:25:26
 * @LastEditTime: 2022-02-28 14:38:41
 * @LastEditors: linbin
 * @Description: 指令
 * @FilePath: /vue3-template-vite/packages/project-cli/commands/core/actions.js
 */
// 工具库自带，将函数转为promise
const { promisify } = require('util')
const path = require('path')
const inquirer = require('inquirer')
const { ejsCompile, writeFile, mkdirSync, firstToUpper } = require('../utils/file')
const log = require('../utils/log')
const handleEjsToFile = async (name, dest, template, filename) => {
	// validateName(name)
	// 1.获取模块引擎的路径
	const templatePath = path.resolve(__dirname, template)
	const result = await ejsCompile(templatePath, {
		name,
		lowerName: name.toLowerCase()
	})
	// 2.写入文件中
	// 判断文件不存在,那么就创建文件
	mkdirSync(dest)
	const targetPath = path.resolve(dest, filename)
	writeFile(targetPath, result)
}
// 创建组件
const addComponent = async (name, dest) => {
	let src = path.resolve(__dirname, '../template/component.vue.ejs')
	handleEjsToFile(name, dest, src, `${firstToUpper(name)}.vue`)
}
// 创建页面
const addPage = async (name, dest) => {
	// 选择yarn npm cnpm
	addComponent(name, dest)
}
// 创建store
const addStore = async (name, dest) => {
	handleEjsToFile(name, dest, '../template/vue-store.js.ejs', 'index.js')
	handleEjsToFile(name, dest, '../template/vue-types.js.ejs', 'types.js')
}

module.exports = {
	addComponent,
	addPage,
	addStore
}
