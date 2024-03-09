import { useEffect, useState } from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        //clean up
        return () =>{
            clearInterval(intervalId);
        }
    }, []);


    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }


    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <h3>Digital Clock</h3>
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );


}

export default DigitalClock