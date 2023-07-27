 function Funcom1()
{
    const mythrottle = (fn,d) =>
    {
        return function(...args)
        {
            setTimeout(() => {
                fn();
            },d);
        }
    }
    
    const newFun = mythrottle(() =>{
        console.log('user clicked')
    },5000)

    return(
        <div>
            <button onClick={newFun()}>
                CLICK ME
            </button>
        </div>
    )
}

 export default Funcom1;

// function Funcom2()
// {
//     return(
//         <div>hello fun2</div>
//     )
// }

// export {Funcom1,Funcom2};