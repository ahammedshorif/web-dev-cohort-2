import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
  return (
    <div className='bg-yellow-300'>
        <ul className='flex justify-center '>
            <li className='mx-4 border-solid border-2 border-sky-500 bg-blue-700 rounded-md'><Link to="/">Home</Link></li>
            <li className='mx-4 border-solid border-2 border-sky-500 bg-blue-700 rounded-md'><Link to="/about">About</Link></li>
            <li className='mx-4 border-solid border-2 border-sky-500 bg-blue-700 rounded-md'><Link to="/project">Project</Link></li>
        </ul>
    </div>
  )
}

export default Nav