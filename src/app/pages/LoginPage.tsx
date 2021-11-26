import {TextInput} from "../components/TextInput";
import {AuthContainer} from "../components/AuthContainer";
import {FormButton} from "../components/FormButton";
import {FormEvent, useState} from "react";

export const LoginPage = () => {
    //const data = useState({email: "", password: ""});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            setEmail(target.value);
        } else {
            setPassword(target.value);
        }

    }
    const onSubmit = (event: FormEvent<HTMLInputElement>) => {
        console.log(event);
    }

    return (
        <AuthContainer>
            <TextInput type="email" placeholder="Адрес электронной почты" onChange={onChange} />
            <TextInput type="password" placeholder="Пароль" onChange={onChange} />
            <FormButton value="Войти" disabled={!email || !password} onClick={onSubmit} />
            <p>Еще не зарегистрированы? <a href="/">Регистрация</a></p>
        </AuthContainer>
    )
}
