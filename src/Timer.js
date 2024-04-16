import { useState, useRef } from "react"

/* UseRef 
a) Persisting value. That means the value state the same between renders
b) Updating the refference doesnt trigger a re-render
*/
const Timer = () => {

    const [randomInput, setRandomInput] = useState('');
    const [seconds, setSeconds] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const renders = useRef(0);
    const timerId = useRef("");

    const handleChange = (e) => {
        setRandomInput(e.target.value);
        renders.current++;
    }

    const startTimer = () => {
        timerId.current = setInterval(()=> {  // normal assignment setInterval to some variable , e.g. const counter = setInterval()
            setIsDisabled(true);        // would cause crazy counter, because page re-renders after every state change.
            renders.current++;          // Moreover we would not have a reference to this interval outside this function.
            setSeconds(prev => prev +1) // Using timerId.current we have global access to interval
        }, 1000)              
 }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;  // If we don't set this to = 0, this timerId ref will count number of page renders.
        setIsDisabled(false)
        renders.current++;
    }

    const resetTimer = () => {
        stopTimer();
       if(seconds) {
        renders.current++;
        setSeconds(0);
        } 
    }
 

  return (
    <center style={{marginTop: "50px"}}>
        <input
        type="text"
        value={randomInput}
        placeholder="RandomInput"
        onChange={handleChange}
        />
        <p>Renders: {renders.current}</p>
        <button onClick={startTimer} disabled = {isDisabled}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        <p>Seconds: {seconds}</p>
        
    </center>
  )
}

export default Timer