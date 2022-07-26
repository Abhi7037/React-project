import React from 'react'
import { FcHome } from "react-icons/fc";
import './style.css'
export default function Footer() {
  return (
    <div className='footer bg-slate-200		w-100 h-40 mt-3'>
        <h2 className='icon'><FcHome/></h2>
      <h2 className='text-center  text-xl font-medium'>Powered by Property Housing</h2>
    </div>
  )
}
