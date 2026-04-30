import useSound from "use-sound";
import { useModal } from "../../hooks/useModal"
import { useTheme } from "../../hooks/useTheme";
import { X, Check, Save, Circle, CircleCheck } from "lucide-react";
import switchClick from "../../assets/sounds/switch_click.mp3";
import { FormLabel } from "../FormLabel";
import { useState } from "react";

export function Preferences() {
    const { preferenceView } = useModal();
    const { setSounds, themeConfig } = useTheme();
    const [playSwitch] = useSound(switchClick);

    const [focusValue, setFocusValue] = useState(themeConfig.night.timer.value / 60);
    const [shortBreakValue, setShortBreakValue] = useState(themeConfig.pink.timer.value / 60);
    const [longBreakValue, setLongBreakValue] = useState(themeConfig.sunset.timer.value / 60);

    const [focusChange, setFocusChange] = useState(false);
    const [shortBreakChange, setBreakChange] = useState(false);
    const [longBreakChange, setLongBreakChange] = useState(false);

    const [focusValid, setFocusValid] = useState(true);
    const [shortBreakValid, setShortBreakValid] = useState(true);
    const [longBreakValid, setLongBreakValid] = useState(true);

    if (!preferenceView) return null;

    const handleSoundController = () => {
        setSounds(!themeConfig.sounds);
        !themeConfig.sounds && playSwitch();
    }

    const focusInputValidation = (value) => {
        setFocusValue(value);

        if (!value || parseInt(value) > 60 || parseInt(value) < 1) {
            return setFocusValid(false);
        }

        setFocusValid(true);
    }

    const shortBreakInputValidation = (value) => {
        setShortBreakValue(value);

        if (!value || parseInt(value) > 60 || parseInt(value) < 1) {
            return setShortBreakValid(false);
        }

        setShortBreakValid(true);
    }

    const longBreakInputValidation = (value) => {
        setLongBreakValue(value);

        if (!value || parseInt(value) > 60 || parseInt(value) < 1) {
            return setLongBreakValid(false);
        }

        setLongBreakValid(true);
    }



    return (
        <div>
            <h2 className="text-2xl">Preferências</h2>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <div
                onClick={handleSoundController}
                className="flex flex-row items-center gap-2 text-2xl hover:underline hover:underline-offset-1 cursor-pointer">
                {themeConfig.sounds ? <CircleCheck /> : <Circle />} Sons de alerta
            </div>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <div className="flex flex-col gap-5">
                <h3 className="text-2xl">Timers:</h3>
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flew-row gap-2 items-center grow">
                        <h4 className="text-xl">Focus (em minutos, max: 60, min: 1):</h4>
                        <input
                            className={`flex grow text-xl bg-base-white/25 rounded-lg p-2 focus:border focus:border-base-white/65 ${!focusValid && "border-red-500 border"}`}
                            type="text"
                            name="focus-timer"
                            value={focusValue}
                            onChange={(e) => { focusInputValidation(e.target.value) }} />
                    </div>
                    <button onClick={() => console.log(focusValue)}>
                        {focusChange ? <Check className="ml-2" /> : <Save className="ml-2" />}
                    </button>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flew-row gap-2 items-center grow">
                        <h4 className="text-xl">Short break (em minutos, max: 60, min: 1):</h4>
                        <input className={`flex grow text-xl bg-base-white/25 rounded-lg p-2 focus:border focus:border-base-white/65 ${!shortBreakValid && "border-red-500 border"}`} type="text" name="focus-timer" value={shortBreakValue} onChange={(e) => { shortBreakInputValidation(e.target.value) }} />
                    </div>
                    <button>
                        {shortBreakChange ? <Check className="ml-2" /> : <Save className="ml-2" />}
                    </button>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flew-row gap-2 items-center grow">
                        <h4 className="text-xl">Long break (em minutos, max: 60, min: 1):</h4>
                        <input className={`flex grow text-xl bg-base-white/25 rounded-lg p-2 focus:border focus:border-base-white/65 ${!longBreakValid && "border-red-500 border"}`} type="text" name="focus-timer" value={longBreakValue} onChange={(e) => { longBreakInputValidation(e.target.value) }} />
                    </div>
                    <button>
                        {longBreakChange ? <Check className="ml-2" /> : <Save className="ml-2" />}
                    </button>
                </div>
            </div>
        </div>
    )
}