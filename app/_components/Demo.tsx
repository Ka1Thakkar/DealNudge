import decorations from '@/public/Demo/Ellipse.png'
import { ArrowRight } from '@phosphor-icons/react';
import Image from 'next/image';

const Demo = () => {
    return (
        <div className="bg-brandBGBlue relative overflow-hidden dark:bg-brandGray flex flex-col items-center justify-center py-40 px-10 md:px-20 xl:px-40 2xl:px-80">
            <Image src={decorations} alt="decorations" quality={100} className="absolute -left-52 md:left-10 -bottom-72 md:-bottom-56" />
            <Image src={decorations} alt="decorations" quality={100} className="absolute -left-72 md:-left-20 -bottom-48 md:-bottom-40" />
            <Image src={decorations} alt="decorations" quality={100} className="absolute -right-52 md:right-10 -bottom-72 md:-bottom-56" />
            <Image src={decorations} alt="decorations" quality={100} className="absolute -right-72 md:-right-20 -bottom-48 md:-bottom-40" />
            <p className='md:text-6xl text-2xl text-center font-bold'>
                Want to see how it works?
            </p>
            <p className='md:text-6xl text-2xl text-center font-bold pb-16'>
                Get in touch for a personalised demo!
            </p>
            <button className='flex gap-2 items-center py-2 px-5 rounded-xl bg-brandBlue text-white text-lg font-medium'>
                Get Started
                <span>
                    <ArrowRight />
                </span>
            </button>
        </div>
    );
}

export default Demo;