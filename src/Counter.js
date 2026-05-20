import React, { useEffect, useState } from 'react';

const Counter=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const initialCount=5;
        setCount(initialCount);
    },[]);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    const double=()=>setCount(count*2);
    const reset=()=>setCount(0);
    return(
        <div style={{textAlign:"center",marginTop:"50px",marginLeft:"25px"}}>
            <h1>Count:{count}</h1>

            <button onClick={increment} style={{marginRight:"25px"}}>Increment</button>
            <button onClick={decrement} style={{marginRight:"25px"}}>Decrement</button>
            <button onClick={double} style={{marginRight:"25px"}}>Double</button>
            <button onClick={reset} style={{marginRight:"25px"}}>Reset</button>
        </div>
    )
}
export default Counter;