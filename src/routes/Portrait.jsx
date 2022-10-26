import React from 'react'
import Navbar from '../components/Navbar'
import P1 from '../assets/p5.jpg'
import P2 from '../assets/p2.jpg'
import P3 from '../assets/p3.jpg'
import P4 from '../assets/p4.jpg'

const Portrait = () => {
  return (
    <div className='max-w-[1240px] mx-auto '>
      <Navbar/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 p-8'>
      <div className='flex shadow-lg shadow-gray-400  p-4  '>
    <img className='h-96 w-full  object-cover cursor-pointer' src={P1} />
    </div>
      <div className='flex shadow-lg shadow-gray-400  p-4  '>
    <img className='h-96 w-full  object-cover cursor-pointer' src={P2} />
    </div>
      <div className='flex shadow-lg shadow-gray-400  p-4  '>
    <img className='h-96 w-full  object-cover cursor-pointer' src={P3} />
    </div>
      <div className='flex shadow-lg shadow-gray-400  p-4  '>
    <img className='h-96 w-full  object-cover cursor-pointer' src={P4} />
    </div>
    </div>
    </div>
  )
}

export default Portrait