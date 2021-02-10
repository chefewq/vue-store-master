import request from "../utils/request";

export function selectAllCategory() {
    return request({
        url: '/person/category/selectAll',
        method: 'get',
    })
}