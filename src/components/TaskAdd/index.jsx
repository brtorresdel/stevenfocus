import { useForm } from "react-hook-form";
import { useTasks } from "../../hooks/useTasks";

export function TaskAdd({ active, close }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { addTask } = useTasks();

    const onSubmit = (data) => {
        console.log(data);

        addTask({
            name: data.taskName,
            description: data.taskDescription,
            createdAt: new Date(),
            isCompleted: false
        })

        reset();
        close();
    }

    if (!active) return null;

    return (
        <>
            <h2 className="text-2xl">Adicionar Tarefa</h2>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full justify-center">

                <FormLabel name="taskName" title="Nome da tarefa" type="text" error={errors.taskName && <span>{errors.taskName.message}</span>} inputProps={{ ...register("taskName", { required: "<-- O nome da tarefa é obrigatório!" }) }} />

                <FormLabel name="taskDescription" title="Descrição da tarefa" type="textarea" inputProps={{ ...register("taskDescription") }} />

                <button type="submit" className="text-2xl bg-base-white/25 hover:bg-base-white/35 w-30 p-2 rounded-lg self-center">Salvar</button>
            </form>
        </>
    )
}

function FormLabel({ name, title, type, error, inputProps }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-5 justify-start items-center">
                <label htmlFor={name} className="text-xl">{title}</label> {error}
            </div>
            {type != "textarea" ?
                <input type={type} id={name} placeholder={title} {...inputProps} className="bg-base-white/25 rounded-lg p-2 focus:border focus:border-base-white/65" /> :
                <textarea id={name} placeholder={title} {...inputProps} className="bg-base-white/25 rounded-lg p-2" />}
        </div>
    )
}