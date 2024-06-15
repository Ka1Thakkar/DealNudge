import React from "react";
import Logo from '@/public/Logo/Logo_dark.png'
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { PiMapPinFill } from "react-icons/pi";
import { LinkedinLogo, XLogo } from "@phosphor-icons/react";

const Footer = () => {
    return (
        <footer className="bg-brandFooterBlue pt-20 px-5 lg:px-24 pb-10 text-white">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center px-10">
                <div>
                    <Image src={Logo} alt="logo" quality={100} className="h-[35px] w-fit" />
                    <p className=" text-white font-light text-lg mt-10">
                        Don't let scattered deal information waste valuable hours and risk your firm's reputation. Centralize and streamline with DealNudge.
                    </p>
                </div>
                <div className="flex justify-between lg:justify-center gap-20 lg:gap-32 w-full">
                    <div className="flex flex-col gap-5 text-left items-center">
                        <div className="flex flex-col gap-5">
                            <p className="text-[20px] font-semibold">
                                Navigation
                            </p>
                            <div className="flex flex-col gap-2 text-white/50">
                                <p>
                                    Platform
                                </p>
                                <p>
                                    Pricing
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-[20px] font-semibold">
                            Contact Us
                        </p>
                        <div className="flex flex-col gap-2 text-white/50">
                            <p className="flex gap-2">
                                <IoMail className="text-white" size={24} /> divyansh@dealnduge.com
                            </p>
                            <p className="flex gap-2">
                                <PiMapPinFill size={24} className="text-white" /> RKIC BITS Pilani, Rajasthan, 333031.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-full bg-white/20 mt-10"></div>
            <div className="mt-10 flex justify-between items-center px-10">
                <p className="lg:text-lg text-xs">
                    © 2024, Incubrew Innovations Pvt. Ltd. All rights reserved.
                </p>
                <div className="flex gap-5">
                    <LinkedinLogo className="lg:h-8 lg:w-8 w-5 h-5" weight="fill" />
                    <XLogo className="lg:h-8 lg:w-8 w-5 h-5" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;