import "./TextInput.scss";
export const TextInput = (props: {name: string, type: string, placeholder: string}) =>
    <input className="TextInput" type={props.type} placeholder={props.placeholder} />