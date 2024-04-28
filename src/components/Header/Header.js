import React, { useContext } from "react";
import style from "./Header.module.css";
// import { ThemeContext } from "./contexts/ThemeContext";
// const theme = useContext(ThemeContext);

function Header({ children }) {
    return <div className={style.container}>{children}</div>;
}

export default Header;
