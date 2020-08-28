import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const ApiKey = {'API-KEY': '99557ee1-9f56-4ba8-a907-a3a9bd527d18'}

export const getUsers = (currentPage = 1, pageSize = 100) => {
    return axios.get(
        baseUrl + `users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true}
    )
        .then(response => {
                return response.data;
            }
        )
}

export const getFollow = (userId) => {
    return axios.post(
        baseUrl+`follow/${userId}`,
        {}, {
            withCredentials: true,
            headers: ApiKey,
        },
    )
}

export const getUnfollow = (userId) => {
    return axios.delete(
        baseUrl+`follow/${userId}`,
        {
            withCredentials: true,
            headers: ApiKey,
        },
    )
}
