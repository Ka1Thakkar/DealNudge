import { ArrowRight } from "@phosphor-icons/react";

const Accelerate = () => {
    return (
        <div className="min-h-screen hidden w-full px-32 py-40 lg:flex flex-col items-center justify-center gap-10 dark:bg-black">
            <h1 className="text-center text-6xl font-bold">
                Accelerate Your Deal Flow
            </h1>
            <p className="text-2xl text-brandGray dark:text-white/50">
                You can start for free, onboard your entire team with ease, and choose from flexible monthly or annual plans.
            </p>
            <div className="flex w-full lg:w-[65%] border border-black/50 dark:border-white/50 rounded-full">
                <input placeholder="Enter your work email" className="bg-transparent w-full px-5 text-2xl" />
                <button className="bg-brandBlue py-4 px-8 rounded-full min-w-fit text-3xl">
                    Get Started
                </button>
            </div>
            <div className="flex gap-5">
                <input type="checkbox" />
                <p className="text-2xl">
                    By signing up, I agree to Dealnudge's <span className="font-semibold">Terms of Service</span> and <span className="font-semibold">Privacy Policy.</span>
                </p>
            </div>
            <div className="flex gap-5 w-[75%] items-center">
                <div className="h-[1px] w-full bg-brandGray dark:bg-white/50"></div>
                <p>
                    Or
                </p>
                <div className="h-[1px] w-full bg-brandGray dark:bg-white/50"></div>
            </div>
            <div className="flex gap-10 items-center">
                <button className="flex gap-5 items-center text-2xl font-medium py-4 px-8 rounded-full border border-black/50 dark:border-white">
                    Sign Up with Google <ArrowRight size={24} />
                </button>
                <button className="flex gap-5 items-center text-2xl font-medium py-4 px-8 rounded-full border border-black/50 dark:border-white">
                    Sign Up with Microsoft <ArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default Accelerate;