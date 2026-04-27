import { Task } from "../Task";
import "./todolist.styles.css";

export function ToDoList() {

    const tasks = [
        {
            id: "1",
            name: "Treinar com a Pérola",
            description: "Praticar esgrima e concentração na Arena das Nuvens.",
            createdAt: "2026-04-27T10:00:00Z",
            isCompleted: false
        },
        {
            id: "2",
            name: "Limpar o Quarto (Templo)",
            description: "Organizar a bagunça mágica que a Ametista deixou espalhada.",
            createdAt: "2026-04-27T11:30:00Z",
            isCompleted: true
        },
        {
            id: "3",
            name: "Comer no Big Donut",
            description: "Fazer uma pausa para um Gatinho Sorvete ou rosquinha.",
            createdAt: "2026-04-27T12:00:00Z",
            isCompleted: false
        },
        {
            id: "4",
            name: "Consertar a Van do Greg",
            description: "Ajudar o pai com os novos equipamentos de som.",
            createdAt: "2026-04-27T14:15:00Z",
            isCompleted: false
        },
        {
            id: "5",
            name: "Meditar com a Garnet",
            description: "Trabalhar no equilíbrio e na visão do futuro.",
            createdAt: "2026-04-27T15:45:00Z",
            isCompleted: false
        }
    ];

    return (
        <div className="mt-5 sm:mt-10 w-full lg:w-2/5">
            <div className="flex flex-row justify-between items-center w-full mb-1 sm:mb-3">
                <h2 className="todo-header font-title text-base-white text-lg sm:text-3xl lg:text-2xl xl:text-3xl">Lista de Tarefas</h2>
                <button className="todo-header font-title text-base-white text-4xl hover:scale-150 duration-200 ease-in-out cursor-pointer">+</button>
            </div>
            <div className="flex flex-col justify-center items-center overflow-x-scroll min-h-32">
                {!tasks.length ?
                    <p className={`text-center w- font-body-light text-base-white text-lg lg:text-xl rounded-md`}>Nenhuma tarefa encontrada</p> :
                    tasks.map(task => <Task taskInfo={task} />)}
            </div>
        </div>
    )
}