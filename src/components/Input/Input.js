import React from "react";
import styles from "./Input.module.css";

function Input({ type = "text", label, placeholder }) {
    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
