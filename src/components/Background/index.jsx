import { useTheme } from "../../hooks/useTheme";
import nightVideo from "../../assets/bg_videos/temple_night.mp4";
import pinkVideo from "../../assets/bg_videos/temple_pink.mp4";
import sunsetVideo from "../../assets/bg_videos/temple_sunset.mp4";

export function Background({ children }) {

    const { theme } = useTheme();

    const bgTheme = theme === "night" ? nightVideo : theme === "pink" ? pinkVideo : sunsetVideo;

    const setBgSpeed = () => {
        const video = document.querySelector("#bg-video");
        video.playbackRate = 0.5;
    }

    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                <video src={bgTheme} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" id="bg-video" onLoadedData={setBgSpeed}></video>
                {children}
            </div>
        </>
    )
}