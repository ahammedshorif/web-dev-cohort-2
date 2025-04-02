import React from 'react'
import logo from "../assets/logo.webp"


function Nav() {
  return (
    <div className='flex justify-between text-white bg-black p-5'>
        <div className='flex'>
            <a href="">
                <img src={logo} alt="logo.png" className='text-black aspect-[250/79] w-24 ml-7 ' />
            </a>
            <input type="search" name="" placeholder='Search' id="" className='text-black px-5 py-1 ml-8 w-[30rem] h-10 rounded-lg' />
        </div>
        <div>
            <ul className='flex'>
                 <a href=""><li className='px-5'>Offer</li></a>
                 <a href=""><li className='px-5'>Card</li></a>
                 <a href=""><li className='px-5'>Pre-Order</li></a>
                 <a href=""><li className='px-5'>Account</li></a>      
            </ul>
        </div>

    </div>
  )
}

export default Nav