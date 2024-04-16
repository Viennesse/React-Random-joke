import { useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";
import InputFocus from "./inputFocus";
import Timer from "./Timer";


function App() {

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  const myJoke = useRandomJoke(firstname, lastname);

  const generateJoke = (e) => {
   e.preventDefault();    /* button is inside a form. Prevent page from refresh after submit a form */
    setFirstname(firstNameRef.current.value)
    setLastname(lastNameRef.current.value)
  }

  return (
    <div className="app">
      <InputFocus />
      <hr/>
      <center>
        <h2>The Joke Generator</h2>
        <h3>{myJoke}</h3>

        <form>
          <input placeholder="Firstname" ref={firstNameRef} />
          <input placeholder="Lastname" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>

      </center>
      <hr/>
      <Timer />
    </div>
  )
}

export default App;

