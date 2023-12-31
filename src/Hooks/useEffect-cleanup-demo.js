import React, {useState, useEffect} from "react";

function TimerCleanUp(){
    const [count, setCount] = useState(0);    
    
    // Clean up Timer after render once using clearTimeout() at end of useEffect()
    // second paramter empty array [], so render once
    useEffect(() => {
       let timer = setTimeout( ()=> {
            setCount((count) => count + 1);
        }, 1000);

        return ()=> clearTimeout(timer)
      }, []);
           
      return (
        <>
        <h1> useEffect Demo! </h1>           
        <h3> Rendered { count} times !</h3>             
        </>
      );
      
}

export default TimerCleanUp;