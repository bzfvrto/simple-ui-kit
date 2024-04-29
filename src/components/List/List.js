import React from "react";
import ListItem from "./ListItem";
import style from "./List.module.css";

function List({ title = null, items, decoration = false }) {
    let listItems = items.map((item) => {
        return <ListItem key={item.name} {...item} />;
    });
    let decorationStyle = {
        listStyleType: decoration === false ? "none" : decoration,
    };
    return (
        <>
            {title && <div className={style.title}>{title}</div>}
            <ul
                className={style.container}
                style={decoration === true ? "" : decorationStyle}
            >
                {listItems}
            </ul>
        </>
    );
}
// items must be: {
// name: 'name',
// value: 'value'
// }
export default List;
