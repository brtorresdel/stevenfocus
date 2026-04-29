import { useModal } from "../../hooks/useModal"
import { useForm } from "react-hook-form";
import { useTasks } from "../../hooks/useTasks";
import { FormLabel } from "../FormLabel";
import { useEffect } from "react";

export function TaskEdit() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { editTask } = useTasks();
    const { editTaskView, task, closeModalView } = useModal();


    const onSubmit = (data) => {
        editTask({
            id: task.id,
            name: data.taskName,
            description: data.taskDescription,
            createdAt: task.createdAt,
            isCompleted: task.isCompleted
        })

        reset();
        closeModalView();
    }

    useEffect(() => {
        if (task) {
            reset({
                taskName: task.name,
                taskDescription: task.description
            })
        }
    }, [task, reset]);

    if (!editTaskView) return null;

    return (
        <>
            <h2 className="text-2xl">Editar Tarefa</h2>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full justify-center">

                <FormLabel name="taskName" title="Nome da tarefa" type="text" error={errors.taskName && <span>{errors.taskName.message}</span>} inputProps={{ ...register("taskName", { required: "<-- O nome da tarefa é obrigatório!" }) }} />

                <FormLabel name="taskDescription" title="Descrição da tarefa" type="textarea" inputProps={{ ...register("taskDescription") }} />

                <button type="submit" className="text-2xl bg-base-white/25 hover:bg-base-white/35 w-30 p-2 rounded-lg self-center">Salvar</button>
            </form>
        </>
    )
}