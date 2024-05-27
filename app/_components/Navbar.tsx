'use client'
import Image from "next/image";
import Logo_dark from "@/public/Logo/Logo_dark.png";
import Logo_light from "@/public/Logo/Logo_light.png";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import localFont from "next/font/local"
import { Moon, Sun } from "@phosphor-icons/react";


const headingFont = localFont({ src: '../../public/Font/circular-std/CircularStd-Medium.woff2' })

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <nav className={cn("fixed z-[99999] top-0 w-full dark:bg-black py-7 px-10 md:px-20 2xl:px-40 flex items-center justify-between bg-white", theme === 'dark' ? "text-white" : "text-black", headingFont.className)}>
            <div className="flex gap-10 items-center">
                {theme === "dark" ? <Image src={Logo_dark} alt="logo" quality={100} className="w-fit" /> : <Image src={Logo_light} alt="logo" quality={100} className="w-fit" />}
                <div className="text-base hidden md:block">
                    Platform
                </div>
                <div className="text-base hidden md:block">
                    Pricing
                </div>
                <div className="text-base hidden md:blocks">
                    Contact Us
                </div>
            </div>
            <div className="flex gap-5">
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="dark:bg-brandGray text-black bg-brandBGBlue dark:text-white font-medium rounded-full py-2 px-5">
                    {theme === "dark" ? <Sun /> : <Moon />}
                </button>
                <div role="button" className=" bg-brandGray text-white font-medium py-2 px-5 rounded-xl hidden md:block">
                    Get Started
                </div>
                <div role="button" className=" bg-brandBlue text-white font-medium py-2 px-5 rounded-xl hidden md:block">
                    Join Waitlist
                </div>
            </div>
        </nav>
    );
}

export default Navbar;