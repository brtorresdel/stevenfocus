import { useState } from "react";
import logoNight from "../../assets/logo/night.png";
import logoPink from "../../assets/logo/pink.png";
import logoSunset from "../../assets/logo/sunset.png";
import { useTheme } from "../../hooks/useTheme";
import { EllipsisVertical } from "lucide-react";
import { useModal } from './../../hooks/useModal/index';

export function Header() {
    const { theme, themeConfig } = useTheme();
    const { openPreferenceView, openAboutView } = useModal();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const handlePreferencesClick = () => {
        openPreferenceView();
        setMenuOpen(!menuOpen);
    }

    const handleAboutClick = () => {
        openAboutView();
        setMenuOpen(!menuOpen);
    }

    const logos = {
        night: { logo: logoNight, alt: "Night Logo" },
        pink: { logo: logoPink, alt: "Pink Logo" },
        sunset: { logo: logoSunset, alt: "Sunset Logo" }
    }

    const logoSrc = logos[theme] || logos.night;

    return (
        <header className="relative z-10 top-10 left-0 w-full p-4 flex justify-around lg:justify-between items-center lg:pl-35 lg:pr-35">
            <img
                src={logoSrc.logo}
                alt={logoSrc.alt}
                className="h-auto w-40 sm:w-60 lg:w-72 xl:w-80 transition duration-200 ease-in-out hover:scale-110 cursor-pointer"
            />
            <div className="relative">
                <button 
                onClick={handleMenuOpen}
                className={`text-base-white ${themeConfig[theme].colors.btn} ${themeConfig[theme].colors.btnHover} w-10 h-10 md:w-15 md:h-15 xl:w-20 xl:h-20 flex justify-center items-center rounded-full cursor-pointer`}>
                    <EllipsisVertical className="w-7 h-7 md:w-10 md:h-10 xl:w-12 xl:h-12" />
                </button>
                <div className={`${menuOpen ? "absolute" : "hidden"} right-0 ${themeConfig[theme].colors.btn} p-4 flex flex-col gap-4 mt-2 rounded-lg font-body text-base-white text-2xl`}>
                    <button onClick={handlePreferencesClick} className={`${themeConfig[theme].colors.btnHover} pl-4 pr-4 pt-2 pb-2 rounded-lg cursor-pointer`}>Preferências</button>
                    <button onClick={handleAboutClick} className={`${themeConfig[theme].colors.btnHover} pl-4 pr-4 pt-2 pb-2 rounded-lg cursor-pointer`}>Sobre o dev</button>
                </div>
            </div>
        </header>
    )
}
