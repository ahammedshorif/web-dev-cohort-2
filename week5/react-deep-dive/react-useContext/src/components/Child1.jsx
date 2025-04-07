import React from 'react'
import Child2 from './Child2'

function Child1() {
  return (
    <div>
     <Child2 />
      {console.log("child 1")}
    </div>
  )
}

export default Child1