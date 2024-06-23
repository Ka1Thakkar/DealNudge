import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const boxClassNames = "bg-white dark:bg-[#1E1E1E] hover:bg-[#E1E6F8] dark:hover:bg-[#333] p-10 rounded-2xl drop-shadow-md flex flex-col items-start text-left transition-all duration-300 w-full md:w-[350px] h-[250px] border border-gray-300 hover:border-brandBlue dark:border-gray-600 dark:hover:border-brandBlue";

const ContactInfo = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-20">
            <div className={boxClassNames}>
                <FaEnvelope size={48} className="text-black dark:text-white mb-4" />
                <p className="text-xl font-bold text-black dark:text-white">Email</p>
                <a href="mailto:divyansh@dealnudge.com" className="text-black dark:text-white mt-2 text-base">divyansh@dealnudge.com</a>
                <button className="mt-6 bg-brandBlue text-white py-2 px-4 rounded-full font-semibold">Contact</button>
            </div>
            <div className={boxClassNames}>
                <FaPhone size={48} className="text-black dark:text-white mb-4" style={{ transform: 'scaleX(-1)' }} />
                <p className="text-xl font-bold text-black dark:text-white">Phone</p>
                <a href="tel:+917078123790" className="text-black dark:text-white mt-2 text-base">Office. +91 7078123790</a>
                <button className="mt-6 bg-brandBlue text-white py-2 px-4 rounded-full font-semibold">Call</button>
            </div>
            <div className={boxClassNames}>
                <FaMapMarkerAlt size={48} className="text-black dark:text-white mb-4" />
                <p className="text-xl font-bold text-black dark:text-white">Address</p>
                <p className="text-black dark:text-white mt-2 text-base">RKIC BITS Pilani Rajasthan, 333031</p>
                <button className="mt-6 bg-brandBlue text-white py-2 px-4 rounded-full font-semibold">Locate</button>
            </div>
        </div>
    );
}

export default ContactInfo;
