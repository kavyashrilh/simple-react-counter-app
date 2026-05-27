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
src/counter.js
import {useState,useEffect} from "react";

export default function Counter(){
 let [c,s]=useState(0);

 useEffect(()=>{
  setTimeout(()=>s(5),1000);
 },[]);

 return(
  <div style={{textAlign:"center",marginTop:"50px"}}>
   <h1>Counter:{c}</h1>

   <button onClick={()=>s(c+1)}>Increment</button>{" "}
   <button onClick={()=>s(c-1)}>Decrement</button>{" "}
   <button onClick={()=>s(c*2)}>Double</button>{" "}
   <button onClick={()=>s(0)}>Reset</button>
  </div>
 );
}