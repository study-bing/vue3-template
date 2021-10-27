import axios from 'axios'
import router from '../router'
const service = axios.create({
    // 设置超时时间
    timeout: 180000,
    baseURL: process.env.BASE_URL
})

// 存储每个请求的标识和取消的函数
let pendingAjax = new Map()

/**
 * @author: linbin
 * @Date: 2021-01-13 14:58:51
 * @description: 将请求添加到pendingAjax
 * @param {*} config 请求信息
 */
const addPendingAjax = config => {
    // 是否需要取消重复的请求
    if (!config.cancelDuplicated) return
    const veryConfig = config.veryConfig || {}
    const duplicatedKey = JSON.stringify({
        duplicatedKey: veryConfig.duplicatedKey || `${config.method}_${config.url}`,
        type: 'REQUEST_TYPE.DUPLICATED_REQUEST'
    })

    config.cancelToken =
        config.cancelToken ||
        new axios.CancelToken(cancel => {
            // 如果pendingAjax中不存在当前请求，添加进去
            if (duplicatedKey && !pendingAjax.has(duplicatedKey)) {
                pendingAjax.set(duplicatedKey, cancel)
            }
        })
}

/**
 * @author: linbin
 * @Date: 2021-01-13 14:58:51
 * @description: 将请求移除pendingAjax
 * @param {*} config 请求信息
 */
const removePendingAjax = config => {
    // 是否需要取消重复的请求
    if (!config.cancelDuplicated) return
    const veryConfig = config.veryConfig || {}
    const duplicatedKey = JSON.stringify({
        duplicatedKey: veryConfig.duplicatedKey || `${config.method}_${config.url}`,
        type: 'REQUEST_TYPE.DUPLICATED_REQUEST'
    })

    // 如果pendingAjax中存在当前请求, 取消当前请求并将其删除
    if (duplicatedKey && pendingAjax.has(duplicatedKey)) {
        const cancel = pendingAjax.get(duplicatedKey)
        cancel(duplicatedKey)
        pendingAjax.delete(duplicatedKey)
    }
}

/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(
    response => {
        removePendingAjax(response.config)
        addPendingAjax(response.config)
        if (response.headers['content-type'].includes('application/vnd.ms-excel')) {
            //excel下载
            return Promise.resolve(response)
        } else if (response.headers['content-type'] === 'image/jpeg') {
            //图片直接下载
            let url = window.URL.createObjectURL(response.data)
            return Promise.resolve(url)
        } else {
            const responseCode = response.status
            // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
            // 否则的话抛出错误
            if (responseCode === 200) {
                return Promise.resolve(response.data)
            } else {
                return Promise.reject(response.data)
            }
        }
    },
    error => {
        // 类型是否为重复请求
        let isDuplicatedType
        try {
            const errorType = (JSON.parse(error.message) || {}).type
            isDuplicatedType = errorType === 'REQUEST_TYPE.DUPLICATED_REQUEST'
        } catch (error) {
            isDuplicatedType = false
        }
        if (isDuplicatedType) return

        // 服务器返回不是 2 开头的情况，会进入这个回调
        const responseCode = error.response ? error.response.status : ''
        switch (responseCode) {
            // 401：未登录
            case 401:
                // 跳转登录页
                router.replace('/login')
                break
            case 411:
                // 跳转登录页
                router.replace('/login')
                break
            // 其他错误，直接抛出错误提示
            default:
            // Message({
            // 	message: error.response.data.error_msg,
            // 	type: 'error'
            // });
        }
        if (error.response.data.type === 'application/json') {
            const reader = new FileReader()
            reader.readAsText(error.response.data)
            reader.onload = () => {
                const msg = JSON.parse(reader.result)
                console.log(msg)
                // Message.error({
                //     background: true,
                //     content: msg.hint || msg.message
                // })
            }
        } else {
            let content =
                error.response && error.response.data
                    ? error.response.data.hint || error.response.data.message
                    : ''
            if (content !== sessionStorage.getItem('errorTxt') && content) {
                // Message.error({
                //     background: true,
                //     content: content,
                // })
                sessionStorage.setItem('errorTxt', content)
                setTimeout(() => {
                    sessionStorage.setItem('errorTxt', '')
                }, 2000)
            }
        }
        return Promise.reject()
    }
)

export default service
