"use client"
import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { motion,AnimatePresence } from 'framer-motion'



const page = () => {
    const locomotiveScroll = new LocomotiveScroll();
    const [showMessage, setShowMessage] = useState(true);


    setTimeout(()=>{setShowMessage(false);},4000);

  return (
    <div  className='w-full'>
        <div data-scroll   data-scroll-speed="-.5"  className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center bg-[url('https://media.istockphoto.com/id/1148091793/photo/technology-abstract.jpg?s=612x612&w=is&k=20&c=gvOrHi7p9q-_rmnNjQHRo-NXWDnjoJMWKqT7suVJ8oM=')]">
           <AnimatePresence>
                {showMessage && (<motion.div exit={{y:-1000,scale:0,duration:5,rotate:360}} transition={{duration:5}} className='text-white text-4xl font-bold'>Hello Bro! How Are You...</motion.div>)} 
           </AnimatePresence>
        </div>
        <div data-scroll  data-scroll-speed=".5"   className='relative -top-1 w-full h-screen bg-red-600 flex flex-col justify-center bg-[url("https://media.istockphoto.com/id/1473495759/photo/cozy-modern-living-room-interior-with-leather-armchair-and-decoration-room-on-empty-dark-blue.jpg?s=1024x1024&w=is&k=20&c=dRF2j3WAwSZWaRB0bsBz7oATzcmm8uBDPYSgtJqtrCE=")]'>
          
        </div>
        <div   className='w-full h-screen relative -top-36 bg-blue-600 flex flex-col justify-center'>
           
        </div>
        <div className='w-full h-screen bg-green-600 flex flex-col justify-center'>
           
        </div>
    </div>
  )
}

export default page
