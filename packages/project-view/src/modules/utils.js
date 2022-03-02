/*
 * @Author: linbin
 * @Date: 2022-03-02 13:17:42
 * @LastEditTime: 2022-03-02 14:31:45
 * @LastEditors: linbin
 * @Description: 工具函数
 * @FilePath: /vue3-template-vite/packages/project-view/src/modules/utils.js
 */
import { ElMessage } from 'element-plus'
/**
 * @author: linbin
 * @Date: 2022-03-02 14:30:32
 * @description: 复制
 * @param {*} data 复制的内容
 * @return {*}
 */
export const copyUrl = function (data) {
    let url = data
    let oInput = document.createElement('input')
    oInput.value = url
    document.body.appendChild(oInput)
    oInput.select() // 选择对象;
    document.execCommand('Copy') // 执行浏览器复制命令
    ElMessage({
        message: '已成功复制到剪切板',
        type: 'success',
    })
    oInput.remove()
}
