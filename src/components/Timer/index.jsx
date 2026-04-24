import "./timer.styles.css"
import { useTheme } from "../../hooks/useTheme"

export function Timer() {
    const { theme } = useTheme();

    const radius = 120;
    const circunference = 2 * Math.PI * radius;

    return (
        <>
            <div className="relative w-75 h-75 m-10 md:w-120 md:h-120">
                <svg className="w-75 h-75 md:w-120 md:h-120 transform -rotate-90" viewBox="0 0 256 256">
                    <circle cx="128" cy="125" r={radius} fill="transparent" stroke="var(--color-base-white)" strokeWidth="6" />
                    <circle cx="128" cy="125" r={radius} fill="transparent" stroke={`var(--color-${theme}-primary)`} strokeWidth="12" strokeDasharray={circunference} strokeDashoffset={circunference * 0.5} />
                </svg>

                <div className="absolute text-center select-none left-0 top-1/2 transform -translate-y-1/2 w-full">
                    <h2 className="timer-title" style={{'color': `var(--color-${theme}-primary)`, 'text-shadow': `5px 5px 0  var(--color-${theme}-secondary)`}}>Focus</h2>
                    <span className="timer-value">
                        25:00
                    </span>
                </div>
            </div>

            <button className={`bg-${theme}-primary/80 hover:bg-${theme}-primary text-base-white font-body w-48 md:w-70 h-auto text-4xl md:text-6xl py-2 md:py-4 rounded cursor-pointer`}>
                Start
            </button>
        </>
    )
}