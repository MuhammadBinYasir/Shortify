import React from 'react'
import { IoEyeOffOutline } from "react-icons/io5"
import { FiTrash } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { CiUser, CiPhone, CiCalendar } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between text-slate-700">
        <h4 className='mt-4 font-bold text-2xl'>User Profile</h4>
        <p className='text-sm flex items-center gap-2'><CiCalendar /> Joined 13 July, 2024 </p>
      </div>
      <div className="w-full bg-slate-50 rounded px-5 py-4 text-slate-700 flex items-center gap-3 my-2">
        <div className="w-10 h-10 bg-white rounded text-lg flex items-center justify-center"> <FcGoogle /></div>
        <h4 className='text-base font-bold'>Your Account is Associaled with Google</h4>
      </div>
      <div className='mb-4 mt-3'>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
          <div>
            <label>Name: </label>
            <div className='flex px-3 items-center w-full h-10 border rounded text-base'>
              <CiUser />
              <input type="text" value="Muhammad Bin Yasir" className="w-full h-10 border-none outline-none px-3 bg-transparent" />
            </div>
          </div>
          <div>
            <label>Email: </label>
            <div className='flex px-3 items-center w-full h-10 border rounded text-base'>
              <MdAlternateEmail />
              <input type="text" value="mbya.....@gmail.com" className="w-full h-10 border-none outline-none px-3 bg-transparent" />
            </div>
          </div>
          <div>
            <label>Phone: </label>
            <div className='flex px-3 items-center w-full h-10 border rounded text-base'>
              <CiPhone />
              <input type="text" value="0311-XXXXX26" className="w-full h-10 border-none outline-none px-3 bg-transparent" />
            </div>
          </div>
        </div>
        <button className='px-3 py-2 bg-slate-700 text-white rounded cursor-pointer mt-2'>Submit</button>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3'>
        <div className='bg-white flex gap-3 cursor-pointer rounded border p-4 text-slate-700 text-xl'>
          <IoEyeOffOutline />
          <div>
            <h4 className='font-bold text-base mb-2'>Disable all links</h4>
            <p className="text-xs">It will disable all shorten links created from your account </p>
          </div>
        </div>
        <div className='bg-white flex gap-3 cursor-pointer rounded border p-4 text-slate-700 text-xl'>
          <FiTrash />
          <div>
            <h4 className='font-bold text-base mb-2'>Permanently remove account</h4>
            <p className="text-xs">It will remove your account permanently. It is irreversible action. </p>
          </div>
        </div>
        <div className='bg-white flex gap-3 cursor-pointer rounded border p-4 text-slate-700 text-xl'>
          <MdErrorOutline />
          <div>
            <h4 className='font-bold text-base mb-2'>Report Issue</h4>
            <p className="text-xs">Report any issue in our website by just clicking here. </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page