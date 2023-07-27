
import React from "react";

function Event()
{

    function Button()
    {
        alert("hEllo react");
    }
    return(
        <div>
            {/* <button onClick={ ()=>alert("hello")}>CLick me</button>
         by arrow function u can direct give in 
        line */}

         {/* <button onClick={Button()}> CLick me</button> 
         without click alert aajata h  */}

         <button onClick={Button}> CLick me</button>   

        </div>


    )
}

export default Event;