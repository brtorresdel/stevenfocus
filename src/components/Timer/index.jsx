import "./timer.styles.css"

export function Timer() {
    const radius = 120;
    const circunference = 2 * Math.PI * radius;

    return (
        <>
            <div className="relative w-75 h-75 m-10">
                <svg className="w-75 h-75 transform -rotate-90" viewBox="0 0 256 256">
                    <circle cx="128" cy="128" r={radius} fill="transparent" stroke="var(--color-base-white)" strokeWidth="6" />
                    <circle cx="128" cy="128" r={radius} fill="transparent" stroke="var(--color-night-primary)" strokeWidth="12" strokeDasharray={circunference} strokeDashoffset={circunference * 0.5} />
                </svg>

                <div className="absolute text-center select-none left-0 top-1/2 transform -translate-y-1/2 w-full">
                    <h2 className="timer-title">Focus</h2>
                    <span className="timer-value">
                        25:00
                    </span>
                </div>
            </div>

            <button className="bg-night-primary/80 hover:bg-night-primary text-base-white font-body py-2 px-4 rounded cursor-pointer">
                Start
            </button>
        </>
    )
}