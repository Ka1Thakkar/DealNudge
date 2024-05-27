'use client'
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import localFont from "next/font/local";
import Image from "next/image";
const mainFont = localFont({ src: "../public/Font/cabinet-grotesk/CabinetGrotesk-Regular.woff2" });
import mainImageDark from '@/public/Home_Image/Home_Image_dark.png'
import mainImageLight from '@/public/Home_Image/Home_Image_light.png'
import MainText from "./_components/Main";
import VCs from "./_components/VCs";
import Stats from "./_components/Stats";
import Features from "./_components/Features";
import USPs from "./_components/USPs";
import FAQs from "./_components/FAQs";
import Insights from "./_components/Insights";
import Demo from "./_components/Demo";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className={cn("dark:bg-black", mainFont.className)}>
      <MainText />
      <div className="bg-brandGray -mt-0 py-16 flex flex-col items-center justify-center gap-20">
        <Stats />
        <div className="w-[40vw] bg-gradient-to-r from-brandGray to-brandGray via-white h-[1px] rounded-full"></div>
        <VCs />
        <p className="text-white text-lg font-medium text-center">
          Simplifying Deal Flow for Top Investment Teams Worldwide
        </p>
      </div>
      <Features />
      <USPs />
      <FAQs />
      <Insights />
      <Demo />
    </main>
  );
}
