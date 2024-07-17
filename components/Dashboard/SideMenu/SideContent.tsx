"use client"
import { GoHome } from "react-icons/go";
import { ImLink } from "react-icons/im";
import { IoAnalyticsOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { PiHeadset } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaCheck } from "react-icons/fa";

const list = [
    {
        title: "Dashboard",
        icon: <GoHome />,
        link: '/'
    },
    {
        title: "Shorten Links",
        icon: <ImLink />,
        link: '/shorten'
    },
    {
        title: "Analytics",
        icon: <IoAnalyticsOutline />,
        link: '/analytics'
    },
]
const features = ['Unlimited Shorten', '24/7 Support', 'Some Else Special', 'Any thing', 'More and more', 'great ending'];
const SideContent = () => {
    const pathname = usePathname();
    const isActive = (link: any) => {
        return link === '/' ? pathname === '/' : pathname.startsWith(link);
    };
    return (
        <>
            <div>
                {list.map((item, index) => (
                    <Link key={index} href={item.link} className={`w-full h-8 text-sm flex items-center gap-2 pl-3 rounded text-slate-700 my-1 no-underline ${isActive(item.link) ? 'bg-white' : ''}`}>
                        {item.icon} {item.title}
                    </Link>
                ))}
            </div>
            <div>
                <Dialog>
                    <div className="w-full p-3 pb-5 bg-gradient-to-br from-slate-500 to-slate-700 rounded text-white mb-4">
                        <p className='text-sm font-bold'>Subscribe To Pro!!</p>
                        <p className="text-xs mt-2">Subscribe to our pro model to enjoy unlimited shoren links.</p>
                        <div className="w-full flex justify-between text-white text-xs mt-1"><span>0</span> <span>5</span> </div>
                        <div className="w-full h-2 bg-slate-400 rounded mb-6">
                            <div className="h-full w-3/5 bg-slate-500 rounded"></div>
                        </div>
                        <DialogTrigger asChild>
                            <button className="text-sm px-3 py-2 bg-slate-600 text-white rounded">Subscribe now</button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[300px]">

                            <DialogHeader>
                                <DialogTitle>Subscribe To Pro</DialogTitle>
                                <DialogDescription>Subscribe to pro to access all the cool stuff.</DialogDescription>
                            </DialogHeader>

                            <div className="space-y-2">
                                <div className="flex items-end text-slate-700">
                                    <h4 className="text-3xl font-bold">$20</h4>
                                    <p className='text-xs'>/month</p>
                                </div>
                                <p className="text-center my-2 text-xs text-slate-500">includes</p>
                                <div className="my-2">
                                    {features.map((item, index) => [
                                        <div key={index} className="flex items-center text-base gap-3 text-green-500 mb-1">
                                            <FaCheck /> <p className="text-slate-700">{item}</p>
                                        </div>
                                    ])}
                                </div>
                            </div>

                            <DialogFooter> <button className="text-sm px-3 py-2 bg-slate-600 text-white rounded">Subscribe Now</button> </DialogFooter>
                        </DialogContent>
                    </div>
                </Dialog>

                <Link href="/profile" className="w-full h-8 text-sm bg-white flex items-center gap-2 pl-3 rounded text-slate-700 my-1 no-outline">
                    <CiSettings /> Settings </Link>
                <div className="w-full h-8 text-sm bg-white flex items-center gap-2 pl-3 rounded text-slate-700 my-1">
                    <PiHeadset /> Support <span className='bg-orange-100 border border-orange-300 rounded text-xs text-orange-500 px-1 ml-auto mr-2'>PRO</span> </div>
            </div>
        </>
    )
}

export default SideContent