import React,{useState,useEffect} from "react";
import axios from "axios";

function Table()
{
const[empData, setEmpData] =useState([])

let newData ={

}
//     let empData =[ {
//         eid:'e1',
//         name:'Nidhi',
//         dept:'CSE',
//         salary:500000
//     },

//      {
//         eid:'e2',
//         name:'Abhi',
//         dept:'CSE',
//         salary:600000
//     }
// ] 
  //  get method

async function getData()
  {
     let response = await axios.get('http://13.233.68.7:4000/viewemployee')
   console.log(response.data)
     setEmpData(response.data)
  }


// let datacall= function()
//  {
//     getData()
//  }





 useEffect(()=>{
   getData()
 },[])




    return(
        <>
        
        <h1>Employee Data</h1>
        <table style={{border:'black'}}>
            <thead>
      <tr style={{borderWidth:1,borderColor:'red'}}>
        <th>Emp Id</th>
        <th>Name</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Balance Remark</th> 
      </tr>
      </thead>

      <tbody>
{
    empData.map((item,index) =>
    { 
        return(
            <tr key={index}>
        <td>{item.Emp_id}</td>
        <td>{item.Emp_name}</td>
        <td>{item.Dept}</td>
        <td>{item.Salary}</td>

        {
            (item.Salary>=50000)?
            <td style={{color:"green"}}>Averg</td>:<td style={{color:'red'}}>low balance</td>
        }
       
       </tr>
        )
    })
}
      
      <tr>
        <td>a1</td>
        <td>nidhi</td>
        <td>cse</td>
        <td>7000000</td>
        
      </tr>

      </tbody>
        </table>
        
        </>
    )
}

export default Table