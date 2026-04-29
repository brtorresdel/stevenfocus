import useSound from "use-sound";
import { useModal } from "../../hooks/useModal"
import { useTheme } from "../../hooks/useTheme";
import { X, Check } from "lucide-react";
import switchClick from "../../assets/sounds/switch_click.mp3";

export function Preferences() {
    const { preferenceView } = useModal();
    const { setSounds, themeConfig } = useTheme();
    const [playSwitch] = useSound(switchClick);

    if (!preferenceView) return null;

    const handleSoundController = () => {
        setSounds(!themeConfig.sounds);
        !themeConfig.sounds && playSwitch();
    }

    return (
        <div>
            <h2 className="text-2xl">Preferências</h2>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <div
                onClick={handleSoundController}
                className="flex flex-row gap-2 text-xl hover:underline hover:underline-offset-1 cursor-pointer">
                {themeConfig.sounds ? <Check /> : <X />} Sons de alerta
            </div>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <div>
                Timers
            </div>
        </div>
    )
}