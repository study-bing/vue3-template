const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const log = require('./log')
// ejs编译
const ejsCompile = (templatePath, data = {}, options = {}) => {
    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, { data }, options, (err, str) => {
            if (err) {
                reject(err)
                return
            }
            resolve(str)
        })
    })
}
// 写入文件
const writeFile = (path, content) => {
    if (fs.existsSync(path)) {
        log.error('the file already exists~')
        return
    }
    return fs.promises.writeFile(path, content)
}
// 判断是否有文件夹，没有则创建
const mkdirSync = (dirname) => {
    if (fs.existsSync(dirname)) {
        return true
    } else {
        // 不存在,判断父亲文件夹是否存在？
        if (mkdirSync(path.dirname(dirname))) {
            // 存在父亲文件，就直接新建该文件
            fs.mkdirSync(dirname)
            return true
        }
    }
}
// 首字母转大写
function firstToUpper(str) {
    return str.trim().replace(str[0], str[0].toUpperCase());
}
function firstToLower(str) {
    return str.trim().replace(str[0], str[0].toLowerCase());
}
module.exports = {
    ejsCompile,
    writeFile,
    mkdirSync,
    firstToUpper,
    firstToLower
}
