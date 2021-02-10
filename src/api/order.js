import request from "../utils/request";

export function selectAllOrder(params) {
    return request({
        url: '/person/order/selectAll',
        method: 'get',
        params: params
    })
}

export function addOrder(data) {
    return request({
        url: '/person/order/addOrder',
        method: 'post',
        data
    })
}
