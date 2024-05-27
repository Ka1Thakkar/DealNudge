import Image from "next/image";
import Marquee from "react-fast-marquee";
import PIEDS from '@/public/VCs/PIEDS.png'
import TwoAM_VC from '@/public/VCs/2amVC.png'
import Conquest from '@/public/VCs/Conquest.png'
import Ankur_Capital from '@/public/VCs/Ankur_Capital.png'
import Campus_Fund from '@/public/VCs/Campus_Fund.png'
import Anicut from '@/public/VCs/Anicut.png'

const VC = [
    {
        image: PIEDS,
        name: "PIEDS"
    },
    {
        image: Conquest,
        name: "Conquest"
    },
    {
        image: Ankur_Capital,
        name: "Ankur Capital"
    },
    {
        image: TwoAM_VC,
        name: "2AM VC"
    },
    {
        image: Campus_Fund,
        name: "Campus Fund"
    },
    {
        image: Anicut,
        name: "Anicut"
    },
]

const VCs = () => {
    return (
        <Marquee className="w-full h-full" gradient gradientColor="#0E0E0E" gradientWidth={'25%'} pauseOnHover>
            {VC.map((vc, index) => {
                return (
                    <div key={index} className="h-[66px] mx-20">
                        <Image src={vc.image} alt={vc.name} quality={100} className="w-full h-full" />
                    </div>
                )
            }
            )}
        </Marquee>
    );
}

export default VCs;