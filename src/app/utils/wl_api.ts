import axios from "axios";

const instance = axios.create({
    baseURL: "https://wl.api.tyuop.tk/"
})

export class wlAPI {
    static token: null | string = null;
    static async login(login: string, password: string) {
        const res = await instance.post("login",{login, password});
        if (res.data.success && res.data.token) this.token = res.data.token;
        return res
    }
    static async profile() {
        const res = await instance.get("profile",{
            headers: {
                authorization: this.token ?? ""
            }
        })
        if (res.data.success === false) this.token = null;
        return res;
    }
}

instance.interceptors.response.use(res => res, err => {
    return (err.response.data.success === false) ? err.res : Promise.reject(err)
})

/*instance.interceptors.response.use(res => res, err => {
    const e = new Error("WL API Error");
    e.res! = err.response;
})

instance.interceptors.request.use(cfg => {
    cfg.headers!.Authorization = localStorage.getItem("token") ?? ""
})*/