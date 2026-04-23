import { useTheme } from "../../hooks/useTheme";
import nightVideo from "../../assets/bg_videos/temple_night.mp4";
import nightSMVideo from "../../assets/bg_videos/temple_night_sm.mp4";
import pinkVideo from "../../assets/bg_videos/temple_pink.mp4";
import pinkSMVideo from "../../assets/bg_videos/temple_pink_sm.mp4";
import sunsetVideo from "../../assets/bg_videos/temple_sunset.mp4";
import sunsetSMVideo from "../../assets/bg_videos/temple_sunset_sm.mp4";

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