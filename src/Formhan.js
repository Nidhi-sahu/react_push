import React,{useState} from "react"

function Formhan()
{
  const [age,setAge] = useState("")
  function f1()
  {
   
   
  }

return(
  <>
  <label>Enter Your age</label>
  <input value={age} onChange={(e)=>setAge(e.target.value)}/>
{
  (age >= 18) &&
  <h1>yes</h1>
  ||
  <h1>no</h1>
} 
  {/* {
    (msg === 'Failed')?<h1 style={{color:"red"}}>{msg}</h1>:"nidhi"
  }
  <h1>{msg}</h1> */}
  <button onClick={()=>f1()}>f1</button>
  
  </>
)
}

export default Formhan;