import React from 'react'
import Link from 'next/link'

function Appbar() {
  return (
    <div className='flex justify-between p-6 bg-black text-white'>
        <div>
            <h1>App</h1>
        </div>
        <div>
             <Link href="/signup">Signup</Link>
        </div>
    </div>
  )
}

export default Appbar