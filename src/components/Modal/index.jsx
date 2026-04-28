import { useTheme } from "../../hooks/useTheme"
import { X } from "lucide-react";

export function Modal({ children, modalView, closeModalView }) {

    const { theme, themeConfig } = useTheme();

    if (!modalView) return null;

    return (
        <div className={`fixed inset-0 z-40 bg-base-black/65 backdrop-blur-sm flex items-center justify-center`}>
            <div className={`relative w-[90%] max-w-lg h-auto p-6 rounded-2xl shadow-2xl text-base-white font-body border border-white/20 transform transition-all animate-modal-in`} style={{ backgroundColor: `${themeConfig[theme].colors.primary}` }}>
                <div className="w-full flex flex-row-reverse">
                    <button onClick={closeModalView} className="cursor-pointer">
                        <X />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}