import * as axios from "axios";


const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        "API-KEY":"b8164b60-5a15-4aa7-b434-635f58faebf6"
    }
})
export const UserApi={
    getUser(q,PageSize){
        return  instance.get(`users?page=${q}&count=${PageSize}`,{}).then(response=>{return response.data})
    },
    follow(userId){
        return instance.post(`follow/${userId}`, {}, {}).then(response=>{return response.data})
    },
    Unfollow(userId){
        return instance.delete(`follow/${userId}`, {}).then(response=>{return response.data})
    }
}
export const AuthApi={
    me(){
        return  instance.get(`auth/me`,{})
    }
}
export const ProfileApi={
    getProFile(userId){
        return instance.get(`profile/${userId}`,{})
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){

        return instance.put(`profile/status`,{status:status})
    }
}

