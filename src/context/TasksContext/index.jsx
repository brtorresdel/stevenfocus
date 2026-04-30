/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

export function TasksProvider({ children }) {

    const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
    const [toDoListExibition, setToDoListExibition] = useState(false);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        setTasks(prev => [...prev, { id: id, ...newTask }]);
    }

    const editTask = (editedTask) => {
        setTasks(prev => prev.map(task => task.id == editedTask.id ? editedTask : task))
    }

    const removeTask = (taskId) => {
        setTasks(prev => prev.filter(task => task.id != taskId))
    }

    const handleCompletedTask = (taskId) => {
        setTasks(prev => prev.map(task => task.id == taskId ? { ...task, isCompleted: !task.isCompleted } : task))
    }

    const handleToDoListExibition = () => {
        setToDoListExibition(!toDoListExibition);
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask, editTask, removeTask, handleCompletedTask, toDoListExibition, handleToDoListExibition }}>
            {children}
        </TasksContext.Provider>
    )
}