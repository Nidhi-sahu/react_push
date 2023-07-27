import React from "react";

function Onchange()
{
    function Change(value)
    {
console.log(value);
    }
    return (
        <div>
            <input type="text" onChange={(e)=>Change(e.target.value)}/> 
        </div>
    )

    
}

export default Onchange;