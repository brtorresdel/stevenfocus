import "./timer.styles.css"
import { useTheme } from "../../hooks/useTheme"
import { useState, useEffect } from "react";

export function Timer() {
    const { theme, changeTheme } = useTheme();

    const radius = 120;
    const circunference = 2 * Math.PI * radius;
    const [isRunning, setIsRunning] = useState(false);
    const [counter, setCounter] = useState(null);
    const [timerStrokeOffset, setTimerStrokeOffset] = useState(circunference * 1);

    const timers = {
        night: {
            title: 'Focus',
            value: 10
        },
        pink: {
            title: 'Break',
            value: 10
        },
        sunset: {
            title: 'Break',
            value: 10
        }
    }

    const [currentTimer, setCurrentTimer] = useState(timers[theme].value);

    const handleTimer = () => {
        if (!isRunning) {
            setCounter(setInterval(() => {
                setCurrentTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    }
                    clearInterval(counter);
                    return 0;
                });
            }, 1000));
            setIsRunning(true);
        } else {
            clearInterval(counter);
            setIsRunning(false);
        }
    };

    useEffect(() => {

        const newStrokeOffset = circunference * (0 + (currentTimer / timers[theme].value));
        setTimerStrokeOffset(newStrokeOffset);

        if (currentTimer === 0) {
            clearInterval(counter);
            setIsRunning(false);

            if (theme === 'night') {
                changeTheme('pink');
                setCurrentTimer(timers['pink'].value);
            } else {
                changeTheme('night');
                setCurrentTimer(timers['night'].value);
            }
        }

    }, [currentTimer, theme, changeTheme, timers, counter, timerStrokeOffset]);

    return (
        <>
            <div className="relative w-75 h-75 md:w-120 md:h-120 lg:w-75 lg:h-75 xl:w-120 xl:h-120 m-10">
                <svg className="w-75 h-75 lg:w-75 lg:h-75 md:w-120 md:h-120 xl:w-120 xl:h-120 transform -rotate-90" viewBox="0 0 256 256">
                    <circle cx="128" cy="125" r={radius} fill="transparent" stroke="var(--color-base-white)" strokeWidth="6" />
                    <circle cx="128" cy="125" r={radius} fill="transparent" stroke={`var(--color-${theme}-primary)`} strokeWidth="12" strokeDasharray={circunference} strokeDashoffset={timerStrokeOffset} />
                </svg>

                <div className="absolute text-center select-none left-0 top-1/2 transform -translate-y-1/2 w-full">
                    <h2 className="timer-title" style={{ 'color': `var(--color-${theme}-primary)`, 'text-shadow': `5px 5px 0  var(--color-${theme}-secondary)` }}>{timers[theme].title}</h2>
                    <span className="timer-value">
                        {new Date(currentTimer * 1000).toLocaleString('pt-BR', { minute: '2-digit', second: '2-digit' })}
                    </span>
                </div>
            </div>

            <button className={`bg-${theme}-primary/80 hover:bg-${theme}-primary text-base-white font-body w-48 lg:w-48 md:w-70 xl:w-70 h-auto text-4xl lg:text-4xl md:text-6xl xl:text-6xl  py-2 lg:py-2 md:py-4 xl:py-4 rounded cursor-pointer`} onClick={handleTimer}>
                {isRunning ? 'Pausar' : 'Iniciar'}
            </button>
        </>
    )
}