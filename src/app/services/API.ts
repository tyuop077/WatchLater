import axios from "axios";
import {setAuthorized} from "../../App";

const instance = axios.create({
    baseURL: "https://wl.api.tyuop.tk/"
})

export class API {
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

    static async collections() {
        return instance.get("collections")
    }
    static async movie(id: number) {
        return instance.get(`movies/${id}`)
    }
}

instance.interceptors.response.use(res => res, err => {
    return (err.response?.data?.success === false) ? err.response : Promise.reject(err)
})