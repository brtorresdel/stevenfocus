import { useTheme } from "../../hooks/useTheme";
import { Check, Pen } from "lucide-react";

export function Task({ taskInfo }) {

    const { theme, themeConfig} = useTheme();

    return (
        <div className={`flex flex-row justify-between items-center p-4 w-full h-10 md:h-13 ${themeConfig[theme].colors.btn} ${themeConfig[theme].colors.btnHover} border-base-white border rounded-lg text-base-white font-body-light ${taskInfo.isCompleted ? "line-through" : ""} mb-3`}>
            <div className="flex flex-row gap-2">
                <Check />
                <p className="sm:text-xl">{taskInfo.name}</p>
            </div>
            <Pen className="hidden sm:block"/>
        </div>
    )
}