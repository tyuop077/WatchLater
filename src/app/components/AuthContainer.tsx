import {FC} from "react";
import "./AuthContainer.scss";
import logo from "../assets/WLFull.svg";
export const AuthContainer: FC = ({children}) => (
    <div className="AuthPage">
        <form className="AuthContainer" onSubmit={e => e.preventDefault()}>
            <img src={logo} alt="Logo"/>
            {children}
        </form>
    </div>
)
