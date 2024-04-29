import React, { useContext } from "react";
import style from "./Footer.module.css";
import { ThemeContext } from "../Theme/ThemeContext";
import { hasNamedSlot } from "../../utils/namedSlot";

function Footer({ children }) {
    const [closingLine, rest] = hasNamedSlot("closingLine", children);
    const theme = useContext(ThemeContext);
    console.log("here", closingLine, rest);
    let borderStyle = {
        borderTop: `1px solid ${
            theme.color === "colorful" ? "#6d28d9" : "#e5e7eb"
        }`,
    };
    return (
        <div style={borderStyle} className={style.container}>
            <div className={style.footerContent}>{rest}</div>
            {closingLine && (
                <div style={borderStyle} className={style.closingLine}>
                    {closingLine}
                </div>
            )}
        </div>
    );
}

export default Footer;
