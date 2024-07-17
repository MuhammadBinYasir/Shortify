import React from 'react'
import { IoAddOutline } from 'react-icons/io5'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import CreateURL from "@/components/Forms/CreateURL"
import { useSearchParams } from "next/navigation"
import Link from 'next/link'
import SideContent from './SideMenu/SideContent'
import { CiMenuBurger } from "react-icons/ci";


const UserHeader = () => {

    return (
        <div className="w-full h-10 flex items-center justify-between">
            <div className="md:hidden flex items-center">
                <Sheet>
                    <SheetTrigger> <CiMenuBurger /> </SheetTrigger>
                    <SheetContent side="left" className="bg-slate-50 shadow-inner">
                        <div className="w-full h-full flex flex-col justify-between">
                            <SideContent />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex items-center gap-3 ml-auto">
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center bg-sky-50 text-sky-950">
                            <IoAddOutline />
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Create Shorten URL</SheetTitle>
                            <SheetDescription>
                                Create a New Shorten URL here. Click submit when you're done.
                            </SheetDescription>
                        </SheetHeader>

                        <CreateURL />

                    </SheetContent>
                </Sheet>


                <Link href="/profile" className="w-8 h-8 rounded-full overflow-hidden no-outline">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default UserHeader