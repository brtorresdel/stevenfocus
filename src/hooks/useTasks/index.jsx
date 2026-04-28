import { useEffect, useState } from "react";

export function useTasks() {
    const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    const addTask = (task) => {
        let lastId = tasks[tasks.length - 1].id;
        setTasks(prev => [...prev, { id: lastId + 1, ...task }]);
    }

    const editTask = (editedTask) => {
        setTasks(prev => prev.map(task => task.id == editedTask.id ? editedTask : task))
    }

    const removeTask = (taskId) => {
        setTasks(prev => prev.filter(task => task.id != taskId))
    }

    return { tasks, addTask, editTask, removeTask };
}