import about from "../../data/about.json";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const socialMediaIcons = {
    github: <IoLogoGithub />,
    linkedin: <FaLinkedinIn />,
    instagram: <FaInstagram />,
    x: <FaXTwitter />,
    tiktok: <FaTiktok />,
    youtube: <FaYoutube />
}

export function About() {
    return (
        <div className="flex flex-col gap-5 sm:gap-7">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-end gap-2">
                    <h2 className="text-xl sm:text-2xl">Dev:</h2>
                    <p className="text-2xl sm:text-4xl">{about.dev.name}</p>
                </div>
                <div className="flex flex-row gap-2 text-4xl sm:text-6xl">
                    {about.dev.socialMedia.map(soc => {
                        return <a href={soc.link} className="hover:scale-140 transition duration-200 ease-in-out">
                            {socialMediaIcons[soc.name]}
                        </a>
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-end gap-2">
                    <h2 className="text-xl sm:text-2xl">Design / Arts:</h2>
                    <p className="text-2xl sm:text-4xl">{about.design.name}</p>
                </div>
                <div className="flex flex-row gap-2 text-4xl sm:text-6xl">
                    {about.design.socialMedia.map(soc => {
                        return <a href={soc.link} className="hover:scale-140 transition duration-200 ease-in-out">
                            {socialMediaIcons[soc.name]}
                        </a>
                    })}
                </div>
            </div>

        </div>
    )
}