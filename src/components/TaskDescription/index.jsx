import { useModal } from "../../hooks/useModal"
import { Pen, Trash2 } from "lucide-react";

export function TaskDescription() {
    const { taskDescriptionView, task, openEditTaskView } = useModal();

    if (!taskDescriptionView) return null;

    return (
        <div>
            <h2 className="text-2xl">Informações da tarefa</h2>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <div className="flex flex-col gap-10">
                <div>
                    <h3>Nome</h3>
                    <p className="text-2xl">{task.name}</p>
                </div>

                <div>
                    <h3 >Descrição</h3>
                    <p className="text-2xl">{task.description ? task.description : "Sem descrição"}</p>
                </div>
            </div>
            <div className="w-full h-10 flex flex-row justify-evenly items-center mt-10">
                <button onClick={() => openEditTaskView(task)}>
                    <Pen className="w-10 h-10 cursor-pointer hover:scale-125 transition duration-100 ease-in-out" />
                </button>
                <button>
                    <Trash2 className="w-10 h-10 cursor-pointer hover:scale-125 transition duration-100 ease-in-out" />
                </button>
            </div>
        </div>
    )
}