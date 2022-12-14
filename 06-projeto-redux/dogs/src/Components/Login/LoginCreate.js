import React from "react";
import { useDispatch } from "react-redux";
import { USER_POST } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { userLogin } from "../../store/user";
import Button from "../Forms/Button";
import ButtonLoading from "../Forms/ButtonLoading";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginCreate = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm();

    const dispatch = useDispatch();
    const { loading, error, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const { response } = await request(url, options);
        if (response.ok)
            dispatch(
                userLogin({
                    username: username.value,
                    password: password.value,
                })
            );
    }

    return (
        <section className="animeLeft">
            <Head title="Crie sua conta" />
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input label="Email" type="email" name="email" {...email} />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? <ButtonLoading /> : <Button>Cadastrar</Button>}
                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginCreate;
