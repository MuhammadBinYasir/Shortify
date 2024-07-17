import React from 'react'
import { ImLink } from 'react-icons/im'
import { Switch } from '@/components/ui/switch';

const page = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-lg text-slate-700 font-medium flex gap-3">https://myurl.co/abcxyz
                        <span className='px-4 rounded-lg text-[10px] font-bold text-emerald-800 bg-emerald-50'>Active</span>
                    </h4>
                    <p className='text-xs text-slate-500 mt-2 mb-6 flex items-center gap-3'><ImLink /> https://youroriginalURL.com/blog/somethingelse?params=hello+world</p>
                </div>
                <Switch id="status" checked={true} />
            </div>
        </>
    )
}

export default page