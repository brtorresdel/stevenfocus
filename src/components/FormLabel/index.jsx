export function FormLabel({ name, title, type, error, inputProps }) {
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