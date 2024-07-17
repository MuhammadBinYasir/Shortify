import React from 'react'
import SideContent from './SideContent'

const WebNav = () => {
    return (
        <div className="w-full  bg-slate-50 shadow-inner h-screen p-2 hidden md:flex justify-between flex-col md:col-span-1">
            <SideContent />
        </div>
    )
}

export default WebNav