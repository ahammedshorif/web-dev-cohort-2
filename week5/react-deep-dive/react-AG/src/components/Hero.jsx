import React from 'react'
import galaxyImg from "../assets/Galaxy-s25.webp"
import galaxyBuds from "../assets/Galaxy-Buds.webp"
import watch from "../assets/watch.webp"
function Hero() {
  return (
    <div className='h-[100vh] w-full bg-white flex'>
         <div className='mx-7 mt-7'>
            <img src={galaxyImg} alt="" />
         </div>
         <div className='mt-7 mr-7'>
            <img src={galaxyBuds} alt="" />
            <img src={watch} alt="" />
         </div>
    </div>
  )
}

export default Hero