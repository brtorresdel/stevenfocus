import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useTasks } from "../../hooks/useTasks";

export function ToDoListExibition() {
    
    const { theme, themeConfig } = useTheme();
    const {toDoListExibition, handleToDoListExibition} = useTasks();

    return (
        <div className="fixed left-10 bottom-10 hidden lg:flex flex-row items-center gap-3 text-base-white text-2xl font-body">
            <button 
            onClick={handleToDoListExibition}
            className="bg-base-white w-20 h-12 rounded-full opacity-65 flex items-center pl-1 pr-1">
                <div className={`${themeConfig[theme].colors.btn} ${themeConfig[theme].colors.btnHover} w-10 h-10 rounded-full ${toDoListExibition ? "transform translate-x-8" : ""}`} />
            </button>
            <p>Exibir lista de tarefas</p>
        </div>
    )
}