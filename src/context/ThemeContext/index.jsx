/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "night");

    useEffect(() => localStorage.setItem("theme", theme), [theme]);

    const THEME_OPTIONS = ["night", "pink", "sunset"];

    const changeTheme = (newTheme) => {
        if (!THEME_OPTIONS.includes(newTheme)) {
            throw new Error(`Invalid theme theme: ${newTheme}. Valid options are: ${THEME_OPTIONS.join(", ")}`);
        } else {
            setTheme(newTheme);
        }
    }

    if (!THEME_OPTIONS.includes(theme)) {
        throw new Error(`Invalid theme theme: ${theme}. Valid options are: ${THEME_OPTIONS.join(", ")}`);
    }


    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}