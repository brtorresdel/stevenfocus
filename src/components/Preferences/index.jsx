import { useModal } from "../../hooks/useModal"

export function Preferences() {
    const { preferenceView } = useModal();

    if (!preferenceView) return null;

    return (
        <div>
            <h2 className="text-2xl">Preferências</h2>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <div>
                Som
            </div>
            <hr className="border-dashed text-base-white mt-5 mb-5" />
            <div>
                Timers
            </div>
        </div>
    )
}