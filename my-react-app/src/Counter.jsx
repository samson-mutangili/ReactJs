import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count +- 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <h5>Counter</h5>
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
    
    // const [name, setName] = useState("Guest"); 
    // const [age, setAge] = useState(0);
    // const updateName = () => {
    //     setName("Samson");
    // }

    // const incrementAge = () => {
    //     setAge(age + 1);
    // }
    // return(
    //     <div>
    //         <p>Name: {name}</p>
    //         <button onClick={updateName}>Set Name</button>

    //         <p>Age: {age}</p>
    //         <button onClick={incrementAge}>Increment Age</button>
    //     </div>
    // );
}

export default Counter