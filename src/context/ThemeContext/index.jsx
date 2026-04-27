/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "night");
    const [preferences, setPreferences] = useState(localStorage.getItem("preferences") ? JSON.parse(localStorage.getItem("preferences")) : { timer: { night: 1500, pink: 300, sunset: 900 }, sound: true, shortBreakCounter: 0, maxShortBreaks: 2 });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        localStorage.setItem("preferences", JSON.stringify(preferences));
    }, [theme, preferences]);

    const THEME_OPTIONS = ["night", "pink", "sunset"];

    const changeTheme = () => {

        let newTheme;

        switch (theme) {
            case "night":
                if (preferences.shortBreakCounter == preferences.maxShortBreaks) {
                    newTheme = "sunset";
                    setPreferences((prev) => ({ ...prev, shortBreakCounter: 0 }));
                } else {
                    newTheme = "pink";
                    setPreferences((prev) => ({ ...prev, shortBreakCounter: prev.shortBreakCounter + 1 }));
                }
                break;
            case "pink":
                newTheme = "night";
                break;
            case "sunset":
                newTheme = "night";
                break;
        }

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
                value: preferences.timer.night
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
                value: preferences.timer.pink
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
                value: preferences.timer.sunset
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