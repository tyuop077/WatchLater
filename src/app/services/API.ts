import axios from "axios";
import {setUnauthorized} from "../stores/AuthState";
import {Store} from "../stores/GlobalStore";

const instance = axios.create({
    baseURL: "https://wl-api.tyuop.vercel.app/"
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
            // I can't use useAppDispatch on non-component functions
            Store.dispatch(setUnauthorized());
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