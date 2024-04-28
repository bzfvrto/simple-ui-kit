import React, { useContext } from "react";
import style from "./Footer.module.css";
import { ThemeContext } from "../Theme/ThemeContext";

function Footer({ children }) {
    const theme = useContext(ThemeContext);
    let borderStyle = {
        borderTop: `1px solid ${
            theme.color === "colorful" ? "#6d28d9" : "#e5e7eb"
        }`,
    };
    return (
        <div style={borderStyle} className={style.container}>
            {children}
        </div>
    );
}

export default Footer;
