import { formatNumber } from '@/function/formatNumber'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface type {
    title: string,
    count?: number,
    desc?: string,
    Icon: IconType,
    link?: string,
    bg: string
}

const Card = ({ title, count, desc, Icon, link, bg }: type) => {
    var formatted;
    count ? formatted = formatNumber(count) : formatted = count;
    return (
        <div className={`no-underline bg-${bg}-50 px-4 py-5 rounded flex items-center justify-between`}>
            <div className='w-full pr-2'><h3 className="text-base font-bold">{title}</h3>
                {count && <h2 className="text-2xl font-normal mt-2">{formatted}</h2>}
                {desc && <p className="mt-1 text-xs text-wrap">{desc}</p>}
            </div>
            <div className="w-12 h-10 rounded text-md bg-white flex items-center justify-center"> <Icon />  </div>
        </div>
    )
}

export default Card