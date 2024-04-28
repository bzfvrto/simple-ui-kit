import React, { useContext } from "react";
import style from "./Card.module.css";
import { hasNamedSlot } from "../../utils/namedSlot";
import { ThemeContext } from "../Theme/ThemeContext";

function Card({ elevated = false, width = null, children }) {
    const [title, childWithoutTitle] = hasNamedSlot("title", children);
    const [subtitle, childWithoutSubtitle] = hasNamedSlot(
        "subtitle",
        childWithoutTitle
    );
    console.log("title", title, subtitle, width);
    const theme = useContext(ThemeContext);
    return (
        <div
            className={`${style.container} ${
                elevated
                    ? theme.color === "light"
                        ? style.elevatedLight
                        : style.elevatedDark
                    : ""
            }`}
            style={width ? { width } : {}}
        >
            {(title || subtitle) && (
                <div className={style.cardHeader}>
                    {title && <div className={style.title}>{title}</div>}
                    {subtitle && (
                        <div className={style.subtitle}>{subtitle}</div>
                    )}
                </div>
            )}
            <div className={style.content}>{childWithoutSubtitle}</div>
        </div>
    );
}

export default Card;
