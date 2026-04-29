import about from "../../data/about.json";

const socialMediaIcons = {}

export function About() {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <div className="flex flex-row items-end gap-2">
                    <h2 className="text-xl">Dev:</h2>
                    <p className="text-2xl">{about.dev.name}</p>
                </div>
                <div>
                    {about.dev.socialMedia.map(soc => {
                        return <a href={soc.link}>{soc.name}</a>
                    })}
                </div>
            </div>

            <div>
                <div className="flex flex-row items-end gap-2">
                    <h2 className="text-xl">Design / Arts:</h2>
                    <p className="text-2xl">{about.design.name}</p>
                </div>
                <div>
                    {about.design.socialMedia.map(soc => {
                        return <a href={soc.link}>{soc.name}</a>
                    })}
                </div>
            </div>

        </div>
    )
}