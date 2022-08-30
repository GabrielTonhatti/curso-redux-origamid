import React from "react";
import styles from "./InputFile.module.css";

const InputFile = ({ label, value, name, onChange, accept }) => {
    return (
        <label className={`${styles.inputPersonalizado} ${styles.file}`}>
            <span className={styles.botaoSelecionar}>
                {value ? value : label}
            </span>
            <input
                type="file"
                name={name}
                id={name}
                className={`${styles.inputFile} ${styles.file}`}
                accept={accept}
                onChange={onChange}
            />
        </label>
    );
};

export default InputFile;
