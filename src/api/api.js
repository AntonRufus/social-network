import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '560034f2-b9fd-416c-8194-fc6dc12075d4'}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data;
                }
            )
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method.Please use profileApi object//api.js line 27');
        return profileAPI.getProfile(userId);
        // return instance.get(`profile/${userId}`)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
        // return instance.get(`profile/${userId}`)
        // return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`);
    },

    getStatus(userId) {
        // return instance.get(`profile/status/${userId}`)
        // return instance.get(`status/${userId}`)
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        // return instance.put(`profile/status/${status}`)
        // return instance.put(`profile/status/` + {status})
        return instance.put(`profile/status/`, {status: status});
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo/`, formData, {'Context-Type': 'multipart/form-data'});
    },

    saveProfile(profile) {
        return instance.put(`profile/`, profile);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me/`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login/`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login/`);
    },
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
};
