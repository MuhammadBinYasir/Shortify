import React from 'react'
import Link from 'next/link'

import { GoPlus } from "react-icons/go";
import { MdOutlineCloudDownload } from "react-icons/md";
import TableComp from '@/components/Dashboard/table';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { CreateSheetContent } from '@/components/Dashboard/CreateSheetContent';

const dataset = [
    {
        id: '123456',
        original_url: "https://youtube.com",
        shorten_url: "https://myurl.co/123456",
        counted_clicks: 250
    },
    {
        id: '147258369',
        original_url: "https://mywebsite.com/blog/some-title-of-blog",
        shorten_url: "https://myurl.co/147258369",
        counted_clicks: 350
    },
    {
        id: '159357',
        original_url: "https://facebook.com/profile.php?123",
        shorten_url: "https://myurl.co/myFb",
        counted_clicks: 50
    }
]

const page = () => {
    return (
        <>
            <h4 className="text-lg mb-6 text-slate-700 font-medium">Shorten Links</h4>
            <div className="flex gap-3">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className='bg-sky-100 text-sky-900 rounded-full text-xs font-normal px-5 py-3 flex gap-3 items-center'>
                            <GoPlus /> <div className="sm:block hidden">Create a new one</div></button>
                    </SheetTrigger>

                    <CreateSheetContent />

                </Sheet>

                <Link href='#' className='bg-slate-100 text-stalte-900 rounded-full text-xs font-normal px-4 py-3 flex gap-3 items-center'>
                    <MdOutlineCloudDownload /> Generate Report</Link>
            </div>
            {/* <div className='table'>
                <div className='tr'>
                    <div className='th'>Id</div>
                    <div className='th'>Original URL</div>
                    <div className='th'>Shorten URL</div>
                    <div className='th'>Status</div>
                    <div className='th'>Action</div>
                </div>
                <div className='tr'>
                    <div  className='td'>1</div>
                    <div  className='td'>https://youtube.com/</div>
                    <div  className='td'>https://myurl.co/abcxyz</div>
                    <div  className='td'><span className='status bg-emerald-50 text-emerald-800'>Active</span></div>
                    <div  className='td'> <Link href="/shorten/123456789">View Analytics</Link> </div>
                </div>
                <div className='tr'>
                    <div  className='td'>1</div>
                    <div  className='td'>https://youtube.com/</div>
                    <div  className='td'>https://myurl.co/abcxyz</div>
                    <div  className='td'><span className='status bg-yellow-50 text-yellow-800'>In Draft</span></div>
                    <div  className='td'> <Link href="#">View Analyticcs</Link> </div>
                </div>
                <div className='tr'>
                    <div  className='td'>1</div>
                    <div  className='td'>https://youtube.com/</div>
                    <div  className='td'>https://myurl.co/abcxyz</div>
                    <div  className='td'><span className='status bg-red-50 text-red-800'>Disabled</span></div>
                    <div  className='td'> <Link href="#">View Analyticcs</Link> </div>
                </div>
            </div> */}

            <div className='mt-2'>
                <TableComp data={dataset} />
            </div>
        </>
    )
}

export default page