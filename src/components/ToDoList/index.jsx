import "./todolist.styles.css";

export function ToDoList() {
    return (
        <div className="mt-5 sm:mt-10 w-full lg:w-2/5">
            <div className="flex flex-row justify-between items-center w-full">
                <h2 className="todo-header font-title text-base-white text-lg sm:text-3xl lg:text-2xl xl:text-3xl">Lista de Tarefas</h2>
                <button className="todo-header font-title text-base-white text-4xl hover:scale-150 duration-200 ease-in-out cursor-pointer">+</button>
            </div>
        </div>
    )
}