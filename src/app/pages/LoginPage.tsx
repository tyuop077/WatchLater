import {TextInput} from "../components/TextInput";
import {AuthContainer} from "../components/AuthContainer";
import {FormButton} from "../components/FormButton";
import {FormEvent, useState} from "react";

export const LoginPage = () => {
    //const data = useState({email: "", password: ""});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event: FormEvent<HTMLInputElement>) => {
        switch ((event.target as HTMLTextAreaElement).name) {
            case "email":
                setEmail(event.target)
        }
    }
    const onSubmit = (event: FormEvent<HTMLInputElement>) => {
        console.log(event);
    }

    return (
        <AuthContainer>
            <TextInput name="email" type="email" placeholder="Адрес электронной почты" onChange={onChange} />
            <TextInput name="password" type="password" placeholder="Пароль" onChange={onChange} />
            <FormButton value="Войти" disabled={false} onClick={onSubmit} />
            <p>Еще не зарегистрированы? <a href="/">Регистрация</a></p>
        </AuthContainer>
    )
}
