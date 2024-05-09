"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import DisplayOnSmall from './Components/DisplayOnSmall'




const page = () => {
   
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div  className='w-full min-h-screen overflow-hidden text-white bg-zinc-900 '>
      <DisplayOnSmall/>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default page
