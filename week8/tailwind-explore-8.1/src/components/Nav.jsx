import React from 'react'

function Nav() {
  return (
    <div className='bg-blue-500 bg-opacity-25  w-[400px] rounded-xl  py-4'>
        <ul className='flex gap-4 justify-center items-center font-bold'>
            <li><a href="">Benefits</a></li>
            <li><a href="">Specifications</a></li>
            <li><a href="">How-to</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Nav