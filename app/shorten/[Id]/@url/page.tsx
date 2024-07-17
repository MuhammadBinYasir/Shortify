import React from 'react'
import { IoEyeOutline, IoRocketOutline } from 'react-icons/io5'
import Card from '@/components/Dashboard/Card';
import { LineChart } from '@/components/Charts/LineChart';
import { PieChart } from '@/components/Charts/PieChart';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";

export default function page() {
    return (
        <div className='mt-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-slate-700">
                <Card title='Total Click' count={2111} Icon={IoEyeOutline} bg='sky' />
                <Card title='Unique Click' count={1006235} Icon={IoRocketOutline} bg='indigo' />

            </div>

            <div className="grid grid-cols-6 mt-5 gap-4">
                <div className='col-span-6 sm:col-span-4 bg-slate-50 rounded p-4 text-sm'>
                    <h4 className="text-base mb-3 text-slate-700">Total Clicks (Lifetime)</h4>
                    <LineChart values={[1, 5, 7, 30, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0,]} labels={['Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1']} color='#f8fafc' border='#1e293b' />
                </div>
                <div className='col-span-3 sm:col-span-2 bg-slate-50 rounded p-4 text-sm'>
                    <h4 className="text-base mb-3 text-slate-700">Devices</h4>
                    <PieChart values={[20, 50, 30]} labels={['Mobile', 'Computer', 'Tablet']} color='#f8fafc' />
                </div>
                <div className='col-span-3 sm:col-span-2 bg-slate-50 rounded p-4 text-sm'>
                    <h4 className="text-base mb-3 text-slate-700">Browsers</h4>
                    <PieChart values={[20, 80]} labels={['Google', 'Fire Fox']} color='#f8fafc' />
                </div>
                <div className="col-span-6 sm:col-span-4 bg-slate-50 p-4 text-sm">
                    <h4 className="text-base mb-3 text-slate-700">Unique Clicks (Lifetime)</h4>
                    <LineChart values={[1, 2, 5, 1, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0,]} labels={['Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1']} color='#f8fafc' border='#1e293b' />
                </div>
                <div className="col-span-6 sm:col-span-3 bg-slate-50 p-4 text-sm text-slate-700 rounded">
                    <div className="flex items-center justify-between font-bold mb-3">
                        <p>Country</p>
                        <p>Clicks</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <img src='https://flagcdn.com/16x12/pk.png' className='h-3 w-auto' />
                            Pakistan
                        </div>
                        <p>892</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <img src='https://flagcdn.com/16x12/us.png' className='h-3 w-auto' />
                            USA
                        </div>
                        <p>709</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <img src='https://flagcdn.com/16x12/in.png' className='h-3 w-auto' />
                            India
                        </div>
                        <p>612</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <img src='https://flagcdn.com/16x12/bd.png' className='h-3 w-auto' />
                            Bangladesh
                        </div>
                        <p>612</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <img src='https://flagcdn.com/16x12/ca.png' className='h-3 w-auto' />
                            Canada
                        </div>
                        <p>612</p>
                    </div>
                    <div className="w-full h-8 flex items-center justify-center border-t border-t-slate-500">See All</div>
                </div>
                <div className="col-span-6 sm:col-span-3 bg-slate-50 p-4 text-sm text-slate-700 rounded">
                    <h4 className='text-base font-bold mb-3'>Redirect URL's</h4>
                    <div className="flex items-center justify-between font-bold mb-3">
                        <p>URL</p>
                        <p>Clicks</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <FaFacebook /> facebook.com
                        </div>
                        <p>892</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <FaInstagram /> instagram.com
                        </div>
                        <p>892</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <FaTwitter /> twitter.com
                        </div>
                        <p>892</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 h-5 mb-3">
                        <div className='flex items-center gap-2'>
                            <LuGlobe /> Other Links
                        </div>
                        <p>892</p>
                    </div>
                </div>

            </div>
        </div>
    )
}