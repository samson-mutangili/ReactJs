import ComponentD from "./ComponentD.jsx";
import { useContext } from "react";

import {UserContext} from './ComponentA.jsx';

function ComponentC(){

    const user = useContext(UserContext);

    return(
        <div className="box">
        <h1>Component C</h1>
        <p>{`Hello again ${user}`}</p>
        <ComponentD/>
        </div>
    );
}

export default ComponentC