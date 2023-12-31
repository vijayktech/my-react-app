import React from "react";

function Car(Props){
    return <li> I am a {Props.brand} </li>
}

function GarageDemo(){
    const cars = ['Ford', 'KIA', 'BMW'];

    // Cars object with keys as Lists expect unique id
    const carskeys = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'KIA'},
        {id: 3, brand: 'BMW'}
    ];

    return (
        <>
            <h2> Lists cars in Garage</h2>
            <ul>
                {
                  // Pass data without key  
                cars.map( (car) => <Car brand={car} />)
                }
            </ul>
               <h3> List of cars with key and value </h3> 
               <ul>
                {
                    carskeys.map( (car) => <Car key={car.id} brand={car.brand} /> )
                }
               </ul>

        </>
    );
}

export default GarageDemo;