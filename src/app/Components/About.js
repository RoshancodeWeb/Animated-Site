import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".9"  id='about'  className='w-full h-[130vh] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black relative z-50 -top-80'>
                <h1 className='text-black p-20 text-[45px] leading-none tracking-tight border-b-[1px] border-[#99b047]'>
                    Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
                </h1>
        <div className='w-full h-fit flex gap-4'>
                <div className='w-1/2 px-20 pt-2 '>
                    <h1 className='text-4xl pb-3'>
                    Our approach:
                    </h1>
                    <button className='bg-zinc-900 text-white px-5 py-3 rounded-full flex  items-center gap-8 text-sm '>
                        Read More
                    <div className='w-2 h-2 bg-white rounded-full'></div>    
                    </button>
                </div>
                <div className='w-[45%] h-[70vh] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")]   mt-2 rounded-2xl bg-cover'>
                     
                </div>
        </div>
        
    </div>
  )
}
 
export default About
