import React from 'react'
import Child3 from './Child3'

function Child2() {
  return (
    <div>
     <Child3></Child3>
     {console.log("child 2")}
    </div>
  )
}

export default Child2