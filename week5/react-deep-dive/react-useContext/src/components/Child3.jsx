import React, {useContext} from 'react'
import { userContext } from '../App'

function Child3() {
  const user = useContext(userContext)
  return (
    <div>
    Child3
    {user.name}
    {console.log("child 3")}
    </div>
  )
}

export default Child3