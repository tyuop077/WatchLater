import {TextInput} from "../components/TextInput";
import {AuthContainer} from "../components/AuthContainer";
import {FormButton} from "../components/FormButton";
import {FormEvent, useState} from "react";
import {emailRegex, TextField} from "../utils/constants";
import {Loader} from "../components/Loader";
import {wlAPI} from "../utils/wl_api";
import {Link} from "react-router-dom";
import {setAuthorized} from "../../App";

export const RegisterPage = () => {
    const [email, setEmail] = useState<TextField>({value: ""});
    const [password, setPassword] = useState<TextField>({value: ""});
    const [password2, setPassword2] = useState<TextField>({value: ""});
    const [tooltip, setTooltip] = useState("");
    const [isLoading, setLoading] = useState(false);

    const onChange = (event: FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLTextAreaElement;
        setTooltip("");
        switch (target.id) {
            case "email":
                setEmail({value: target.value});
                break
            case "password":
                setPassword({value: target.value});
                setPassword2({value: password2.value});
                break
            case "password_repeat":
                if (target.value === password.value) {
                    setPassword({value: password.value});
                    setPassword2({value: target.value});
                } else {
                    setTooltip("Пароли не совпадают");
                    setPassword({value: password.value, error: true});
                    setPassword2({value: target.value, error: true});
                }
                break
        }
    }
    const onSubmit = async (event: FormEvent<HTMLInputElement>) => {
        if (!emailRegex.test(email.value)) {
            setTooltip("Введите действительный email");
            setEmail({value: "", error: true});
            return
        }
        if (password2.value !== password.value) {
            setTooltip("Пароли не совпадают");
            return
        }
        setLoading(true);
        const res = await wlAPI.login(email.value, password.value);
        console.log(res.data);
        setLoading(false);
        if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            setAuthorized(true);
        } else {
            setTooltip(res.data.message);
        }
    }

    return (
        <AuthContainer>
            <TextInput type="email" placeholder="Адрес электронной почты" onChange={onChange} id="email" error={email.error} />
            <TextInput type="password" placeholder="Пароль" onChange={onChange} id="password" error={password.error} />
            <TextInput type="password" placeholder="Повторите пароль" onChange={onChange} id="password_repeat" error={password2.error} />
            {tooltip ? <p id="tooltip">{tooltip}</p> : <></>}
            {isLoading ? <Loader/> : <FormButton value="Регистрация" disabled={!email.value || !password.value || !password2.value || password.value !== password2.value} onClick={onSubmit} />}
            <p>Есть логин для входа? <Link to="/login">Войти</Link></p>
        </AuthContainer>
    )
}