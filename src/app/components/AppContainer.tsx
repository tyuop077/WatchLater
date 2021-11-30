import {Outlet} from "react-router-dom";
import "./AppContainer.scss";
import logo from "../assets/WLShort.svg";
import {Button} from "./Button";
import collectionIcon from "../assets/Collection.svg";
import plusIcon from "../assets/Plus.svg";
import searchIcon from "../assets/Search.svg";
import {AvatarButton} from "./AvatarButton";

export const AppContainer = () => <>
    <header>
        <div className="container">
            <Button id="collections" text="Коллекция" toggled={true} image={collectionIcon}/>
            <Button id="add" text="Добавить" toggled={false} image={plusIcon}/>
        </div>
        <img src={logo} alt="Watch Later Logo"/>
        <div className="container">
            <Button id="search" text="Поиск" toggled={false} image={searchIcon}/>
            <AvatarButton />
        </div>
    </header>
    <Outlet />
</>