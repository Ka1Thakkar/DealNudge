import { cn } from "@/lib/utils";

const usps = [
    {
        title: 'Smart Profiling',
        description: 'Utilize LLMs for Comprehensive Profiling and Minimized Manual Research.',
        image: "https://via.placeholder.com/284"
    },
    {
        title: 'Multi-Channel Sourcing',
        description: 'Effortlessly Collect Deals from LinkedIn, Email, and WhatsApp into Your Investment Pipeline.',
        image: "https://via.placeholder.com/284"
    },
    {
        title: 'Tailored Communication',
        description: 'Automate and Personalize Investor Communications for Clarity and Consistency',
        image: "https://via.placeholder.com/284"
    }
]

const USPs = () => {
    return (
        <div className="bg-brandBGBlue dark:bg-brandGray 2xl:px-80 xl:px-40 md:px-20 px-10 py-40 flex flex-col gap-24">
            {usps.map((usp, index) => {
                return (
                    <div key={index} className={cn("flex flex-col-reverse gap-10 justify-between", index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row")}>
                        <img src={usp.image} alt="usp" className="rounded-xl w-fit" />
                        <div className="flex flex-col gap-5">
                            <h3 className=" text-4xl md:text-6xl font-bold">{usp.title}</h3>
                            <p className="md:text-xl text-base dark:text-white/50 text-black/50 mb-5">{usp.description}</p>
                            <button className="w-fit dark:bg-brandBlue py-2 px-5 rounded-xl bg-black text-white font-medium text-lg">
                                Try Now
                            </button>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}

export default USPs;