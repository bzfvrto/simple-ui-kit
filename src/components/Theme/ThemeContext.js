import React from "react";

export const ThemeContext = React.createContext({
    color: "light",
    changeTheme: (theme) => {
        console.log("change not implemented", theme);
    },
    fontSize: 15,
});

// export const ThemeContext = React.createContext(null);
