import {TextInput} from "./TextInput";
import {AuthContainer} from "./AuthContainer";
import {FormButton} from "./FormButton";

export const LoginForm = () => (
    <AuthContainer>
        <TextInput name="email" type="email" placeholder="Адрес электронной почты" />
        <TextInput name="password" type="password" placeholder="Пароль" />
        <FormButton value="Войти" disabled={true} />
        <p>Еще не зарегистрированы? <a href="/">Регистрация</a></p>
    </AuthContainer>
)