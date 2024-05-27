import { cn } from "@/lib/utils";
import { ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";

const features = [
    {
        Heading: "Automated Deal Sourcing",
        description: "Effortlessly source deals from LinkedIn, email, and WhatsApp, adding them directly into your pipeline.",
        Image: "https://via.placeholder.com/340"
    },
    {
        Heading: "Advanced Deal Assignment",
        description: "Efficiently assign deals to team members, ensuring that each opportunity is explored by the right expert.",
        Image: "https://via.placeholder.com/340"
    },
    {
        Heading: "AI-Powered Analysis",
        description: "Automate the initial review of pitches and business plans, focusing on market, competition, and regulatory factors.",
        Image: "https://via.placeholder.com/340"
    },
    {
        Heading: "Dynamic Filtering",
        description: "Manage deals by team member or deal origin, including inbound, outbound, and referrals.",
        Image: "https://via.placeholder.com/340"
    },
    {
        Heading: "Secure Data Rooms",
        description: "Share documents confidentially via secure virtual data rooms, accessible only to authorised personnel.",
        Image: "https://via.placeholder.com/340"
    },
]

const Features = () => {
    const [activeFeature, setFeature] = useState(0)
    return (
        <div className="2xl:px-80 xl:px-40 md:px-20 px-10 py-40 flex flex-col gap-7 md:gap-16">
            <h2 className="md:text-6xl text-4xl font-bold">
                The only solution you need to source, evaluate, and manage your investment deals.
            </h2>
            <div className="flex flex-wrap gap-5">
                {features.map((feature, index) => {
                    return (
                        <button key={index} onClick={() => { setFeature(index) }} className={cn(" py-2 px-5 rounded-xl md:text-xl text-sm", activeFeature === index ? "border border-brandBlue bg-brandBlue text-white" : "bg-transparent border border-black dark:border-white")}>
                            {feature.Heading}
                        </button>
                    )
                })}
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full items-start gap-10 md:gap-20 pt-10">
                <div className="flex flex-col gap-5">
                    <h3 className="md:text-4xl text-3xl font-bold">
                        {features[activeFeature].Heading}
                    </h3>
                    <p className="md:text-2xl text-black/50 dark:text-white/50 mb-5 md:mb-10">
                        {features[activeFeature].description}
                    </p>
                    <button className="flex py-2 px-5 items-center dark:bg-brandBlue bg-black rounded-xl text-white gap-2 w-fit">
                        Learn More <span><ArrowRight size={20} /></span>
                    </button>
                </div>
                <img src={features[activeFeature].Image} alt="feature" className="rounded-xl" />
            </div>
        </div>
    );
}

export default Features;