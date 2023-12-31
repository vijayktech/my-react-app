import React, {useState} from "react";

function FavoriteColor(Props){

    const [color, setColor] = useState("red");

    const [car, setCar] = useState(
        {
            brand : "Ford",
            model : "Mustand",
            year : "1983",
            color : "Red"
        }
    );
 
    const updateColor = () => {
        setCar( previousState => {
            return {...previousState, color: "Yellow"  }
        });
    }

    return (
        <>
        <h1>My Favorite Color is {color}! using Hook (useState) </h1>
            <button type="button" onClick={() => setColor("Blue")}>Blue</button>
            <button type="button" onClick={() => setColor("Pink")}>Pink</button>
            <button type="button" onClick={() => setColor("Green")}>Green</button>
      
            <h1>My {car.brand}</h1>
            <p>
                
                Car with model - {car.model} from {car.year}.
                <h4>It is a {car.color}</h4>
            </p>

            <button type="button" onClick={updateColor}>Update Car's Color to Yellow</button>
        </>
    );
}

export default FavoriteColor;