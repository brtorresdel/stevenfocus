import { useModal } from "../../hooks/useModal";
import { useTheme } from "../../hooks/useTheme";
import { Check, CheckCheck, Pen } from "lucide-react";
import { useTasks } from './../../hooks/useTasks/index';

export function Task({ taskInfo }) {

    const { theme, themeConfig } = useTheme();
    const { openTaskDescriptionView } = useModal();
    const { handleCompletedTask } = useTasks();

    return (

        <>
            <div className={`flex flex-row justify-start items-center gap-2 p-4 w-full h-10 md:h-13 ${themeConfig[theme].colors.btn} ${themeConfig[theme].colors.btnHover} border-base-white border rounded-lg text-base-white font-body-light ${taskInfo.isCompleted ? "line-through" : ""} mb-3`}>
                <button onClick={() => handleCompletedTask(taskInfo.id)} className="cursor-pointer">
                    <Check className={`hover:scale-140 transition duration-200 ${taskInfo.isCompleted ? "hidden" : ""}`} />
                    <CheckCheck className={`hover:scale-140 transition duration-200 ${taskInfo.isCompleted ? "" : "hidden"}`} />
                </button>
                <div onClick={() => openTaskDescriptionView(taskInfo)} className="grow">
                    <p className="sm:text-xl hover:underline cursor-pointer" >{taskInfo.name}</p>
                </div>
            </div>
        </>
    )
}