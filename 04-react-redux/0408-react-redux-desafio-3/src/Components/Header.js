import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/login";
import styles from "./Header.module.css";

const Header = () => {
    const { user, token } = useSelector((state) => state.login);
    const loading = user.loading || token.loading;
    const disptach = useDispatch();

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Mini Dogs</h1>
            <button
                onClick={() => disptach(userLogout())}
                className={`${styles.login} 
                    ${loading ? styles.loading : ""}
                    ${user.data ? styles.loaded : ""}`}
                aria-label="Logout"
            ></button>
        </header>
    );
};

export default Header;
