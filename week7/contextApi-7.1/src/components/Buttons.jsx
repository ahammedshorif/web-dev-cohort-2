import React, {useContext} from 'react'
import { CountContext } from '../context';


function Buttons() {
    const {count,setCount} = useContext(CountContext)
    return (
      <div>
          <button onClick={()=>{setCount(count + 1)}}>count +</button>
          <button onClick={()=>{setCount(count-1)}}>count -</button>
      </div>
    );
  }

export default Buttons