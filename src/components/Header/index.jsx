import logoNight from "../../assets/logo/night.png";
import logoPink from "../../assets/logo/pink.png";
import logoSunset from "../../assets/logo/sunset.png";
import { useTheme } from "../../hooks/useTheme";

export function Header() {
    const { theme } = useTheme();

    const logos = {
        night: { logo: logoNight, alt: "Night Logo" },
        pink: { logo: logoPink, alt: "Pink Logo" },
        sunset: { logo: logoSunset, alt: "Sunset Logo" }
    }

    const logoSrc = logos[theme] || logos.night;

    return (
        <header className="relative z-10 top-10 left-0 w-full p-4 flex justify-center items-center">
            <img
                src={logoSrc.logo}
                alt={logoSrc.alt}
                className="h-auto w-40 sm:w-60 lg:w-72 xl:w-80 transition duration-500 ease-in-out hover:scale-105"
            />
        </header>
    )
}
