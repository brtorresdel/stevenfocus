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

    return (
        <>
            <div className="fixed inset-0 w-full h-screen overflow-hidden bg-base-black">
                <video
                    key={bgTheme}
                    src={bgTheme}
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover z-0  opacity-80" id="bg-video" onLoadedData={(e) => e.currentTarget.playbackRate = 0.5}></video>
            </div>
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </>
    )
}