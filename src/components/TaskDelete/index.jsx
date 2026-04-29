import { useModal } from "../../hooks/useModal";
import { Trash2 } from "lucide-react";
import { useTasks } from "../../hooks/useTasks";

export function TaskDelete() {
    const { deleteTaskView, task, closeModalView } = useModal();
    const { removeTask } = useTasks();

    if (!deleteTaskView) return null;

    const handleDeleteTask = () => {
        removeTask(task.id);

        closeModalView();
    };

    return (
        <div>
            <h2 className="text-2xl">Excluir Tarefa</h2>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <div className="flex flex-col gap-10 text-center">
                <p className="text-2xl">Tem certeza que deseja excluir essa tarefa?</p>
            </div>
            <div className="w-full h-10 flex flex-row justify-evenly items-center mt-10">
                <button
                    className={`text-2xl bg-base-white/25 hover:bg-base-white/35 w-30 p-2 rounded-lg self-center flex flex-row items-center gap-2 cursor-pointer pl-3 pr-3`}
                    onClick={handleDeleteTask}>
                    <p className="text-2xl">Excluir</p>
                    <Trash2 className="w-10 h-10" />
                </button>
            </div>
        </div>
    )
}