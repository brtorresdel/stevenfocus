import { useTheme } from "../../hooks/useTheme";
import nightVideo from "../../assets/bg_videos/temple_night.webm";
import nightSMVideo from "../../assets/bg_videos/temple_night_sm.webm";
import pinkVideo from "../../assets/bg_videos/temple_pink.webm";
import pinkSMVideo from "../../assets/bg_videos/temple_pink_sm.webm";
import sunsetVideo from "../../assets/bg_videos/temple_sunset.webm";
import sunsetSMVideo from "../../assets/bg_videos/temple_sunset_sm.webm";

export function Background({ children }) {

    const { theme } = useTheme();
    let bgTheme

    if (window.innerWidth < 1024) {
        bgTheme = theme === "night" ? nightSMVideo : theme === "pink" ? pinkSMVideo : sunsetSMVideo;
    } else {
        bgTheme = theme === "night" ? nightVideo : theme === "pink" ? pinkVideo : sunsetVideo;
    }

    const setBgSpeed = () => {
        const video = document.querySelector("#bg-video");
        video.playbackRate = 0.5;
    }

    return (
        <>
            <div className="relative h-screen w-full overflow-hidden ">
                <video src={bgTheme} autoPlay loop muted className="absolute w-full h-full object-cover md:object-left object-left" id="bg-video" onLoadedData={setBgSpeed}></video>
                {children}
            </div>
        </>
    )
}