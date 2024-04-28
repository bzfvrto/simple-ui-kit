import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeDisplay() {
    const theme = useContext(ThemeContext);
    return <div>You are using theme [{theme.color}]</div>;
}

export default ThemeDisplay;
