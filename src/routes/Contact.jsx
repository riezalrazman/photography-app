import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
    <div className='max-w-[1240px] mx-auto p-8'>
       <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
      <form className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3' type="text" placeholder='Name'/>
          <input className='border shadow-lg p-3' type="email" placeholder='Email'/>
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
        <textarea className='border shadow-lg p-3 w-full' cols='30' rows='10' placeholder='Message'></textarea>
        <button className='border shadow-lg p-3 w-full mt-2 bg-black text-white'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact