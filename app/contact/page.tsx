'use client'
import localFont from "next/font/local";
import Demo from "../_components/Demo";
import Footer from "../_components/Footer";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ContactInfo from './_components/ContactInfo';

const mainFont = localFont({ src: "../../public/Font/cabinet-grotesk/CabinetGrotesk-Regular.woff2" });

const Main = () => {
    return (
        <main className={cn(mainFont.className)}>
            <div className={cn("min-h-screen flex flex-col items-center pt-36 pb-20 bg-white dark:bg-brandGray", mainFont.className)}>
                <h1 className="2xl:text-8xl text-6xl font-bold text-center">
                    Contact Us
                </h1>
                <p className="text-3xl text-[#6F6C90] text-center dark:text-white/50 mt-5 max-w-4xl">
                    We’d love to hear from you! Whether you have questions about our features, pricing, or need support, our team is here to help.
                </p>
                <ContactInfo />
            </div>
            <Demo />
            <Footer />
        </main>
    );
}

export default Main;
