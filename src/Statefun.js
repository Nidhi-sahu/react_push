import {useState} from "react"

function Statefun()
{
    const [data,setData]=useState("nidhi")
    // const [name,setName]=useState("sahu")
    function updateData()
    {
        setData("abhijeet")
        // setName("bharti")
    }
    return(
        <div>
            <h1>{data}</h1>
            {/* <h1>{name}</h1> */}
            <button onClick={updateData}>Update</button>
        </div>
    )
}
export default Statefun; 