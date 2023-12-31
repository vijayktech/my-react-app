import React from "react";

function MissedGoal() {
    return <h1>MISSED!</h1>;
  }
  
  function MadeGoal() {
    return <h1>Goal!</h1>;
  }

function GoalConditionals(Props){
     const isGoal =   Props.isGoal;
    
     
    //  if(isGoal)
    //         {
    //             return <MadeGoal/>;    
    //         }   
    //         else{
    //               return <MissedGoal />; 
    //         }

            // Using ternary operator!

          return  isGoal ? <MadeGoal/> : <MissedGoal />
}

export default GoalConditionals;