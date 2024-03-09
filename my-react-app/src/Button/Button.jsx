import styles from './Button.module.css'

function Button(){
    let count =0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            alert(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    };

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    const handleEvents = (e) => e.target.textContent = "Ouch!";

    return(
       <>
        {/* <button className={styles.button} onClick={() => handleClick("Sam")}>Click Me {count}</button> */}
        <button className={styles.button} onClick={(e) => handleEvents(e)}>Click Me</button>
       </>
    );
}

export default Button