import React from "react";
import { useNavigate } from "react-router-dom";
import { PHOTO_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import ButtonLoading from "../Forms/ButtonLoading";
import Input from "../Forms/Input";
import InputFile from "../Forms/InputFile";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import styles from "./UserPhotoPost.module.css";

const UserPhotoPost = () => {
    const nome = useForm();
    const peso = useForm("number");
    const idade = useForm("number");
    const [img, setImg] = React.useState({});
    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (data) navigate("/conta");
    }, [data, navigate]);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("img", img.raw);
        formData.append("nome", nome.value);
        formData.append("peso", peso.value);
        formData.append("idade", idade.value);

        const token = localStorage.getItem("token");
        const { url, options } = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
            name: target.files[0].name,
        });
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <Head title="Poste sua foto" />

            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome} />
                <Input label="Peso" type="number" name="peso" {...peso} />
                <Input label="Idade" type="number" name="idade" {...idade} />
                <InputFile
                    name="img"
                    id="img"
                    label="Selecione uma imagem"
                    accept="image/*"
                    onChange={handleImgChange}
                    value={img.name}
                />
                {loading ? <ButtonLoading /> : <Button>Enviar</Button>}
                <Error error={error} />
            </form>
            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url('${img.preview}')` }}
                    ></div>
                )}
            </div>
        </section>
    );
};

export default UserPhotoPost;
