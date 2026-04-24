import "./timer.styles.css"

export function Timer() {
    return (
        <>
            <div className="relative border-base-white border-6 rounded-full w-75 h-75 flex flex-col font-title items-center justify-center m-10">
                <div className="timer-title">
                    FOCUS
                </div>
                <div className="timer-value">
                    25:00
                </div>
            </div>
            
        </>
    )
}