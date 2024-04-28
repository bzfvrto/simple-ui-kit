import React from "react";
import style from "./Main.module.css";

function Main({ textAlign = "left", children }) {
    const textAlignStyle = {
        textAlign: textAlign,
    };
    return (
        <main className={style.container}>
            <div className={style.innerContent} style={textAlignStyle}>
                {children}
            </div>
        </main>
    );
}

export default Main;
