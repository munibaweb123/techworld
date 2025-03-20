'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {Menu, X} from "lucide-react"

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
   <header>
    
    <nav className='flex justify-evenly items-center p-4 bg-cyan-800 text-white'>
    <div>
      <h1 className='font-bold uppercase'>Tech world</h1>
     </div> 
      <ul className='hidden md:flex justify-center space-x-4 '>
        <li><Link className='hover:text-cyan-400' href={"/"}>Home</Link></li>
        <li><Link className='hover:text-cyan-200' href={"/about"}>About Us</Link></li>
        <li><Link className='hover:text-cyan-200' href={"/contact"}>Contact Us</Link></li>
      </ul>
    

    <button onClick={()=>setisOpen(!isOpen)} className='md:hidden'>
      {isOpen ? <X size={24} /> : <Menu size={24} />}

    </button>
    </nav>
    {/* mobile menu */}
    {isOpen && (
      <nav className='md:hidden text-center text-cyan-800'>
        <ul>
          <li><Link className='hover:text-cyan-200' href={"/"} onClick={()=>{setisOpen(false)}}>Home</Link></li>
          <li><Link className='hover:text-cyan-200' href={"/about"} onClick={()=>{setisOpen(false)}}>About Us</Link></li>
          <li><Link className='hover:text-cyan-200' href={"/contact"} onClick={()=>{setisOpen(false)}}>Contact Us</Link></li>
        </ul>
      </nav>
    )}
   </header>
  )
}

export default Header