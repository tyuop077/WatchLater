import {FC} from "react";
import "./AuthContainer.scss";
import logo from "../assets/wl_full.svg";
export const AuthContainer: FC = ({children}) => (
    <div className="AuthPage">
        <form className="AuthContainer">
            <img src={logo} alt="Logo"/>
            {children}
        </form>
    </div>
)
