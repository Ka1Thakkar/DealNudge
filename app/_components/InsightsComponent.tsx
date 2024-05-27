import Image, { StaticImageData } from "next/image";
import doubleQuotes_light from '@/public/DoubleQuotes.svg'
import doubleQuotes_dark from '@/public/DoubleQuotes.png'
import { useTheme } from "next-themes";

interface InsightsComponentProps {
    image : StaticImageData;
    name : string;
    position : string;
    insights : string;
}

const InsightsComponent = ({image, name, position, insights} : InsightsComponentProps) => {
    const {theme, setTheme} = useTheme();
    return (
        <div className="flex flex-col items-center justify-center p-10 md:p-16 gap-10 border rounded-xl dark:border-white mx-10 w-[90vw] md:w-[30vw] my-10 shadow-lg shadow-black/25 dark:shadow-white/50">
            <div className="flex gap-10 w-full justify-start items-center">
                <Image quality={100} src={image} alt="Investor" height={64} width={64} className="rounded-full" />
                <div>
                    <h1 className="md:text-2xl text-lg font-bold">{name}</h1>
                    <p className="md:text-xl text-black/75 dark:text-white/50">{position}</p>
                </div>
            </div>
            <p className="md:text-2xl text-lg flex gap-2 font-medium">
                <span className="dark:text-white w-2/12"><Image src={theme === "dark" ? doubleQuotes_dark : doubleQuotes_light} alt="quotes" quality={100} className="" /></span>
                {insights}
            </p>
        </div>
    );
}
 
export default InsightsComponent;