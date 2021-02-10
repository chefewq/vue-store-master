import request from "../utils/request";

export function selectShopCarGoodList(params) {
    return request({
        url: '/person/shopCar/selectShopCarGoodList',
        method: 'get',
        params: params
    })
}

export function addGoods(params) {
    return request({
        url: '/person/shopCar/addGoods',
        method: 'get',
        params: params
    })
}

export function updateGoodsCount(params) {
    return request({
        url: '/person/shopCar/updateGoodsCount',
        method: 'get',
        params: params
    })
}

export function deleteGoods(params) {
    return request({
        url: '/person/shopCar/deleteGoods',
        method: "get",
        params: params
    })
}