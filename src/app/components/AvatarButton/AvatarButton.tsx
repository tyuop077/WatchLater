import "./AvatarButton.scss";
import {API} from "../../services/API";
import React, {useEffect, useState} from "react";
import {Loader} from "../Loader/Loader";
import {setUnauthorized} from "../../stores/AuthState";
import {Store} from "../../stores/GlobalStore";

const onLogout = () => {
    localStorage.removeItem("token");
    Store.dispatch(setUnauthorized());
}

export const AvatarButton = () => {
    const [profileCache, setProfileCache] = useState<{username: string, avatar_url: string}>();
    useEffect(() => {
        API.profile(localStorage.getItem("token")!).then(res =>
            setProfileCache({username: res.data.username, avatar_url: res.data.avatar_url})
        )
    }, [])
    return profileCache ?
        <
            img className="avatarImage"
                alt="Profile avatar"
                src={profileCache.avatar_url}
                onClick={onLogout}
                title={`${profileCache.username}\nНажмите, чтобы выйти`}
        />
            :
        <Loader />
}