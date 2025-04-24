import React, { useMemo, useState } from 'react'

const words = ["hi", "my", "name","is","for","to","random", "word"];
const totalLines= 1000;
const allWords= [];

for(let i=0;i<totalLines;i++){
    let sentence =[];
    for(let j=0;j<words.length;j++){
        sentence+= words[Math.floor(words.length*Math.random())];
        sentence+=" ";
    }
    allWords.push(sentence);
}

function Assignment2() {
    const [sentences,setSentences] = useState(allWords)
    const [filter,setFilter] = useState("");
    const filteredSentences = useMemo(()=>{
        return sentences.filter( x => x.includes(filter))
    },[sentences,filter])
  return (
    <div>
        <input type="text" onChange={(e)=>{
            setFilter(e.target.value);
        }}/>
        {filteredSentences.map(word => <div>{word}</div>)}
    </div>
  )
}

export default Assignment2
