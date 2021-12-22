import "./Button.scss";
import {MouseEventHandler} from "react";

export const Button = (props: {id: string, text: string, toggled: boolean, image: string, onClick?: MouseEventHandler<HTMLButtonElement>}) => (
    <button className={props.toggled ? "btnActive" : "btn"} id={props.id} onClick={props.onClick} >
        <img src={props.image} alt={`${props.id}'s button icon`}/>
        {props.text}
    </button>
)