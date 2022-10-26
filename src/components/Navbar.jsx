import React, { useState } from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-[#000300] cursor-pointer'><Link to='/'>CAPTUR</Link></h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer hover:underline'>
          <Link to='/'>Work</Link>
        </li>
        <li className='p-4 cursor-pointer hover:underline'>
        <Link to='/about'>About</Link>
        </li>
        <li className='p-4 cursor-pointer hover:underline'>
        <Link to='/contact'>Contact</Link>
        </li>
        <li className='p-4 cursor-pointer'><FaInstagram size={20}  /></li>
        <li className='p-4 cursor-pointer'><FiFacebook size={20}  /></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r  border-gray-300 bg-[#000300] ease-in-out duration-500 z-10' : 'fixed left-[-100%]  '}>
      <h1 className='w-full text-3xl font-bold text-white m-7'>CAPTUR</h1>
        <ul className='uppercase font-bold p-4 pt-20 text-white text-center'>
          <li onClick={()=> setNav(false)} className='p-4 hover:underline'>
          <Link to='/'>Work</Link>
          </li>
          <li onClick={()=> setNav(false)} className='p-4 hover:underline'>
          <Link to='/about'>About</Link>
          </li>
          <li onClick={()=> setNav(false)} className='p-4 hover:underline'>
          <Link to='/contact'>Contact</Link>
          </li>
          <div className='flex justify-center pt-20'>
        <li className='p-4 cursor-pointer'><FaInstagram size={20}  /></li>
        <li className='p-4 cursor-pointer'><FiFacebook size={20}  /></li>
        </div>
        </ul>
      </div>
    </div >
  )
}

export default Navbar