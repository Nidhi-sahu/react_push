import React,{Component} from "react"

class Stateclass extends Component
{
    constructor()
    {
        super();
        this.state={
            data:"anil"
        }
    }
    render()
    {
        return(
            <div>
   <h1>{this.state.data}</h1>
            </div>
        )
    }
}
export default Stateclass;