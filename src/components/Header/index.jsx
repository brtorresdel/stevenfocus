import logoNight from "../../assets/logo/night.png";
import logoPink from "../../assets/logo/pink.png";
import logoSunset from "../../assets/logo/sunset.png";
import { useTheme } from "../../hooks/useTheme";
import { EllipsisVertical } from "lucide-react";

export function Header() {
    const { theme } = useTheme();

    const logos = {
        night: { logo: logoNight, alt: "Night Logo" },
        pink: { logo: logoPink, alt: "Pink Logo" },
        sunset: { logo: logoSunset, alt: "Sunset Logo" }
    }

    const logoSrc = logos[theme] || logos.night;

    return (
        <header className="relative z-10 top-10 left-0 w-full p-4 flex justify-around items-center">
            <img
                src={logoSrc.logo}
                alt={logoSrc.alt}
                className="h-auto w-40 sm:w-60 lg:w-72 xl:w-80 transition duration-200 ease-in-out hover:scale-110 cursor-pointer"
            />
            <button className={`text-base-white bg-${theme}-primary/65 w-10 h-10 md:w-15 md:h-15 xl:w-20 xl:h-20 flex justify-center items-center rounded-full cursor-pointer`}>
                <EllipsisVertical className="w-7 h-7 md:w-10 md:h-10 xl:w-12 xl:h-12"/>
            </button>
        </header>
    )
}
