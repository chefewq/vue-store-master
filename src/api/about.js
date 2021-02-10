import request from "../utils/request";

export function selectAllCategory() {
    return request({
        url: '/person/about/getMd',
        method: 'get',
    })
}