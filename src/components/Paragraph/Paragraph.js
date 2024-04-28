import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

function Paragraph({ children }) {
    const theme = useContext(ThemeContext);
    let paragraphStyle = {
        color:
            theme.color === "dark"
                ? "white"
                : theme.color === "light"
                ? "black"
                : "#6d28d9",
        fontSize: theme.fontSize,
    };
    return <div style={paragraphStyle}>{children}</div>;
}

export default Paragraph;
