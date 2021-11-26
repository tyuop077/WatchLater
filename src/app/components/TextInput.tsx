import "./TextInput.scss";
import {FormEvent} from "react";
export const TextInput = (props: {name: string, type: string, placeholder: string, onChange?: (event: FormEvent<HTMLInputElement>) => void}) =>
    <input className="TextInput" type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
