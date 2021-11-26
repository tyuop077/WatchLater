import {TextInput} from "../components/TextInput";
import {AuthContainer} from "../components/AuthContainer";
import {FormButton} from "../components/FormButton";
import {FormEvent, useState} from "react";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
type TextField = {value: string, error?: boolean}

export const LoginPage = () => {
    //const data = useState({email: "", password: ""});
    const [email, setEmail] = useState<TextField>({value: ""});
    const [password, setPassword] = useState("");
    const [tooltip, setTooltip] = useState("");

    const onChange = (event: FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLTextAreaElement;
        /*switch (target.name) {
            case "email":
                setEmail(target.value);
                break
            case "password":
                setPassword(target.value);
        }*/
        if (target.type === "email") {
            setEmail({value: target.value});
        } else {
            setPassword(target.value);
        }
        setTooltip("")
    }
    const onSubmit = (event: FormEvent<HTMLInputElement>) => {
        if (!emailRegex.test(email.value)) {
            setTooltip("Введите действительный email");
            setEmail({value: "", error: true});
            return
        }
    }

    return (
        <AuthContainer>
            <TextInput type="email" placeholder="Адрес электронной почты" onChange={onChange} error={email.error} />
            <TextInput type="password" placeholder="Пароль" onChange={onChange} />
            {tooltip ? <p id="tooltip">{tooltip}</p> : <></>}
            <FormButton value="Войти" disabled={!email || !password} onClick={onSubmit} />
            <p>Еще не зарегистрированы? <a href="/">Регистрация</a></p>
        </AuthContainer>
    )
}
