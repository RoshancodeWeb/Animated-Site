"use client"
import { motion } from 'framer-motion'
import React from 'react'
const Marquee = () => {

  return (
    
    <div data-scroll data-scroll-speed=".1"   className='w-full bg-[#004D43]  pt-16 pb-16 rounded-tl-2xl rounded-tr-2xl mt-5'>
        <div  className='w-full flex  overflow-hidden whitespace-nowrap border-t-[1px]  border-zinc-300 border-b-[1px] '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} className='uppercase text-[16vw]  leading-none tracking-tighter font-bold  pr-[40px]'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}}  className='uppercase text-[16vw]  leading-none tracking-tight font-bold '>We are Ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
