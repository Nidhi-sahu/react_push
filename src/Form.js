import React,{useState} from "react";
export default function Form()
{
   const[c1,setCl]=useState('blue');

    let name1="nidhi";
    let name2="sahu"
  
    
    function changeColor()
    {  setCl('green');

  console.log('In change function ',c1)
    }
    return(
    <>
    <h2  style={{color: c1}}>{name1}</h2>
    {
        console.log('In retrn',c1)
    }
    <h2 style={{backgroundColor: "blue"}}>{name2}</h2>
    <h2 style={{'backgroundColor': "pink"}}>{name2}</h2>
    
<button onClick={changeColor}>update</button>
    </>
    )
    
}