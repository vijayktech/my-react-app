import React from "react";

function Car(Props){
    return <li> I am a {Props.brand} </li>
}

function GarageDemo(){
    const cars = ['Ford', 'KIA', 'BMW'];

    return (
        <>
            <h2> Lists cars in Garage</h2>
            <ul>
                {cars.map( (car) => <Car brand={car} />)}
            </ul>
        </>
    );
}

export default GarageDemo;