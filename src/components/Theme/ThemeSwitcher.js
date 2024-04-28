import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import style from "./ThemeSwitcher.module.css";

function ThemeSwitcher({ changeTheme }) {
    const theme = useContext(ThemeContext);
    console.log("theme", theme);
    // const changeThemeOnClick = () => {
    //     console.log(theme);
    //     changeTheme(theme === "light" ? "dark" : "light");
    // };
    const updateThemeOnChange = (e) => {
        console.log(e.target.value);
        theme.changeTheme(e.target.value);
    };
    let switcherStyle = {
        color:
            theme.color === "dark"
                ? "white"
                : theme.color === "light"
                ? "black"
                : "#6d28d9",
    };
    let btnBgColor = {
        backgroundColor:
            theme.color === "dark"
                ? "#1e293b"
                : theme.color === "light"
                ? "#cbd5e1"
                : "#f9a8d4",
    };
    return (
        // <div>
        //     {/* <button onClick={() => changeThemeOnClick()}>change theme</button> */}
        //     <select onChange={(e) => updateThemeOnChange(e)}>
        //         <option value="light">Light</option>
        //         <option value="dark">Dark</option>
        //         <option value="colorful">Colorful</option>
        //     </select>
        // </div>
        <fieldset style={switcherStyle} className={style.container}>
            <legend>Select theme</legend>
            <span>
                <input
                    type="radio"
                    name="theme"
                    id="light"
                    value="light"
                    checked={theme.color === "light"}
                    onChange={(e) => updateThemeOnChange(e)}
                    className={style.radioInput}
                />
                <label
                    htmlFor="light"
                    className={`${style.labelBtnLeft} ${
                        theme.color === "light" ? style.selected : ""
                    }`}
                    style={theme.color === "light" ? btnBgColor : {}}
                >
                    {/* light */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={style.icon}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                    </svg>
                </label>
            </span>
            <span>
                <input
                    type="radio"
                    name="theme"
                    id="dark"
                    value="dark"
                    checked={theme.color === "dark"}
                    onChange={(e) => updateThemeOnChange(e)}
                    className={style.radioInput}
                />
                <label
                    htmlFor="dark"
                    className={`${style.labelBtnMiddle} ${
                        theme.color === "dark" ? style.selected : ""
                    }`}
                    style={theme.color === "dark" ? btnBgColor : {}}
                >
                    {/* dark */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={style.icon}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                    </svg>
                </label>
            </span>
            <span>
                <input
                    type="radio"
                    name="theme"
                    id="colorful"
                    value="colorful"
                    checked={theme.color === "colorful"}
                    onChange={(e) => updateThemeOnChange(e)}
                    className={style.radioInput}
                />
                <label
                    htmlFor="colorful"
                    className={`${style.labelBtnRight} ${
                        theme.color === "colorful" ? style.selected : ""
                    }`}
                    style={theme.color === "colorful" ? btnBgColor : {}}
                >
                    {/* colorful */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={style.icon}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                        />
                    </svg>
                </label>
            </span>
        </fieldset>
    );
}

export default ThemeSwitcher;
