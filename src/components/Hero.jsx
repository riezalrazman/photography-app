import React from 'react'
import { Link } from 'react-router-dom'
import Potrait from '../assets/potrait.jpg'
import Pet from '../assets/animal.jpg'
import Editorial from '../assets/editorial.jpg'
import Archi from '../assets/archi.jpg'
import Food from '../assets/food.jpg'
import Statue from '../assets/statue.jpg'


const Hero = () => {
  return (
   
 <div className='max-w-[1240px] mx-auto p-8'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 px-4'>

    <div className='flex shadow-xl shadow-gray-400  p-4 group hover:bg-gradient-to-r from-[#010111] t0-[#709dff]'>
      <img className='h-72 w-full group-hover:opacity-70 object-contain cursor-pointer' src={Potrait} alt='/' />
      <div className='hidden group-hover:block absolute p-4'>
      <h3 className='text-2xl text-white italic text-center pb-44'>Portrait</h3>
      <Link to='/portrait'><button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg italic cursor-pointer'>view</button></Link>
    </div>
    </div>

    <div className='flex shadow-xl shadow-gray-400  p-4 group hover:bg-gradient-to-r from-[#010111] t0-[#709dff]'>
       <img className='h-72 w-full group-hover:opacity-70 object-contain' src={Pet} alt='/' />
       <div className='hidden group-hover:block absolute p-4'>
      <h3 className='text-2xl text-white italic text-center pb-44'>Animals</h3>
      <button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg italic cursor-pointer'>view</button>
    </div>
    </div>
    <div className='flex shadow-xl shadow-gray-400  p-4 group hover:bg-gradient-to-r from-[#010111] t0-[#709dff]'>
       <img className='h-72 w-full group-hover:opacity-70 object-contain' src={Editorial} alt='/' />
       <div className='hidden group-hover:block absolute p-4'>
      <h3 className='text-2xl text-white italic text-center pb-44'>Editorial</h3>
      <button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg italic cursor-pointer'>view</button>
    </div>
    </div>
    <div className='flex shadow-xl shadow-gray-400  p-4 group hover:bg-gradient-to-r from-[#010111] t0-[#709dff]'>
       <img className='h-72 w-full group-hover:opacity-70 object-contain' src={Archi} alt='/' />
       <div className='hidden group-hover:block absolute p-4'>
      <h3 className='text-2xl text-white italic text-center pb-44'>Architecture</h3>
      <button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg italic cursor-pointer'>view</button>
    </div>
    </div>
    <div className='flex shadow-xl shadow-gray-400  p-4 group hover:bg-gradient-to-r from-[#010111] t0-[#709dff]'>
       <img className='h-72 w-full group-hover:opacity-70 object-contain' src={Food} alt='/' />
       <div className='hidden group-hover:block absolute p-4'>
      <h3 className='text-2xl text-white italic text-center pb-44'>Food </h3>
      <button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg italic cursor-pointer'>view</button>
    </div>
    </div>
    <div className='flex shadow-xl shadow-gray-400  p-4 group hover:bg-gradient-to-r from-[#010111] t0-[#709dff]'>
       <img className='h-72 w-full group-hover:opacity-70 object-contain' src={Statue} alt='/' />
       <div className='hidden group-hover:block absolute p-4'>
      <h3 className='text-2xl text-white italic text-center pb-44'>Statues</h3>
      <button className='text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg italic cursor-pointer'>view</button>
    </div>
    </div>

    </div>
    <div className='py-20 p-7'>
          <p className='text-2xl text-left leading-loose'>Hollie Beaumont is a photographer and art director based in London. She shoots a diverse range of subjects for commercial and editorial clients, all with a clean and elegant aesthetic.</p>
          <p className='text-2xl text-left pt-7 underline'><Link to='/contact'>Let's work together</Link></p>
          <ul className='pt-20'>
            <li className='text-xl pb-2'>email@example.com</li>
            <li className='text-xl'>(555) 555-5555</li>
          </ul>
        </div>
    </div> 

  )
}

export default Hero