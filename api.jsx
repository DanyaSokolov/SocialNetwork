import React from "react";
import * as axios from "axios";

var instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'api-key': 'b4327b83-cacb-403b-bfc5-b486cfd0f26d'
    }
})

export var usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data
        })
    },
    getUsers_changed(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`
        ).then(response => {
            return response.data
        })
    },
    follow(idUser) {
        return instance.post(`follow/${idUser}`)
    },
    unfollow(idUser) {
        return instance.delete(`follow/${idUser}`)
    }
}

export var profileAPI = {
    getProfile(params) {
        return instance.get(`profile/` + params)
    },
    getMyProfile(params) {
        return instance.get(`profile/` + params)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    },
    putPhoto(file) {
        var formData = new FormData();
        formData.append("image", file)
        return instance.put('profile/photo', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export var authAPI = {
    authMe() {
        return instance.get("auth/me")
    },
    logIn(email, password, rememberMe, captcha) {
        return instance.post("auth/login", {email, password, rememberMe, captcha})
    },
    logOut() {
        return instance.delete("auth/login")
    },
    getCaptcha() {
        return instance.get("security/get-captcha-url")
    }
}




