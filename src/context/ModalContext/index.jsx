/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { Modal } from "../../components/Modal";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalView, setModalView] = useState(false);

    const [addTaskView, setAddTaskView] = useState(false);
    const [taskDescriptionView, setTaskDescriptionView] = useState(false);
    const [editTaskView, setEditTaskView] = useState(false);
    const [deleteTaskView, setDeleteTaskView] = useState(false);

    const [preferenceView, setPreferenceView] = useState(false);

    const [taskId, setTaskId] = useState(null);

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
    };

    const openAddTaskView = () => {
        setAddTaskView(true);
    }

    return (
        <ModalContext.Provider value={{ modalView, closeModalView, addTaskView, openAddTaskView }}>
            {children}
        </ModalContext.Provider>
    )
}