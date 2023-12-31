import React from "react";

function Footbal(){

    // Event Hanlders which can be called in events in onClick event using {}
    const passBal = () => {
        alert("Ball passed!");
    }
    
    // Event Hanlders which can be called in events in onClick event using {}
    const shoot = (a) => {
        alert(a);
    }

    const winGame = (a, b) => {
        alert("Message: "+a+" event type : "+b.type)
    }

    return(
        <>
            <h3> Call event Handlers without args </h3>
            <button onClick={passBal}> Pass Ball </button>
            
            <h3> Pass args to event Handlers </h3>
            <button onClick={() => shoot("Goal made !!")}> Take a shot  </button>

            <h3> Send event Object to Event Handlers </h3>
            <button onClick={(event) => winGame("Goal made !!", event)}> Winning </button>
        </>
    );
}

export default Footbal;