import {Outlet, useNavigate} from "react-router-dom";
import "./AppContainer.scss";
import logo from "../../assets/WLShort.svg";
import {Button} from "../../components/Button/Button";
import collectionIcon from "../../assets/Collection.svg";
import plusIcon from "../../assets/Plus.svg";
import searchIcon from "../../assets/Search.svg";
import {AvatarButton} from "../../components/AvatarButton/AvatarButton";

export const AppContainer = () => {
    const navigate = useNavigate();
    return <>
        <header>
            <div className="container">
                <Button id="collections" text="Коллекция" toggled={true} image={collectionIcon} onClick={() => navigate("/")}/>
                <Button id="add" text="Добавить" toggled={false} image={plusIcon}/>
            </div>
            <img src={logo} alt="Watch Later Logo"/>
            <div className="container">
                <Button id="search" text="Поиск" toggled={false} image={searchIcon}/>
                <AvatarButton />
            </div>
        </header>
        <div className="main">
            <div className="container">
                <Outlet />
            </div>
        </div>
    </>
}