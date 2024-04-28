import React from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeProvider({ value, children }) {
    console.log("value", value);
    return (
        <ThemeContext.Provider value={value}>
            <div>{children}</div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
