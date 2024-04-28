import React from "react";
import style from "./ListItem.module.css";

function ListItem({ value }) {
    return <li className={style.item}>{value}</li>;
}

export default ListItem;
