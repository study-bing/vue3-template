import service from './request'

export function getBaseUrl(data = {}) {
    return service.request({
        url: '',
        method: 'get',
        params: data
    })
}
