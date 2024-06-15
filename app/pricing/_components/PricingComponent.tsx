import Image from "next/image";
import Basic from '@/public/Pricing Icons/Basic.svg'
import { CheckCircle } from "@phosphor-icons/react";
import standard from '@/public/Pricing Icons/Standard.svg'
import professional from '@/public/Pricing Icons/Professional.svg'

interface PricingComponentProps {
    features: string[],
    tier: string,
    price: string
}

const PricingComponent = ({ features, tier, price }: PricingComponentProps) => {
    return (
        <div className="bg-white dark:bg-black p-10 rounded-2xl drop-shadow-md flex flex-col justify-between gap-20">
            <div>
                <div className="flex gap-5 items-center">
                    <div className="p-4 rounded-2xl bg-brandBGBlue dark:bg-brandGray w-fit">
                        {tier.toLowerCase() === 'basic' && <Image src={Basic} alt="" quality={100} className="h-10 w-fit" />}
                        {tier.toLowerCase() === 'standard' && <Image src={standard} alt="" quality={100} className="h-10 w-fit" />}
                        {tier.toLowerCase() === 'professional' && <Image src={professional} alt="" quality={100} className="h-10 w-fit" />}
                    </div>
                    <h2 className="text-3xl font-bold">
                        {tier}
                    </h2>
                </div>
                <div className="mt-10 text-brandGray dark:text-white">
                    <p className="text-xl font-medium flex gap-4 items-end">
                        <span className="font-bold text-5xl">
                            ${price}
                        </span>
                        /Per User, Per Month
                    </p>
                    <div className="flex flex-col gap-5 mt-10">
                        {features.map((feature, index) => {
                            return (
                                <div className="flex gap-5 font-medium text-lg">
                                    <CheckCircle weight="fill" size={24} className=" text-brandBlue" />
                                    <p>
                                        {feature}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="p-4 rounded-full bg-brandBlue text-center text-2xl font-bold">
                Get Started
            </div>
        </div>
    );
}

export default PricingComponent;