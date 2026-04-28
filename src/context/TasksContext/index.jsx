/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

export function TasksProvider({ children }) {

    const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        let lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
        setTasks(prev => [...prev, { id: lastId, ...newTask }]);
    }

    const editTask = (editedTask) => {
        setTasks(prev => prev.map(task => task.id == editedTask.id ? editedTask : task))
    }

    const removeTask = (taskId) => {
        setTasks(prev => prev.filter(task => task.id != taskId))
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
            {children}
        </TasksContext.Provider>
    )
}