import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const LandingPage = () => {
    const buttonAnimation={
        scaleUp:{
            scale:1.1,
            marginLeft:2,
            textShadow:'0px 0px 5px rgb(255,255,255)',
            boxShadow:'0px 0px 5px rgb(255,255,255)'
        }
    }
  return (
    <div  className='w-full h-screen bg-zinc-900 pt-1'>
        <motion.div className='text-structure mt-32 px-20  ' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>
            {["We Create","Eye-Opening","Presentations"].map((value,index)=>
             (
             <div className='masker' key={index}>
                <div className='w-full flex items-center'>
                   {index===1 &&  
                    (<motion.div initial={{width:"0"}} animate={{width:"140px"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='w-[140px] h-[75px] bg-no-repeat bg-cover bg-center bg-[url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuQB8REeNFqvWQimwwGXSJh0KKNqJerdsAAeLSUcZcFOicx8Ld")] '></motion.div>)
                   }
                   <h1 className='uppercase text-[100px] leading-[90px] tracking-tighter font-semibold'>{value}</h1>
                </div>
             </div>

            
            ))}
        </motion.div>
        <div className='w-full border-t-[1px] border-zinc-800 mt-24 flex justify-between pt-4 items-center'>
            {["For public and private companies","From the first pitch to IPO"].map((value,index)=>
            (<p key={index} className=' text-sm font-light pl-20'>{value}</p>))}
            <div className='start pr-20 flex items-center gap-2'>
                <motion.div variants={buttonAnimation} whileHover="scaleUp" className='uppercase text-xs font-light border-[1px] border-zinc-400 rounded-full px-4 py-2'>Start the Project</motion.div>
                <div className=' w-[35px] h-[35px]   border-[1px] border-zinc-400 rounded-full flex justify-center items-center'>
                    <span className='rotate-45'>
                        <FaArrowUp />
                    </span>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default LandingPage
