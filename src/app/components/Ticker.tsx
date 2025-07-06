'use client';
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

interface Ticker {
    name: string,
    rate: number,
    change: number,
    date: string
}

const Ticker: React.FC = () => {
    const [data, setData] = useState<Ticker[]>([]);

    useEffect(() => {
        const mockData: Ticker[] = [
            { date: 'June 16, 18:00', name: 'Sapele(Steam)', rate: 20, change: +2.4 },
            { date: 'June 16, 18:00', name: 'Sapele NIPP', rate: 78, change: -0.4 },
            { date: 'June 16, 18:00', name: 'Trans AFFAM Power', rate: 83, change: +1.6 },
            { date: 'June 16, 18:00', name: 'Egbin(Steam)', rate: 289, change: +4.4 },
            { date: 'June 16, 18:00', name: 'JEBBA (HYDRO)', rate: 124, change: -3.6 },
            { date: 'June 16, 18:00', name: 'KAINJI (HYDRO)', rate: 367, change: +5.4 },
            { date: 'June 16, 18:00', name: 'OKPAI (GAS/STEAM)', rate: 0, change: 0.0 },
            { date: 'June 16, 18:00', name: 'OMOTOSHO (GAS)', rate: 34, change: +0.7 },
            { date: 'June 16, 18:00', name: 'PARAS ENERGY (GAS)', rate: 45, change: +2.2 },
            { date: 'June 16, 18:00', name: 'IBOM POWER (GAS)', rate: 102, change: +3.8 },
            { date: 'June 16, 18:00', name: 'OLORUNSOGO (GAS)', rate: 0, change: +0.0 }, 
            { date: 'June 16, 18:00', name: 'SHIRORO (HYDRO)', rate: 0, change: -1.0 },
            { date: 'June 16, 18:00', name: 'TRANS-AMADI (GAS)', rate: 0, change: 0.0 },
            { date: 'June 16, 18:00', name: ' ZUNGERU', rate: 63, change: +1.3 },
            { date: 'June 16, 18:00', name: 'AFAM III FAST POWERAFAM VI (GAS/STEAM)', rate: 234, change: +3.0 },
            { date: 'June 16, 18:00', name: 'AZURA-EDO IPP (GAS)', rate: 16, change: +0.2 }
        ];
        setData(mockData)
    }, []);
    
    return (
        <div className='bg-[#0f172a] text-white w-full overflow-hidden py-1 sm:py-2'>
            <Marquee gradient={false} speed={35} pauseOnHover>
                {data.map((site, index) => {
                    const isUp = site.change >= 0;
                    const Icon: React.ElementType = isUp ? FiTrendingUp : FiTrendingDown;
                    const color = isUp ? 'text-green-400' : 'text-red-400';
                    
                    return (
                        <div 
                            key={index} 
                            className='flex items-center mx-1 sm:mx-2 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap rounded-lg bg-slate-800/50 backdrop-blur-sm'
                        >
                            <span className="text-[10px] xs:text-xs sm:text-sm">
                                {site.date}, {site.name}: {site.rate.toFixed(1)} MW
                            </span>
                            <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 ${color}`}/>  
                            <span className={`ml-1 ${color} text-[10px] xs:text-xs sm:text-sm`}> 
                                {site.change >= 0 ? '+' : ''}{site.change}%
                            </span>
                        </div>
                    );
                })}
            </Marquee>
        </div>
    )
}

export default Ticker