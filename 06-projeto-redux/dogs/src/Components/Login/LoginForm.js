import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { userLogin } from "../../store/user";
import Button from "../Forms/Button";
import stylesBtn from "../Forms/Button.module.css";
import ButtonLoading from "../Forms/ButtonLoading";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state);
    const loading = token.loading || user.loading;
    const error = token.error || user.error;

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            dispatch(
                userLogin({
                    username: username.value,
                    password: password.value,
                })
            );
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Login" />
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? <ButtonLoading /> : <Button>Entrar</Button>}
                <Error error={error && "Dados incorretos."} />
            </form>
            <Link className={styles.perdeu} to="/login/perdeu">
                Perdeu a Senha?
            </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/criar">
                    Cadastro
                </Link>
            </div>
        </section>
    );
};

export default LoginForm;
