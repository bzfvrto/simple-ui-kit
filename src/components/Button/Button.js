import React, { useContext } from "react";
import styles from "./Button.module.css";
import { ThemeContext } from "../Theme/ThemeContext";

function Button(props) {
    const theme = useContext(ThemeContext);
    let btnStyle = {
        color:
            theme.color === "dark"
                ? "white"
                : theme.color === "light"
                ? "black"
                : "#6d28d9",
    };
    return (
        <button className={styles.btn} {...props} style={btnStyle}>
            {props.children}
        </button>
    );
}

export default Button;
