import React from 'react'
import image1 from '../assets/img/logo_white.png'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
          <img className='w-16 ml-8' src={image1} alt="" />
          <div className='bg-white pb-7 py-4 px-4'>
               <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
               <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
          </div>
     </div>
    </div>
  )
}

export default Home