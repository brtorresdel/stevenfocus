import { useContext } from "react";
import { TasksContext } from '../../context/TasksContext/index';

export function useTasks() {
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error("useTasks must be used within a TasksProvider");
    }

    return context;
}