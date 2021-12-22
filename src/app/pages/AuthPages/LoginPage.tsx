import {TextInput} from "../../components/TextInput/TextInput";
import {AuthContainer} from "../../containers/AuthContainer/AuthContainer";
import {FormButton} from "../../components/FormButton/FormButton";
import {FormEvent, useState} from "react";
import {Loader} from "../../components/Loader/Loader";
import {wlAPI} from "../../services/API";
import {Link} from "react-router-dom";
import {setAuthorized} from "../../../App";
import {emailRegex, TextField} from "./Validators";

export const LoginPage = () => {
    const [email, setEmail] = useState<TextField>({value: ""});
    const [password, setPassword] = useState("");
    const [tooltip, setTooltip] = useState("");
    const [isLoading, setLoading] = useState(false);

    const onChange = (event: FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLTextAreaElement;
        if (target.type === "email") {
            setEmail({value: target.value});
        } else {
            setPassword(target.value);
        }
        setTooltip("")
    }
    const onSubmit = async (event: FormEvent<HTMLInputElement>) => {
        if (!emailRegex.test(email.value)) {
            setTooltip("Введите действительный email");
            setEmail({value: "", error: true});
            return
        }
        setLoading(true);
        const res = await wlAPI.login(email.value, password);
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
            <TextInput type="email" placeholder="Адрес электронной почты" onChange={onChange} error={email.error} />
            <TextInput type="password" placeholder="Пароль" onChange={onChange} />
            {tooltip ? <p id="tooltip">{tooltip}</p> : <></>}
            {isLoading ? <Loader/> : <FormButton value="Войти" disabled={!email.value || !password} onClick={onSubmit} />}
            <p>Еще не зарегистрированы? <Link to="/register">Регистрация</Link></p>
        </AuthContainer>
    )
}
