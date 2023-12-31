import React, {useState, useEffect} from "react";

function Timer(){
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    
    // if not pass seond parameter then it continues increase
    // second paramter empty array [], so render once

    // useEffect(() => {
    //     setTimeout( ()=> {
    //         setCount((count) => count + 1);
    //     }, 1000);
    //   }, [count]);

      // second paramter pass count in array i.e [count]
      //  then it will render the componet if update the count value
      useEffect( ()=> {
          setCalculation(() => count * 2);
        }
        , [count]);
    
      return (
        <>
        <h1> useEffect Demo! </h1>           
        <h3> Rendered { count} times !</h3>
        <button type="button" onClick={() => setCount((c) => c+1) }> + </button>
        <h3> calculation is { calculation} </h3>        
        </>
      );
      
}

export default Timer;