import { Task } from "../Task";
import { useState, useRef, useEffect } from "react";
import "./todolist.styles.css";
import { useTasks } from "../../hooks/useTasks";
import { useModal } from "../../hooks/useModal";

export function ToDoList() {

    const [atFinalList, setAtFinalList] = useState(false);
    const scrollRef = useRef(null);
    const bottomRef = useRef(null);

    const { openAddTaskView } = useModal();

    const { tasks } = useTasks();


    useEffect(() => {
        // Configuramos o observador
        const observer = new IntersectionObserver(
            ([entry]) => {
                // entry.isIntersecting será true quando o fim da lista aparecer
                setAtFinalList(entry.isIntersecting);
            },
            {
                root: scrollRef.current, // O container da lista
                threshold: 0.1           // Dispara quando 10% do sentinela estiver visível
            }
        );

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => observer.disconnect();
    }, [tasks]); // Re-observa se a lista mudar

    return (
        <div className="mt-5 sm:mt-10 w-full lg:w-2/5">
            <div className="flex flex-row justify-between items-center w-full mb-1 sm:mb-3">
                <h2 className="todo-header font-title text-base-white text-lg sm:text-3xl lg:text-2xl xl:text-3xl">Lista de Tarefas</h2>
                <button
                    onClick={openAddTaskView}
                    className="todo-header font-title text-base-white text-4xl hover:scale-150 duration-200 ease-in-out cursor-pointer">+</button>
            </div>
            <div
                ref={scrollRef}
                className={`block flex-col justify-center items-center overflow-auto min-h-32 max-h-90 xl:max-h-145 gap-3 list-container ${!atFinalList && tasks.length > 3 ? 'overflow-mask' : ''}`}>
                {!tasks.length ?
                    <p className={`text-center w- font-body-light text-base-white text-lg lg:text-xl rounded-md`}>Nenhuma tarefa encontrada</p> :
                    tasks.map(task => <Task key={task.id} taskInfo={task} />)}
                <div ref={bottomRef} className="h-1 w-full"></div>
            </div>
        </div>
    )
}