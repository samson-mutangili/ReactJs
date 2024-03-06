import { useState } from "react";

function UpdateArrays(){

    const [foods, setFoods] = useState(["Apple", "Oranges", "Meat"]);

    const handleAddFood = ()=> {

        //get the value from input field
        const newFood = document.getElementById("foodInput").value;
        //reset input value
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    const handleRemoveFood = (index) =>{
        //using _ (underscore) as a parameter means that the parameter is ignored
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter new food"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );


}

export default UpdateArrays