import React from 'react'

const DisplayOnSmall = () => {
  return (
    <div className='w-full lg:hidden  fixed top-0 h-screen bg-black z-[999] flex items-center justify-center'>
        <p className='font-bold'>This Site Is Only For PC</p>
      
    </div>
  )
}

export default DisplayOnSmall
