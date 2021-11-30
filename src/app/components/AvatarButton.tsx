import "./AvatarButton.scss";
import {setAuthorized} from "../../App";
import {wlAPI} from "../utils/wl_api";
import React, {useState} from "react";
import {Loader} from "./Loader";

const onLogout = () => {
    localStorage.removeItem("token");
    setAuthorized(false);
}

const fetchAvatar = async () => wlAPI.userProfile(localStorage.getItem("token"))

export const AvatarButton = () => {
    const [avatar, setAvatar] = useState<string | undefined>(undefined);
    if (avatar === undefined) fetchAvatar().then(url => url && setAvatar ? setAvatar(url) : "");
    console.log(avatar);
    return avatar ?
        <img className="avatarImage" alt="Profile avatar" src={avatar} onClick={onLogout} title="Click to logout" /> : <Loader />
}