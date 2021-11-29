import axios from "axios";

const instance = axios.create({
    baseURL: "https://wl.api.tyuop.tk/"
})

export class wlAPI {
    static login(login: string, password: string) {
        return instance.post("login",{login, password});
    }
    static profile(token: string) {
        return instance.get("profile",{
            headers: {
                authorization: token
            }
        })
    }
}

instance.interceptors.response.use(res => res, err => {
    return (err.response?.data?.success === false) ? err.response : Promise.reject(err)
})