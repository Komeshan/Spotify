import React from 'react'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-8 text-lg sm:text-xl md:text-2xl 
        font-medium max-w-[90%] sm:max-w-[70%] md:max-w-[50%] mx-auto'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl mb-4 drop-shadow-[-1.5px_1.5px_#00ff5b]'>Welcome to</h1>
        <img className='w-[max(22vw,200px)] mb-4 mt-2' src={assets.logo} alt="Logo" />
        <h1 className='text-3xl sm:text-4xl md:text-5xl drop-shadow-[-1.5px_1.5px_#00ff5b]'>Admin Panel</h1>
    </div>
  )
}

export default Home