import React from "react";

function Title({ level, children }) {
    const TitleLevel = `h${level}`;
    return <TitleLevel>{children}</TitleLevel>;
}

export default Title;
