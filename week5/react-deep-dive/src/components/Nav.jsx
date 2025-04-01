import React from 'react'
import logo from "../assets/logo.webp"


function Nav() {
  return (
    <div className='flex justify-between text-white bg-black p-5'>
        <div className='flex'>
            <img src={logo} alt="logo.png" className='text-black aspect-[250/79]' />
            <input type="search" name="" placeholder='Search' id="" className='text-black px-5 py-1 w-[30rem] h-10 rounded-lg' />
        </div>
        <div>
            <ul className='flex'>
                <li className='px-5'>Offer</li>
                <li className='px-5'>Card</li>
                <li className='px-5'>Pre-Order</li>
                <li className='px-5'>Account</li>
            </ul>
        </div>

    </div>
  )
}

export default Nav