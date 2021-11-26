import "./TextInput.scss";
import {FormEvent} from "react";
export const TextInput = (props: {type: string, placeholder: string, onChange?: (event: FormEvent<HTMLInputElement>) => void, id?: string}) =>
    <input className="TextInput" id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
