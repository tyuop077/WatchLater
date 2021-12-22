import "./FormButton.scss";
import {FormEventHandler} from "react";

export const FormButton = (props: {value: string, disabled?: boolean, onClick?: FormEventHandler<HTMLInputElement>}) =>
    <div className="FormButtonLine">
        <input className="FormButton" type="submit" value={props.value} disabled={props.disabled} onClick={props.onClick} />
    </div>
