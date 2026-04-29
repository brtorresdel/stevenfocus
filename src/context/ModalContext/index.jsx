/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { Modal } from "../../components/Modal";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalView, setModalView] = useState(false);

    const [addTaskView, setAddTaskView] = useState(false);
    const [taskDescriptionView, setTaskDescriptionView] = useState(true);
    const [editTaskView, setEditTaskView] = useState(false);
    const [deleteTaskView, setDeleteTaskView] = useState(false);

    const [preferenceView, setPreferenceView] = useState(false);

    const [task, setTask] = useState(null);

    useEffect(() => {
        if (addTaskView || taskDescriptionView || editTaskView || deleteTaskView) setModalView(true);
    }, [addTaskView, taskDescriptionView, editTaskView, deleteTaskView]);

    const closeModalView = () => {
        setModalView(false);
        setAddTaskView(false);
        setTaskDescriptionView(false);
        setEditTaskView(false);
        setDeleteTaskView(false);
        setPreferenceView(false);
        setTask(null);
    };

    const openAddTaskView = () => {
        setAddTaskView(true);
    }

    const openTaskDescriptionView = (task) => {
        setTask(task);
        setTaskDescriptionView(true);
    }

    return (
        <ModalContext.Provider value={{ modalView, closeModalView, addTaskView, openAddTaskView, task, taskDescriptionView, openTaskDescriptionView }}>
            {children}
        </ModalContext.Provider>
    )
}