'use client'
import localFont from "next/font/local";
import Demo from "../_components/Demo";
import Footer from "../_components/Footer";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PricingComponent from "./_components/PricingComponent";
import { basicFeatures, standardFeatures, professionalFeatures } from "./_components/data";
import Accelerate from "./_components/Accelerate";

const mainFont = localFont({ src: "../../public/Font/cabinet-grotesk/CabinetGrotesk-Regular.woff2" });

const Main = () => {
    const [monthly, setMonthly] = useState(true)
    return (
        <main className={cn(mainFont.className)}>
            <div className={cn("min-h-screen flex flex-col items-center pt-36 pb-40 bg-brandBGBlue dark:bg-brandGray", mainFont.className)}>
                <h1 className="2xl:text-8xl text-6xl font-bold text-center">
                    Our Pricing
                </h1>
                <p className="text-3xl text-[#6F6C90] text-center dark:text-white/50 mt-5">
                    Select a Plan that Fits Your Deal Management Goals
                </p>
                <div className="bg-brandBGBlue dark:bg-brandGray border border-brandBlue rounded-2xl flex mt-10 font-medium">
                    <button onClick={() => {
                        setMonthly(true)
                    }} className={cn("px-7 py-3 text-2xl transition-all ease-in-out", monthly && "bg-brandBlue text-white rounded-2xl")}>
                        Monthly
                    </button>
                    <button onClick={() => {
                        setMonthly(false)
                    }} className={cn("px-7 py-3 text-2xl transition-all ease-in-out", !monthly && "bg-brandBlue text-white rounded-2xl")}>
                        Annually
                    </button>
                </div>
                {monthly &&
                    <div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 xl:gap-10 w-full px-10 xl:px-28 mt-20">
                        <PricingComponent features={basicFeatures} tier="Basic" price="0" />
                        <PricingComponent features={standardFeatures} tier="Standard" price="30" />
                        <PricingComponent features={professionalFeatures} tier="Professional" price="60" />
                    </div>
                }
                {!monthly &&
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full px-32 mt-20">
                        <PricingComponent features={basicFeatures} tier="Basic" price="0" />
                        <PricingComponent features={standardFeatures} tier="Standard" price="25" />
                        <PricingComponent features={professionalFeatures} tier="Professional" price="50" />
                    </div>
                }
            </div>
            <Accelerate />
            <Demo />
            <Footer />
        </main>
    );
}

export default Main;