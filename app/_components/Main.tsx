import Image from "next/image";
import mainImageDark from '@/public/Home_Image/Home_Image_dark.png'
import mainImageLight from '@/public/Home_Image/Home_Image_light.png'
import { useTheme } from "next-themes";

const MainText = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="w-full h-fit justify-center items-center gap-12 flex flex-col bg-brandBGBlue dark:bg-black px-5 md:px-20 2xl:px-40 pt-44">
            <h1 className="lg:text-8xl text-4xl sm:text-6xl lg:max-w-4xl sm:max-w-4xl max-w-sm font-bold text-center">
                Copilot-Assisted Deal Flow Management
            </h1>
            <p className="dark:text-white/80 text-xl 2xl:text-[28px] w-[60vw] 2xl:max-w-xl text-center">
                Make deal search and analysis easier than ever, and make the most of your deal flow pipeline.
            </p>
            <div className="bg-white py-2 px-3 rounded-full flex">
                <input placeholder="Enter you mail" className="text-base bg-transparent text-black"></input>
                <div role="button" className="bg-brandBlue py-2 px-5 rounded-full text-white font-bold text-sm">
                    Book a demo
                </div>
            </div>
            <Image src={theme === 'dark' ? mainImageDark : mainImageLight} alt="main image" quality={100} className="w-full h-fit mt-20" />
        </div>
    );
}

export default MainText;