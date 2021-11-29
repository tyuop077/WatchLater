import {TextInput} from "../components/TextInput";
import {AuthContainer} from "../components/AuthContainer";
import {FormButton} from "../components/FormButton";
import {FormEvent, useState} from "react";
import {emailRegex, TextField} from "../utils/constants";
import {Loader} from "../components/Loader";
import {wlAPI} from "../utils/wl_api";

export const LoginPage = () => {
    //const data = useState({email: "", password: ""});
    const [email, setEmail] = useState<TextField>({value: ""});
    const [password, setPassword] = useState("");
    const [tooltip, setTooltip] = useState("");
    const [isLoading, setLoading] = useState(false);

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
        } else {
            setTooltip(res.data.message);
        }
    }

    return (
        <AuthContainer>
            <TextInput type="email" placeholder="Адрес электронной почты" onChange={onChange} error={email.error} />
            <TextInput type="password" placeholder="Пароль" onChange={onChange} />
            {tooltip ? <p id="tooltip">{tooltip}</p> : <></>}
            {isLoading ? <Loader/> : <FormButton value="Войти" disabled={!email || !password} onClick={onSubmit} />}
            <p>Еще не зарегистрированы? <a href="/">Регистрация</a></p>
        </AuthContainer>
    )
}
