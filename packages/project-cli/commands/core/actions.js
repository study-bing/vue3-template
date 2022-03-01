/*
 * @Author: linbin
 * @Date: 2021-10-08 15:25:26
 * @LastEditTime: 2022-03-01 11:29:56
 * @LastEditors: linbin
 * @Description: 指令
 * @FilePath: /vue3-template-vite/packages/project-cli/commands/core/actions.js
 */
// 工具库自带，将函数转为promise
const { promisify } = require('util')
const path = require('path')
const inquirer = require('inquirer')
const { ejsCompile, writeFile, mkdirSync, firstToUpper, firstToLower } = require('../utils/file')
const log = require('../utils/log')
const handleEjsToFile = async (name, dest, template, filename) => {
	// validateName(name)
	// 1.获取模块引擎的路径
	const templatePath = path.resolve(__dirname, template)
	const result = await ejsCompile(templatePath, {
		name,
		lowerName: firstToLower(name)
	})
	// 2.写入文件中
	// 判断文件不存在,那么就创建文件
	mkdirSync(dest)
	const targetPath = path.resolve(dest, filename)
	writeFile(targetPath, result)
}
// 创建页面
const addPage = async (name, dest) => {
    let src = path.resolve(__dirname, '../template/page.vue.ejs')
	handleEjsToFile(name, dest, src, `${firstToUpper(name)}.vue`)
}
// 创建组件
const addComponent = async (name, dest) => {
    const promptList = [
		{
			type: 'confirm',
			message: '是否全局组件:',
			name: 'components',
			default:true
		}
	]
    let isGlobal = await inquirer.prompt(promptList)
    let fileDest = `docs/components/${name.toLowerCase()}`
    if(isGlobal.components){
        // 添加index.js文件
        dest = `${dest}/global/${name.toLowerCase()}`
        fileDest  = `docs/components/global/${name.toLowerCase()}`
    }else{
        dest = `${dest}/${name.toLowerCase()}`
    }
    let src = path.resolve(__dirname, '../template/component.vue.ejs')
    handleEjsToFile(name, dest, src, `${firstToUpper(name)}.vue`)
    handleEjsToFile(name, dest, '../template/component.js.ejs', 'index.js')
    handleEjsToFile(name, fileDest, '../template/component.md.ejs', 'index.md')
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
