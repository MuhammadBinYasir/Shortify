import React from 'react'
import { LineChart } from '@/components/Charts/LineChart'
import { PieChart } from '@/components/Charts/PieChart';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";
import Link from 'next/link';

const anal = async () => {
  const values = [40, 60];
  const labels = ['Mobile', 'Computer'];
  const browser = ['Chrome', 'Edge', 'Yahoo'];
  const browserV = [55, 30, 15]
  return (
    <>
      <div className="w-full bg-slate-50 rounded pl-5 pr-5 py-4 text-slate-700 sm:flex hidden items-center gap-3 mb-4">
        <div className='w-10 h-10 bg-white rounded flex items-center justify-center text-sm'>
          <IoAnalyticsOutline />
        </div>
        <div>
          <h4 className='text-sm font-bold mb-2'>View Analytics of Signle URL</h4>
          <p className='text-xs'>Click the next button to view the analytics of individual shorten link.</p>
        </div>
        <Link href="/shorten" className='no-underline px-4 py-2 ml-auto bg-white rounded text-xs flex items-center justify-center'>Click Here</Link>
      </div>

      <div className="grid sm:grid-cols-3 md:grid-cols-9 grid-cols-1 gap-3">
        <div className="md:col-span-5 sm:col-span-2 col-span-1 text-xs rounded px-4 py-4 bg-sky-50">
          <h4 className="text-base mb-3 text-slate-700">Total Clicks</h4>
          <LineChart values={values} labels={labels} color='#f0f9ff' border='#075985' />
        </div>
        <div className="md:col-span-2 sm:col-span-1 col-span-1  text-xs rounded flex flex-col py-4 bg-orange-50">
          <h4 className="text-base mb-3 text-slate-700 pl-3">Devices</h4>
          <PieChart values={values} labels={labels} color='#fff7ed' />
        </div>
        <div className="md:col-span-2 sm:col-span-1 col-span-1  text-xs rounded flex flex-col py-4 bg-emerald-50">
          <h4 className="text-base mb-3 text-slate-700 pl-3">Browsers</h4>
          <PieChart values={browserV} labels={browser} color='#ecfdf5' />
        </div>

        <div className="md:col-span-3 sm:col-span-1 col-span-1  bg-pink-50 p-4 text-sm text-slate-700 rounded">
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
        </div>
        <div className="md:col-span-3 sm:col-span-1 col-span-1  bg-indigo-50 p-4 text-sm text-slate-700 rounded">
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
        <div className="md:col-span-3 sm:col-span-1 col-span-1  bg-amber-100 p-4 text-sm text-slate-700 rounded">
          <h4 className='text-base font-bold mb-3'>Best performaing Link</h4>
          <p className='text-xs mt-1 mb-2'>https://myurl.com/abcxyz</p>
          <LineChart values={[20, 25, 15, 42, 35, 70, 50]} labels={['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']} color='#fef3c7' border='#78350f' />

        </div>
      </div>

    </>
  )
}

export default anal