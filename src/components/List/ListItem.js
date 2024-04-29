import React from "react";
import style from "./ListItem.module.css";

function ListItem({ value, href = null }) {
    return (
        <li className={style.item}>
            {href ? <a href={href}>{value}</a> : value}
        </li>
    );
}

export default ListItem;
