import React, { useMemo, useState } from 'react'

function Assingnment3() {
    const [items, setItems]=useState([
        {name: "Chocolates", value: 10},
        {name: "Chips", value: 20},
        {name: "ice", value: 15},
        {name: "Tomato", value: 50},
        {name: "Onion", value: 30},
    ])
    const totaleSum = useMemo(()=>{
        let total= 0;
        for(let i=0;i<items.length;i++){
            total+=items[i].value;
        }
        return total;
    },[items])
  return (
    <div>
        <ul>
            {items.map((item,index)=>{
               return <li key={index}>{item.name} - Price: ${item.value}</li>
            })}
        </ul>
        <p>Total vale: {totaleSum}</p>
    </div>
  )
}

export default Assingnment3