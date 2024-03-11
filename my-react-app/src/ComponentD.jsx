import { useContext } from "react";

import {UserContext} from './ComponentA.jsx';

function ComponentD(){

    const name = useContext(UserContext);

    return(
        <div className="box">
        <h1>Component D</h1>
        <p>{`Hello ${name}`}</p>
        </div>
    );
}

export default ComponentD