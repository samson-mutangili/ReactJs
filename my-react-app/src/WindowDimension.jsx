import { useEffect, useState } from "react";

function WindowDimension(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        //CLEANUP code
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    }, []);

    useEffect(() => {
        document.title = `size: ${width} x ${height}`;
    }, [width, height]);
    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <h2>Window dimensions:</h2>
            <p>Window width: {width}</p>
            <p>Window height: {height}</p>
        </div>
    );

}

export default WindowDimension