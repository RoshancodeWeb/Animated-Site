"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
     const [isHovering, setIsHovering] = useState(false);
     const [isHoveringTwo, setIsHoveringTwo] = useState(false);
  return (
    <div data-scroll    data-scroll-speed="-.5"   className='w-full bg-zinc-900  text-white  pb-10 relative z-[50] -top-56 '>
          <div className='w-full border-b-2 border-zinc-700'>
               <p className='px-20 pt-20 pb-10 text-5xl '>Featured Projects</p>
          </div>
          <div className='w-full px-20  flex pt-5 gap-10  pb-5'>
              <div className='w-[50%] h-5  flex gap-1 text-lg items-center'>
                 <div className='w-3 h-3 bg-white rounded-full'></div>
                 <p className=''>Fide</p>
              </div>
              <div className='w-[50%] h-5  flex gap-1 text-lg items-center'>
                 <div className='w-3 h-3 bg-white rounded-full'></div>
                 <p className=''>Vise</p>
              </div>
          </div> 
          <div className='w-full flex gap-10 px-20'>
               <div className=' relative cardcontainer w-1/2 h-[85vh] '>
                    <div onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}  className='w-full h-full  rounded-xl overflow-hidden'>
                        <h1 className='absolute z-40 flex text-7xl overflow-hidden leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold translate text-[#CDEA68]'>
                         {
                         "FIDE".split("").map((value,index)=>(
                         <motion.span initial={{y:"100%"}} animate={isHovering?{y:"0"}:{y:"100%"}} transition={{ease:"linear",duration:index*.08}} key={index} className='  inline-block'>{value}</motion.span>
                         ))}
                        </h1>
                        <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' className='w-full h-full hover:scale-95 rounded-xl  transition-transform ease-linear duration-300' />
                    </div>
               </div>
               <div className='cardcontainer  relative w-1/2 h-[85vh] rounded-xl '>
                    <div onMouseEnter={()=>setIsHoveringTwo(true)} onMouseLeave={()=>setIsHoveringTwo(false)} className='w-full h-full rounded-xl overflow-hidden'>
                         <h1  className='absolute text-7xl flex overflow-hidden  leading-none tracking-tighter font-bold  text-[#CDEA68] right-full translate-x-1/2  z-[40] top-1/2 -translate-y-1/2'>
                              {/* split converts a string into array on the bases of some condition */}
                              {/* otherwise map does not applied on string */}
                              {
                              "VISE".split("").map((value,index)=>
                              (
                              <motion.span initial={{y:"100%"}} animate={isHoveringTwo?{y:"0"}:{y:"100%"}} transition={{ease:[0.85, 0, 0.15, 1],duration:index*0.08}} key={index} className='  inline-block' >{value}</motion.span>
                              ))}
                         </h1>
                        <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png ' className='w-full h-full relative hover:scale-95 rounded-xl  transition-transform ease-linear duration-300 ' />
                    </div>
               </div>
          </div>
    </div>
  )
}

export default Featured
