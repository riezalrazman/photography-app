import React from 'react'
import Navbar from '../components/Navbar'
import Hehe from '../assets/she.jpg'


const About = () => {
  return (
    <div>
    <Navbar/>
  <div className='max-w-[1240px] mx-auto p-8'>
       <div className='max-w-[1240px] grid md:grid-cols-2'>
        <img className='w-[300px] mx-auto my-4 flex shadow-xl shadow-gray-400' src={Hehe} alt='/' />
        <div className='sm:mx-auto px-5 md:pt-8 lg:flex flex-col justify-center'>
          <p className='text-gray-600 font-bold pt-6'>MEET YOUR NEW PHOTOGRAPHER</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Hollie Beaumont</h1>
          <p>A photographer and art director based in London. I shoot a diverse range of subjects for commercial and editorial clients, all with a clean and elegant aesthetic.</p><br/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cumque at dicta placeat magni veniam ipsam, maiores porro illum et. Voluptas libero mollitia temporibus soluta consequuntur. Cumque molestias laudantium suscipit.</p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Book Me</button>
        </div>

  
       
          
      </div>
   </div>
   </div>
  )
}

export default About