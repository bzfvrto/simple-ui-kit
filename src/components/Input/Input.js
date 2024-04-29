import React, { useContext } from "react";
import styles from "./Input.module.css";
import { ThemeContext } from "../Theme/ThemeContext";

function Input({ type = "text", label, placeholder }) {
    const theme = useContext(ThemeContext);
    let textColor = {
        color:
            theme.color === "dark"
                ? "white"
                : theme.color === "light"
                ? "black"
                : "#6d28d9",
        backgroundColor:
            theme.color === "light"
                ? "white"
                : theme.color === "dark"
                ? "#1e293b"
                : "#f59e0b",
    };
    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                style={textColor}
            />
        </div>
    );
}

export default Input;
