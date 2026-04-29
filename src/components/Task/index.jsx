import { useModal } from "../../hooks/useModal";
import { useTheme } from "../../hooks/useTheme";
import { Check, CheckCheck, Pen } from "lucide-react";

export function Task({ taskInfo }) {

    const { theme, themeConfig } = useTheme();
    const { openTaskDescriptionView } = useModal();

    return (
        <button className={`flex flex-row justify-between items-center p-4 w-full h-10 md:h-13 ${themeConfig[theme].colors.btn} ${themeConfig[theme].colors.btnHover} border-base-white border rounded-lg text-base-white font-body-light ${taskInfo.isCompleted ? "line-through" : ""} mb-3 cursor-pointer`}
            onClick={() => openTaskDescriptionView(taskInfo)}>
            <div className="flex flex-row gap-2">
                <Check className={`hover:scale-140 transition duration-200 ${taskInfo.isCompleted ? "hidden" : ""}`} />
                <CheckCheck className={`hover:scale-140 transition duration-200 ${taskInfo.isCompleted ? "" : "hidden"}`} />
                <p className="sm:text-xl">{taskInfo.name}</p>
            </div>
        </button>
    )
}