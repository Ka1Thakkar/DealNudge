'use client'
import Image from "next/image";
import Logo_dark from "@/public/Logo/Logo_dark.png";
import Logo_light from "@/public/Logo/Logo_light.png";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import localFont from "next/font/local"
import { Moon, Sun } from "@phosphor-icons/react";
import Link from "next/link";


const headingFont = localFont({ src: '../../public/Font/circular-std/CircularStd-Medium.woff2' })

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <nav className={cn("fixed z-[99999] top-0 w-full dark:bg-black py-7 px-10 md:px-20 2xl:px-40 flex items-center justify-between bg-white", theme === 'dark' ? "text-white" : "text-black", headingFont.className)}>
            <div className="flex gap-10 items-center">
                <Link href={'/'}>
                    {theme === "dark" ? <Image src={Logo_dark} alt="logo" quality={100} className="w-fit" /> : <Image src={Logo_light} alt="logo" quality={100} className="w-fit" />}
                </Link>
                {/* <div className="text-base hidden md:block">
                    Platform
                </div> */}
                <Link href={'/pricing'}>
                    <div className="text-base hidden lg:block">
                        Pricing
                    </div>
                </Link>
                <Link href={'/contact'}>
                    <div className="text-base hidden lg:block">
                        Contact Us
                    </div>
                </Link>
                <button>
                    <div className="h-[1.5px] w-full" />
                    <div className="h-[1.5px] w-full" />
                    <div className="h-[1.5px] w-full" />
                </button>
            </div>
            <div className="flex gap-5">
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="dark:bg-brandGray text-black hidden lg:block bg-brandBGBlue dark:text-white font-medium rounded-full py-2 px-5">
                    {theme === "dark" ? <Sun /> : <Moon />}
                </button>
                <div role="button" className=" bg-brandGray text-white font-medium py-2 px-5 rounded-xl hidden lg:block">
                    Get Started
                </div>
                <div role="button" className=" bg-brandBlue text-white font-medium py-2 px-5 rounded-xl hidden lg:block">
                    Join Waitlist
                </div>
            </div>
        </nav>
    );
}

export default Navbar;