import request from "../utils/request";

export function checkUserName(data) {
    return request({
        url: '/person/register/checkUserName',
        method: 'post',
        data
    })
}

export function registerUser(data) {
    return request({
        url: '/person/register/createUser',
        method: 'post',
        data
    })
}