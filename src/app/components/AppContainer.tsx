import {Outlet} from "react-router-dom";
import "./AppContainer.scss";
import logo from "../assets/WLShort.svg";

export const AppContainer = () => <>
    <header>
        <div className="container" />
        <img src={logo} alt="Watch Later Logo"/>
        <div className="container" />
    </header>
    <Outlet />
</>