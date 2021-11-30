import axios from "axios";
import {setAuthorized} from "../../App";

const instance = axios.create({
    baseURL: "https://wl.api.tyuop.tk/"
})

export class wlAPI {
    static login(login: string, password: string) {
        return instance.post("login",{login, password});
    }
    static async profile(token: string) {
        const res = await instance.get("profile",{
            headers: {
                authorization: token
            }
        })
        if (res.data.success === false) {
            console.log(res.data);
            localStorage.removeItem("token");
            alert(res.data.message);
            setAuthorized(false);
        }
        return res
    }
    private static avatar: string;
    private static avatar_promise: Promise<string>;
    static userProfile(token: string | null) {
        if (this.avatar) return this.avatar;
        return this.avatar_promise ?? (this.avatar_promise = this.userProfileForced(token))
    }
    private static async userProfileForced(token: string | null) {
        return this.avatar = (await this.profile(token ?? "")).data.avatar_url;
    }
}

instance.interceptors.response.use(res => res, err => {
    return (err.response?.data?.success === false) ? err.response : Promise.reject(err)
})