import { LineChart } from '@/components/Charts/LineChart'
import React from 'react'


const page = async () => {

  return (
    <div className="mt-4">
      <div className="grid grid-cols-4 mt-5 gap-4">
        <div className='col-span-4 md:col-span-3 bg-slate-50 rounded p-4 text-sm'>
          <h4 className="text-base mb-3 text-slate-700">Total Clicks (Lifetime)</h4>
          <LineChart values={[1, 5, 7, 30, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0, 1, 5, 7, 30, 22, 18, 0,]} labels={['Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1', 'Day1']} color='#f8fafc' border='#1e293b' />
        </div>

        <div className='col-span-4 md:col-span-1 bg-slate-500 rounded text-sm flex justify-between md:justify-center flex-row md:flex-col p-4 md:items-start items-center'>
          <div className='flex flex-col'>
            <p className='text-lg text-white font-bold text-left'>QR Code</p>
            <p className="text-white mt-1 text-sm">Download QR Code and Share it with other users.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-[100px] md:w-3/4 h-auto bg-white p-2 rounded-md shadow mx-auto mt-5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className='w-full h-full' alt="" />
            </div>
            <button className='px-3 md:w-3/4 py-3 rounded bg-white text-slate-700 text-sm mx-auto mt-2'>Download Image</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page