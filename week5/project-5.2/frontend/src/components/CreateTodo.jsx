import React from 'react'

function CreateTodo() {
  return (
    <div className='flex flex-col justify-center w-[30%] bg-green-300'>
        <input type="text" name="" id="" placeholder='title' className="m-2 p-2 border-solid " /> 
        <input type="text" name="" id="" placeholder='description' className='m-2 p-2' />

        <button className='m-2 bg-orange-400 p-2 rounded-xl'>Add Todo</button>
    </div>
  )
}

export default CreateTodo