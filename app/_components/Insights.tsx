import Marquee from "react-fast-marquee";
import InsightsComponent from "./InsightsComponent";
import image from '@/public/investor_test.png'
import { useTheme } from "next-themes";

const Insights = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div className="md:py-40 py-20 flex flex-col items-center justify-center gap-10 md:gap-20">
            <div className="px-10 xl:px-40 md:px-20 2xl:px-80">
                <h1 className="font-bold text-4xl md:text-6xl text-center">
                    Investor Insights
                </h1>
                <p className="text-center text-lg md:text-2xl dark:text-white/50 text-black/50 pt-5">
                    See why investors choose dealnudge for superior deal flow
                </p>
            </div>
            <Marquee pauseOnHover className="w-screen h-fit" gradient gradientColor={theme === "dark" ? "#000000" : "#FFFFFF"} gradientWidth={"25%"}>
                <InsightsComponent image={image} name="Kavan T." position="Venture Capital Associate" insights="Dealnudge has been a game changer for our team. We have been able to source deals faster and more efficiently than ever before." />
                <InsightsComponent image={image} name="Kavan T." position="Venture Capital Associate" insights="Dealnudge has been a game changer for our team. We have been able to source deals faster and more efficiently than ever before." />
                <InsightsComponent image={image} name="Kavan T." position="Venture Capital Associate" insights="Dealnudge has been a game changer for our team. We have been able to source deals faster and more efficiently than ever before." />
                <InsightsComponent image={image} name="Kavan T." position="Venture Capital Associate" insights="Dealnudge has been a game changer for our team. We have been able to source deals faster and more efficiently than ever before." />
            </Marquee>
        </div>
    );
}

export default Insights;