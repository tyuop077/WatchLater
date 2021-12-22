import "./AvatarButton.scss";
import {setAuthorized} from "@root/App";
import {wlAPI} from "@utils/API";
import React, {useEffect, useState} from "react";
import {Loader} from "@components/Loader/Loader";

const onLogout = () => {
    localStorage.removeItem("token");
    setAuthorized(false);
}

export const AvatarButton = () => {
    const [profileCache, setProfileCache] = useState<{username: string, avatar_url: string}>();
    useEffect(() => {
        wlAPI.profile(localStorage.getItem("token")!).then(res =>
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