import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, setModalPhoto }) => {
    const { loading, error, data } = useSelector((state) => state.photo);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPhoto(photo.id));
    }, [dispatch, photo]);

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            setModalPhoto(null);
        }
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error />}
            {loading && <Loading />}
            {data && <PhotoContent />}
        </div>
    );
};

export default FeedModal;
