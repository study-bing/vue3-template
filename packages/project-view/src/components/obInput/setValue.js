/*
 * @Author: linbin
 * @Date: 2021-10-27 18:26:33
 * @LastEditTime: 2022-02-26 15:39:06
 * @LastEditors: linbin
 * @Description: 正则判断
 * @FilePath: /ct-saas/packages/saas-view/src/components/obInput/setValue.js
 */

const ruleConfig = {
    int: /^(-)?(?:(?:[1-9]\d{0,}|0(?!\d))(?:)?)?/, // 整数
    cen: /[A-Za-z0-9\u4e00-\u9fa5\s]+/, // 中文、整数、英文
    noText: /[a-zA-Z0-9_]+/, // 字母,整数,下划线
    number: /^(-)?(?:(?:[1-9]\d{0,}|0(?!\d))(?:\.\d{0,})?)?/, // 数字
    noWord: /[a-zA-Z0-9-`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|、]+/, // 不能输入汉字
    en: /[a-zA-Z0-9]+/, //字符整数
    ce: /[A-Za-z\u4e00-\u9fa5\s]+/, // 字符中文
    onlyE: /[a-zA-Z_-]+/, //英文下划线,
}

export function setValue(data, type) {
    let reg = ruleConfig[type]
    if (data !== '') {
        data = reg.exec(data)
        if (data !== null) {
            data = data[0]
        } else {
            data = ''
        }
    }
    return data
}
export const isEmpty = function(data) {
    if (typeof data === 'undefined' || data === '' || data === null) {
        return true
    } else {
        return false
    }
}
