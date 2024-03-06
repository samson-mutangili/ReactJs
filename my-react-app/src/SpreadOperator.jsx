import React, {useState} from "react";

function SpreadOperator(){

    const [car, setCar] = useState({year:2024,
                                    make: "Toyota",
                                    model: "Prado TX",});

    const handleYearChange = (e) =>{
        setCar({...car, year: e.target.value});
    }

    const handleMakeChange = (e) =>{
        setCar({...car, make: e.target.value});
    }

    const handleModelChange = (e) =>{
        setCar({...car, model: e.target.value});
    }
    
    return(
        <div>
            <p>Your favorite car details: {car.year} {car.make} {car.model}</p>
            <label htmlFor="">Year:</label>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/><br/>
            <label htmlFor="">Make:</label>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/><br/>
            <label htmlFor="">Model:</label>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/><br/>
        </div>
    );
}

export default SpreadOperator