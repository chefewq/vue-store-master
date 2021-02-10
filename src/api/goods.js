import request from "../utils/request";

export function getPromoProduct(params) {
    return request({
        url: '/person/goods/getPromoProduct',
        method: 'get',
        params: params
    })
}

export function selectGoods(params) {
    return request({
        url: '/person/goods/list',
        method: 'get',
        params: params,
    })
}

export function searchGoodsByName(params) {
    return request({
        url: '/person/goods/searchByName',
        method: 'get',
        params: params,
    })
}

export function getDetails(params) {
    return request({
        url: '/person/goods/getDetails',
        method: 'get',
        params: params
    })
}

export function getPictureDetails(params) {
    return request({
        url: '/person/goods/getPictureDetails',
        method: 'get',
        params: params
    })
}

export function getHeadline() {
    return request({
        url: '/person/goods/headline/selectAll',
        method: 'get',
    })
}