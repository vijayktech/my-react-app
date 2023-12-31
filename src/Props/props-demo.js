import React from "react";

//This demo is for Pass data from one component to anther component
function Car(props){

    return (
        <div>
            <h2>My car name is {props.brand.name}</h2>
            <h2>and it's model is {props.brand.model}</h2>
        </div>                
    );
}

function Garage(){

    //send variable using {carInfo}
    const carInfo = {name: "KIA", model: "Sonet"};

    return (
        <>
            <h1>This demo is for Pass data from one component to anther component</h1>
            <Car brand={carInfo} />
        </>
    );
}

export default Garage;