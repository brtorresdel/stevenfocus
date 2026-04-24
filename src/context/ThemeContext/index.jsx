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

    const themeConfig = {
        night: {
            timer: {
                title: 'Focus',
                value: 1500
            },
            colors: {
                primary: "var(--color-night-primary)",
                secondary: "var(--color-night-secondary)",
                btn: "bg-night-primary/80",
                btnHover: "hover:bg-night-primary"
            }
        },
        pink: {
            timer: {
                title: 'Break',
                value: 300
            },
            colors: {
                primary: "var(--color-pink-primary)",
                secondary: "var(--color-pink-secondary)",
                btn: "bg-pink-secondary/80",
                btnHover: "hover:bg-pink-secondary"
            }
        },
        sunset: {
            timer: {
                title: 'Break',
                value: 900
            },
            colors: {
                primary: "var(--color-sunset-primary)",
                secondary: "var(--color-sunset-secondary)",
                btn: "bg-sunset-primary/80",
                btnHover: "hover:bg-sunset-primary"
            }
        }
    }


    return (
        <ThemeContext.Provider value={{ theme, changeTheme, themeConfig }}>
            {children}
        </ThemeContext.Provider>
    );
}