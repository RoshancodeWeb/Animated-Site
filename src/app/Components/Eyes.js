"use client"
import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(()=>{
            
              window.addEventListener("mousemove",(e)=>{
                let mouseX=e.clientX;
                let mouseY=e.clientY;
                
                let deltaX=mouseX-window.innerWidth/2;
                let deltaY=mouseY-window.innerHeight/2;
    
                var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
                setRotate(angle-180);
    
    
                
            })         
    },[])
  return ( 
    <div  id='work'  className='w-full h-screen overflow-hidden relative -top-[45vw] z-40 '>
        <div  className='w-full h-full bg-cover relative bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
              <div data-scroll  data-scroll-speed=".5"  className='eyes absolute left-[35%]   translate-x-[-50%] top-[40%] translate-y-[-50%] flex  gap-8'>
                     <div className='w-[200px] h-[200px]  bg-white rounded-full flex items-center justify-center'>
                     <div className='w-[140px] h-[140px] relative bg-black rounded-full  '>
                     <p className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-50 text-4xl font-light cursor-pointer uppercase'>Play</p>
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full h-[30px] absolute z-30 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
                                <div className='w-[20px] h-[20px] bg-white rounded-full'>

                                </div>                       
                             </div>
                          </div>
                     </div>
                     <div className='w-[200px] h-[200px]  bg-white rounded-full flex items-center justify-center'>
                          <div className='w-[140px] h-[140px] relative bg-black rounded-full  '>
                            <p className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-50 text-4xl font-light cursor-pointer uppercase'>Play</p>
                             <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full h-[30px] absolute z-30  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
                                <div className='w-[20px] h-[20px] bg-white rounded-full'>

                                </div>                       
                              </div>
                          </div>
                     </div>
              </div>
              
        </div>
    </div>
  )
}

export default Eyes
