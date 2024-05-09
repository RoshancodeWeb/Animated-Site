import React from 'react'
import { motion } from 'framer-motion'

const buttonAnimation={
    scaleUp:{
        scale:1.1,
        marginLeft:2,
        textShadow:'0px 0px 4px rgb(255,255,255)',
        boxShadow:'0px 0px 4px rgb(255,255,255)',
        transition:{
           duration:0.2,
           repeat:5,
           repeatType:"mirror"
           
           
        }
    }
}

const greenButton={
    scaleUp:{
        scale:[1,1.1,1,1.1,1,1.1,1,1.1,1],
    }
}
const IndividualCards=({ imageLink,buttonText })=>{
    return(
        <div className='w-[30vw] h-[70vh] bg-[#212121] rounded-xl relative flex items-center justify-center'>
                <img src={imageLink} className='object-contain w-32 h-32' />
                <motion.button variants={buttonAnimation}  whileHover="scaleUp" className='absolute bottom-0 left-10 mb-7 px-3 py-1 border-[1px] border-white text-white rounded-full uppercase'>{buttonText}</motion.button>
        </div>
    )
}



const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 border-t-2 flex border-zinc-700 gap-5'>
        <div className='w-[40vw] h-full  pl-20 flex justify-center items-center'>
            <div className='w-full h-[70vh] relative bg-[#004D43] rounded-xl flex items-center justify-center'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' className='w-32 h-32 object-contain' />
                <motion.button variants={greenButton} whileHover="scaleUp"  className='absolute bottom-0 left-10 mb-7 py-1 w-fit border-2 px-2 border-[#CDEA68] group text-[#CDEA68] rounded-full  '> <span className="relative z-40">©2019–2022</span> </motion.button>
            </div>
             
        </div>
        <div className='w-[60vw] h-full  flex gap-5 items-center justify-center pr-20'>
              <IndividualCards imageLink={"https://ochi.design/wp-content/uploads/2022/04/logo002.svg"} buttonText={"Rating 5.0 on clutch"}/>
              <IndividualCards imageLink={"https://ochi.design/wp-content/uploads/2022/04/logo003.png"} buttonText={"Business Bootcamp Alumni"}/>
        </div>
      
    </div>
  )
}

export default Cards
