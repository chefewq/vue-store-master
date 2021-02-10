import request from "../utils/request";

export function selectGoodsCollectList(params) {
    return request({
        url: '/person/goodsCollect/selectAll',
        method: 'get',
        params: params
    })
}

export function goodsCollect(params) {
    return request({
        url: '/person/goodsCollect/addGoods',
        method: 'get',
        params: params
    })
}

export function deleteGoodsCollect(params) {
    return request({
        url: '/person/goodsCollect/deleteGoods',
        method: 'get',
        params: params
    })
}