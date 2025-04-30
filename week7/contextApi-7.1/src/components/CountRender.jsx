import React,{useContext} from 'react'
import { CountContext } from '../context';


function CountRender() {
    const {count} = useContext(CountContext);
    return (
      <div>
        <h1>count : {count}</h1>
      </div>
    );
  }

export default CountRender